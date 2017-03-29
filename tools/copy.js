/**
 * Created by Wu Jian Ping on 2017/3/23.
 */

import {
  makeDir,
  copyDir,
  copyFile,
  writeFile
} from './libs/fs'
import pkg from '../package.json'
import config from './config'

async function copyAssets() {
  await makeDir(`${config.dist}`)
  await copyFile('src/assets.json', `${config.dist}/assets.json`)
}

async function copyPkg() {
  await makeDir(`${config.dist}`)
  //generate package.json
  await writeFile(`${config.dist}/package.json`, JSON.stringify({
    private: true,
    engines: pkg.engines,
    dependencies: pkg.dependencies,
    scripts: {
      start: 'node server.js'
    }
  }, null, 2))
}

async function copyPublic() {
  await makeDir(`${config.dist}`)
  await copyDir('public', `${config.dist}/public`)
}

export var copyAssets = {
  name: 'copy generated assets.json',
  func: copyAssets
}

export var copyPkg = {
  name: 'generate package.json',
  func: copyPkg
}

export var copyPublic = {
  name: 'copy static assets in public folder',
  func: copyPublic
}
