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
import editarPerfilEmpresa from "./components/views/editarPerfilDeEmpresa.vue"
import generarCSV from "./components/views/generarCSV.vue"
import graficos from "./views/graficos.vue"

import './assets/tailwind.css'
import 'tw-elements';
import { createRouter, createWebHistory } from 'vue-router';
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'


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
    {path: '/graficos', name: 'graficos', component: graficos},
    {path: '/editprofile', name: 'editarPerfilEmpresa', component: editarPerfilEmpresa},
    {path: '/generarcsv', name: 'generarCSV', component: generarCSV},
  ]

})

const app = createApp(App)
app.use(router);
app.use(VueChartkick);
app.mount('#app');