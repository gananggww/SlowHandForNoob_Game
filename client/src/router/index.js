import Vue from 'vue'
import Router from 'vue-router'
import House from '@/components/House'
import Player1 from '@/components/Player1'
import Player2 from '@/components/Player2'
import Referee from '@/components/Referee'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: House
    }, {
      path: '/player2',
      component: Player2
    }, {
      path: '/player1',
      component: Player1
    }, {
      path: '/referee',
      component: Referee
    }
  ]
})
