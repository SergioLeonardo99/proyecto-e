<template>
    <div>
        <h1>Ventana de registro</h1>

       
        <form>
            <label for="nit">Nombre de la empresa: </label>
            <input type="text" v-model="nombre">
            <label for="nit">Nit: </label>
            <input type="text" v-model="nit">
            <label for="nit">Dirección de la empresa: </label>
            <input type="text" v-model="direccion">
            <label for="nit">Telefono: </label>
            <input type="text" v-model="telefono">
            <label for="contraseña">Contraseña: </label>
            <input type="password" v-model="contraseña">
            <button type="button"  @click="register()"> 
                Registrarse
            </button> 
            

        </form>
        <label for="mensaje">{{mensaje}}</label>
        
        
    </div>
</template>

<script>

import db from "../components/firebase/initFirebase";
import VueCookies from 'vue-cookies'
import { registerFirestore } from "@firebase/firestore-compat";

export default {
  data() {
    return {
      nombre: '',
      nit: '',
      direccion: '',
      telefono: '',
      contraseña: '',
      mensaje: '',
    }
  },
  methods: {
    autenticate(){
        var docRef = db.collection("usuario").doc(this.nit);
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

                if(doc.data().contraseña==md.digest().toHex()){
                    this.mensaje="Datos validos"
                    VueCookies.set('nit' , this.nit, "1h")
                    console.log($cookies.get("nit"))
                }else{
                    this.mensaje="Contraseña invalida..."
                }
            }).catch((error) => {
               console.log("Nit Incorrecto...", error);
               this.mensaje="Nit incorrecto..."
            });

    },
    register(){
      db.collection("usuario").doc(this.nit).set({
      nombre: this.nombre,
      nit: this.nit,
      direccion: this.direccion,
      telefono: this.telefono,
      contraseña: this.contraseña,
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