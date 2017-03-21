/**
 * Created by JP on 2017/3/20.
 */

import {cleanDir} from './lib/fs'
import config from './config'

function clean() {
  return Promise.all([
    cleanDir(config.dist, {
      nosort: true,
      dot: true
    })
  ])
}

export default {
  name: 'clean',
  func: clean
}
