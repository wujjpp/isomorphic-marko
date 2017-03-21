export default class Home {

  onMount() {
    console.log('onMount');
    // console.log(this);
    // this.state = {
    //   mounted: false,
    //   count: this.input.initCount
    // }
  }

  onCreate(input) {
    //console.log('onCreate');
    // console.log(this);
  }

  onRender() {
    console.log('onRender');
    // console.log(this);
  }

  onUpdate() {
    console.log('onUpdate');
    // console.log(this);
  }

  increment() {
    this.input = Object.assign({}, this.input, {initCount: this.input.initCount + 1})
  }
}
