/**
 * Created by JP on 2017/3/20.
 */
import run from './run'
import clean from './clean'
import config from './config'
import copyPublic from './copy-public'
import copyPkg from './copy-pkg'
import buildClient from './build-client'
import buildServer from './build-server'
import {getEnv} from './lib/utils'

async function build() {
  const env = getEnv()
  await run(clean)
  await run(copyPublic, {dest: config.dist})
  await run(copyPkg)
  await run(buildClient, env)
  await run(buildServer, env)
}
export default {
  name : 'build all',
  func : build
}
