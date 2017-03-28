/**
 * Created by JP on 2017/03/28
 */

export default (...mixins) => {
  class MixedComponent {}
  for (var mixin of mixins) {
    for (var name of Object.keys(mixin)) {
      MixedComponent.prototype[name] = mixin[name]
    }
  }
  return MixedComponent
}
