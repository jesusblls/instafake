import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import firebase from 'firebase/app'
import 'firebase/database'

var config = {
  apiKey: "AIzaSyBp841O80vZLEesNpzAlWE5A75A0RMnNWA",
  authDomain: "photoapp-d06de.firebaseapp.com",
  databaseURL: "https://photoapp-d06de.firebaseio.com",
  projectId: "photoapp-d06de",
  storageBucket: "photoapp-d06de.appspot.com",
  messagingSenderId: "626847436809"
};

firebase.initializeApp(config)
Vue.prototype.db = firebase.database()

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
}
