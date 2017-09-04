/**
 * Created by Wu Jian Ping on 2017/05/10.
 */

import shared from './shared'
import allShared from '../shared'

let config = {}

if (!__BROWSER__) { // avoid import at client js by mistake
  let tmp = {}

  // dev
  if (__DEV__) {
    tmp.sample = require('./dev/sample')
  }
  // sit
  if (__SIT__) {
    tmp.sample = require('./sit/sample')
  }
  // uat
  if (__UAT__) {
    tmp.redis = require('./uat/sample')
  }
  // prod
  if (__PROD__) {
    tmp.redis = require('./prod/sample')
  }

  config = Object.assign({}, allShared, shared, tmp)
}

export default config
