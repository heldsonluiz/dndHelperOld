import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/Home')
    }, {
      path: '/spells',
      name: 'Magias',
      component: () => import('@/components/Spells')
    }, {
      path: '/itens',
      name: 'Itens',
      component: () => import('@/components/Itens')
    }, {
      path: '/armas',
      name: 'Armas',
      component: () => import('@/components/itens/Armas')
    }, {
      path: '/armaduras',
      name: 'Armaduras',
      component: () => import('@/components/itens/Armaduras')
    }, {
      path: '/pacotes',
      name: 'Pacotes',
      component: () => import('@/components/itens/Pacotes')
    }, {
      path: '/dice-roller',
      name: 'Dice Roller',
      component: () => import('@/components/tools/DiceRoller')
    }, {
      path: '/turn-tracker',
      name: 'Turn Tracker',
      component: () => import('@/components/tools/TurnTracker')
    }
  ]
})
