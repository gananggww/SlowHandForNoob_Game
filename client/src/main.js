// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueDisabled from 'vue-disabled'
import vuefire from 'vuefire'
import firebase from 'firebase'

Vue.use(firebase)
Vue.use(vuefire)
Vue.use(VueDisabled)

var config = {
  apiKey: 'AIzaSyA_wydnT36EAB4oVOSSbi7z1gwXg-Axgco',
  authDomain: 'type-race-b28c3.firebaseapp.com',
  databaseURL: 'https://type-race-b28c3.firebaseio.com',
  projectId: 'type-race-b28c3',
  storageBucket: 'type-race-b28c3.appspot.com',
  messagingSenderId: '697068469287'
}
firebase.initializeApp(config)
Vue.prototype.$db = firebase.database()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
