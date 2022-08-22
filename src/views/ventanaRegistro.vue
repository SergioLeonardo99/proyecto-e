<template>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="style.css" />
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.15/tailwind.min.css">
    <title>Registro empresarial</title>
    <!-- Tailwind css CDN -->

</head>
<body>
  <section class="flex flex-col md:flex-row h-screen items-center">

    <div class="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
      <router-view></router-view>
      <img src="@/assets/bg3.jpg" alt="" class="w-full h-full object-cover">
    </div>
  
    <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center">
  
      <div class="w-full h-100">
  
      <h1 class="text-2xl md:text-2xl font-bold leading-tight mt-14">Registro M&S</h1>
  
        <form class="mt-6">
         

          <div>
            <label  class="block  text-gray-700">Nombre de la empresa: </label>
            <input type="text" v-model="nombre" placeholder="nombre"
            class="h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete  required>
          </div>
            
            <div>
            <label class="block text-gray-700">Nit: </label>
            <input type="numero" v-model="nit" placeholder="numero" class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
          </div>

           <div>
            <label class="block text-gray-700">Direccion: </label>
            <input type="text" v-model="direccion" placeholder="direccion" class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
          </div>

             <div>
            <label class="block text-gray-700">Telefono: </label>
            <input type="numero" v-model="telefono" placeholder="Telefono" class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
          </div>

          <div class="mt-4">
            <label class="block text-gray-700">Contraseña: </label>
            <input type="password" v-model="contraseña" placeholder="Password" minlength="6" class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" required>
          </div>
            
          <div class="mt-4">
            <label class="block text-gray-700">Confirmar Contraseña: </label>
            <input type="password" placeholder="Password" minlength="6" class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" required>
          </div>
         
  
          <button type="button" @click="register()" class="w-full block bg-blue-400 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Registrarse</button>
        </form>
  
        <hr class="my-4 border-gray-300 w-full">
  
   <p class="mt-4">ya tienes cuenta ? <Router-link to="/ventanaL" class="text-blue-400 hover:text-blue-700 font-semibold">Iniciar Sesion</Router-link></p>
        <p class="text-sm text-gray-500 mt-4">&copy; 2022 M&S.</p>
      </div>

    </div>
  
  </section>
  

</body>

</template>

<script>


import db from "../components/firebase/initFirebase";
import VueCookies from 'vue-cookies'
import { registerFirestore } from "@firebase/firestore";

export default {
  data() {
    return {
      nombre: '',
      nit: 0,
      direccion: '',
      telefono: 0,
      contraseña: '',
      mensaje: '',
    }
  },
  methods: {
    register(){
      var forge = require('node-forge');
      var input_str = this.contraseña;
      var md = forge.md.sha256.create();
      md.update(input_str);
      db.collection("usuario").doc(this.nit).set({
      nombre: this.nombre,
      nit: this.nit,
      direccion: this.direccion,
      telefono: this.telefono,
      contraseña: md.digest().toHex(),
      tipo: "usuario"
  })
  .then(() => {
      this.mensaje="Empresa registrada con exito"
  })
  .catch((error) => {
      console.error("Error writing document: ", error);
      this.mensaje="No se pudo completar el registro, intente nuevamente"
});
    }
    
  },
  mounted() {
    // methods can be called in lifecycle hooks, or other methods!
  }
}




</script>