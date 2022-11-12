<template>
  
    <!-- Header -->
    <div class="relative dark:bg-teal-800 dark:border-gray-700 md:pt-32 pb-32 pt-12">
      <div class="px-4 md:px-8 mx-auto w-full">
        <div>
          <!-- Card stats -->
          <div class="flex flex-wrap">
            <div class="w-full lg:w-6 xl:w-3/12 px-2">
              <card-stats
                statSubtitle="EMPRESAS"
                :statTitle="numEmpresas.toString()"
                statArrow="up"
                statPercent="3.48"
                statPercentColor="text-emerald-500"
                statDescripiron="Since last month"
                statIconName="fa-solid fa-industry"
                statIconColor="bg-red-500"
              />
            </div>
            <div class="w-full lg:w-6/12 xl:w-3/12 px-2">
              <card-stats
                statSubtitle="ESTUDIANTES"
                :statTitle="numEstudiantes.toString()"
                statArrow="up"
                statPercent="3.48"
                statPercentColor="text-red-500"
                statDescripiron=""
                statIconName="fa-solid fa-graduation-cap"
                statIconColor="bg-orange-500"
              />
            </div>
            <div class="w-full lg:w-6/12 xl:w-3/12 px-2">
              <card-stats
                statSubtitle="CARACTERIZACIONES"
                :statTitle="numEncuestas.toString()"
                statArrow="up"
                statPercent="1.10"
                statPercentColor="text-orange-500"
                statDescripiron="Since yesterday"
                statIconName="fa-solid fa-magnifying-glass-chart"
                statIconColor="bg-pink-500"
              />
            </div>
            <div class="w-full lg:w-6/12 xl:w-3/12 px-2">
              <card-stats
                statSubtitle="SOLICITUDES"
                :statTitle="numSolicitudes.toString()"
                statArrow="up"
                statPercent="12"
                statPercentColor="text-emerald-500"
                statDescripiron="Since last month"
                statIconName="fa-solid fa-bell"
                statIconColor="bg-emerald-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
 

  </template>
  
  <script>
  import CardStats from "@/components/cards/cardStatus.vue";
  import "firebase/firestore";
  import firebase from "../firebase/initFirebase";
  import Seguridad from "../js/encrypt.js";
  const safe = new Seguridad();
  const db = firebase.firestore();
  export default {
    data() {
        return {
          numEmpresas: 0,
          numEstudiantes: 0,
          numEncuestas: 0,
          numSolicitudes: 0,


            

        }
    },
    components: {
      CardStats,
    },
    methods: {
      cargarDatos() {
      
      this.numEmpresas=0
      this.numEstudiantes=0
      db.collection("usuario").where("tipo", "==", "empresa").where("estado", "==", "Activo")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.numEmpresas=this.numEmpresas+1
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
        db.collection("usuario").where("tipo", "==", "estudiante").where("estado", "==", "Activo")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.numEstudiantes=this.numEstudiantes+1
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
        db.collection("datos")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.numEncuestas=this.numEncuestas+1
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
        db.collection("solicitudes")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.numSolicitudes=this.numSolicitudes+1
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });

        
      
        
      
      
    },

    },
    mounted() {
        this.cargarDatos()


    },
    
  };
  </script>