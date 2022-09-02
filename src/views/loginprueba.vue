<template>
    <div>
        <h1>Ventana de login</h1>
       
        <form >
            <label for="nit">Nit: </label>
            <input type="text" v-model="nit">
            <label for="contraseña">Contraseña: </label>
            <input type="password" v-model="contraseña">
            <button type="button"  @click="autenticate()"> 
                Ingresar
            </button> 
            

        </form>
        <label for="mensaje">{{mensaje}}</label>
        
        
    </div>
</template>

<script>

import db from "../components/firebase/initFirebase";
import VueCookies from 'vue-cookies'

export default {
  data() {
    return {
      nit: '',
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
                console.log(doc.data().contraseña)
                console.log(md.digest().toHex())

                if(doc.data().contraseña==md.digest().toHex()){
                    this.mensaje="Datos validos"
                    VueCookies.set('nit' , this.nit, "1h")
                    console.log($cookies.get("nit"))
                    this.$router.push('/empresa')
                }else{
                    this.mensaje="Contraseña invalida..."
                }
            }).catch((error) => {
               console.log("Nit Incorrecto...", error);
               this.mensaje="Nit incorrecto..."
            });

    }
    
  },
  mounted() {
    // methods can be called in lifecycle hooks, or other methods!
  }
}



</script>