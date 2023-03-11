const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");
const path = require("path");

const resolve = (dir) => {
  return path.join(__dirname, dir);
};
module.exports = {
  lintOnSave: false,
  outputDir: "myapp",
  publicPath: process.env.NODE_ENV === "production" ? "/myapp/" : "/",
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
            propList: ["*"],
            // 该项仅在使用 Circle 组件时需要
            // 原因参见 https://github.com/youzan/vant/issues/1948
            selectorBlackList: ["van-circle__layer"]
          })
        ]
      },
      // less: {
      //   // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
      //   lessOptions: {
      //     modifyVars: {
      //       // 直接覆盖变量
      //       'text-color': '#111',
      //       'border-color': '#eee',
      //       // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
      //       hack: `true; @import "your-less-file-path.less";`,
      //     },
      //   },
      // },
      less: {
        modifyVars: {
          // 直接覆盖变量
          "nav-bar-icon-color": "#b2b2b2",
          // "button-info-background-color": "#ff0000"
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          // hack: `true; @import "your-less-file-path.less";`
          // 其实这块不一定是hack，任何的key都行，也不是说一定要是ture;，最重要的其实是true后面的分号
          // 来自 https://stackoverflow.com/questions/60809336/customizing-ant-designs-theme-what-exactly-is-that-hack-key-in-the-modifyva/65715711#65715711
          'any_word_you_like': `; @import "${path.resolve(
            __dirname,
            "./src/styles/index.less"
          )}";`
        },
        // 启用在 less 文件中使用 JavaScript 表达式。
        javascriptEnabled: true
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src")) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set("_c", resolve("src/components"));
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:7070",
        changeOrigin: true
      }
    }
  }
};
