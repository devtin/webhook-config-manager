# webhook-config-manager
> Consolidates all <a href="https://github.com/adnanh/webhook" target="_blank">webhook</a> configs found in given
> directory in a single new one.

<a href="https://www.npmjs.com/package/webhook-config-manager" target="_blank"><img src="https://img.shields.io/npm/v/webhook-config-manager.svg" alt="Version"></a>
[![tests](https://github.com/devtin/webhook-config-manager/workflows/test/badge.svg)](https://github.com/devtin/webhook-config-manager/actions)

Looks for all `hook.json` found in `<cwd>/**/*`. Loads the content of all of them, concatenate them in on single array
and writes the output in a file `<cwd>/web-hooks.json`.

## Example

Take the following file structure:

```
my-projects/
├── project-a/
│   ├── hook.json
│   ├── index.js
│   └── package.json
├── project-b/
│   ├── hook.json
│   ├── index.js
│   └── package.json
└── project-c/
    ├── hook.json
    ├── index.js
    └── package.json
```

**project-a/hooks.json**
```json
[
  {
    "name": "project a"
  }
]
```

**`<cwd>/project-b/hooks.js`**
```json
[
  {
    "name": "project b"
  }
]
```

**`<cwd>/project-c/hooks.js`**
```json
[
  {
    "name": "project c"
  }
]
```

...and the following script:

```sh
$ npx webhook-config-manager
```

**`<cwd>/web-hooks.json`**

```json
[
  {
    "name": "project a"
  },
  {
    "name": "project b"
  },
  {
    "name": "project c"
  }
]
```

* * *

### License

[MIT](https://opensource.org/licenses/MIT)

&copy; 2020-present Martin Rafael Gonzalez
<tin@devtin.io>
