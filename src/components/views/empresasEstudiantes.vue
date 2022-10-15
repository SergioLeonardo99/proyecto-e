<template>
  <div>
    <navBar4></navBar4>
    <div class="flex flex-wrap justify-center space-x-10 space-y-12 " :key="cambio">
      <div class="flex justify-center" v-for="user in dataUsers"> 
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          :src="user.img" alt="" />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">{{user.nombre}}</h5>
            <p class="text-gray-700 text-base mb-4">
              {{user.about}}
            </p>
            <p class="text-gray-600 text-xs">{{user.fecha}}</p>
            <br />
            <button type="button" @click="habilitarModal(user.nombre,user.nit,'No')"
              class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              Aplicar</button>
          </div>
        </div>
      </div>


    </div>
  </div>
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
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Envio de solicitud de contacto</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">{{msgBody}}</p>

                    </div>
                    <div class="mt-2">
                      <label for="">Escriba el por que de su solicitud: </label>
                <textarea v-model="texto" class="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-slate-400 focus:outline-none
                                " id="exampleFormControlTextarea13" rows="3" placeholder="Escribe aquí por que desea realizar la solicitud de contacto"></textarea>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                
                <button type="button"  class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="habilitarModal(nombreEmpresa,nitEmpresa,'Si')" >Enviar solicitud</button>
                <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" @click="open = false">Salir</button>
                
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script>
import navBar4 from './elementos/navbar4.vue'
import firebase from "../../components/firebase/initFirebase";
import "firebase/firestore";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import Seguridad from "../js/encrypt.js";
const safe = new Seguridad();

const db = firebase.firestore();


export default {

  components: {

    navBar4,
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot


  },
  data() {
    return {
      dataUsers: [],
      cambio: false,
      textoSolicitud: '',
      open: false,
      msgBody: '',
      nombreEmpresa: '',
      nitEmpresa: '',
      texto: '',
      telefonoEstudiante: '',
      nombreEstudiante: '',
      idEstudiante: '',
    }
  },
  methods: {
    datosEmpresas() {
      this.dataUsers = []
      db.collection("usuario").where("tipo", "==", "empresa").where("estado", "==", "Activo").where("encuesta", "==", "Si")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.dataUsers.push({ 'nombre': doc.data().nombre, 'about': doc.data().about, 'fecha': doc.data().fechaCreacion, 'nit': doc.data().nit, 'img':doc.data().img})
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
        
      
        
      
      
    },
    extraerDatoEstudiante(){
      var nitEstudiante =safe.decrypt($cookies.get(safe.cipher('estudiante')))
      var docRef = db.collection("usuario").doc(nitEstudiante.toString());


    var getOptions = {
        //source: 'cache'
    };
    docRef.get(getOptions).then((doc) => {
        
        this.nombreEstudiante=doc.data().nombre
        this.telefonoEstudiante=doc.data().telefono
        this.idEstudiante=nitEstudiante.toString()
        

          
    }).catch((error) => {
        console.log("Error en la consulta")
    });
    
    },
    enviarSolicitud(idEmpresa) {
                var nitEstudiante =safe.decrypt($cookies.get(safe.cipher('estudiante')))
                let date = new Date().toLocaleDateString();
                var solicitud = date+nitEstudiante
                solicitud = solicitud.split("/").join(''); 
                db.collection("solicitudes").doc(solicitud).set({
                    solicitud: 'Contacto con la empresa '+idEmpresa,
                    telefono: this.telefonoEstudiante,
                    encargado: this.nombreEstudiante,
                    nit: this.idEstudiante,
                    texto: this.texto,
                    completada: 'No',
                    fechaCreacion: date,
                    admin: '',
                    fechaSolucion: '',
                    tipo: 'Estudiante'
                })
                    .then(() => {
                        this.msgBody = "Solicitud realizada con exito"
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                        this.msgBody = "No se pudo completar la solicitud, intente nuevamente"
                    });


        },

    habilitarModal(nombre,id,estado) {
      
      
      if(estado =='No'){
        this.open=true
        this.nitEmpresa=id
        this.nombreEmpresa=nombre
        this.msgBody="¿Esta seguro que desea realizar una solicitud de contacto con la empresa "+nombre+" ?"
        
      }else{
        this.enviarSolicitud(id)
       
      }
      
      

    },
  },

  mounted() {
    this.datosEmpresas()
    this.extraerDatoEstudiante()

    
    
  },

  
}


</script>