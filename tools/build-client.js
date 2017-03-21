/**
 * Created by JP on 2017/3/20.
 */

import webpack from 'webpack'
import chalk from 'chalk'
import config from './webpack/client.build'

import {getPublicPath, logger, getEnv} from './lib/utils'

async function build(env) {
  env = env || getEnv()
  config.output.publicPath = (env === 'dev' ? '/' : getPublicPath(env))

  logger.chalk(`${chalk.blue('Client public path: ')}${config.output.publicPath}`)

  return new Promise((resolve, reject) => {
    webpack(config, (err, stats) => {
      if (err) {
        reject(err)
      } else {
        console.log(stats.toString(config.stats))
        resolve()
      }
    })
  })
}

export default {
  name: 'build client',
  func: build
}
