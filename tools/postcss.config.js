/**
 * Created by Wu Jian Ping on 2017/3/20.
 */

module.exports = ({ file, options, env }) => ({
  plugins: {
    'autoprefixer': env === 'production' ? {} : false
  }
})
