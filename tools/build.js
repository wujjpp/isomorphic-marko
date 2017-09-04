/**
 * Created by Wu Jian Ping on 2017/3/20.
 */

import run from './run'
import clean from './clean'
import { copyPublic, copyPkg, copyAssets, copyEnvConfig } from './copy'
import buildClient from './build-client'
import buildServer from './build-server'
import { getEnv } from './libs/utils'

async function build() {
  const env = getEnv()
  await run(clean)
  await run(copyEnvConfig, env)
  await run(copyPublic)
  await run(copyPkg)
  await run(buildClient, env)
  await run(copyAssets)
  await run(buildServer, env)
}
export default {
  name: 'build all',
  func: build
}
