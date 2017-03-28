 //import only in browser enviroment
if (__BROWSER__) {
  require('../../../../styles/toastr.scss')
  var toastr = require('toastr')
  require('easy-pie-chart/dist/jquery.easypiechart')
}

export default class Test {
  onMount() {
    //init easy pie chart
    $('.chart').easyPieChart({
      easing: 'easeOutBounce',
      onStep: function(from, to, percent) {
        //$(this.el).find('.percent').text(Math.round(percent))
      }
    })
    //update chart value
    this.chart = $('.chart').data('easyPieChart');
    this.chart.update(this.state.percent)
  }

  onCreate(input, out) {
    //initial state
    this.state = {
      percent: Math.round(Math.random() * 200 - 100)
    }

    console.log(this.state)
  }

  onRender() {}

  onUpdate() {
    console.log('update')
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

  showToastr() {
    toastr.success('Have fun storming the castle!', 'Miracle Max Says')
  }

  updateChart() {
    //var chart = $('.chart').data('easyPieChart')
    this.state.percent = Math.random() * 200 - 100
    this.chart.update(this.state.percent)
  }
}
