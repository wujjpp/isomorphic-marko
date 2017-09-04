/**
 * Created by Wu Jian Ping on 2017/05/10.
 */

import shared from './shared'
import allShared from '../shared'

let config = {}

if (__BROWSER__) {
  let tmp = {}

  // dev
  if (__DEV__) {
    tmp.sample = require('./dev/sample')
  }
  // sit
  if (__SIT__) {
    tmp.sample = require('./sit/sample')
  }
  // sit
  if (__UAT__) {
    tmp.sample = require('./uat/sample')
  }
  // prod
  if (__PROD__) {
    tmp.sample = require('./prod/sample')
  }
  config = Object.assign({}, allShared, shared, tmp)
}

export default config
