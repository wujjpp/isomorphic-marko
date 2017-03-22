

export default class Home {
  onMount() {
    $('.chart').easyPieChart({
      easing: 'easeOutBounce',
      onStep: function(from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
      }
    });

    $('#btn').click(function(){
      toastr.success('Have fun storming the castle!', 'Miracle Max Says')
    });

  }

  onCreate(input) {
    //console.log('onCreate');
    // console.log(this);
  }

  onRender() {
    // console.log('onRender');
    // console.log(this);
  }

  onUpdate() {
    // console.log('onUpdate');
    // console.log(this);
  }

  inc() {
    this.input = Object.assign({}, this.input, {
      initCount: this.input.initCount + 1
    })
  }

  dec() {
    this.input = Object.assign({}, this.input, {
      initCount: this.input.initCount - 1
    })
  }

  updateChart() {
    var chart = $('.chart').data('easyPieChart');
    chart.update(Math.random() * 200 - 100);
  }
}
