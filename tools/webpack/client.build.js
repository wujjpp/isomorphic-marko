/**
 * Created by Wu Jian Ping on 2017/3/20.
 */

import webpack from 'webpack'
import AssetsPlugin from 'assets-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import path from 'path'
import config from '../config'
import sharedClientConfig from './client.shared'

export default Object.assign({}, sharedClientConfig, {
  output: {
    publicPath: '/',
    path: path.join(process.cwd(), config.dist, 'public'),
    filename: '[name].[hash:8].js'
  },

  resolve: {
    extensions: ['.js', '.marko', '.json']
  },

  module: {
    rules: [{
      test: /\.js$/i,
      use: ['babel-loader']
    },

    {
      test: /\.marko$/,
      use: ['babel-loader', 'marko-loader']
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
            config: {
              path: './tools/postcss.config.js'
            }
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
            config: {
              path: './tools/postcss.config.js'
            }
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
            config: {
              path: './tools/postcss.config.js'
            }
          }
        }
        ],
        fallback: 'style-loader'
      })
    },

    {
      test: /\.(ico|gif|png|jpg|jpeg|webp)$/i,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name]-[hash:8].[ext]'
        }
      }]
    },

    {
      test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)$/i,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name]-[hash:8].[ext]'
        }
      }]
    },

    {
      test: /\.(woff2?|ttf|eot|svg)(\?[\s\S])?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name]-[hash:8].[ext]'
        }
      }]
    }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      '__BROWSER__': true
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.[hash:8].js',
      minChunks: 10
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
      filename: '[name].[hash:8].css',
      allChunks: true
    }),

    new webpack.optimize.UglifyJsPlugin({
      // 0.4.6
      comments: false,
      compress: {
        sequences: true, // join consecutive statemets with the “comma operator”
        properties: true, // optimize property access: a["foo"] → a.foo
        dead_code: true, // discard unreachable code
        drop_debugger: true, // discard “debugger” statements
        drop_console: true,
        unsafe: false, // some unsafe optimizations (see below)
        conditionals: true, // optimize if-s and conditional expressions
        comparisons: true, // optimize comparisons
        evaluate: true, // evaluate constant expressions
        booleans: true, // optimize boolean expressions
        loops: true, // optimize loops
        unused: true, // drop unused variables/functions
        hoist_funs: true, // hoist function declarations
        hoist_vars: false, // hoist variable declarations
        if_return: true, // optimize if-s followed by return/continue
        join_vars: true, // join var declarations
        cascade: true, // try to cascade `right` into `left` in sequences
        side_effects: true, // drop side-effect-free statements
        warnings: true // warn about potentially dangerous optimizations/code
      }
      // mangle: false

      // beta
      // uglifyOptions: {
      //   comments: false,
      //   compress: {
      //     warnings: false,
      //     drop_debugger: true,
      //     drop_console: true
      //   }
      //   // mangle: false
      // }
    })
  ],
  stats: {
    colors: true,
    warnings: true
  }
})
