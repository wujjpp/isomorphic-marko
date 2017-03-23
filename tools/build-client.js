/**
 * Created by JP on 2017/3/20.
 */

import webpack from 'webpack'
import chalk from 'chalk'
import config from './config'
import webpackConfig from './webpack/client.build'
import entrySettings from '../entry-settings'
import _ from 'lodash'

import {
  getPublicPath,
  logger,
  getEnv
} from './libs/utils'

import {
  writeFile
} from './libs/fs'


async function build(env) {
  env = env || getEnv()
  webpackConfig.output.publicPath = (env === 'dev' ? '/' : getPublicPath(env))
  logger.chalk(`${chalk.blue('Client public path: ')}${webpackConfig.output.publicPath}`)

  //load entry setting
  let entryKeys = _.keys(entrySettings)
  let clientEntry = {}

  //prepare config for webpack server and client config
  _.forEach(entryKeys, (key) => {
    let entry = entrySettings[key]
    clientEntry[key] = entry.src
  })

  webpackConfig.entry = clientEntry

  return new Promise((resolve, reject) => {
    webpack(webpackConfig, (err, stats) => {
      if (err) {
        reject(err)
      } else {
        console.log(stats.toString(config.stats))
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
