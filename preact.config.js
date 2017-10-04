import { resolve } from 'path'

export default function (config, env, helpers) {
  config.resolve.alias.src = resolve(__dirname, './src')
  config.resolve.alias.components = resolve(__dirname, './src/components')
  config.resolve.alias.routes = resolve(__dirname, './src/routes')
  config.resolve.alias.style = resolve(__dirname, './src/style')
  config.resolve.alias.util = resolve(__dirname, './src/util')
  config.resolve.alias.store = resolve(__dirname, './src/store')
  return config
}
