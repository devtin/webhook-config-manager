import test from 'ava'
import { webhookManager } from './webhook-manager'
import path from 'path'

test('retrieves all *hook.json files', async t => {
  const data = await webhookManager(path.join(__dirname, '../test/benchmark'))
  t.truthy(data)
})
