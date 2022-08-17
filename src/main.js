import { createApp } from 'vue'
import App from './App.vue'
//import Vue from "vue";
//import VueRouter from 'vue-router'
import MenuResponsive from "./views/MenuResponsive.vue"
import ventanaLogin from "./views/ventanaLogin.vue"
import './assets/tailwind.css'
import { createRouter, createWebHistory } from 'vue-router';
//import Vue from 'vue'
    
//Vue.use(VueRouter)


//import router from './router'

//createApp(App).mount('#app')

//Vue.config.productionTip = false
/*
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: MenuResponsive
  },

  {
    path: "/ventana",
    name: "modulologin",
    component: ventanaLogin
  }
 
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;

const app = createApp(App)
app.use(router);
app.mount('#app');

/*
new Vue({
  router,
  render: h => h(App)
})
*/

const router = createRouter( {

  history: createWebHistory(),
  routes: [
    {path: '/', name: 'MenuResponsive', component: MenuResponsive},
    {path: '/ventana', name: 'ventanaLogin', component: ventanaLogin}


  ]

})

const app = createApp(App)
app.use(router);
app.mount('#app');