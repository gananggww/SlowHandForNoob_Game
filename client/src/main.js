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
  apiKey: 'AIzaSyD1jr17DUCHShjr1oHGO5dnSflB1ETIMXc',
  authDomain: 'type-race.firebaseapp.com',
  databaseURL: 'https://type-race.firebaseio.com',
  projectId: 'type-race',
  storageBucket: '',
  messagingSenderId: '842032352268'
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
