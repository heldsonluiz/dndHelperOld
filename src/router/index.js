import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home.vue'
import Spells from '@/components/Spells'
import Itens from '@/components/Itens'
import Weapons from '@/components/itens/Armas'
import Armour from '@/components/itens/Armaduras'
import Packages from '@/components/itens/Pacotes'
import DiceRoller from '@/components/tools/DiceRoller'
import TurnTracker from '@/components/tools/TurnTracker'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/spells',
      name: 'Magias',
      component: Spells
    }, {
      path: '/itens',
      name: 'Itens',
      component: Itens
    }, {
      path: '/armas',
      name: 'Armas',
      component: Weapons
    }, {
      path: '/armaduras',
      name: 'Armaduras',
      component: Armour
    }, {
      path: '/pacotes',
      name: 'Pacotes',
      component: Packages
    }, {
      path: '/dice-roller',
      name: 'Dice Roller',
      component: DiceRoller
    }, {
      path: '/turn-tracker',
      name: 'Turn Tracker',
      component: TurnTracker
    }
  ]
})
