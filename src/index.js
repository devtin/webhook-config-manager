import { webhookConfigManager } from './webhook-config-manager.js'
import path from 'path'
import fs from 'fs'
export { webhookConfigManager }

if (module.parent === null) {
  if (process.argv.length > 4) {
    throw new Error(`Usage: npx webhook-config-manager <directory=./> <destination=web-hooks.json>`)
  }
  const directory = path.resolve(process.cwd(), process.argv[2] || './')
  const hookJson = path.resolve(process.cwd(), process.argv[3] || 'web-hooks.json')

  webhookConfigManager(directory)
    .then(config => {
      fs.writeFileSync(hookJson, JSON.stringify(config, null, 2))
    })
}
