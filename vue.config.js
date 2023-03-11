const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  outputDir: 'myapp',
  publicPath: process.env.NODE_ENV === 'production'
  ? '/myapp/'
  : '/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            // vant组件库默认使用的是375的设计稿，如果我们拿到的设计稿是750的设计稿
            // 就需要修改rootValue为如下的内容，排除vant，自己的用75来搞，因为如上面所说，vant是用的375设计稿，所以需要排除vant
            // rootValue({ file }) {
            //   return file.indexOf('vant') !== -1 ? 37.5 : 75;
            // },
            rootValue: 37.5,
            propList: ['*'],
            // 该项仅在使用 Circle 组件时需要
            // 原因参见 https://github.com/youzan/vant/issues/1948
            selectorBlackList: ['van-circle__layer']
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7070',
        changeOrigin: true
      }
    }
  }
};
