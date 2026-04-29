export function printOutput(value: unknown, mode: 'json' | 'pretty' = 'pretty'): void {
  if (mode === 'json') {
    process.stdout.write(JSON.stringify(value) + '\n')
    return
  }

  process.stdout.write(JSON.stringify(value, null, 2) + '\n')
}

export function printText(value: string): void {
  process.stdout.write(value + '\n')
}

export function printError(message: string): void {
  process.stderr.write(message + '\n')
}
