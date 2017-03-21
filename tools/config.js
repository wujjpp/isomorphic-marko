/**
 * Created by JP on 2017/3/20.
 */

const shared = {
  dist: 'build',
  frontPort: 3000, //front-end port
  backendPort: 9000 //backend-server port
};

const config = {
  dev: {
    publicPath: 'http://localhost:' + shared.frontPort + '/'
  },
  sit: {
    publicPath: '//sitcache.qixin.com/web-c/'
  },
  uat: {
    publicPath: '//uatcache.qixin.com/web-c/'
  },
  prod: {
    publicPath: '//cache.qixin.com/web-c/'
  }
};

export default Object.assign({}, shared, config)
