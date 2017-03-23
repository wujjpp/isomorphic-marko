/**
 * Created by JP on 2017/3/20.
 */

import ConcatSource from 'webpack-sources/lib/ConcatSource'

function MarkoServerBundlePatcherPlugin() {}

MarkoServerBundlePatcherPlugin.prototype.apply = function(compiler) {
  compiler.plugin('compilation', (compilation) => {
    compilation.plugin('optimize-chunk-assets', (chunks, done) => {
      chunks.forEach(function(chunk) {
        chunk.files.forEach(function(fileName) {          
          var result = compilation.assets[fileName].source()
          result = result.replace(/marko_loadTemplate\(\/\*require\.resolve\*\/\(/g, 'marko_loadTemplate(__webpack_require__(')
          compilation.assets[fileName] = new ConcatSource(result)
        })
      })
      done()
    })
  });
}

export default MarkoServerBundlePatcherPlugin
