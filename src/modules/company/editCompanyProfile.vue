<template>
  <!--llamado del navBar2 a la clase-->
  <navBar2></navBar2>
  <!--Intregacion de la imagen principal de la empresa-->

  <div class="flex items-center justify-center min-h-screen  ">

    <div class="px-8 py-6 mt-4 text-left bg-transparent shadow-lg max-w-6xl md:w-1/3 lg:max-w-full">
      <div class="flex justify-center">
        <div class="relative">
          <h3 class="text-2xl font-bold text-center">Foto del perfil</h3>
          <img class="object-cover rounded-full h-36 w-36 mx-auto m-1 p-1 border-4 border-cyan-600"
            :src="imagenDescargada" alt="" />

          <form @submit.prevent="subirFoto" encrypter="multipart/form-data flex items-baseline justify-center">
            <input @change="clickImage($event)" type="file" accept="image/*"
              class="px-6 py-2 mt-4 text-white border-cyan-600 rounded-lg hover:bg-cyan-400">
            <div class="flex items-baseline justify-center">

              <input type="submit" value="Actualizar foto de perfil"
                class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">

            </div>
          </form>


        </div>

      </div>
      <h3 class="text-2xl font-bold text-center">Información general</h3>
      <form action="" method="post">
        <div class="mt-4">
          <div>
            <label class="block">Nombre de la empresa </label>
            <input type="text" v-model="nombre" placeholder="nombre"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              autofocus autocomplete required minlength="6" maxlength="16">

          </div>
          <div>
            <label class="block">Nit de la empresa </label>
            <input type="number" v-model="nit" placeholder="nit"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              autofocus autocomplete required disabled minlength="6" maxlength="16">

          </div>
          <div>
            <label class="block">Dirección</label>
            <input type="text" v-model="direccion" placeholder="dirección"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              autofocus autocomplete required minlength="6" maxlength="16">

          </div>
          <div>
            <label class="block">Nombre del encargado</label>
            <input type="text" v-model="encargado" placeholder="nombre del encargado"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              autofocus autocomplete required minlength="3" maxlength="16">

          </div>
          <div>
            <label class="block">Cargo del encargado en la empresa</label>
            <input type="text" v-model="cargo" placeholder="cargo"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              autofocus autocomplete required minlength="3" maxlength="16">

          </div>
          <div>
            <label class="block">Correo electrónico</label>
            <input type="email" v-model="email" placeholder="correo"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              autofocus autocomplete required minlength="8" maxlength="50">

          </div>
          <div>
            <label class="block">Número de celular o teléfono</label>
            <input type="number" v-model="telefono" placeholder="teléfono"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              autofocus autocomplete required minlength="6" maxlength="16">

          </div>

          <div class="mt-4">
            <label class="block">Contraseña</label>
            <input type="password" v-model="contraseña" placeholder="Password"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              required minlength="8" maxlength="16">
          </div>
          <div class="mt-4">
            <label class="block">Validar Contraseña</label>
            <input type="password" v-model="contraseñaConfirmar" placeholder="Password"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              required minlength="8" maxlength="16">
          </div>

          <div>
            <label class="block">Acerca de la empresa</label>
            <textarea type="text" v-model="about" placeholder="Acerca de la empresa"
              class="form-control
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
                                    focus:text-gray-700 focus:bg-white focus:border-slate-400 focus:outline-none"
              autofocus autocomplete required minlength="" maxlength="100">
            </textarea>

          </div>

          <div class="flex items-baseline justify-center">

            <button type="button" @click="advancedRegister()"
              class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Actualizar</button>

          </div>
          <div class="bg-white rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3" role="alert">
            {{ mensaje }}
          </div>
        </div>
      </form>
    </div>

  </div>
</template>
<script>
//LLamado del navbar2 a la clase
import "firebase/storage";
import "firebase/firestore";
import firebase from "../../components/firebase/initFirebase";
import Seguridad from "../../components/js/encrypt.js";
const safe = new Seguridad();
const db = firebase.firestore();
const storage = firebase.storage();
var storageRef = storage.ref();



import navbarCompany from '@/components/navbars/navbarCompany.vue'



export default {

  name: 'editarPerfilDeEmpresa',
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
      about: ''
    }
  },
  components: {
    navBar2: navbarCompany
  },

  methods: {
    cargarEmpresa() {
      var nitEmpresa = safe.decrypt($cookies.get(safe.cipher('nit'))).toString()

      var docRef = db.collection("usuario").doc(nitEmpresa);

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
        this.cargarImagen()

      }).catch((error) => {
        this.$router.push('/');
      });



    },
    subirFoto() {
      var imagesRef = storageRef.child('imagenes/' + this.nit + '.jpg');
      var metadata = { contentType: 'img/jpeg' }
      if(this.imagen === null){
        alert('No has seleccionado ninguna imagen');

      }else{
        imagesRef.put(this.imagen, metadata).then((snapshot) => {
        location.reload()
        //console.log('Uploaded a blob or file!');
      });
      }

    },
    cargarImagen() {
      // Create a reference to the file we want to download
      var starsRef = storageRef.child('imagenes/' + this.nit + '.jpg');
      var docRef = db.collection("usuario").doc(this.nit.toString());
      // Get the download URL
      starsRef.getDownloadURL()
        .then((url) => {
          this.imagenDescargada = url;

          docRef.update({
            img: url
            

          })
            .then(() => {
              //console.log("Document successfully updated!");
              this.contraseña = ''
              this.contraseñaConfirmar = ''
            })
            .catch((error) => {
              // The document probably doesn't exist.
              //console.error("Error updating document: ", error);
            });
          // Insert url into an <img> tag to "download"


        })
        .catch((error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/object-not-found':
            docRef.update({
            img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
            

          })
            .then(() => {
              //console.log("Document successfully updated!");

            })
            .catch((error) => {
              // The document probably doesn't exist.
              //console.error("Error updating document: ", error);
            });
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
    clickImage(e) {
      var image= e.target.files[0].size
      if (image> 200000){
        alert('El archivo supera el límite de 0.2MB');

      }else{
        this.imagen = e.target.files[0]
      }
      

      //console.log(this.imagen)
    },

    advancedRegister() {
      if (this.nombre != '' && this.nit > 0 && this.direccion != '' && this.telefono > 0 && this.contraseña != '' && this.contraseñaConfirmar != '' && this.email != '' && this.encargado != '' && this.cargo != '') {
        if(this.compruebaLongitud(this.nombre,6,16) &&this.compruebaLongitud(this.nit,6,16) &&this.compruebaLongitud(this.direccion,6,16) &&this.compruebaLongitud(this.telefono,6,16) &&this.compruebaLongitud(this.contraseña,8,16) &&this.compruebaLongitud(this.email,8,50) &&this.compruebaLongitud(this.encargado,8,16) &&this.compruebaLongitud(this.cargo,8,16)){
          if(this.validarEmail(this.email)){
            if (this.contraseña == this.contraseñaConfirmar) {
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
              this.contraseña = ''
              this.contraseñaConfirmar = ''
            })
            .catch((error) => {
              // The document probably doesn't exist.
              console.error("Error updating document: ", error);
            });



        } else {
          this.mensaje = "Las contraseñas no coinciden..."
        }
          }else{
            this.mensaje = "El email es invalido..."
          }
          
          
        }else{
          this.mensaje = "Las longitudes de los campos no son validas"
        }

      } else {
        this.mensaje = "Tiene que rellenar todos los campos..."
      }

    },
    compruebaLongitud(elemento, min, max) {
      elemento = elemento.toString();
      //console.log("Soy el elemento "+elemento+elemento.length+" soy min "+min+" soy max "+max+ " soy el validador "+(elemento.length < min || elemento.length > max))
      if (elemento.length < min || elemento.length > max) {
        return false
      } else {
        return true
      }
    },
     validarEmail(valor) {
  if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
   return true
  } else {
   return false
  }
}



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
    
        























