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
          <button @click="abrirModal()"
            class="flex space-x-1 items-center px-3 py-3  bg-teal-800 hover:bg-teal-500 rounded-full drop-shadow-md h-10  m-2 text-indigo-100 transition-colors duration-150  focus:shadow-outline ">
            <svg class="h-6 w-6 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
            </svg>
            <span class="text-white text-xl font-bold">Crear Usuario</span>
          </button>

        </header>




        <!--Card-->
        <div id='recipients' class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
          <div class="overflow-x-auto p-3">
            <table id="customers" class="stripe hover" style="width:100%; padding-top: 1em;  padding-bottom: 1em;">
              <DataTable v-if="buscar==true" :data="dataUsers" :columns="colum" :key="cambio" id="tablaUsuarios"
                class="table table-striped" :options="{
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
                    <th> Aciones </th>

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



                      <div class="col-lg-4 col-md-4 flex-container">

                        <button v-if="user.tipo!='administrador'" @click="accederUsuario(user.nit, user.tipo)">
                          <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>




                        </button>

                        <button v-if="user.tipo=='empresa'" @click="entrarEncuesta(user.nit)">
                          <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                          </svg>






                        </button>


                        <button @click="cambiarEstado(user.nit,user.estado)">
                          <div>

                          </div>
                          <div v-if="user.estado=='Inactivo'">
                            <svg class="h-6 w-6 text-green-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                            </svg>

                          </div>
                          <div v-if="user.estado=='Activo'">
                            <svg class="h-6 w-6 text-green-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"/>
                            </svg>

                          </div>

                        </button>


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

  <TransitionRoot as="template" :show="open" :key="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
        leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div
                    class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>

                  </div>
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Registro Usuarios
                    </DialogTitle>
                    <div class="mt-2">
                      <label class="block letra text-gray-700">Tipo de usuario: </label>
                      <select v-model="tipoUsuario"
                        class=" h-14 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none">
                        <option disabled value="">Seleccione el tipo de usuario</option>
                        <option>Administrador</option>
                        <option>Empresa</option>
                        <option>Estudiante</option>
                      </select>

                    </div>
                    <div class="mt-2">
                      <form class="mt-6">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                          <div v-if="tipoUsuario=='Empresa'"
                            class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingOne">
                              <button class="accordion-button
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              bg-white
              border-0
              rounded-none
              transition
              focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                aria-expanded="false" aria-controls="flush-collapseOne">
                                Información de la empresa
                              </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show"
                              aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                              <div class="accordion-body py-4 px-5">
                                <div>
                                  <label class="block letra text-gray-700">Nombre de la empresa: </label>
                                  <input type="text" v-model="nombre" placeholder="nombre"
                                    class="h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500 focus:bg-white focus:outline-none"
                                    autofocus autocomplete required>
                                </div>

                                <div>

                                  <label class="block letra text-gray-700">Nit de la empresa: </label>
                                  <input type="number" v-model="nit" placeholder="Nit de la empresa"
                                    class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500 focus:bg-white focus:outline-none"
                                    autofocus autocomplete required>
                                </div>

                                <div>
                                  <label class="block letra text-gray-700">Dirección: </label>
                                  <input type="text" v-model="direccion" placeholder="Dirección de la empresa"
                                    class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500 focus:bg-white focus:outline-none"
                                    autofocus autocomplete required>
                                </div>

                                <div>
                                  <label class="block letra text-gray-700">Sector de la empresa: </label>
                                  <select v-model="sector"
                                    class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none">
                                    <option disabled value="">Seleccione el sector de su empresa</option>
                                    <option>Ganadería</option>
                                    <option>Minería de carbón</option>
                                    <option>Comercio</option>
                                    <option>Arcillas</option>
                                    <option>Gravas</option>
                                    <option>Cuero y/o calzado</option>
                                    <option>Artefactos domésticos</option>
                                    <option>Equipo y Maquinaria eléctrica y electrónica</option>
                                    <option>Lácteos</option>
                                    <option>Convenio software y servicios asociados</option>
                                    <option>Servicios de salud</option>
                                    <option>Financiero</option>
                                    <option>Telecomunicaciones </option>
                                    <option>Servicios</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div v-if="tipoUsuario=='Empresa'"
                            class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingTwo">
                              <button class="accordion-button
              collapsed
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              bg-white
              border-0
              rounded-none
              transition
              focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                aria-expanded="false" aria-controls="flush-collapseTwo">
                                Información del representante de la empresa
                              </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse"
                              aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                              <div class="accordion-body py-4 px-5">
                                <div>
                                  <label class="block letra text-gray-700">Nombre del encargado: </label>
                                  <input type="text" v-model="encargado" placeholder="Nombre del encargado"
                                    class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                    autofocus autocomplete required>
                                </div>

                                <div>
                                  <label class="block letra text-gray-700">Cargo del encargado en la empresa: </label>
                                  <input type="text" v-model="cargo" placeholder="Cargo del encargado"
                                    class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                    autofocus autocomplete required>
                                </div>

                                <div>
                                  <label class="block letra text-gray-700">Correo electrónico: </label>
                                  <input type="text" v-model="email" placeholder="Correo electrónico"
                                    class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                    autofocus autocomplete required>
                                </div>


                                <div>
                                  <label class="block letra text-gray-700">Número de celular o teléfono: </label>
                                  <input type="number" v-model="telefono" placeholder="Teléfono"
                                    class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500 focus:bg-white focus:outline-none"
                                    autofocus autocomplete required>
                                </div>

                              </div>
                            </div>
                          </div>
                          <div v-if="tipoUsuario!='Empresa' && tipoUsuario != ''"
                            class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingOne">
                              <button class="accordion-button
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              bg-white
              border-0
              rounded-none
              transition
              focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                aria-expanded="false" aria-controls="flush-collapseOne">
                                Información del {{tipoUsuario}}
                              </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show"
                              aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                              <div class="accordion-body py-4 px-5">
                                <div>
                                  <label class="block letra text-gray-700">Nombre del {{tipoUsuario}}: </label>
                                  <input type="text" v-model="nombre" placeholder="nombre"
                                    class="h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500 focus:bg-white focus:outline-none"
                                    autofocus autocomplete required>
                                </div>

                                <div>

                                  <label class="block letra text-gray-700">C.C del {{tipoUsuario}} : </label>
                                  <input type="number" v-model="nit" placeholder="C.C"
                                    class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500 focus:bg-white focus:outline-none"
                                    autofocus autocomplete required>
                                </div>

                                <div>
                                  <label class="block letra text-gray-700">Correo electrónico del {{tipoUsuario}}:
                                  </label>
                                  <input type="text" v-model="email" placeholder="correo"
                                    class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500 focus:bg-white focus:outline-none"
                                    autofocus autocomplete required>
                                </div>

                              </div>
                            </div>
                          </div>
                          <div
                            class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingThree">
                              <button class="accordion-button
              collapsed
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              bg-white
              border-0
              rounded-none
              transition
              focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                aria-expanded="false" aria-controls="flush-collapseThree">
                                Credenciales
                              </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse"
                              aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                              <div class="accordion-body py-4 px-5">
                                <div class="mt-4">
                                  <label class="block letra text-gray-700">Contraseña: </label>
                                  <input type="password" v-model="contraseña" placeholder="Contraseña" minlength="6"
                                    class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500
                          focus:bg-white focus:outline-none" required>
                                </div>

                                <div class="mt-4">
                                  <label class="block letra text-gray-700">Confirmar Contraseña: </label>

                                  <input type="password" v-model="contraseñaConfirmar"
                                    placeholder="Confirmar contraseña" minlength="6" class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500
                          focus:bg-white focus:outline-none" required>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>





                        <button type="button" @click="registrarUsuario()" class=" letra w-full block bg-teal-700 hover:bg-teal-500 focus:bg-teal-500 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Registrar</button>
                        <p>{{ mensaje }}</p>

                      </form>

                    </div>

                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <p>{{msgProcess}}</p>
                <button type="button"
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="open = false">Salir</button>

              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>




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
      colum: [{ "data": "nit" }, { "data": "nombre" }, { "data": "fechaCreacion" }, { "data": "tipo" }, { "data": "encuesta" }, { "data": "estado" }],
      open: false,
      nitEditar: 1234,
      buscar: false,
      tipoUsuario: '',
      nombre: '',
      nit: 0,
      direccion: '',
      telefono: 0,
      contraseña: '',
      contraseñaConfirmar: '',
      mensaje: '',
      email: '',
      encargado: '',
      cargo: '',
      sector: ''
    }
  },
  methods: {
    datosUsuarios() {
      this.dataUsers = []
      db.collection("usuario")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if((doc.data().encuesta=='No') || (doc.data().encuesta=='Si' ) ){
              this.dataUsers.push({ 'nit': doc.data().nit, 'nombre': doc.data().nombre, 'fechaCreacion': doc.data().fechaCreacion, 'tipo': doc.data().tipo, 'encuesta': doc.data().encuesta, 'estado': doc.data().estado})
              
            }else{
              this.dataUsers.push({ 'nit': doc.data().nit, 'nombre': doc.data().nombre, 'fechaCreacion': doc.data().fechaCreacion, 'tipo': doc.data().tipo, 'encuesta': 'N/A', 'estado': doc.data().estado})
            }
            


          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
      this.cambio = true
    },
    habilitarModal(nit) {
      this.nitEditar = nit
      this.open = true

    },
    entrarEncuesta(nit) {

      VueCookies.set(safe.cipher('nit'), safe.cipher(nit.toString()), "1h")
      this.$router.push('/formulario');
    },
    accederUsuario(nit, tipo) {
      if (tipo == 'empresa') {
        VueCookies.set(safe.cipher('nit'), safe.cipher(nit.toString()), "1h")
        this.$router.push('/profile');

      } if (tipo == 'estudiante') {
        VueCookies.set(safe.cipher('estudiante'), safe.cipher(nit.toString()), "1h")
        this.$router.push('/perfilestudiante');

      }



    },




    cambiarEstado(nit, estado) {
      if (estado == 'Activo') {
        estado = 'Inactivo'

      } else {
        estado = 'Activo'
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
    activarBusqueda() {
      this.buscar = !this.buscar

    },

    registrarUsuario() {
      if (this.tipoUsuario == '') {
        this.mensaje = 'Debe seleccionar un tipo de usuario...'
      } else {
        if (this.tipoUsuario == 'Empresa') {
          if (this.nombre != '' && this.nit != 0 && this.direccion != '' && this.telefono != 0 && this.contraseña != '' && this.contraseñaConfirmar != '' && this.email != '' && this.encargado != '' && this.cargo != '' && this.sector != '') {
            if (this.contraseña == this.contraseñaConfirmar) {
              var docRef = db.collection("usuario").doc(this.nit.toString());
              var getOptions = {
                //source: 'cache'
              };
              docRef.get(getOptions).then((doc) => {
                // Document was found in the cache. If no cached document exists,
                // an error will be returned to the 'catch' block below.

                if (doc.data().nit == this.nit.toString()) {
                  this.mensaje = "Nit ya registrado..."
                }
              }).catch((error) => {
                let date = new Date().toLocaleDateString();
                var forge = require('node-forge');
                var input_str = this.contraseña;
                var md = forge.md.sha256.create();
                md.update(input_str);
                db.collection("usuario").doc(this.nit.toString()).set({
                  nombre: this.nombre,
                  nit: this.nit,
                  direccion: this.direccion,
                  telefono: this.telefono,
                  email: this.email,
                  encargado: this.encargado,
                  cargo: this.cargo,
                  contraseña: md.digest().toHex(),
                  tipo: "empresa",
                  fechaCreacion: date,
                  estado: 'Activo',
                  sector: this.sector,
                  encuesta: 'No'
                })
                  .then(() => {
                    this.mensaje = "Empresa registrada con exito"
                  })
                  .catch((error) => {
                    console.error("Error writing document: ", error);
                    this.mensaje = "No se pudo completar el registro, intente nuevamente"
                  });

              });
            } else {
              this.mensaje = "Las contraseñas no coinciden..."
            }
          } else {
            this.mensaje = "Tiene que rellenar todos los campos..."
          }

        } else {
          if (this.tipoUsuario == 'Administrador') {
            if(this.nombre!=''&& this.nit != 0 &&this.contraseña !=''&&this.contraseñaConfirmar != ''&&this.email !=''){
        if(this.contraseña==this.contraseñaConfirmar){
          var docRef = db.collection("usuario").doc(this.nit.toString());
          
          var getOptions = {
            //source: 'cache'
          };
          docRef.get(getOptions).then((doc) => {
            // Document was found in the cache. If no cached document exists,
            // an error will be returned to the 'catch' block below.

            if (doc.data().nit == this.nit.toString()) {
              this.mensaje = "C.C ya registrado..."
            }
          }).catch((error) => {
            let date = new Date().toLocaleDateString();
            var forge = require('node-forge');
            var input_str = this.contraseña;
            var md = forge.md.sha256.create();
            md.update(input_str);
            db.collection("usuario").doc(this.nit.toString()).set({
              nombre: this.nombre,
              nit: this.nit,
              email: this.email,
              contraseña: md.digest().toHex(),
              tipo: "administrador",
              fechaCreacion: date,
              estado: 'Activo',
            })
              .then(() => {
                this.mensaje = "Administrador registrado con exito"
              })
              .catch((error) => {
                console.error("Error writing document: ", error);
                this.mensaje = "No se pudo completar el registro, intente nuevamente"
              });
            
          });
        }else{
          this.mensaje = "Las contraseñas no coinciden..."
        }
      }else{
        this.mensaje = "Tiene que rellenar todos los campos..."
      }

          } else {
            if (this.tipoUsuario == 'Estudiante') {
              if(this.nombre!=''&& this.nit != 0 &&this.contraseña !=''&&this.contraseñaConfirmar != ''&&this.email !=''){
        if(this.contraseña==this.contraseñaConfirmar){
          var docRef = db.collection("usuario").doc(this.nit.toString());
          
          var getOptions = {
            //source: 'cache'
          };
          docRef.get(getOptions).then((doc) => {
            // Document was found in the cache. If no cached document exists,
            // an error will be returned to the 'catch' block below.

            if (doc.data().nit == this.nit.toString()) {
              this.mensaje = "C.C ya registrado..."
            }
          }).catch((error) => {
            let date = new Date().toLocaleDateString();
            var forge = require('node-forge');
            var input_str = this.contraseña;
            var md = forge.md.sha256.create();
            md.update(input_str);
            db.collection("usuario").doc(this.nit.toString()).set({
              nombre: this.nombre,
              nit: this.nit,
              email: this.email,
              contraseña: md.digest().toHex(),
              tipo: "estudiante",
              fechaCreacion: date,
              estado: 'Activo',
            })
              .then(() => {
                this.mensaje = "Estudiante registrado con exito"
              })
              .catch((error) => {
                console.error("Error writing document: ", error);
                this.mensaje = "No se pudo completar el registro, intente nuevamente"
              });
            
          });
        }else{
          this.mensaje = "Las contraseñas no coinciden..."
        }
      }else{
        this.mensaje = "Tiene que rellenar todos los campos..."
      }
              

            }
          }
        }
      }
      this.datosUsuarios()

    },
    abrirModal() {
      this.open = true

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

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #00695C;
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
  #customers .dataTables_wrapper select,
	#customers 	.dataTables_wrapper .dataTables_filter input {
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
    #customers 	table.dataTable.hover tbody tr:hover,
		#customers table.dataTable.display tbody tr:hover {
			background-color: #23af9c;
			/*bg-indigo-100*/
		}

		/*Pagination Buttons*/
		#customers .dataTables_wrapper .dataTables_paginate .paginate_button {
			font-weight: 700;
			/*font-bold*/
			border-radius: .25rem;
			/*rounded*/
			border: 1px solid transparent;
			/*border border-transparent*/
		}

		/*Pagination Buttons - Current selected */
		#customers .dataTables_wrapper .dataTables_paginate .paginate_button.current {
			color: #fff !important;
			/*text-white*/
			box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
			/*shadow*/
			font-weight: 700;
			/*font-bold*/
			border-radius: .25rem;
			/*rounded*/
			background: #00695C !important;
			/*bg-indigo-500*/
			border: 1px solid transparent;
			/*border border-transparent*/
		}

		/*Pagination Buttons - Hover */
    #customers 	.dataTables_wrapper .dataTables_paginate .paginate_button:hover {
			color: #fff !important;
			/*text-white*/
			box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
			/*shadow*/
			font-weight: 700;
			/*font-bold*/
			border-radius: .25rem;
			/*rounded*/
			background: #00695C !important;
			/*bg-indigo-500*/
			border: 1px solid transparent;
			/*border border-transparent*/
		}

		/*Add padding to bottom border */
    #customers 	table.dataTable.no-footer {
			border-bottom: 1px solid #e2e8f0;
			/*border-b-1 border-gray-300*/
			margin-top: 0.75em;
			margin-bottom: 0.75em;
		}

		/*Change colour of responsive icon*/
		#customers table.dataTable.dtr-inline.collapsed>tbody>tr>td:first-child:before,
		#customers table.dataTable.dtr-inline.collapsed>tbody>tr>th:first-child:before {
			background-color: #539c90 !important;
			/*bg-indigo-500*/
		}
</style>