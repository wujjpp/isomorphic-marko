/**
 * Created by JP on 2017/3/20.
 */

import {logger} from './lib/utils'

function run(task, options) {

  const start = new Date()
  logger.info(`Starting '${task.name}${options ? ` (${JSON.stringify(options)})` : ''}'...`)
  return task.func(options).then((resolution) => {
    const end = new Date()
    const time = end.getTime() - start.getTime()
    logger.info(`Finished '${task.name}${options ? ` (${JSON.stringify(options)})` : ''}' after ${time} ms`)
    return resolution
  })
}

if (require.main === module && process.argv.length > 2) {
  delete require.cache[__filename]; // eslint-disable-line no-underscore-dangle
  const task = require(`./${process.argv[2]}.js`) // eslint-disable-line import/no-dynamic-require
  run(task).catch((err) => {
    console.error(err.stack)
    process.exit(1)
  })
}

export default run
