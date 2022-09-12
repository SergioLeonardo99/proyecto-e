import { createApp } from 'vue'
import App from './App.vue'
import ventanaLogin from "./views/ventanaLogin.vue"
import ventanaRegistro from "./views/ventanaRegistro.vue"


import encuesta from "./views/encuesta.vue"

import formularioFinal from "./views/formularioFinal.vue"
import viewadmin from "./views/viewadmin.vue"
import acercaD from "./components/views/AcercaD.vue"
import inicioPrincipal from "./components/views/InicioPrincipal.vue"
import perfilEmpresa from "./components/views/PerfilDeEmpresa.vue"

import './assets/tailwind.css'
import 'tw-elements';
import { createRouter, createWebHistory } from 'vue-router';



const router = createRouter( {

  history: createWebHistory(),
  routes: [
    {path: '/', name: 'InicioPrincipal', component: inicioPrincipal},
    {path: '/about', name: 'AcercaDe', component: acercaD},
    {path: '/profile', name: 'PerfilEmpresa', component: perfilEmpresa},
    {path: '/ventanaL', name: 'ventanaLogin', component: ventanaLogin},
    {path: '/ventanaR', name: 'ventanaRegistro', component: ventanaRegistro},
    {path: '/ventanaE', name: 'encuesta', component: encuesta},
    {path: '/admin', name: 'viewadmin', component: viewadmin},
    {path: '/formulario', name: 'formularioFinal', component: formularioFinal},
  ]

})

const app = createApp(App)
app.use(router);
app.mount('#app');