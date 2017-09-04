/**
 * Created by Wu Jian Ping on 2017/3/20.
 */

import webpack from 'webpack'
import chalk from 'chalk'
import config from './config'
import webpackConfig from './webpack/client.build'
import entrySettings from '../entry-settings'
import _ from 'lodash'
import { getPublicPath, logger, getEnv, createEnvDefinePlugin } from './libs/utils'
import { writeFile } from './libs/fs'

async function build(env) {
  env = env || getEnv()
  webpackConfig.output.publicPath = (env === 'dev' ? '/' : getPublicPath(env))
  logger.chalk(`${chalk.blue('Enviroment: ')}${chalk.bgRed(env)}`)
  logger.chalk(`${chalk.blue('Client public path: ')}${webpackConfig.output.publicPath}`)

  // load entry setting
  let entryKeys = _.keys(entrySettings)
  let clientEntry = {}

  // prepare config for webpack server and client config
  _.forEach(entryKeys, (key) => {
    let entry = entrySettings[key]
    clientEntry[key] = [
      'babel-polyfill', // if we include bable-polyfill, it will made bundle file incress 96 KB, if not it will be crash in IE by Symbol not defined.
      // 'core-js/es6/symbol', // fox fixing Symbol is not defined in IE
      // 'core-js/es6/object', // for fixing object.assign is not defined in IE.
      entry.src
    ]
  })

  webpackConfig.entry = clientEntry

  // setup env config
  webpackConfig.plugins.push(createEnvDefinePlugin(env))

  return new Promise((resolve, reject) => {
    webpack(webpackConfig, (err, stats) => {
      if (err) {
        reject(err)
      } else {
        console.log(stats.toString(webpackConfig.stats)) //eslint-disable-line
        writeFile(`${config.dist}/webpack-client-stats.json`, JSON.stringify(stats.toJson()))
        resolve()
      }
    })
  })
}

export default {
  name: 'build client',
  func: build
}
