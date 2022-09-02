<template>
    <div>
        <h1>Ventana empresa</h1>
        <section>
          <p>texto de perfil empresa... </p>
          <p>Nombre de la empresa: {{nombreEmpresa}}</p>
          <p>Nit de la empresa: {{nitEmpresa}}</p>
          <p>Telefono de la empresa: {{telefonoEmpresa}}</p>
          <p>Dirección de la empresa: {{direccionEmpresa}}</p>


        </section>
            
        
        
    </div>
</template>

<script>
import db from "../components/firebase/initFirebase";
import VueCookies from 'vue-cookies'

export default {
  data() {
    return {
      nitCookie: '1234567890',
      nombreEmpresa: '',
      nitEmpresa: '',
      telefonoEmpresa: '',
      direccionEmpresa: '',
    }
  },
  methods: {
    recovery(){
      console.log(VueCookies.get('nit'))
      if (VueCookies.get('nit') == null){
        this.$router.push('/loginprueba')
      }else{
        this.nitCookie=VueCookies.get('nit')
      }
      
        var docRef = db.collection("usuario").doc(this.nitCookie);
            var getOptions = {
            //source: 'cache'
            };
            docRef.get(getOptions).then((doc) => {
    // Document was found in the cache. If no cached document exists,
    // an error will be returned to the 'catch' block below.
                this.nombreEmpresa=doc.data().nombre
                this.nitEmpresa=doc.data().nit
                this.telefonoEmpresa=doc.data().telefono
                this.direccionEmpresa=doc.data().direccion
            }).catch((error) => {
               console.log("Sesion terminada regresando al login", error);
               this.$router.push('/loginprueba')

            });

    },
    getImage(){
      
    }
    
  },
  mounted() {
    this.recovery()
  }
}



</script>