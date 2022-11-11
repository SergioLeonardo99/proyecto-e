import { createApp } from 'vue'
//estilos
//import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";


import App from './App.vue'
import login from "./modules/guest/login.vue"
import register from "./modules/guest/register.vue"
import form from "./modules/company/form.vue"
import dashboard from "./modules/admin/dashboard.vue"
import about from "./modules/guest/about.vue"
import indexGuest from "./modules/guest/indexGuest.vue"
import profileCompany from "./modules/company/profileCompany.vue"
import editCompany from "./modules/company/editCompanyProfile.vue"
import generateCSV from "./modules/admin/generateCSV.vue"
import graphics from "./modules/company/graphics.vue"
import educative from "./modules/company/educative.vue"
import companyRequest from "./modules/company/requestCompany.vue"
import adminRequest from "./modules/admin/requestAdmin.vue"
import viewCompanies from "./modules/student/viewCompanies.vue"
import profileStudent from "./modules/student/profileStudent.vue"
import requestStudent from "./modules/student/requestStudent.vue"
import editStudent from "./modules/student/editStudent.vue"
import findings from "./modules/company/findings.vue"
import helpGuest from "./modules/guest/helpGuest.vue"
import helpStudent from "./modules/student/helpStudent.vue"
import helpAdmin from "./modules/admin/helpAdmin.vue"
import helpCompany from "./modules/company/helpCompany.vue"
import requestHistory from "./modules/company/requestHistory.vue"
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



const router = createRouter({

  history: createWebHistory(),
  routes: [
    {path: '/', name: 'indexGuest', component: indexGuest},
    {path: '/about', name: 'about', component: about},
    {path: '/profileCompany', name: 'profileCompany', component: profileCompany},
    {path: '/login', name: 'login', component: login},
    {path: '/register', name: 'register', component: register},
    {path: '/dashboard', name: 'dashboard', component: dashboard},
    {path: '/form', name: 'form', component: form},
    {path: '/graphics', name: 'graphics', component: graphics},
    {path: '/editCompany', name: 'editCompany', component: editCompany},
    {path: '/generateCSV', name: 'generateCSV', component: generateCSV},
    {path: '/educative', name: 'educative', component: educative},
    {path: '/companyRequest', name:'companyRequest', component:companyRequest},
    {path: '/adminRequest', name:'adminRequest', component:adminRequest},
    {path: '/viewCompanies', name:'viewCompanies', component:viewCompanies},
    {path: '/profileStudent', name: 'profileStudent', component: profileStudent},
    {path: '/requestStudent', name: 'requestStudent', component: requestStudent},
    {path: '/editStudent', name: 'editStudent', component: editStudent},
    {path: '/findings', name:'findings', component:findings},
    {path: '/helpGuest', name: 'helpGuest', component: helpGuest },
    {path: '/helpAdmin', name: 'helpAdmin', component: helpAdmin },
    {path: '/helpCompany', name: 'helpCompany', component: helpCompany },
    {path: '/helpStudent', name: 'helpStudent', component: helpStudent },
    {path: '/requestHistory', name: 'requestHistory', component: requestHistory },
  ]

})

const app = createApp(App)
app.use(router);
app.use(VueChartkick);
app.use(PrimeVue);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount('#app');