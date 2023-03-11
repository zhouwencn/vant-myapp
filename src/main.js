import Vue from 'vue';
import App from './App';
import { router } from './router/index';
// 'amfe-flexible'必须和'postcss-pxtorem'搭配使用
// 作用就是动态设置html标签的font-size大小，让rem生效
// 通常情况下是不需要进行额外的配置的。amfe-flexible会根据设备的像素密度（即dpr）动态地计算根元素字体大小，并将其设置为html元素的font-size属性值，从而实现移动端自适应布局。
import 'amfe-flexible';
new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
