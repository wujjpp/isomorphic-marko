/**
 * Created by JP on 2017/03/28
 */

var history = null

if (__BROWSER__) {
  var createHistory = require('history/createBrowserHistory').default
  history = createHistory({
    basename: '',
    forceRefresh: false,
    keyLength: 6,
    getUserConfirmation: null //(message, callback) => callback(window.confirm(message))
  })
  const unlisten = history.listen((location, action) => {
    console.log(action, location.pathname, location.state)
  })
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
