import { deepListDir } from 'deep-list-dir'

export async function webhookConfigManager (directory) {
  const hookFiles = await deepListDir(directory, { pattern: [/\/hook\.json$/, '!node_modules'] })
  const hooks = []
  hookFiles.forEach(file => {
    const payload = [].concat(require(file))
    hooks.push(...payload)
  })
  return hooks
}
