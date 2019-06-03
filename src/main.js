/*
* 关于图片问题，接口返回的图片都是很大图片，即使用vuelazyload依旧很慢，参考了网易音乐线上写法，控制图片大小和质量
* 例如：v-lazy="item.song.album.picUrl + '?thumbnail=220x0&quality=30&type=webp'"
* @param  thunbnail: 图片大小，只写宽度
* @param  quality: 图片质量，不要求质量可以传小一点
* @param  type: 以webp形式
* */

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import myFilters from './filters'

Vue.config.productionTip = false
Vue.use(VueLazyload, {
  // error: '../static/images/error.png',
  loading: '../static/images/default.png'
})
for(let key in myFilters){
  Vue.filter(key, myFilters[key])
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
