/**
 * Created by JP on 2017/3/20.
 */

import webpack from 'webpack'
import path from 'path'
import config from '../config'
import MarkoServerBundlePatcherPlugin from '../plugins/marko-server-bundle-patcher-plugin'

export default {
  target: 'node',
  devtool: 'source-map',
  entry: './src/server.js',

  module: {
    rules: [{
        test: /\.js$/i,
        use: ['babel-loader'],
        include: [
          path.join(process.cwd(), 'src')
        ]
      },

      {
        test: /\.marko$/,
        loader: 'marko-loader'
      },

      {
        test: /\.(scss|less|css)$/i,
        use: ['null-loader']
      },

      {
        test: /\.(ico|gif|png|jpg|jpeg|webp)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name]-[hash:8].[ext]',
            emitFile: false
          }
        }]
      },

      {
        test: /\.(woff2?|ttf|eot|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'font/[name]-[hash:8].[ext]',
            emitFile: false
          }
        }]
      }
    ]
  },

  output: {
    path: path.join(process.cwd(), config.dist),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    publicPath: '/'
  },

  externals: [
    /^\.\/assets\.json$/,
    /^\.\/env\.json$/,

    (context, request, callback) => {
      const isExternal =
        //the module name start with ('@' or 'a-z') character and contains 'a-z' or '/' or '.' or '-' or '0-9'
        request.match(/^[@a-z][a-z/.\-0-9]*$/i)&&
        !request.match(/\.(css|less|scss)$/i)
      //environment config file, auto generated during build

      callback(null, Boolean(isExternal))
    },
  ],

  resolveLoader: {
    modules: ['tools/loaders', 'node_modules'],
  },

  resolve: {
    extensions: ['.js', '.marko', '.json']
  },

  node: {
    __filename: false,
    __dirname: false
  },

  plugins: [
    new webpack.DefinePlugin({
      '__BROWSER__': false,
      '__DEV__': false
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new webpack.BannerPlugin({
      banner: "require('source-map-support').install();process.env.NODE_ENV='production';",
      raw: true,
      entryOnly: true
    }),

    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),

    new MarkoServerBundlePatcherPlugin(),

    // new webpack.optimize.UglifyJsPlugin({
    //       sourceMap: true,
    //       comments: false,
    //       compress: {
    //         warnings: false
    //       },
    //       /*mangle: false*/
    //     })
  ],

  stats: {
    colors: true,
    warnings: false
  }
}
