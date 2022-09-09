
//importar vistas, clases y librerias
import { createApp } from 'vue'
import App from './App.vue'
//import Vue from "vue";
//import VueRouter from 'vue-router'
import MenuResponsive from "./views/MenuResponsive.vue"
import ventanaLogin from "./views/ventanaLogin.vue"
import ventanaRegistro from "./views/ventanaRegistro.vue"

import encuesta from "./views/encuesta.vue"

import formularioFinal from "./views/formularioFinal.vue"
import viewadmin from "./views/viewadmin.vue"

import './assets/tailwind.css'
<<<<<<< HEAD
import 'tw-elements';
import InicioPrincipal from "./components/views/InicioPrincipal.vue"
import AcercaDVue from './components/views/AcercaD.vue';
//import NotFound from './components/views/NotFound.vue';
import PerfilDeEmpresaVue from "./components/views/PerfilDeEmpresa.vue";
import { createRouter, createWebHistory } from 'vue-router';
//import './tailwind.css'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        //llamar en el url la ruta de la vista
        { path: '/', name: 'InicioPrincipal', component: InicioPrincipal}, //componente de inicio
        { path: '/about', name: 'AcercaD', component: AcercaDVue }, //componente de acerca de
        { path: '/profile', name: 'PerfilDeEmpresa', component: PerfilDeEmpresaVue }, //componente de perfil de empresa
    ]

})

//construccion del route para el llamado de las vistas desde el app.vue
const app = createApp(App)
app.use(router);
app.mount('#app');
=======
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
>>>>>>> c52b4c536956508751fd93558ecdf28636e5d14a
