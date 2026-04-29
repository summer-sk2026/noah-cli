import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import os from 'node:os'
import path from 'node:path'

export interface RuntimeConfig {
  baseUrl?: string
  bearerToken?: string
  output?: 'json' | 'pretty'
}

export interface NoahConfigFile {
  token?: string
}

function getNoahConfigDir(): string {
  return path.join(os.homedir(), '.noah')
}

function getNoahConfigPath(): string {
  return path.join(getNoahConfigDir(), 'config.json')
}

export function readNoahConfigFile(): NoahConfigFile {
  const filePath = getNoahConfigPath()
  if (!existsSync(filePath)) {
    return {}
  }

  const raw = readFileSync(filePath, 'utf8').trim()
  if (!raw) {
    return {}
  }

  return JSON.parse(raw) as NoahConfigFile
}

export function initNoahConfig(token: string): string {
  const dirPath = getNoahConfigDir()
  const filePath = getNoahConfigPath()
  writeFileSync(filePath, JSON.stringify({ token }, null, 2) + '\n', { encoding: 'utf8', flag: 'w' })
  return dirPath
}

export function ensureNoahConfigDir(): void {
  const dirPath = getNoahConfigDir()
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true })
  }
}

export function readRuntimeConfig(args: string[]): RuntimeConfig {
  const config: RuntimeConfig = {}

  for (let index = 0; index < args.length; index += 1) {
    const current = args[index]
    const next = args[index + 1]

    if (current === '--output' && next && (next === 'json' || next === 'pretty')) {
      config.output = next
      index += 1
    }
  }

  const fileConfig = readNoahConfigFile()
  if (fileConfig.token) {
    config.bearerToken = fileConfig.token
  }

  return config
}
