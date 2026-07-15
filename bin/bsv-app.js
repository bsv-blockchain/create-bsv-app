#!/usr/bin/env node
'use strict'

const { spawnSync } = require('node:child_process')

const replacementPackage = process.env.CREATE_BSV_APP_PACKAGE || 'create-bsv-app'
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'

console.warn([
  '@bsv/app is deprecated and has moved to create-bsv-app.',
  'Use `npx create-bsv-app ...` for all new and existing projects.',
  'Forwarding this invocation now.'
].join('\n'))

const result = spawnSync(
  npm,
  ['exec', '--yes', `--package=${replacementPackage}`, '--', 'create-bsv-app', ...process.argv.slice(2)],
  { stdio: 'inherit' }
)

if (result.error) {
  console.error(`Unable to start create-bsv-app: ${result.error.message}`)
  process.exit(1)
}

process.exit(result.status ?? 1)
