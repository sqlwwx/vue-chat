import App from './components/app'
import Vue from 'vue'

Vue.config.debug = true

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
