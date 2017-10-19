/**
 * Created by Wu Jian Ping on 2017/3/20.
 */

export default class Component {
  onMount() {
  }

  btnClick() {
    console.log('---------------------------------------------------------') // eslint-disable-line
    let btnId = this.getElId('btn')
    let btn = this.getEl('btn')
    console.log('btn\'s id ---> ', btnId) // eslint-disable-line
    console.log('DOM btn ---> ', btn) // eslint-disable-line

    console.log('---------------------------------------------------------') // eslint-disable-line

    let other = this.getComponent('other')
    let otherId = other.id
    console.log('other\'s id ---> ', otherId) // eslint-disable-line
    console.log('DOM other ---> ', other.el) // eslint-disable-line

    console.log('---------------------------------------------------------') // eslint-disable-line

    let container = this.getComponent('container')
    let containerId = container.id
    console.log('container\'s id ---> ', containerId) // eslint-disable-line
    console.log('DOM container --->', container.el) // eslint-disable-line    
  }
}
