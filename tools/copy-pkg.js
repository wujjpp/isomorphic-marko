/**
 * Created by JP on 2017/3/20.
 */

import {writeFile, makeDir} from './lib/fs'
import pkg from '../package.json'
import config from './config'

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

export default {
  name : 'generate package.json',
  func : copyPkg
}
