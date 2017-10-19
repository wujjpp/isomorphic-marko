export default class Component {
  onMount() {
    console.log('app-container onMount called') // eslint-disable-line

    console.log(this.getEl('btn-in-app-container')) // eslint-disable-line
  }

  btnClick() {
    console.log('btn-in-app-container clicked') // eslint-disable-line
  }
}
