#!/usr/bin/env node

/*!
 * webhook-config-manager v1.0.2
 * (c) 2020 Martin Rafael Gonzalez <tin@devtin.io>
 * MIT
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var deepListDir = require('deep-list-dir');
var path = _interopDefault(require('path'));
var fs = _interopDefault(require('fs'));

async function webhookConfigManager (directory) {
  const hookFiles = await deepListDir.deepListDir(directory, { pattern: [/\/hook\.json$/, '!node_modules'] });
  const hooks = [];
  hookFiles.forEach(file => {
    const payload = [].concat(require(file));
    hooks.push(...payload);
  });
  return hooks
}

if (module.parent === null) {
  if (process.argv.length > 4) {
    throw new Error(`Usage: npx webhook-config-manager <directory=./> <destination=web-hooks.json>`)
  }
  const directory = path.resolve(process.cwd(), process.argv[2] || './');
  const hookJson = path.resolve(process.cwd(), process.argv[3] || 'web-hooks.json');

  webhookConfigManager(directory)
    .then(config => {
      fs.writeFileSync(hookJson, JSON.stringify(config, null, 2));
    });
}

exports.webhookConfigManager = webhookConfigManager;
