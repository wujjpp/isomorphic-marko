/**
  * Created by Wu Jian Ping on 2017/3/20.
 */

import template from './index.marko'
import assets from '../../assets-loader'

export default function(req, res) {
  // init static resource
  let context = req.context.assign({
    common: assets.common,
    assets: assets.test
  })

  // init title, description and keywords
  context.tdk = {
    title: 'this is test page',
    description: 'test page\'s description',
    keywords: 'test page\'s keywords'
  }

  // init data
  context.initCount = 10

  // render page
  res.marko(template, context)
}
