import { createApp } from 'vue'
//estilos
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";


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
import listaUsuarios from "./components/views/listaUsuarios.vue"
import graficos from "./views/graficos.vue"
import modEducativo from "./components/views/ModuloEd.vue"
import solicitudes from "./components/views/solicitudes.vue"
import './assets/tailwind.css'
import 'tw-elements';
import { createRouter, createWebHistory } from 'vue-router';
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'
import PrimeVue from 'primevue/config';


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
    {path: '/educativo', name: 'modEducativo', component: modEducativo},
    {path: '/listausuarios', name: 'listaUsuarios', component: listaUsuarios},
    {path: '/solicitudes', name:'solicitudes', component:solicitudes}
  ]

})

const app = createApp(App)
app.use(router);
app.use(VueChartkick);
app.use(PrimeVue);

app.mount('#app');