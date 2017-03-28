/**
  * Created by JP on 2017/3/20.
 */

import template from './layout.marko'
import assets from '../../assets-loader'

export default function(req, res) {
  let context = req.context.assign({
    assets: assets.mixin
  })
  res.marko(template, context)
}
