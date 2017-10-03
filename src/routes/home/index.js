/**
 * Created by Wu Jian Ping on 2017/3/20.
 */

import template from './index.marko'
import assets from '../../assets-loader'
import readme from '../../../README.md'

export default function(req, res) {
  // init static resource
  let context = req.context.assign({
    common: assets.common,
    assets: assets.home
  })

  // init title, description and keywords
  context.tdk = {
    title: 'This is home page',
    description: 'This is home page\'s description',
    keywords: 'This is home page\'s keywords'
  }

  // init data
  context.readme = readme

  // render page
  res.marko(template, context)
}
