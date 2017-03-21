/**
 * Created by JP on 2017/3/20.
 */

import webpack from 'webpack'
import path from 'path'
import config from '../config'
import MarkoServerBundlePatcherPlugin from '../plugins/marko-server-bundle-patcher-plugin'

export default {
  target: 'node',
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  entry: './src/server.js',

  module: {
    rules: [{
        test: /\.(js)$/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: './.cache/babel-loader'
          }
        }],
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
            name: '[path][name].[ext]',
            emitFile: false
          }
        }]
      },

      {
        test: /\.(woff2?|ttf|eot|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'font/[name].[ext]',
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
        // the module name start with ('@' or 'a-z') character and contains 'a-z' or '/' or '.' or '-' or '0-9'
        request.match(/^[@a-z][a-z/.\-0-9]*$/i)&&
        !request.match(/\.(css|less|scss)$/i)
        //environment config file, auto generated during build
      //console.log(request + '--------' + Boolean(isExternal))

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
      '__DEV__': true
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),

    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install()',
      raw: true,
      entryOnly: false
    }),

    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),

    new MarkoServerBundlePatcherPlugin(),

  ],

  stats: {
    colors: true,
    warnings: false
  }
}
