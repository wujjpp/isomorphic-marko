import template from './layout.marko'
import assets from '../../../assets'

export default function(req, res) {

  let context = req.context.assign({
    assets: assets.home,
    initCount: 10
  });

  res.marko(template, context);
};
