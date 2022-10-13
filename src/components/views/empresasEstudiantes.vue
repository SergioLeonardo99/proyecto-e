<template>
  <div>
    <navBar4></navBar4>
    <div class="flex flex-wrap justify-center space-x-10 space-y-12 " :key="cambio">
      <div class="flex justify-center" v-for="user in dataUsers"> 
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          :src="user.img" alt="" />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">{{user.nombre}}</h5>
            <p class="text-gray-700 text-base mb-4">
              {{user.about}}
            </p>
            <p class="text-gray-600 text-xs">{{user.fecha}}</p>
            <br />
            <button type="button"
              class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              Aplicar</button>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>
<script>
import navBar4 from './elementos/navbar4.vue'
import firebase from "../../components/firebase/initFirebase";
import "firebase/firestore";

const db = firebase.firestore();


export default {

  components: {
    navBar4


  },
  data() {
    return {
      dataUsers: [],
      cambio: false,
    }
  },
  methods: {
    datosEmpresas() {
      this.dataUsers = []
      db.collection("usuario").where("tipo", "==", "empresa").where("estado", "==", "Activo").where("encuesta", "==", "Si")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.dataUsers.push({ 'nombre': doc.data().nombre, 'about': doc.data().about, 'fecha': doc.data().fechaCreacion, 'nit': doc.data().nit, 'img':doc.data().img})
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
      
        
      
      
    },
  },

  mounted() {
    this.datosEmpresas()

    
    
  },

  
}


</script>