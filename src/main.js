import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'

Vue.use(Mint)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // template: '<App/>',
  // components: { App }
  render: h => h(App)
})
