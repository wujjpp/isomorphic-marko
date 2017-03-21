/**
 * Created by JP on 2017/3/20.
 */

const shared = {
  dist: 'build',
  frontPort: 3000, //front-end port, browser-sync start port
  backendPort: 9000 //exporess server port
};

const config = {
  dev: {
    publicPath: 'http://localhost:' + shared.frontPort + '/'
  },

  prod: {
    publicPath: '//cache.YourCDN.com/' //For CDN
  }
};

export default Object.assign({}, shared, config)
