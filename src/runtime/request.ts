import { readFileSync } from 'node:fs'
import type { GeneratedOperation } from '../generated/types.js'
import type { RuntimeConfig } from './config.js'

export interface ExecuteOperationOptions {
  operation: GeneratedOperation
  args?: string[]
  values?: Record<string, unknown>
  config: RuntimeConfig
}

function parseOptionPairs(args: string[]): Record<string, string> {
  const result: Record<string, string> = {}

  for (let index = 0; index < args.length; index += 1) {
    const current = args[index]
    if (!current.startsWith('--')) continue
    const key = current.slice(2)
    const next = args[index + 1]
    if (!next || next.startsWith('--')) {
      result[key] = 'true'
      continue
    }
    result[key] = next
    index += 1
  }

  return result
}

function parsePrimitiveValue(rawValue: unknown, schemaType: string): unknown {
  if (typeof rawValue !== 'string') {
    return rawValue
  }

  if (schemaType === 'integer' || schemaType === 'number') {
    const parsed = Number(rawValue)
    if (Number.isNaN(parsed)) {
      throw new Error('参数值不是有效数字: ' + rawValue)
    }
    return parsed
  }

  if (schemaType === 'boolean') {
    if (rawValue === 'true') return true
    if (rawValue === 'false') return false
    throw new Error('参数值不是有效布尔值: ' + rawValue)
  }

  if (schemaType === 'array') {
    return rawValue.split(',').map((item) => item.trim()).filter(Boolean)
  }

  return rawValue
}

function validateParameterValues(operation: GeneratedOperation, values: Record<string, unknown>): void {
  const allParams = [...operation.pathParams, ...operation.queryParams, ...operation.headerParams]

  allParams.forEach((item) => {
    const value = values[item.name]
    if (item.required && (value === undefined || value === null || value === '')) {
      throw new Error('缺少必填参数 --' + item.name)
    }
    if (value === undefined || value === null || value === '') {
      return
    }
    const converted = parsePrimitiveValue(value, item.schemaType)
    values[item.name] = converted
    if (item.enumValues.length && !item.enumValues.some((candidate) => String(candidate) === String(converted))) {
      throw new Error('参数 --' + item.name + ' 不在允许值内: ' + item.enumValues.join(', '))
    }
  })
}

function validateRequestBody(operation: GeneratedOperation, values: Record<string, unknown>): void {
  if (!operation.requestBody) {
    return
  }

  const bodyValue = values.body
  if (operation.requestBody.required && (bodyValue === undefined || bodyValue === null || bodyValue === '')) {
    throw new Error('缺少请求体，请通过 --body 传入 JSON 或 @file')
  }
  if (bodyValue === undefined || bodyValue === null || bodyValue === '') {
    return
  }

  const data = typeof bodyValue === 'string'
    ? bodyValue.startsWith('@')
      ? JSON.parse(readFileSync(bodyValue.slice(1), 'utf8'))
      : JSON.parse(bodyValue)
    : bodyValue

  if (operation.requestBody.requiredProperties.length && (!data || typeof data !== 'object' || Array.isArray(data))) {
    throw new Error('请求体必须是对象')
  }

  operation.requestBody.requiredProperties.forEach((key) => {
    if (!(key in (data || {}))) {
      throw new Error('请求体缺少必填字段: ' + key)
    }
  })

  values.body = data
}

function replacePathParams(routePath: string, values: Record<string, unknown>): string {
  return routePath.replace(/{([^}]+)}/g, (_, key: string) => {
    if (!(key in values)) {
      throw new Error('缺少 path 参数: ' + key)
    }
    return encodeURIComponent(String(values[key]))
  })
}

function buildQuery(params: Record<string, unknown>, allowedKeys: string[]): string {
  const search = new URLSearchParams()
  allowedKeys.forEach((key) => {
    const value = params[key]
    if (value === undefined) {
      return
    }
    if (Array.isArray(value)) {
      value.forEach((item) => search.append(key, String(item)))
      return
    }
    search.append(key, String(value))
  })
  const query = search.toString()
  return query ? '?' + query : ''
}

function normalizeValues(operation: GeneratedOperation, args: string[] | undefined, values: Record<string, unknown> | undefined): Record<string, unknown> {
  const merged = {
    ...(args ? parseOptionPairs(args) : {}),
    ...(values || {}),
  }
  validateParameterValues(operation, merged)
  validateRequestBody(operation, merged)
  return merged
}

export async function executeOperation({ operation, args, values, config }: ExecuteOperationOptions): Promise<unknown> {
  const normalized = normalizeValues(operation, args, values)
  const routePath = replacePathParams(operation.path, normalized)
  const query = buildQuery(normalized, operation.queryParams.map((item) => item.name))
  const baseUrl = operation.baseUrl

  if (!baseUrl) {
    throw new Error('当前 operation 未配置默认 baseUrl')
  }

  const url = new URL(routePath + query, baseUrl)
  const headers: Record<string, string> = {
    Accept: 'application/json',
  }

  if (operation.requestBody?.mediaType) {
    headers['Content-Type'] = operation.requestBody.mediaType
  }

  if (!config.bearerToken) {
    throw new Error('缺少 token，请先执行 noah init --token <bearerToken>')
  }

  headers.Authorization = 'Bearer ' + config.bearerToken

  operation.headerParams.forEach((item) => {
    const value = normalized[item.name]
    if (value !== undefined) {
      headers[item.name] = String(value)
    }
  })

  const response = await fetch(url, {
    method: operation.method,
    headers,
    body: operation.requestBody ? JSON.stringify(normalized.body) : undefined,
  })

  const text = await response.text()
  const data = text ? JSON.parse(text) : null

  if (!response.ok) {
    throw new Error(JSON.stringify({
      status: response.status,
      statusText: response.statusText,
      data,
    }, null, 2))
  }

  return data
}
