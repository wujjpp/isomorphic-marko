/**
 * Created by Wu Jian Ping on 2017/03/28
 */

var history = null

if (__BROWSER__) {
  var createBrowserHistory = require('history/createBrowserHistory').default
  history = createBrowserHistory({
    basename: '/',
    forceRefresh: false,
    keyLength: 6,
    getUserConfirmation: (message, callback) => callback(window.confirm(message))
  })
  // const unlisten = history.listen((location, action) => {
  //   console.log(action, location)
  // })
} else {
  var createMemoryHistory = require('history/createMemoryHistory').default
  history = createMemoryHistory({
    initialEntries: ['/'],
    initialIndex: 0,
    keyLength: 6,
    getUserConfirmation: null
  })
}

export default history
