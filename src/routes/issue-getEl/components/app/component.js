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

    let otherId = this.getElId('other')
    let other = this.getEl('other')
    // you can obtain the id of the "other" component, but you cannot get it's DOM by key
    console.log('other\'s id ---> ', otherId) // eslint-disable-line
    console.log('DOM other ---> ', other) // eslint-disable-line
    console.log('you can obtain the id of the "other" component, but you cannot get it\'s DOM element by key') // eslint-disable-line

    console.log('---------------------------------------------------------') // eslint-disable-line

    let containerId = this.getEl('container')
    let container = this.getEl('container')
    // you can not obtain id and DOM element of "container" component
    console.log('container\'s id ---> ', containerId) // eslint-disable-line
    console.log('DOM container --->', container) // eslint-disable-line
    console.log('you can not obtain id and DOM element of "container" component') // eslint-disable-line
  }
}
