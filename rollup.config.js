import { name, version, author, license } from './package.json'
import commonjs from '@rollup/plugin-commonjs'

const initialYear = 2020
const yearsActive = new Date().getFullYear() !== initialYear ? `${ initialYear }-${ new Date().getFullYear() }` : initialYear

const banner = `/*!
 * ${ name } v${ version }
 * (c) ${ yearsActive } ${ author }
 * ${ license }
 */`

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: `dist/webhook-config-manager.js`,
        format: 'cjs',
        banner
      },
    ],
    plugins: [commonjs()]
  }
]
