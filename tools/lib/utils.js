/**
 * Created by JP on 2017/2/16.
 */

import chalk from 'chalk'
import config from '../config'

export const format = (time) => {
  return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '[$1] ')
}

export const logger = {
  success: (msg) => {
    console.log(`${format(new Date())}${chalk.green(msg)}`)
  },
  error: (msg) => {
    console.log(`${format(new Date())}${chalk.red(msg)}`)
  },
  info: (msg) => {
    console.log(`${format(new Date())}${chalk.blue(msg)}`)
  },
  debug:(msg) =>{
    console.log(`${format(new Date())}${chalk.yellow(msg)}`)
  },
  chalk:(msg) =>{
    console.log(`${format(new Date())}${msg}`)
  }
}

export const getEnv = () => {
  let env = 'dev'
  if (process.argv.length >= 3) {
    let args = Array.slice(process.argv, 2)    
    if (args.includes('prod')) {
      env = 'prod'
    }
  }
  return env
}

export const getPublicPath = (env) => {
  return config[env].publicPath
}
