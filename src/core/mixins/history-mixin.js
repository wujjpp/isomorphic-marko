/**
 * Created by Wu Jian Ping on 2017/03/29
 */

import history from '../history'
import querystring from 'querystring'

history.navigate = function(pathname, query, hash, state) {
  let search = ''
  if (query) {
    search = querystring.stringify(query)
  }
  history.push({
    pathname,
    search,
    hash,
    state
  })
}

history.query = function() {
  let query = {}
  return query
}

export default {
  history
}
