/**
 * Created by JP on 2017/3/20.
 */

import {
  Mixins,
  HistoryMixin
} from '../../../../core/mixins'

var MixedBaseClass = Mixins(HistoryMixin)

class Bar extends MixedBaseClass {}

export default class MyClass extends MixedBaseClass {
  foo() {
    //the following 2 lines codes are working fine
    var bar = new Bar()
    bar.funcInMixin()

    // this.funcInMixin is undefined, it caused unhandled exception
    this.funcInMixin()
  }
}
