/**
 * Created by Wu Jian Ping on 2017/3/20.
 */

import appDialog from '../app-dialog'


export default class TestComponent {
  onMount() {
  }

  openDialog() {
    appDialog
      .render({})
      .then(result => {
        result
          .appendTo(document.body)
          .getComponent()
          .show()
      })
  }
}
