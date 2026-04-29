import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { commands } from './generated/commands.js'
import { operations } from './generated/operations.js'
import { specGroups } from './generated/spec-meta.js'
import { ensureNoahConfigDir, initNoahConfig, readRuntimeConfig } from './runtime/config.js'
import { printError, printOutput, printText } from './runtime/output.js'
import { executeOperation } from './runtime/request.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const packageJsonPath = path.resolve(__dirname, '..', 'package.json')

function readVersion(): string {
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8')) as { version?: string }
  return packageJson.version || '0.0.0'
}

function commandTokensToString(tokens: string[]): string {
  return tokens.join(' ')
}

function printHelp(): void {
  const lines = [
    'noah-cli',
    '',
    '基础命令：',
    '  list',
    '  inspect <namespace> <command>',
    '  version',
    '  noah init --token <bearerToken>',
    '  <namespace> <command> [--param value] [--body json|@file]',
    '',
    '全局参数：',
    '  --output json|pretty',
    '',
    '规范分组：',
    ...specGroups.map((group) => '  ' + group.namespace + ' => ' + group.title + ' (' + (group.baseUrl || 'no-server') + ')'),
    '',
    '示例命令：',
    '  noah version',
    '  noah init --token <bearerToken>',
    ...commands.slice(0, 12).map((item) => '  ' + item.displayName + '  # ' + item.summary),
  ]

  printText(lines.join('\n'))
}

function printVersion(): void {
  printText(readVersion())
}

function printList(): void {
  const grouped = specGroups.map((group) => ({
    namespace: group.namespace,
    title: group.title,
    baseUrl: group.baseUrl,
    commands: commands.filter((item) => item.namespace === group.namespace),
  }))
  printOutput(grouped, 'pretty')
}

function printInspect(commandTokens: string[]): void {
  const commandText = commandTokensToString(commandTokens)
  const operation = operations.find((item) => item.displayName === commandText)
  if (!operation) {
    throw new Error('未找到命令: ' + commandText)
  }

  printText(operation.inspectText)
}

function resolveOperation(argv: string[]): { operation: typeof operations[number], rest: string[] } {
  for (let count = Math.min(2, argv.length); count >= 1; count -= 1) {
    const candidateTokens = argv.slice(0, count)
    const candidate = commandTokensToString(candidateTokens)
    const operation = operations.find((item) => item.displayName === candidate)
    if (operation) {
      return { operation, rest: argv.slice(count) }
    }
  }
  throw new Error('未知命令: ' + argv.join(' '))
}

function readOptionValue(args: string[], name: string): string {
  for (let index = 0; index < args.length; index += 1) {
    if (args[index] === name && args[index + 1]) {
      return args[index + 1]
    }
  }
  return ''
}

function runInit(args: string[]): void {
  const token = readOptionValue(args, '--token')
  if (!token) {
    throw new Error('noah init 需要 --token <bearerToken>')
  }
  ensureNoahConfigDir()
  const dirPath = initNoahConfig(token)
  printOutput({ initialized: true, configDir: dirPath }, 'pretty')
}

export async function runCli(argv: string[]): Promise<void> {
  const [command, ...rest] = argv

  if (!command || command === 'help' || command === '--help') {
    printHelp()
    return
  }

  if (command === 'version' || command === '--version' || command === '-v') {
    printVersion()
    return
  }

  if (command === 'list') {
    printList()
    return
  }

  if (command === 'inspect') {
    if (rest.length === 0) {
      throw new Error('inspect 需要命令路径')
    }
    printInspect(rest)
    return
  }

  if (command === 'init') {
    runInit(rest)
    return
  }

  if (command === 'noah' && rest[0] === 'init') {
    runInit(rest.slice(1))
    return
  }

  if (command === 'noah' && (rest[0] === 'version' || rest[0] === '--version' || rest[0] === '-v')) {
    printVersion()
    return
  }

  const normalizedArgv = command === 'noah' ? rest : argv
  const { operation, rest: operationArgs } = resolveOperation(normalizedArgv)
  const config = readRuntimeConfig(operationArgs)
  const result = await executeOperation({ operation, args: operationArgs, config })
  printOutput(result, config.output)
}

export async function main(argv: string[]): Promise<void> {
  try {
    await runCli(argv)
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    printError(message)
    process.exitCode = 1
  }
}
