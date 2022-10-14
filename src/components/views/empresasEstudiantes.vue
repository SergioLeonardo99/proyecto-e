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
            <button type="button"
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
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">{{msgTitulo}}</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">{{msgBody}}</p>

                    </div>
                    <div class="mt-2">
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

const db = firebase.firestore();


export default {

  components: {
    navBar4


  },
  data() {
    return {
      dataUsers: [],
      dataUser: new Object,
      cambio: false,
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
    extraerDatoEmpresa(){
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
        console.log("Error en la consulta")
    });
    },

    habilitarModal(id,estado) {
      this.extraerDatoEmpresa(id)
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
  },

  mounted() {
    this.datosEmpresas()

    
    
  },

  
}


</script>