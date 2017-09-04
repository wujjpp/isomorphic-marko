/**
 * Created by Wu Jian Ping on 2017/3/20.
 */

import webpack from 'webpack'
import path from 'path'
import serverSharedConfig from './server.shared'
// import MarkoServerBundlePatcherPlugin from '../plugins/marko-server-bundle-patcher-plugin'
import marked from 'marked'
const renderer = new marked.Renderer()

export default Object.assign({}, serverSharedConfig, {
  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.marko', '.json']
  },

  module: {
    rules: [{
      test: /\.js$/i,
      use: ['babel-loader'],
      include: [path.join(process.cwd(), 'src')]
    },
    {
      test: /\.marko$/,
      use: ['babel-loader', 'marko-loader']
    },
    {
      test: /\.(scss|less|css)$/i,
      use: ['null-loader']
    },
    {
      test: /\.(ico|gif|png|jpg|jpeg)$/i,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name]-[hash:8].[ext]',
          emitFile: false
        }
      }]
    },
    {
      test: /\.(webp|mp4|webm|wav|mp3|m4a|aac|oga)$/i,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name]-[hash:8].[ext]',
          emitFile: false
        }
      }]
    },
    {
      test: /\.(woff2?|ttf|eot|svg)(\?[\s\S])?$/i,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name]-[hash:8].[ext]',
          emitFile: false
        }
      }]
    },
    {
      test: /\.md$/,
      use: [{
        loader: 'html-loader'
      },
      {
        loader: 'markdown-loader',
        options: {
          pedantic: true,
          renderer
        }
      }
      ]
    }
    ]
  },

  externals: [
    /^\.\/assets.json$/,
    /^marko\/dist\/.*$/, // ignore marko
    (context, request, callback) => {
      const isExternal =
        // the module name start with ('@' or 'a-z') character and contains 'a-z' or '/' or '.' or '-' or '0-9'
        request.match(/^[@a-z][a-z/.\-0-9]*$/i) && !request.match(/\.(css|less|scss)$/i)
      // environment config file, auto generated during build
      callback(null, Boolean(isExternal))
    }
  ],

  plugins: [
    new webpack.DefinePlugin({
      '__BROWSER__': false
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new webpack.BannerPlugin({
      banner: 'require(\'source-map-support\').install();process.env.NODE_ENV=\'production\';',
      raw: true,
      entryOnly: true
    }),

    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),

    // new MarkoServerBundlePatcherPlugin(),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
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
