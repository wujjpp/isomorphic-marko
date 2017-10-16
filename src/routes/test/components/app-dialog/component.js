/**
 * Created by Wu Jian Ping on - 2017/10/12.
 */

export default class Component {
  show() {
    this.dialog.modal()
  }

  close() {
    this.dialog && this.dialog.modal('hide')
  }

  onMount() {
    this.dialog = $(this.el)
    this.dialog.on('hidden.bs.modal', () => {
      // remove dialog by manual
      this.dialog.remove()
      this.destroy()
    })
  }

  saveData() {
    alert('you clicked "Save" button')
    this.close()
  }
}
