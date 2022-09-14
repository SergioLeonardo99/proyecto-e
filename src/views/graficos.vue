<template>
    <div>
      
      <pie-chart class="w-16 md:w-32 lg:w-48"  :data="[['Empleados',Empleados], ['Equipos', Equipos],['NitEmpresa',nitEmpresa]]" ></pie-chart>
      <column-chart  class="w-16 md:w-32 lg:w-48" :data="[['Empleados',Empleados], ['Equipos', Equipos],['NitEmpresa',nitEmpresa]]"></column-chart>
      <scatter-chart  class="w-16 md:w-32 lg:w-48" :data="[[174.0, 80.0], [176.5, 82.3], [175.0, 81]]" xtitle="Size" ytitle="Population"></scatter-chart>
    </div>
  
  </template>
  <script>
  
  import db from "../components/firebase/initFirebase";
    
    
    export default {
      data() {
        return {
          Empleados:null,
          Equipos:null,
          nitEmpresa: null
        
        
        }
      },
      methods: {
        recovery(){
            var docRef = db.collection("datos").doc("12345");
                var getOptions = {
                //source: 'cache'
                };
                docRef.get(getOptions).then((doc) => {
        // Document was found in the cache. If no cached document exists,
        // an error will be returned to the 'catch' block below.
                    this.Empleados=doc.data().empleados
                    this.Equipos=doc.data().equipos
                    this.nitEmpresa=doc.data().nit
               
    
                    
    
                }).catch((error) => {
                   console.log("Sesion terminada regresando al login", error);
                   
    
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