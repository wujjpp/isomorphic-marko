/**
  * Created by Wu Jian Ping on 2017/3/20.
 */

import template from './layout.marko'
import assets from '../../assets-loader'
import readme from '../../../README.md'

export default function(req, res) {
  let context = req.context.assign({
    assets: assets.home, //NOTE: please take note on entry-settings.js, the "home" arrtibute is from there
    readme: readme
  })
  res.marko(template, context)
}
