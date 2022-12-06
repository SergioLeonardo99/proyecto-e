
<template>
    <link href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" rel=" stylesheet">
<!--Replace with your tailwind.css once created-->


<!--Regular Datatables CSS-->
<link href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css" rel="stylesheet">

  <navBar4></navBar4>
  <div v-if="dataUsers.length>0">
    <div class="flex flex-col justify-center h-full">
  <body class="bg-gray-100 text-gray-900 tracking-wider leading-normal">
    <div class="container w-full md:w-1/1 xl:w-4/20  mx-auto px-2">
      <header class="px-5 py-4 border-b border-gray-100">
        <div class="letra text-3xl  text-center letra leading-tight text-teal-700 ">Historial solicitudes empresa</div>
        <button @click="activarBusqueda()"
            class="flex space-x-1 items-center px-3 py-3  bg-teal-800 hover:bg-teal-500 rounded-full drop-shadow-md h-10  m-2 text-indigo-100 transition-colors duration-150  focus:shadow-outline ">
            <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"
              viewBox="0 0 30 30">
              <path
                d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
              </path>
            </svg>
            <span class="text-white text-xl font-bold">Buscar</span>
          </button>
      
    </header>

    <div id='recipients' class="p-10 mt-6 lg:mt-0 rounded shadow bg-white">
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
        <th>ID</th>
        <th>Completada</th>
        <th>Responsable</th>
        <th>Solicitud</th>
      </tr>
    </thead>
    <tbody>

      <!-- <tr v-for="user in dataUsers">
        <td>{{user.nit}}</td>
        <td>{{user.nombre}}</td>
        <td>{{user.fechaCreacion}}</td>
        <td>{{user.tipo}}</td>
        <td>{{user.estado}}</td>
        <td>{{user.encuesta}}</td>
        <td>
          <button @click.stop="user.view = !user.view">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>

          </button>

           Dropdown menu 
          <div v-show="user.view">
            <button v-if="user.tipo!='administrador'" @click="prueba(user.nit)">
              <span>Acceder</span>
            </button>

            <button v-if="user.tipo=='empresa'" @click="seguridadPrueba()">
              <span>Realizar encuesta</span>


            </button>
            <button @click="prueba(user.nit)">
              <span>Habilitar/Deshabilitar</span>
            </button>

          </div>

        </td> -->

      
    </tbody>

  </DataTable>
  <table v-if="buscar==false">
    <thead>
      <tr>
        <th>ID</th>
        <th>Completada</th>
        <th>Responsable</th>
        <th>Solicitud</th>
        <th>Aciones</th>
        
      </tr>
    </thead>
    <tbody>

     <tr v-for="user in dataUsers">
        <td>{{user.id}}</td>
        <td>{{user.completada}}</td>
        <td>{{user.admin}}</td>
        <td>{{user.solicitud}}</td>
        <td>
          
            <button @click="habilitarModal(user.id)">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
              </svg>
              <span>Visualizar</span>
            </button>
        </td> 
      </tr>

      
    </tbody>

  </table>
  <TransitionRoot as="template" :show="open" :key="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>


                  </div>
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">{{msgTitulo}}</DialogTitle>
                    <div class="letra">
                      <p class="text-sm text-gray-500">{{msgBody}}</p>

                    </div>
                    <div class="letra text-coolGray-800">
                      <p>Id: {{dataUser.id}}</p>
                      <p>Fecha de creación: {{dataUser.fechaCreacion}}</p>
                      <p>Fecha de solucion: {{dataUser.fechaSolucion}}</p>
                      <p>Nombre del encargado: {{dataUser.encargado}}</p>
                      <p>Telefono del encargado: {{dataUser.telefono}}</p>
                      <p>Tipo de solicitud: {{dataUser.tipo}}</p>
                      <p>Estado de la solicitud: {{dataUser.estado}}</p>
                      <p>Responsable: {{dataUser.admin}}</p>
                      <p>Solicitud: {{dataUser.solicitud}}</p>
                      <p>Explicación: {{dataUser.texto}}</p>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <p>{{msgProcess}}</p>
                <button type="button" v-if="openBut" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="procesarSolicitud()" >Responder solicitud</button>
                <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-teal-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" @click="open = false">Salir</button>
                
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>



        </table>
      </div>
    </div>

    </div>
  </body>

</div>
  
  

</div>


<div v-if="dataUsers.length<1">
  <h1>Sin solicitudes disponibles</h1>
</div>




  <!-- Dropdown toggle button -->



 
</template>
<script>

import navbarCompany from '@/components/navbars/navbarCompany.vue'
import VueCookies from 'vue-cookies'
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
    navBar4: navbarCompany,
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
      dataUser: new Object,
      cambio: false,
      colum: [{"data":"id"},{"data":"completada"},{"data":"admin"},{"data":"solicitud"}],
      open: false,
      nitEditar: 1234,
      buscar: false,
      msgTitulo:'helodar',
      msgBody: '',
      openBut: false,
      msgProcess: ''
      
    }
  },
  methods: {
    datosSolicitudes() {
      var idEstudiante = safe.decrypt($cookies.get(safe.cipher('nit'))).toString()
      this.dataUsers=[]
      db.collection("solicitudes").where("nit", "==", idEstudiante.toString())
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            var rellenarid=''
            rellenarid=doc.data().fechaCreacion+doc.data().nit
            rellenarid=rellenarid.split("/").join(''); 
            this.dataUsers.push({ 'id': rellenarid, 'completada': doc.data().completada, 'admin': doc.data().admin, 'solicitud': doc.data().solicitud, 'estado': doc.data().estado})

          });
        })
        .catch((error) => {
          //console.log("Error getting documents: ", error);
        });
        this.cambio=true
    },
    habilitarModal(id,estado) {
      this.cargarEmpresa(id)
      if(estado =='No'){
        this.msgTitulo="Panel gestión solicitud"
        this.msgBody="Contactese con el encargado de la solicitud para corroborar la informacion y agendar una cita..."
        this.openBut=true
      }else{
        this.msgTitulo="Panel de información solicitud aceptada"
        this.msgBody="Datos de la solicitud procesada..."
        this.openBut=false
      }
      this.open=true
      

    },

    procesarSolicitud() {
      let date = new Date().toLocaleDateString();
      var idAdmin =safe.decrypt($cookies.get(safe.cipher('admin')))
      var docRef = db.collection("solicitudes").doc(this.dataUser.id.toString());
      docRef.update({
            admin: idAdmin.toString(),
            completada: 'Si',
            fechaSolucion: date,

          })
            .then(() => {
              this.msgProcess='Solicitud gestionada con exito'
              
            })
            .catch((error) => {
              // The document probably doesn't exist.
              //console.error("Error updating document: ", error);
              this.msgProcess='Error al procesar la solicitud'
            });

    },

    cargarEmpresa(idSolicitud) {
    var docRef = db.collection("solicitudes").doc(idSolicitud);


    var getOptions = {
        //source: 'cache'
    };
    docRef.get(getOptions).then((doc) => {
      var rellenarid=''
      rellenarid=doc.data().fechaCreacion+doc.data().nit
      rellenarid=rellenarid.split("/").join(''); 
      this.dataUser={ 'id': rellenarid, 'fechaCreacion': doc.data().fechaCreacion,'fechaSolucion': doc.data().fechaSolucion,'encargado': doc.data().encargado,'telefono': doc.data().telefono, 'admin': doc.data().admin, 'solicitud': doc.data().solicitud, 'tipo': doc.data().tipo, 'estado': doc.data().completada,'texto': doc.data().texto}
      

        

    }).catch((error) => {
        //console.log("Error en la consulta")
    });
    },
    activarBusqueda() {
      this.buscar = !this.buscar

    },

    
    


  },


  mounted() {
    this.datosSolicitudes()
    


  }
}



</script>
<style>
  @import 'datatables.net-dt';
</style>