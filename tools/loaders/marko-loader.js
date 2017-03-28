/**
 * Created by JP on 2017/3/20.
 */

import compiler from 'marko/compiler'
import {
  logger
} from '../libs/utils'

// for way 1
// import fs from 'fs'

// for way 2
import VirtualStats from '../libs/virtual-stats'

function patchPath(path) { //for windows platform
  return path.replace(/\\/g, '\\\\')
}

export default function(source) {
  this.cacheable()

  logger.info(`Complie marko for ${this.options.target}: ${this.resourcePath}`)

  if (this.options.target === 'web') {
    let compiled = compiler.compileForBrowser(source, this.resourcePath, {
      writeToDisk: false
    })

    let dependencies = compiled.dependencies.map((dependency, i) => {
      if (dependency.code) {
        //way 1: write file to dist, then require
        //fs.writeFileSync(dependency.virtualPath, dependency.code, 'utf8')

        //way 2: add virtual file to compiler, then require
        var stats = VirtualStats.create(dependency.code)
        this._compiler.inputFileSystem._statStorage.data[dependency.virtualPath] = [null, stats]
        this._compiler.inputFileSystem._readFileStorage.data[dependency.virtualPath] = [null, dependency.code]

        //add reuqire() in compiled file
        let modulePath = patchPath(dependency.virtualPath)
        return `require('${modulePath}');`

      } else if (dependency.type !== 'require') {
        // external file, just require it
        let modulePath = patchPath(dependency.path)
        return `require('${modulePath}');`
      } else { //ignore self
        return ''
      }
    })
    return dependencies.concat(compiled.code).join('\n')
  } else { //node and others
    var source = compiler.compile(source, this.resourcePath, {
      writeToDisk: false
    })
    return source
  }
}
