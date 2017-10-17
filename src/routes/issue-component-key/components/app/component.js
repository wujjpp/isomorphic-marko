/**
 * Created by Wu Jian Ping on 2017/3/20.
 */

import appDialog from '../app-dialog'


export default class TestComponent {
  onMount() {
    console.log(this.getEl('btn1'))
    console.log(this.getElId('btn1'))
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
