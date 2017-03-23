/**
 * Created by JP on 2017/3/20.
 */

import webpack from 'webpack'
import AssetsPlugin from 'assets-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import path from 'path'
import config from '../config'
import sharedClientConfig from './client.shared'

export default Object.assign({}, sharedClientConfig, {
  entry: {
    "home": './src/routes/home/client.js',
    "test": './src/routes/test/client.js',
  },

  output: {
    publicPath: '/',
    path: path.join(process.cwd(), config.dist, 'public'),
    filename: `[name]/script.[hash:8].js`
  },

  module: {

    loaders: [{
        test: /\.js$/i,
        use: ['babel-loader']
      },

      {
        test: /\.marko$/,
        loader: 'marko-loader'
      },

      {
        test: /\.scss$/i,
        use: ExtractTextPlugin.extract({
          use: [{
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                config: './tools/postcss.config.js',
              }
            },
            {
              loader: 'sass-loader'
            }
          ],
          fallback: 'style-loader'
        })
      },

      {
        test: /\.less$/i,
        use: ExtractTextPlugin.extract({
          use: [{
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                config: './tools/postcss.config.js',
              }
            },
            {
              loader: 'less-loader'
            }
          ],
          fallback: 'style-loader'
        })
      },

      {
        test: /\.css$/i,
        use: ExtractTextPlugin.extract({
          use: [{
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                config: './tools/postcss.config.js',
              }
            }
          ],
          fallback: 'style-loader'
        })
      },

      {
        test: /\.(ico|gif|png|jpg|jpeg|webp|mp4|webm|wav|mp3|m4a|aac|oga)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name]-[hash:8].[ext]'
          }
        }]
      },

      {
        test: /\.(woff2?|ttf|eot|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'font/[name]-[hash:8].[ext]'
          }
        }]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      '__BROWSER__': true,
      '__DEV__': false
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new AssetsPlugin({
      path: path.join(process.cwd(), 'src'),
      filename: 'assets.json',
      prettyPrint: true
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      jQuery: 'jquery'
    }),

    new ExtractTextPlugin({
      filename: `[name]/style.[hash:8].css`,
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false,
        drop_console: true //remove all console
      }
    })
  ],
})
