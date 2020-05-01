import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import IndividualSignup from '../views/IndividualSignup.vue'
import EmployerSignup from '../views/EmployerSignup.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Help from '../views/Help.vue'
import EmployerOrder from '../views/EmployerOrder.vue'
import EmployerPackages from '../views/EmployerPackages.vue'
import IndividualPackages from '../views/IndividualPackages.vue'
import IndividualOrder from '../views/IndividualOrder.vue'
import OrderConfirmation from '../views/OrderConfirmation.vue'
import OrderDetail from '../views/OrderDetail.vue'
import Profile from '../views/Profile.vue'
import FAQ from '../views/FAQ.vue'
import OrderBankTransfer from '../views/OrderBankTransfer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/individual-signup',
    name: 'IndividualSignup',
    component: IndividualSignup
  },
  {
    path: '/employer-signup',
    name: 'EmployerSignup',
    component: EmployerSignup
  },
  {
    path: '/employer-order',
    name: 'EmployerOrder',
    component: EmployerOrder,
    props:true
  },
  {
    path: '/employer-packages',
    name: 'EmployerPackages',
    component: EmployerPackages
  },
  {
    path: '/individual-packages',
    name: 'IndividualPackages',
    component: IndividualPackages
  },
  {
    path: '/individual-order',
    name: 'IndividualOrder',
    component: IndividualOrder,
    props:true
  },
  {
    path: '/order-confirmation',
    name: 'OrderConfirmation',
    component: OrderConfirmation,
    props:true
  },
  {
    path: '/order-detail',
    name: 'OrderDetail',
    component: OrderDetail,
    props:true
  },
  {
    path: '/bank-transfer',
    name: 'OrderBankTransfer',
    component: OrderBankTransfer
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
