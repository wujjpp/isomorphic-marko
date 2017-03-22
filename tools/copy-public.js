/**
 * Created by JP on 2017/3/20.
 */

import {makeDir, copyDir} from './lib/fs'

async function copyPublic({dest}) {
  await makeDir(dest)
  await copyDir('public', `${dest}/public`)
}

export default {
  name : 'copy static assets in public folder',
  func : copyPublic
}
