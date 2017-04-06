/**
 * Created by Wu Jian Ping on 2017/3/20.
 */

import {
  Mixins,
  HistoryMixin
} from '../../../../core/mixins'

//import only in browser enviroment
if (__BROWSER__) {
  require('../../../../styles/toastr.scss')
  var toastr = require('toastr')
  require('easy-pie-chart/dist/jquery.easypiechart')
}

class TestComponent {
  onMount() {
    $('.chart').easyPieChart({
      easing: 'easeOutBounce',
      onStep: function(from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent))
      }
    })
    this.chart = $('.chart').data('easyPieChart')
    this.chart.update(this.state.percent)
  }

  onCreate() {
    this.state = {
      percent: Math.round(Math.random() * 200 - 100),
      content: 'marko-starter-kit'
    }
  }

  onRender() {
    //console.log('onRender called')
  }

  onUpdate() {
    //console.log('onUpdate called')
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

  handleInput(e) {
    this.state.content = e.target.value
  }

  showToastr() {
    toastr.success('Have fun storming the castle!', 'Miracle Max Says')
  }

  updateChart() {
    this.state.percent = Math.random() * 200 - 100
    this.chart.update(this.state.percent)
  }

  gotoTest(e) {
    e.preventDefault()
    e.stopPropagation()
    this.history.navigate('/test', { a: 1, b: 2 })
    //console.log(this.history)
  }

  gotoMixin(e) {
    e.preventDefault()
    e.stopPropagation()
    this.history.navigate('/home', { a: 3, b: 4 })
    //console.log(this.history)
  }
}

export default Mixins(HistoryMixin)(TestComponent)
