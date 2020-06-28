import test from 'ava'
import { webhookConfigManager } from './webhook-config-manager'
import path from 'path'

test('retrieves all *hook.json files', async t => {
  const data = await webhookConfigManager(path.join(__dirname, '../test/benchmark'))
  t.truthy(data)
})
