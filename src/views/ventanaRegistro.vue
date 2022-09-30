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

    <div class="bg-gray-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
      <router-view></router-view>
      <img src="@/assets/bg3.webp" alt="" class="w-full h-full object-cover">
    </div>
  
    <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center">
  
      <div class="w-full h-100">
  
      <h1 class="text-2xl md:text-2xl font-bold leading-tight mt-14">Registro M&S</h1>
  
        <form class="mt-6">
         

          <div>
            <label  class="block  text-gray-700">Nombre de la empresa: </label>
            <input type="text" v-model="nombre" placeholder="nombre"
            class="h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500 focus:bg-white focus:outline-none" autofocus autocomplete  required>
          </div>
            
            <div>

            <label class="block text-gray-700">Nit de la empresa: </label>
            <input type="number" v-model="nit" placeholder="numero" class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
          </div>

           <div>
            <label class="block text-gray-700">Dirección: </label>
            <input type="text" v-model="direccion" placeholder="direccion" class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
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
            <input type="number" v-model="telefono" placeholder="Telefono" class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
          </div>

          <div class="mt-4">
            <label class="block text-gray-700">Contraseña: </label>
            <input type="password" v-model="contraseña" placeholder="Password" minlength="6" class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500
                  focus:bg-white focus:outline-none" required>
          </div>
            
          <div class="mt-4">
            <label class="block text-gray-700">Confirmar Contraseña: </label>

            <input type="password" v-model="contraseñaConfirmar" placeholder="Password" minlength="6" class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500
                  focus:bg-white focus:outline-none" required>
          </div>

          <div class="mt-4">
            <select v-model="selected">
              <option disabled value="">Por favor seleccione una:</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </select>
          </div>

         
  
          <button type="button" @click="advancedRegister()" class="w-full block bg-gray-400 hover:bg-gray-400 focus:bg-gray-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Registrarse</button>
          <p>{{ mensaje }}</p>

        </form>
  
        <hr class="my-4 border-gray-300 w-full">
  
   <p class="mt-4">ya tienes cuenta ? <Router-link to="/ventanaL" class="text-gray-400 hover:text-gray-700 font-semibold">Iniciar Sesion</Router-link></p>
        <p class="text-sm text-gray-500 mt-4">&copy; 2022 M&S.</p>
      </div>

    </div>
  
  </section>
  

</body>

</template>

<script>

import "firebase/storage";
import firebase from "../components/firebase/initFirebase";
const db = firebase.firestore();


export default {
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

    }
  },
  methods: {
    advancedRegister() {
      if(this.nombre!=''&& this.nit != 0 && this.direccion != ''&&this.telefono !=0 &&this.contraseña !=''&&this.contraseñaConfirmar != ''&&this.email !=''&& this.encargado != ''&& this.cargo != ''){
        if(this.contraseña==this.contraseñaConfirmar){


        
        
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
            })
              .then(() => {
                this.mensaje = "Empresa registrada con exito"
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

    },
    register(){
      var forge = require('node-forge');
      var input_str = this.contraseña;
      var md = forge.md.sha256.create();
      md.update(input_str);
      db.collection("usuario").doc(this.nit.toString()).set({
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