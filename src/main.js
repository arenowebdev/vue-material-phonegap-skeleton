import FastClick from 'fastclick'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import App from './App.vue'
import { routes } from './routes.js'
import { store } from './store/index'

// Prevent 300ms delay when pressing. Remove this if you are going
// to use double tap for anything...
FastClick.attach(document.body)

Vue.use(VueRouter)
Vue.use(VueResource)

// Can use individual components as such:
// Vue.use(VueMaterial.mdCore) //Required to boot vue material
// Vue.use(VueMaterial.mdButton)
// Vue.use(VueMaterial.mdIcon)
// Vue.use(VueMaterial.mdSidenav)
// Vue.use(VueMaterial.mdToolbar)
// or just pull in the whole thing:
Vue.use(VueMaterial)

// Setup a custom theme to use for the components.
// See: http://vuematerial.io/#/themes/configuration
Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'red',
  warn: 'red',
  background: 'white'
})

const router = new VueRouter({
    routes: routes
})

new Vue({
    el: "#app",
    router: router,
    render: h => h(App),
    store: store
})
