//example for expose-loader and exports-loader
//expose-loader: This loader exposes the exports to a module to the global context
//exports-loader: This loader exports variables from inside the file.
//more detailed information, please refer http://webpack.github.io/docs/shimming-modules.html
require('expose-loader?CanvasRenderer!exports-loader?CanvasRenderer!./renderer/canvas')
require('expose-loader?EasyPieChart!exports-loader?EasyPieChart!./easypiechart.js')
require('./jquery.plugin')
