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
                    <h1>Cambiar imagen</h1>
                        <form @submit.prevent="subirFoto" encrypter="multipart/form-data">
                        <input @change="clickImage($event)" type="file" accept="image/*">
                        <input type="submit" value="Subir Imagen" class="w-full block bg-blue-400 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
               px-4 py-3 mt-6">
                        </form >
                        
                        <div v-if="imagenDescargada != null">
                            <img :src="imagenDescargada" alt="">

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
                <form class="mt-6">
         

         <div>
           <label  class="block  text-gray-700">Nombre de la empresa: </label>
           <input type="text" v-model="nombre" placeholder="nombre"
           class="h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete  required>
         </div>
           
           <div>
           <label class="block text-gray-700">Nit de la empresa: </label>
           <input type="number" v-model="nit" placeholder="numero" class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
         </div>

          <div>
           <label class="block text-gray-700">Dirección: </label>
           <input type="text" v-model="direccion" placeholder="direccion" class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
         </div>

         <div>
           <label class="block text-gray-700">Nombre del encargado: </label>
           <input type="text" v-model="encargado" placeholder="direccion" class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
         </div>

         <div>
           <label class="block text-gray-700">Cargo del encargado en la empresa: </label>
           <input type="text" v-model="cargo" placeholder="direccion" class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
         </div>

         <div>
           <label class="block text-gray-700">Correo electrónico: </label>
           <input type="text" v-model="email" placeholder="direccion" class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
         </div>


            <div>
           <label class="block text-gray-700">Número de celular o teléfono: </label>
           <input type="number" v-model="telefono" placeholder="Telefono" class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
         </div>

         <div class="mt-4">
           <label class="block text-gray-700">Contraseña: </label>
           <input type="password" v-model="contraseña" placeholder="Password" minlength="6" class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                 focus:bg-white focus:outline-none" required>
         </div>
           
         <div class="mt-4">
           <label class="block text-gray-700">Confirmar Contraseña: </label>
           <input type="password" v-model="contraseñaConfirmar" placeholder="Password" minlength="6" class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                 focus:bg-white focus:outline-none" required>
         </div>

         <div>
           <label class="block text-gray-700">Acerca de la empresa: </label>
           <input type="text" v-model="about" placeholder="direccion" class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
         </div>
        
 
         <button type="button" @click="advancedRegister()" class="w-full block bg-blue-400 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
               px-4 py-3 mt-6">Actualizar datos</button>
         <p>{{ mensaje }}</p>
       </form>


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
      imagen: null,
      imagenDescargada: null,
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
        this.nombre = doc.data().nombre;
        this.nit = doc.data().nit;
        this.telefono = doc.data().telefono;
        this.encargado = doc.data().encargado;
        this.cargo = doc.data().cargo;
        this.email = doc.data().email;
        this.direccion = doc.data().direccion;
        this.about = doc.data().about;


      }).catch((error) => {
        this.$router.push('/');
      });
        }
      

    },
    subirFoto(){
        var imagesRef = storageRef.child('imagenes/'+this.nit+'.jpg');
        var metadata= {contentType: 'img/jpeg'}
        
        imagesRef.put(this.imagen,metadata).then((snapshot) => {
        console.log('Uploaded a blob or file!');

});


    },
    cargarImagen(){
        // Create a reference to the file we want to download
    var starsRef = storageRef.child('imagenes/'+this.nit+'.jpg');

    // Get the download URL
    starsRef.getDownloadURL()
    .then((url) => {
        this.imagenDescargada=url;
    // Insert url into an <img> tag to "download"


    })
    .catch((error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
        case 'storage/object-not-found':
        // File doesn't exist
        break;
        case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
        case 'storage/canceled':
        // User canceled the upload
        break;

        // ...

        case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        break;
    }
    });



    },
    clickImage(e){
        this.imagen = e.target.files[0]
        console.log(this.imagen)
    },

    advancedRegister() {
      if(this.nombre!=''&& this.nit != 0 && this.direccion != ''&&this.telefono !=0 &&this.contraseña !=''&&this.contraseñaConfirmar != ''&&this.email !=''&& this.encargado != ''&& this.cargo != ''){
        if(this.contraseña==this.contraseñaConfirmar){

        
        
          var docRef = db.collection("usuario").doc(this.nit.toString());
          var forge = require('node-forge');
          var input_str = this.contraseña;
          var md = forge.md.sha256.create();
          md.update(input_str);
          var getOptions = {
            //source: 'cache'
          };
          docRef.update({
              nombre: this.nombre,
              nit: this.nit,
              direccion: this.direccion,
              telefono: this.telefono,
              email: this.email,
              encargado: this.encargado,
              cargo: this.cargo,
              contraseña: md.digest().toHex(),
              about: this.about,
                
            })
            .then(() => {
                console.log("Document successfully updated!");
                this.contraseña=''
                this.contraseñaConfirmar=''
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });


          
        }else{
          this.mensaje = "Las contraseñas no coinciden..."
        }
      }else{
        this.mensaje = "Tiene que rellenar todos los campos..."
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
    
        























