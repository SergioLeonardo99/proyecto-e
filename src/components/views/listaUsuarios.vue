
<template>
  
  <navAdmin></navAdmin>
  <DataTable :data="dataUsers" :columns="colum" :key="cambio" id="tablaUsuarios" class="table table-striped"
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
        <th>NIT</th>
        <th>Usuario</th>
        <th>Fecha de Creación</th>
        <th>Tipo</th>
        <th>Estado</th>
        <th>Encuesta</th>
        <th>Prueba</th>
        
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
  <TransitionRoot as="template" :show="open">
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
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                  </div>
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Mas opciones para administrar Cuenta</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">Recuerde que estas opciones modifican directamente los datos del administrador</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" @click="open = false">Entrar al usuario</button>
                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="open = false" ref="cancelButtonRef">Cancel</button>
                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="open = false" ref="cancelButtonRef">Cancel</button>
                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="open = false" ref="cancelButtonRef">Regresar</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>




  <!-- Dropdown toggle button -->




</template>
<script>
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
      colum: [{"data":"nit"},{"data":"nombre"},{"data":"fechaCreacion"},{"data":"tipo"},{"data":"encuesta"},{"data":"estado"},{"data":"pruebita"}],
      open: false,
      nitEditar: 1234,
    }
  },
  methods: {
    seguridadPrueba(){
    },
    datosUsuarios() {
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
    accederUsuario(nit){

    },
    cambiarEstado(nit, estado){

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
  @import 'datatables.net-dt';
</style>