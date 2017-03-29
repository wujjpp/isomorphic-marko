/**
 * Created by JP on 2017/03/28
 */

export default (...mixins) => (component) => {
  for (let mixin of mixins) {
    Object.assign(component.prototype, mixin)
  }
  return component
}
