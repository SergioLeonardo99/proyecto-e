<template>

  <!-- <div class="min-h-screen bg-gray-100 text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
  <div class="relative py-3 sm:max-w-xl mx-auto text-center">
    <span class="text-3xl text-black font-light">iniciar sesion</span>
    <div class="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
      <div class="h-2 bg-indigo-300 rounded-t-md"></div>
      <div class="py-6 px-8">
        
        <input type="text" placeholder="Nit" class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
     
        <input type="password" placeholder="Contraseña" class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
        <div class="flex justify-between items-baseline">
          <button class="mt-4 bg-indigo-300 text-white py-2 px-6 rounded-lg">Login</button>
          <a href="#" class="text-sm hover:underline">Olvidaste tu contraseña?</a>
        </div>
      </div>
    </div>
  </div>
</div>
 -->

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina inico de Sesion</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.15/tailwind.min.css">
  </head>

  <body>

    <section class="flex flex-col md:flex-row h-screen items-center">


      <div class="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">

        <img
          src="https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2FfondoSectores.webp?alt=media&token=76d3bbb8-32a7-4984-893d-7f71d9c8cadd"
          alt="" class="w-full h-full object-cover">
      </div>

      <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center">

        <div class="w-full h-100">
          <button @click="volverIndex()"
            class="flex float-right space-x-1 items-center px-3 py-3  bg-teal-700 hover:bg-teal-500 rounded-full drop-shadow-md h-10  m-2 text-indigo-100 transition-colors duration-150  focus:shadow-outline ">
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>

            <span class="text-white text-xl font-bold">Regresar</span>
          </button>

          <h1 class="text-3xl font-bold letra ">Bienvenido</h1>
          <h1 class="text-xl md:text-xl letra leading-tight text-teal-700 mt-12">Ingresa al sistema</h1>

          <form class="mt-6">
            <div>
              <label class="block letra text-gray-700">NIT/C.C.</label>
              <input type="number" name="nit" v-model="nit" placeholder="Nit"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500 focus:bg-white focus:outline-none"
                autofocus autocomplete required maxlength="16" minlength="8">
            </div>

            <div class="mt-4">
              <label class="block letra text-gray-700">Contraseña</label>
              <input type="password" name="contraseña" v-model="contraseña" placeholder="Password" minlength="8" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500
                  focus:bg-white focus:outline-none" required maxlength="16">
            </div>

            <div class="text-right mt-2">

              <button @click="abrirRecuperar" type="button"
                class="text-sm letra text-gray-700 hover:text-gray-700 focus:text-gray-700">¿Olvidaste tu
                contraseña?</button>
              <p>{{ mensaje }}</p>
            </div>

            <button @click="notNull()" type="button" class="w-full block letra bg-teal-700 hover:bg-teal-500 focus:bg-teal-500 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Ingresar</button>

          </form>

          <hr class="my-6 border-gray-300 w-full">

          <!-- <button type="button"
            class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
            <div class="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6 h-6"
                viewBox="0 0 48 48">
                <defs>
                  <path id="a"
                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                </defs>
                <clipPath id="b">
                  <use xlink:href="#a" overflow="visible" />
                </clipPath>
                <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                <path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                <path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                <path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
              </svg>
              <span class="ml-4">
                Iniciar
                con
                Google
              </span>
            </div>
          </button> -->

          <p class="mt-8 letra">
            ¿Necesitas una cuenta?
            <router-link to="/register" class="text-teal-700 letra hover:text-teal-400 font-semibold">
              Crear una cuenta
            </router-link>
          </p>


          <p class="text-sm letra text-teal-700 mt-12">&copy; 2022 M&S.</p>
        </div>

      </div>

    </section>


  </body>
  <TransitionRoot as="template" :show="modal">
    <Dialog as="div" class="relative z-10" @close="modal = false">
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
              <div v-if="aviso">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div
                      class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
                      </svg>


                    </div>
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Alerta del sistema !!!
                      </DialogTitle>
                      <div class="mt-2">
                        <p class="text-sm text-gray-500">Su usuario ha sido desactivado del sistema por favor contactese
                          con el administrador...</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button type="button"
                    class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    @click="cerrarModal()">Cerrar</button>
                </div>
              </div>
              <div v-if="recuperar">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div
                      class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    </div>
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Recuperar clave
                      </DialogTitle>
                      <div class="mt-2">

                        <p class="text-sm text-gray-500">Ingresa el correo electrónico asociado a tu cuenta para
                          recuperar la clave.</p>
                      </div>
                      <div>
                        <form>
                          <label class="block letra text-gray-700">Correo electrónico</label>
                          <input type="email" name="email" v-model="correoRecuperar" placeholder="Correo electrónico"
                            class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500 focus:bg-white focus:outline-none">
                        </form>



                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">

                  <button type="button"
                    class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    @click="cerrarModal()">Cerrar</button>
                  <button type="button"
                    class="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    @click="verificarUsuario()">Recuperar</button>

                </div>
              </div>

              <div v-if="aceptado">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div
                      class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    </div>
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Clave recuperada con
                        exito
                      </DialogTitle>
                      <div class="mt-2">
                        <p class="text-sm text-gray-500">Verifique su correo electrónico para comprobar su nueva
                          contraseña.</p>
                      </div>
                      <div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">

                  <button type="button"
                    class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    @click="cerrarModal()">Cerrar</button>


                </div>
              </div>

            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

</template>

<script>
import firebase from "../../components/firebase/initFirebase";
import "firebase/firestore";
import Seguridad from "../../components/js/encrypt.js";
import VueCookies from 'vue-cookies'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import emailjs from '@emailjs/browser';

const db = firebase.firestore();
const safe = new Seguridad();

export default {
  components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,



  },
  data() {
    return {
      nit: null,
      contraseña: null,
      mensaje: '',
      modal: false,
      recuperar: false,
      aceptado: false,
      aviso: false,
      correoRecuperar: '',
      nombre: '',
      id: '',
      clave: ''
    }
  },
  methods: {
    autenticate() {
      var docRef = db.collection("usuario").doc(this.nit.toString());
      var getOptions = {
      };
      docRef.get(getOptions).then((doc) => {
        var forge = require('node-forge');
        var input_str = this.contraseña;
        var md = forge.md.sha256.create();
        md.update(input_str);
        var estadoEncuesta = doc.data().encuesta
        if (doc.data().contraseña == md.digest().toHex()) {
          if (doc.data().estado == 'Inactivo') {
            this.modal = true
            this.aviso = true
          } else {
            if (doc.data().tipo == 'empresa') {
              VueCookies.set(safe.cipher('nit'), safe.cipher(this.nit.toString()), "1h")
              VueCookies.set(safe.cipher('encuesta'), safe.cipher(estadoEncuesta.toString()), "1h")

              this.$router.push('/profileCompany');

            } if (doc.data().tipo == 'estudiante') {
              VueCookies.set(safe.cipher('estudiante'), safe.cipher(this.nit.toString()), "1h")
              this.$router.push('/profileStudent');

            } if (doc.data().tipo == 'administrador') {
              VueCookies.set(safe.cipher('admin'), safe.cipher(this.nit.toString()), "1h")
              this.$router.push('/dashboard');
            }
            this.mensaje = "Datos validos"
          }
        } else {
          this.mensaje = "Contraseña invalida..."
          this.contraseña=null
        }
      }).catch((error) => {
        //console.log("Nit Incorrecto...", error);
        this.mensaje = "Nit incorrecto..."
        this.nit=null
        this.contraseña=null
      });

    },
    notNull(){
      if(this.nit===null ||this.contraseña===null){
        this.mensaje="Tiene que rellenar los campos..."
      }else if (typeof this.nit!=="number"){
        this.mensaje="El nit debe ser numerico..."
        this.nit=null
      }else if(!this.compruebaLongitud(this.nit,6,16)){
        this.mensaje="El nit debe estar entre 6 y 16 caracteres"
        this.nit=null
      }else if(!this.compruebaLongitud(this.contraseña,8,16)){
        this.mensaje="La contraseña debe estar entre 8 y 16 caracteres"
        this.contraseña=null
        
      }else{
        this.autenticate()
      }
    },
    volverIndex(){
      this.$router.push('/');

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
    cerrarModal() {
      if (this.recuperar == true) {
        this.recuperar = false
      }
      if (this.aviso == true) {
        this.aviso = false
      }
      if (this.aceptado == true) {
        this.aceptado = false
      }
      this.modal = false
    },
    abrirRecuperar() {
      this.recuperar = true
      this.modal = true
    },
    verificarUsuario() {
      if (this.correoRecuperar == '') {
        this.recuperar = false
        this.aviso = true
      } else {

        db.collection("usuario").where("email", "==", this.correoRecuperar.toString())
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.correoRecuperar = doc.data().email
              this.nombre = doc.data().nombre
              this.id = doc.data().nit
              this.cambioClave()

            });
          })
          .catch((error) => {
            //console.log("Usuario no encontrado ", error);
            this.recuperar = false
            this.aceptado = true
          });
        this.recuperar = false
        this.aceptado = true
      }



    },
    cambioClave() {
      var docRef = db.collection("usuario").doc(this.id.toString());
      var forge = require('node-forge');
      var input_str = Math.random().toString(36).slice(2)
      var md = forge.md.sha256.create();
      md.update(input_str);
      this.clave = input_str
      var getOptions = {
        //source: 'cache'
      };
      docRef.update({
        contraseña: md.digest().toHex(),
      })
        .then(() => {
          //console.log("Document successfully updated!");
          this.recuperacion()
        })
        .catch((error) => {
          // The document probably doesn't exist.
          //console.error("Error updating document: ", error);
          this.recuperar = false
          this.aceptado = true
        });





    },

    recuperacion() {
      var templateParams = {
        name_proyect: 'M-SUbate',
        name: this.nombre,
        id: this.id,
        clave: this.clave,
        correo: this.correoRecuperar,

      };
      emailjs.send('service_f231616', 'template_ux9gq9f', templateParams, 'qPWdYWkxEBTFlHmVj')
        .then(function (response) {
          //console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
          //console.log('FAILED...', error);
        });
      this.recuperar = false
      this.aceptado = true
    },

  },

  mounted() {
    // methods can be called in lifecycle hooks, or other methods!

  }
}




</script>
<style>
.letra {
  font-family: sans-serif;
}
</style>