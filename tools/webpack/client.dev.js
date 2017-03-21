/**
 * Created by JP on 2017/3/20.
 */

import webpack from 'webpack'
import AssetsPlugin from 'assets-webpack-plugin'
import path from 'path'
import config from '../config'

export default {
  target: 'web',
  devtool: 'eval-source-map',
  entry: {
    home: [
      'webpack-hot-middleware/client?reload=false', //reload only on css change, other changing use browser-sync reload trigger
      './src/routes/home/client.js'
    ],
    home2: [
      'webpack-hot-middleware/client?reload=false', //reload only on css change, other changing use browser-sync reload trigger
      './src/routes/home2/client.js'
    ]
  },

  resolve: {
    extensions: ['.js', '.marko', '.json']
  },

  resolveLoader: {
    modules: ['tools/loaders', 'node_modules'],
  },

  output: {
    publicPath: '/',
    path: path.join(process.cwd(), config.dist, 'public'),
    filename: `[name].js`
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
        test: /\.(ico|gif|png|jpg|jpeg|webp)$/i,
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

    new webpack.HotModuleReplacementPlugin(),

    new AssetsPlugin({
      filename: 'assets.json',
      prettyPrint: true
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  stats: {
    colors: true,
    warnings: false
  }
};
