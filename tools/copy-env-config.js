/**
 * Created by JP on 2017/3/20.
 */

import {writeFile, makeDir} from './lib/fs'

async function generateConfig({dest, env}) {
  await makeDir(`${dest}`)
  await writeFile(`${dest}/env.json`, JSON.stringify({env}))
}

export default {
  name: 'generate env.json',
  func: generateConfig
}
