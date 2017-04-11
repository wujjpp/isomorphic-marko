/**
 * Created by Wu Jian Ping on 2017/3/20.
 */

import path from 'path'
import chokidar from 'chokidar'
import { copyFile, makeDir, cleanDir } from './libs/fs'
import { logger } from './libs/utils'

async function watch({ dest }) {
  const watcher = chokidar.watch([
    'public/**/*',
  ], {
    ignoreInitial: true
  })

  watcher.on('all', async(event, filePath) => {
    const start = new Date()
    const src = path.relative('./', filePath)
    const dist = path.join(`${dest}/`, src.startsWith('src') ? path.relative('src', src) : src)
    switch (event) {
      case 'add':
      case 'change':
        await makeDir(path.dirname(dist))
        await copyFile(filePath, dist)
        break
      case 'unlink':
      case 'unlinkDir':
        cleanDir(dist, {
          nosort: true,
          dot: true
        })
        break
      default:
        return
    }
    const end = new Date()
    const time = end.getTime() - start.getTime()
    logger.info(`${event} '${dist}' after ${time} ms`)
  })
}

export default {
  name: 'watch',
  func: watch
}
