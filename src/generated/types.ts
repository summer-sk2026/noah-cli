export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface GeneratedParameter {
  name: string
  required: boolean
  description: string
  schemaType: string
  schemaRef: string
  tsType: string
  typeName: string
  enumValues: unknown[]
  itemType: string
}

export interface GeneratedRequestBody {
  required: boolean
  mediaType: string
  schemaRef: string
  tsType: string
  typeName: string
  requiredProperties: string[]
  enumValues: unknown[]
  itemType: string
}

export interface GeneratedResponse {
  statusCode: string
  description: string
  mediaType: string
  schemaRef: string
  tsType: string
  typeName: string
}

export interface GeneratedSpecGroup {
  title: string
  namespace: string
  baseUrl: string
  sourceFile: string
}

export interface GeneratedCommand {
  path: string[]
  displayName: string
  shortName: string
  namespace: string
  summary: string
  sourceFile: string
}

export interface GeneratedOperation {
  namespace: string
  specTitle: string
  sourceFile: string
  baseUrl: string
  method: HttpMethod
  path: string
  operationId: string
  commandName: string
  commandPath: string[]
  displayName: string
  resource: string
  summary: string
  description: string
  tags: string[]
  pathParams: GeneratedParameter[]
  queryParams: GeneratedParameter[]
  headerParams: GeneratedParameter[]
  requestBody: GeneratedRequestBody | null
  responses: GeneratedResponse[]
  security: Record<string, unknown>[]
  inspectText: string
}
