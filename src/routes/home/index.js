import template from './layout.marko'
import assets from '../../assets-loader'

export default function(req, res) {

  let context = req.context.assign({
    assets: assets.home, //NOTE: please take note on entry-settings.js, the "home" arrtibute is from there
    initCount: 10
  });

  res.marko(template, context);
};
