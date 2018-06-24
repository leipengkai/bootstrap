// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 注册 全局Vue组件 
//Vue.component('my-header', {
  //template: '<p>this is my header</p>'
//})

var myHeader = {
  template: '<p>this is my header</p>'
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<p>{{ word }}</p>',
  data: {
    word: 'hello world'
  },
// 局部注册子组件
  components: {
    'my-header': myHeader
  }
})
