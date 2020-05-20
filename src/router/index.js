import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Restaurants from '../views/Restaurants.vue'
import RestaurantsDesc from '../views/RestaurantsDesc.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/restaurants',
    name: 'Restaurants',
    component: Restaurants
  },
  {
    path: '/restaurantDescription',
    name: 'RestaurantsDesc',
    component: RestaurantsDesc
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router