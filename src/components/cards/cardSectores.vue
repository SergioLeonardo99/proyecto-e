<template>

<link href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" rel=" stylesheet">
<!--Replace with your tailwind.css once created-->


<!--Regular Datatables CSS-->
<link href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css" rel="stylesheet">
<!--Responsive Extension Datatables CSS-->
<link href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.dataTables.min.css" rel="stylesheet">
<div class="flex flex-col justify-center h-full">

  <body class="bg-gray-100 text-gray-900 tracking-wider leading-normal">


    <!--Container-->
    <div class="container w-full md:w-1/1 xl:w-4/20  mx-auto px-2">

        <!--Title-->
        <header class="px-5 py-4 border-b border-gray-100">
          <div class="letra text-3xl  text-center letra leading-tight text-teal-700 ">Lista de Usuarios</div>
          <button 
          class="flex space-x-1 items-center px-3 py-3  bg-teal-800 hover:bg-teal-500 rounded-full drop-shadow-md h-10  m-2 text-indigo-100 transition-colors duration-150  focus:shadow-outline ">
          <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"
              viewBox="0 0 30 30">
              <path
                  d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
              </path>
          </svg>
          <input  type="checkbox" id="checkbox" v-model="buscar" />
          <span class="text-white text-xl font-bold">Buscar</span>
      </button>
        
      </header>
        


        <!--Card-->
        <div id='recipients' class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
          <div class="overflow-x-auto p-3">
            <table id="customers" class="stripe hover" style="width:100%; padding-top: 1em;  padding-bottom: 1em;">
              <DataTable v-if="buscar==true" :data="dataUsers" :columns="colum" :key="cambio" id="tablaUsuarios" class="table table-striped"
              :options="{
          aLengthMenu: [[10,25,-1],[10,25,'All']],
          iDisplayLength: 10,
          language:{
              lengthMenu:'Mostrar _MENU_ registros por página',
              search: 'Buscar',
              zeroRecords: 'Ningún Registro Encontrado',
              info: 'Página _PAGE_ de _PAGES_',
              infoEmpty: 'Ningún Registro Disponible',
              infoFiltered: '(Filtrado de _MAX_ registro(s) totales)',
              paginate: {
                  first: 'Primero',
                  last: 'Último',
                  next: 'Siguiente',
                  previous: 'Anterior'
              },
              
          }}">
          <thead>
            <tr>
              <th >NIT</th>
           
              <th>Usuario</th>
              <th>Fecha de Creación</th>
              <th>Tipo</th>
              <th>Encuesta</th>
              <th>Estado</th>
              
              
            </tr>
          </thead>
     

        </DataTable>
        <table v-if="buscar==false">
          <thead>
            <tr>
              <th>NIT</th>
              <th>Usuario</th>
              <th>Fecha de Creación</th>
              <th>Tipo</th>
              <th>Estado</th>
              <th>Encuesta</th>
              <th>Aciones</th>
              
            </tr>
          </thead>
          <tbody>

          <tr v-for="user in dataUsers">
              <td>{{user.nit}}</td>
              <td>{{user.nombre}}</td>
              <td>{{user.fechaCreacion}}</td>
              <td>{{user.tipo}}</td>
              <td>{{user.estado}}</td>
              <td>{{user.encuesta}}</td>
              <td>
                <button @click.stop="user.view = !user.view">
                 
                   <button
                    type="button"
                    class="inline-block text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      class="inline-block h-6 w-6 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                      />
                    </svg>
                  </button>


                </button>
             

                Opciones
                <div v-show="user.view">
                  <tr>
                
                  <button  v-if="user.tipo!='administrador'" @click="accederUsuario(user.nit, user.tipo)" 
                  class="flex space-x-2 items-center px-4 py-2 bg-green-600 hover:bg-amber-600 rounded-full drop-shadow-md">
                  <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"
                      viewBox="0 0 50 50">
                      <path
                          d="M 46.574219 3.425781 C 45.625 2.476563 44.378906 2 43.132813 2 C 41.886719 2 40.640625 2.476563 39.691406 3.425781 C 39.691406 3.425781 39.621094 3.492188 39.53125 3.585938 C 39.523438 3.59375 39.511719 3.597656 39.503906 3.605469 L 4.300781 38.804688 C 4.179688 38.929688 4.089844 39.082031 4.042969 39.253906 L 2.035156 46.742188 C 1.941406 47.085938 2.039063 47.453125 2.292969 47.707031 C 2.484375 47.898438 2.738281 48 3 48 C 3.085938 48 3.171875 47.988281 3.257813 47.964844 L 10.746094 45.957031 C 10.917969 45.910156 11.070313 45.820313 11.195313 45.695313 L 46.394531 10.5 C 46.40625 10.488281 46.410156 10.472656 46.417969 10.460938 C 46.507813 10.371094 46.570313 10.308594 46.570313 10.308594 C 48.476563 8.40625 48.476563 5.324219 46.574219 3.425781 Z M 45.160156 4.839844 C 46.277344 5.957031 46.277344 7.777344 45.160156 8.894531 C 44.828125 9.222656 44.546875 9.507813 44.304688 9.75 L 40.25 5.695313 C 40.710938 5.234375 41.105469 4.839844 41.105469 4.839844 C 41.644531 4.296875 42.367188 4 43.132813 4 C 43.898438 4 44.617188 4.300781 45.160156 4.839844 Z M 5.605469 41.152344 L 8.847656 44.394531 L 4.414063 45.585938 Z">
                      </path>
                  </svg>
                  <span class="text-white text-md">Acceder</span>
              </button>
                </tr>
                <br>
            
                <tr>
              
                  <button v-if="user.tipo=='empresa'" @click="entrarEncuesta(user.nit)"
                  class="flex space-x-2 items-center px-4 py-2 text-purple-100 transition-colors duration-150 bg-purple-600 rounded-full drop-shadow-md hover:bg-purple-700">
                  <svg class="h-8 w-8 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                  </svg>
                  
                  <span class="text-white text-md">Encuesta</span>
              
          
            
           
        </button>
                </tr>
                <br>
                <tr>
                  <button  @click="cambiarEstado(user.nit,user.estado)"
                  class="flex space-x-2 items-center px-4 py-2 text-purple-100 transition-colors duration-150 bg-gray-700 rounded-full drop-shadow-md ">
                
                  <svg class="h-8 w-8 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/>
                  </svg>
                  
                  
                  
                    <div v-if="user.estado=='Inactivo'">
                    
                      <span>Habilitar</span>
                      

                    </div>

                    <div v-if="user.estado=='Activo'">
                    
                      <span>Deshabilitar</span>

                    </div>

                    
                    

                    
                    

                  </button>
                </tr>

                

                </div>
                

              </td> 
            </tr>

            
          </tbody>

        </table>
      </table>

          </div>


     



        </div>
        <!--/Card-->


    </div>
    <!--/container-->





  

</body>
</div>


  </template>
  <script>
import VueCookies from 'vue-cookies'
import navAdmin from "@/components/views/elementos/navbar3.vue";
import firebase from "../../components/firebase/initFirebase";
import Seguridad from "../../components/js/encrypt.js";
import DataTable from 'datatables.net-vue3';
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'




import "firebase/firestore";


const db = firebase.firestore();
const safe = new Seguridad();






export default {
  components: {
    navAdmin,
    DataTable,
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot



  },
  data() {
    return {
      dataUsers: [],
      show: false,
      controlData: [],
      cambio: false,
      colum: [{"data":"nit"},{"data":"nombre"},{"data":"fechaCreacion"},{"data":"tipo"},{"data":"encuesta"},{"data":"estado"}],
      open: false,
      nitEditar: 1234,
      buscar: false,
    }
  },
  methods: {
    datosUsuarios() {
      this.dataUsers=[]
      db.collection("usuario")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.dataUsers.push({ 'nit': doc.data().nit, 'nombre': doc.data().nombre, 'fechaCreacion': doc.data().fechaCreacion, 'tipo': doc.data().tipo, 'encuesta': doc.data().encuesta, 'estado': doc.data().estado , 'view':false, 'pruebita':' <button @click="prueba(1234)"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg></button>'})


          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
        this.cambio=true
    },
    habilitarModal(nit) {
      this.nitEditar=nit
      this.open=true

    },
    entrarEncuesta(nit){

      VueCookies.set(safe.cipher('nit'), safe.cipher(nit.toString()), "1h")
      this.$router.push('/formulario');
    },
    accederUsuario(nit, tipo){
      if(tipo == 'empresa'){
            VueCookies.set(safe.cipher('nit'), safe.cipher(nit.toString()), "1h")
            this.$router.push('/profile');

          }if(tipo == 'estudiante'){
            VueCookies.set(safe.cipher('estudiante'), safe.cipher(this.nit.toString()), "1h")
            this.$router.push('/');

          }

      

    },
    cambiarEstado(nit, estado){
      if(estado=='Activo'){
        estado='Inactivo'

      }else{
        estado='Activo'
      }
      var docRef = db.collection("usuario").doc(nit.toString());
          var getOptions = {
            //source: 'cache'
          };
          docRef.update({
            estado: estado,
          })
            .then(() => {
              console.log("Document successfully updated!");
              this.datosUsuarios()
              
            })
            .catch((error) => {
              // The document probably doesn't exist.
              console.error("Error updating document: ", error);
            });
    
      
         
    },
    realizarEncuesta(nit){

    }


  },


  mounted() {
    this.datosUsuarios()
    


  }
}



</script>
<style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
</style>

  <style>
  .letra {
    font-family: sans-serif;
}
</style>
<style>
  @import 'datatables.net-dt';
  .dataTables_wrapper select,
		.dataTables_wrapper .dataTables_filter input {
			color: #4a5568;
			/*text-gray-700*/
			padding-left: 1rem;
			/*pl-4*/
			padding-right: 1rem;
			/*pl-4*/
			padding-top: .5rem;
			/*pl-2*/
			padding-bottom: .5rem;
			/*pl-2*/
			line-height: 1.25;
			/*leading-tight*/
			border-width: 2px;
			/*border-2*/
			border-radius: .25rem;
			border-color: #edf2f7;
			/*border-gray-200*/
			background-color: #edf2f7;
			/*bg-gray-200*/
		}

		/*Row Hover*/
		table.dataTable.hover tbody tr:hover,
		table.dataTable.display tbody tr:hover {
			background-color: #006cf0;
			/*bg-indigo-100*/
		}

		/*Pagination Buttons*/
		.dataTables_wrapper .dataTables_paginate .paginate_button {
			font-weight: 700;
			/*font-bold*/
			border-radius: .25rem;
			/*rounded*/
			border: 1px solid transparent;
			/*border border-transparent*/
		}

		/*Pagination Buttons - Current selected */
		.dataTables_wrapper .dataTables_paginate .paginate_button.current {
			color: #fff !important;
			/*text-white*/
			box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
			/*shadow*/
			font-weight: 700;
			/*font-bold*/
			border-radius: .25rem;
			/*rounded*/
			background: #667eea !important;
			/*bg-indigo-500*/
			border: 1px solid transparent;
			/*border border-transparent*/
		}

		/*Pagination Buttons - Hover */
		.dataTables_wrapper .dataTables_paginate .paginate_button:hover {
			color: #fff !important;
			/*text-white*/
			box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
			/*shadow*/
			font-weight: 700;
			/*font-bold*/
			border-radius: .25rem;
			/*rounded*/
			background: #667eea !important;
			/*bg-indigo-500*/
			border: 1px solid transparent;
			/*border border-transparent*/
		}

		/*Add padding to bottom border */
		table.dataTable.no-footer {
			border-bottom: 1px solid #e2e8f0;
			/*border-b-1 border-gray-300*/
			margin-top: 0.75em;
			margin-bottom: 0.75em;
		}

		/*Change colour of responsive icon*/
		table.dataTable.dtr-inline.collapsed>tbody>tr>td:first-child:before,
		table.dataTable.dtr-inline.collapsed>tbody>tr>th:first-child:before {
			background-color: #667eea !important;
			/*bg-indigo-500*/
		}
</style>