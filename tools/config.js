/**
 * Created by Wu Jian Ping on 2017/3/20.
 */

import portSettings from '../port-settings'
import cdnSettings from '../cdn-settings'

const shared = Object.assign({}, {
  dist: 'build'
}, portSettings)

export default Object.assign({}, shared, cdnSettings)
