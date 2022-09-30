
<template>
  
  <navAdmin></navAdmin>
  <DataTable :data="dataUsers" :columns="colum" :key="cambio" id="tablaUsuarios" class="table table-striped">
    <thead>
      <tr>
        <th>NIT</th>
        <th>Usuario</th>
        <th>Fecha de Creación</th>
        <th>Tipo</th>
        <th>Estado</th>
        <th>Encuesta</th>
        <th>Prueba</th>
        
      </tr>
    </thead>
    <tbody>

      <!-- <tr v-for="user in dataUsers">
        <td>{{user.nit}}</td>
        <td>{{user.nombre}}</td>
        <td>{{user.fechaCreacion}}</td>
        <td>{{user.tipo}}</td>
        <td>{{user.estado}}</td>
        <td>{{user.encuesta}}</td>
        <td>
          <button @click.stop="user.view = !user.view">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>

          </button>

           Dropdown menu 
          <div v-show="user.view">
            <button v-if="user.tipo!='administrador'" @click="prueba(user.nit)">
              <span>Acceder</span>
            </button>

            <button v-if="user.tipo=='empresa'" @click="seguridadPrueba()">
              <span>Realizar encuesta</span>


            </button>
            <button @click="prueba(user.nit)">
              <span>Habilitar/Deshabilitar</span>
            </button>

          </div>

        </td> -->

      
    </tbody>

  </DataTable>




  <!-- Dropdown toggle button -->




</template>
<script>
import navAdmin from "@/components/views/elementos/navbar3.vue";
import firebase from "../../components/firebase/initFirebase";
import Seguridad from "../../components/js/encrypt.js";
import DataTable from 'datatables.net-vue3';

import "firebase/firestore";


const db = firebase.firestore();
const safe = new Seguridad();






export default {
  components: {
    navAdmin,
    DataTable



  },
  data() {
    return {
      dataUsers: [],
      show: false,
      controlData: [],
      cambio: false,
      colum: [{"data":"nit"},{"data":"nombre"},{"data":"fechaCreacion"},{"data":"tipo"},{"data":"encuesta"},{"data":"estado"},{"data":"pruebita"}]

    }
  },
  methods: {
    seguridadPrueba(){
    },
    datosUsuarios() {
      db.collection("usuario")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.dataUsers.push({ 'nit': doc.data().nit, 'nombre': doc.data().nombre, 'fechaCreacion': doc.data().fechaCreacion, 'tipo': doc.data().tipo, 'encuesta': doc.data().encuesta, 'estado': doc.data().estado , 'view':false, 'pruebita':' <button @click="prueba(1234)"><span>Habilitar/Deshabilitar</span></button>'})


          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
        this.cambio=true
    },
    prueba(nit) {
      console.log(nit)
    },
    accederUsuario(nit){

    },
    cambiarEstado(nit, estado){

    },
    realizarEncuesta(nit){

    }


  },


  mounted() {
    this.datosUsuarios()
    


  }
}



</script>