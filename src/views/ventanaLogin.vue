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
        <router-view></router-view>
        <img src="@/assets/bg.webp" alt="" class="w-full h-full object-cover">
      </div>

      <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center">

        <div class="w-full h-100">

          <h1 class="text-2xl font-bold">Bienvenido</h1>
          <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Ingresa al sistema</h1>

          <form class="mt-6">
            <div>
              <label class="block text-gray-700">Nit</label>
              <input type="number" name="nit" v-model="nit" placeholder="Nit"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autofocus autocomplete required>
            </div>

            <div class="mt-4">
              <label class="block text-gray-700">Contraseña</label>
              <input type="password" name="contraseña" v-model="contraseña" placeholder="Password" minlength="4"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" required>
            </div>

            <div class="text-right mt-2">
              <a href="#" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Olvidaste
                tu contraseña?</a>
              <p>{{ mensaje }}</p>
            </div>

            <button @click="autenticate()" type="button" class="w-full block bg-blue-400 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
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

          <p class="mt-8">
            Necesitas una cuenta?
            <router-link to="/ventanaR" class="text-blue-400 hover:text-blue-700 font-semibold">
              Crear una cuenta
            </router-link>
          </p>

          <p class="text-sm text-gray-500 mt-12">&copy; 2022 M&S.</p>
        </div>

      </div>

    </section>


  </body>
</template>

<script>
import db from "../components/firebase/initFirebase";
import VueCookies from 'vue-cookies'

export default {
  data() {
    return {
      nit: 0,
      contraseña: '',
      mensaje: '',
    }
  },
  methods: {
    autenticate() {
      
      var docRef = db.collection("usuario").doc(this.nit.toString());
      
      var getOptions = {
        //source: 'cache'
      };
      docRef.get(getOptions).then((doc) => {
        // Document was found in the cache. If no cached document exists,
        // an error will be returned to the 'catch' block below.

        var forge = require('node-forge');
        var input_str = this.contraseña;
        var md = forge.md.sha256.create();
        md.update(input_str);

        if (doc.data().contraseña == md.digest().toHex()) {
          this.mensaje = "Datos validos"
          VueCookies.set('nit', this.nit, "1h")
          console.log($cookies.get("nit"))
        } else {
          this.mensaje = "Contraseña invalida..."
        }
      }).catch((error) => {
        console.log("Nit Incorrecto...", error);
        this.mensaje = "Nit incorrecto..."
      });

    }

  },
  mounted() {
    // methods can be called in lifecycle hooks, or other methods!
    console.log(db)
  }
}



</script>