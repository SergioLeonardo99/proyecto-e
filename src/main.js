
//importar vistas, clases y librerias
import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
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
