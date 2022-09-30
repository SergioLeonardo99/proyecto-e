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
import listaUsuarios from "./components/views/listaUsuarios.vue"
import graficos from "./views/graficos.vue"
import solicitudes from "./components/views/solicitudes.vue"
import './assets/tailwind.css'
import 'tw-elements';
import { createRouter, createWebHistory } from 'vue-router';
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'
import PrimeVue from 'primevue/config';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();



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
    {path: '/listausuarios', name: 'listaUsuarios', component: listaUsuarios},
    {path: '/solicitudes', name:'solicitudes', component:solicitudes}

  ]

})

const app = createApp(App)
app.use(router);
app.use(VueChartkick);
app.use(PrimeVue);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount('#app');