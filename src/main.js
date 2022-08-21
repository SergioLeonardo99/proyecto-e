import { createApp } from 'vue'
import App from './App.vue'
import MenuResponsive from "./views/MenuResponsive.vue"
import ventanaLogin from "./views/ventanaLogin.vue"
import loginprueba from "./views/loginprueba.vue"
import registerprueba from "./views/registerprueba.vue"
import formularioprueba from "./views/formularioPrueba.vue"
import './assets/tailwind.css'
import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter( {

  history: createWebHistory(),
  routes: [
    {path: '/', name: 'MenuResponsive', component: MenuResponsive},
    {path: '/ventana', name: 'ventanaLogin', component: ventanaLogin},
    {path: '/loginprueba', name: 'loginPrueba', component: loginprueba},
    {path: '/registerprueba', name: 'registerPrueba', component: registerprueba},
    {path: '/formularioprueba', name: 'formularioPrueba', component: formularioprueba}


  ]

})

const app = createApp(App)
app.use(router);
app.mount('#app');