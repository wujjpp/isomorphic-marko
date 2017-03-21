import toastr from 'toastr'

export default class Home {

  onCreate(input) {
    //console.log('onCreate');
    // console.log(this);
  }

  onMount() {
    $('#btn').click(function(){
      toastr.success('Have fun storming the castle!', 'Miracle Max Says')
    });
  }

  onRender() {
    console.log('onRender');
    // console.log(this);
  }

  onUpdate() {
    console.log('onUpdate');
    // console.log(this);
  }
}
