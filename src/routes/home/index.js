var template = require('./template.marko');
var assets = require('../../../assets');

module.exports = function(req, res) {
  res.marko(template, {
    assets: assets.home,
    initCount: 10
  });
};
