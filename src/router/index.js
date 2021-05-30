import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'
import Login from '../../src/components/Login.vue'
import Welcome from '../../src/components/Welcome.vue'
import Register from '../../src/components/Register.vue'

import ForgotPassword from '../../src/components/ForgotPassword.vue'
import RapportVisiteur from '../../src/components/RapportVisiteur.vue'
import Praticiens from '../../src/components/Praticiens.vue'
import RapportsRh from '../../src/components/RapportsRh.vue'
import ListVisiteurs from '../../src/components/ListVisiteurs.vue'
import NouveauRapport from '../../src/components/NouveauRapport.vue'
import EditRapport from '../../src/components/EditRapport.vue'
import RapportRh from '../../src/components/RapportRh.vue'
import NouveauVisiteur from '../../src/components/NouveauVisiteur.vue'
import EditVisiteur from '../../src/components/EditVisiteur.vue'
import ModifyRapport from '../../src/components/ModifyRapport.vue'
import Account from '../../src/components/Account.vue'

const routes = [
  {
    path: '/',
    component: Welcome
  },
  {
    path: '/accountedit',
    name: 'EditVisiteur',
    component: EditVisiteur
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/modifyrapport',
    name: 'ModifyRapport',
    component: ModifyRapport
  },
  {
    path: '/newrapport',
    name: 'NouveauRapport',
    component: NouveauRapport
  },
  {
    path: '/editrapport',
    name: 'EditRapport',
    component: EditRapport
  },
  {
    path: '/users',
    name: 'ListVisiteurs',
    component: ListVisiteurs
  },
  {
    path: '/newaccount',
    name: 'NouveauVisiteur',
    component: NouveauVisiteur
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/forgot',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/rapportv',
    name: 'RapportVisiteur',
    component: RapportVisiteur
  },
  {
    path: '/praticiens',
    name: 'Praticiens',
    component: Praticiens
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/rapportsrh',
    name: 'RapportsRh',
    component: RapportsRh
  },
  {
    path: '/rapportrh',
    name: 'RapportRh',
    component: RapportRh
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
