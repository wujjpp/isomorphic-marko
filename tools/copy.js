/**
 * Created by Wu Jian Ping on 2017/3/23.
 */

import { makeDir, copyDir, copyFile, writeFile } from './libs/fs'
import pkg from '../package.json'
import config from './config'

export const copyAssets = { // eslint-disable-line
  name: 'copy generated assets.json',
  func: async() => {
    await makeDir(`${config.dist}`)
    await copyFile('src/assets.json', `${config.dist}/assets.json`)
  }
}

export const copyDevAssets = { // eslint-disable-line
  name: 'generated assets.json',
  func: async(obj) => {
    await makeDir(`${config.dist}`)
    await writeFile('src/assets.json', JSON.stringify(obj, null, 2))
  }
}

export const copyPkg = { // eslint-disable-line
  name: 'generate package.json',
  func: async() => {
    await makeDir(`${config.dist}`)
    // generate package.json
    await writeFile(`${config.dist}/package.json`, JSON.stringify({
      private: true,
      engines: pkg.engines,
      dependencies: pkg.dependencies,
      scripts: {
        start: 'node server.js'
      }
    }, null, 2))
  }
}

export const copyPublic = { // eslint-disable-line
  name: 'copy static assets in public folder',
  func: async() => {
    await makeDir(`${config.dist}`)
    await copyDir('public', `${config.dist}/public`)
  }
}

export const copyEnvConfig = { // eslint-disable-line
  name: 'generate env.json',
  func: async(env) => {
    await writeFile('src/env.json', JSON.stringify({ env }))
  }
}
