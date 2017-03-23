/**
 * Created by JP on 2017/3/20.
 */

import webpack from 'webpack'
import path from 'path'
import config from '../config'
import sharedClientConfig from './client.shared'

export default Object.assign({}, sharedClientConfig, {
  devtool: 'eval-source-map',

  entry: {
    "home": [
      './src/routes/home/client.js',
      'webpack-hot-middleware/client?reload=false', //reload only on css change, other changing use browser-sync reload trigger

    ],
    "test": [
      './src/routes/test/client.js',
      'webpack-hot-middleware/client?reload=false', //reload only on css change, other changing use browser-sync reload trigger
    ]
  },

  output: {
    publicPath: '/',
    filename: `[name]/script.js`
  },

  module: {
    loaders: [{
        test: /\.js$/i,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: './.cache/babel-loader'
          }
        }]
      },

      {
        test: /\.marko$/,
        loader: 'marko-loader'
      },

      {
        test: /\.scss$/i,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              // because of url(), user cannot use sourceMap in css
              // detailed info please refer: https://github.com/webpack-contrib/style-loader
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: './tools/postcss.config.js',
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },

      {
        test: /\.less$/i,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: './tools/postcss.config.js',
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },

      {
        test: /\.css$/i,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: './tools/postcss.config.js',
            }
          }
        ]
      },

      {
        test: /\.(ico|gif|png|jpg|jpeg|webp|mp4|webm|wav|mp3|m4a|aac|oga)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }]
      },

      {
        test: /\.(woff2?|ttf|eot|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'font/[name].[ext]'
          }
        }]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      '__BROWSER__': true,
      '__DEV__': true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      jQuery: 'jquery'
    }),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})
