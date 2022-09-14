<template>
    <!--llamado del navBar2 a la clase-->
    <navBar2></navBar2>
    <!--Intregacion de la imagen principal de la empresa-->
    <div class="p-16">
        <div class="p-8 bg-white shadow mt-24">
            <div class="grid grid-cols-1 md:grid-cols-3">
                <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0 p-10">
                </div>
                <div class="relative">
                    <button @click="" type="button" class="w-full block bg-blue-400 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Ingresar</button>
                    <div
                        class="animate__animated animate__fadeInDown w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    
                </div>

                <!-- <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                    <button
                        class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                        Connect
                    </button>
                    <button
                        class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                        Message
                    </button>
                </div> -->
            </div>
                    <!--Nombre de la empresa-->
            <div class="animate__animated animate__fadeInDown mt-20 text-center border-b pb-12">
                <h1 class="text-4xl font-medium text-black">Nombre de la empresa: {{nombreEmpresa}}
                    </h1>
                    <!--Descripcion de la empresa-->
                <p class="font-light text-black mt-3">NIT de la empresa: {{nitEmpresa}}</p>

                <p class="mt-8 text-black">Número de contacto la empresa: {{telefonoEmpresa}}</p>
                <p class="mt-8 text-black">Correo eléctronico de la empresa: {{email}}</p>
                <p class="mt-2 text-black">Dirección de la empresa: {{direccion}}</p>

                <p class="mt-8 text-black">Encargado de la empresa: {{encargado}}</p>
                <p class="mt-2 text-black">Cargo del encargado: {{cargoEncargado}}</p>
            </div>

            <div class="animate__animated animate__fadeInDown mt-12 flex flex-col justify-center">
                <p class="mt-2 text-black text-center">Acerca de la empresa</p>
                <br>
                <p class="text-black text-center font-light lg:px-16">An artist of considerable range, Ryan — the
                    name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his
                    own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable
                    range.</p>
            </div>

        </div>
    </div>
</template>
<script>
    //LLamado del navbar2 a la clase
import "firebase/storage";
import "firebase/firestore";
import firebase from "../../components/firebase/initFirebase";
const db = firebase.firestore();
const storage = firebase.storage();
var storageRef = storage.ref();


import navBar2 from './elementos/navbar2.vue'
import VueCookies from 'vue-cookies'


export default {

    name: 'PerfilDeEmpresa',
    data() {
    return {
      nit: 0,
      nombreEmpresa: '',
      nitEmpresa: '',
      telefonoEmpresa: '',
      encargado: '',
      cargoEncargado: '',
      email: '',
      mensaje: '',
      direccion: '',
    }
  },
    components: {
        navBar2
    },
    
    methods: {
        cargarEmpresa() {

        var nitEmpresa =$cookies.get("nit")
        
        if (nitEmpresa === null){
            this.$router.push('/');
        }else{
            var docRef = db.collection("usuario").doc(nitEmpresa.toString());
      
      var getOptions = {
        //source: 'cache'
      };
      docRef.get(getOptions).then((doc) => {

        // Document was found in the cache. If no cached document exists,
        // an error will be returned to the 'catch' block below.
        this.nombreEmpresa = doc.data().nombre;
        this.nitEmpresa = doc.data().nit;
        this.telefonoEmpresa = doc.data().telefono;
        this.encargado = doc.data().encargado;
        this.cargoEncargado = doc.data().cargo;
        this.email = doc.data().email;
        this.direccion = doc.data().direccion;


      }).catch((error) => {
        this.$router.push('/');
      });
        }
      

    },
    subirFoto(){
        var imagesRef = storageRef.child('images');
        storageRef.put(file).then((snapshot) => {
  console.log('Uploaded a blob or file!');
});


    },
    mostrar(){
  var archivo = document.getElementById("file").files[0];
  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo );
    reader.onloadend = function () {
      document.getElementById("img").src = reader.result;
    }
  }
},
    


    },
    mounted() {
        this.cargarEmpresa()
    
  }
}

</script>
    <style lang="css">
     @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");
    .imagen-carousel {
        height: 470px;
    }
    
    .alinearT {
        text-align: center;
    }
    
    .letra {
        font-family: sans-serif;
    }
    </style>
    
        























