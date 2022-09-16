<template>
  <navBar2></navBar2>
    <div>
      <pie-chart :data="[['Conocimiento', puntajeConocimiento], ['Infraestructura', puntajeInfraestructura], ['Madurez', puntajeMadurez], ['Clientes', puntajeClientes], ['Proveedores', PuntajeProveedores]]"></pie-chart>
      <h2>Puntaje Conocimiento comparado con otras empresas</h2>
      <column-chart   class="w-16 md:w-32 lg:w-48" :data="[['Su Empresa',puntajeConocimiento], ['Empresa 1', puntajeConocimiento1],['Empresa 2',puntajeConocimiento2],['Empresa 3',puntajeConocimiento3],['Empresa 4',puntajeConocimiento4]]" :colors="['#2C3333', '#E7F6F2','#E7F6F2','#E7F6F2','#E7F6F2']"></column-chart>
      <h2>Puntaje infraestructura comparado con otras empresas</h2>
      <column-chart   class="w-16 md:w-32 lg:w-48" :data="[['Su Empresa',puntajeInfraestructura], ['Empresa 1', puntajeInfraestructura1],['Empresa 2',puntajeInfraestructura2],['Empresa 3',puntajeInfraestructura3],['Empresa 4',puntajeInfraestructura4]]" :colors="['#b00', '#666','#666','#666','#666']"></column-chart>
      <h2>Puntaje Madurez comparado con otras empresas</h2>
      <column-chart   class="w-16 md:w-32 lg:w-48" :data="[['Su Empresa',puntajeMadurez], ['Empresa 1', puntajeMadurez1],['Empresa 2',puntajeMadurez2],['Empresa 3',puntajeMadurez3],['Empresa 4',puntajeMadurez4]]" :colors="['#b00', '#666','#666','#666','#666']"></column-chart>
      <h2>Puntaje Clientes comparado con otras empresas</h2>
      <column-chart   class="w-16 md:w-32 lg:w-48" :data="[['Su Empresa',puntajeClientes], ['Empresa 1', puntajeClientes1],['Empresa 2',puntajeClientes2],['Empresa 3',puntajeClientes3],['Empresa 4',puntajeClientes4]]" :colors="['#b00', '#666','#666','#666','#666']"></column-chart>
      <h2>Puntaje Proveedores comparado con otras empresas</h2>
      <column-chart   class="w-16 md:w-32 lg:w-48" :data="[['Su Empresa',puntajeProveedores], ['Empresa 1', puntajeProveedores1],['Empresa 2',puntajeProveedores2],['Empresa 3',puntajeProveedores3],['Empresa 4',puntajeProveedores4]]" :colors="['#b00', '#666','#666','#666','#666']"></column-chart>
      <h2>Puntaje Total comparado con otras empresas</h2>
      <column-chart   class="w-16 md:w-32 lg:w-48" :data="[['Su Empresa',puntajeTotal], ['Empresa 1', puntajeTotal1],['Empresa 2',puntajeTotal2],['Empresa 3',puntajeTotal3],['Empresa 4',puntajeTotal4]]" :colors="['#b00', '#666','#666','#666','#666']"></column-chart>
      <scatter-chart  class="w-16 md:w-32 lg:w-48" :data="empresaPuntos" xtitle="Size" ytitle="Population"></scatter-chart>
    </div>
  
  </template>
  <script>
  
  import firebase from "../components/firebase/initFirebase";
  import "firebase/firestore";
  import navBar2 from '../components/views/elementos/navbar2.vue'
  const db = firebase.firestore();
    
    
    export default {
      components: {
        navBar2
    },
      data() {
        return {
          puntajeClientes: null,
          puntajeConocimiento: null,
          puntajeInfraestructura: null,
          puntajeMadurez: null,
          puntajeProveedores: null,
          puntajeTotal: null,
          
          puntajeClientes1: null,
          puntajeConocimiento1: null,
          puntajeInfraestructura1: null,
          puntajeMadurez1: null,
          puntajeProveedores1: null,
          puntajeTotal1: null,

          puntajeClientes2: null,
          puntajeConocimiento2: null,
          puntajeInfraestructura2: null,
          puntajeMadurez2: null,
          puntajeProveedores2: null,
          puntajeTotal2: null,

          puntajeClientes3: null,
          puntajeConocimiento3: null,
          puntajeInfraestructura3: null,
          puntajeMadurez3: null,
          puntajeProveedores3: null,
          puntajeTotal3: null,

          puntajeClientes4: null,
          puntajeConocimiento4: null,
          puntajeInfraestructura4: null,
          puntajeMadurez4: null,
          puntajeProveedores4: null,
          puntajeTotal4: null,
          empresaPuntos: [[174.0, 80.0], [176.5, 82.3], [175.0, 81]],

        
        
        }
      },
      methods: {
        compruebaSesion(){
          this.nitEmpresa =$cookies.get("nit")
            if (this.nitEmpresa === null){
                this.$router.push('/');
            }
        },
        recovery(){
            var docRef = db.collection("datos").doc(this.nitEmpresa);
                var getOptions = {
                //source: 'cache'
                };
                docRef.get(getOptions).then((doc) => {
        // Document was found in the cache. If no cached document exists,
        // an error will be returned to the 'catch' block below.
                    this.Empleados=doc.data().empleados
                    this.Equipos=doc.data().equipos
                    this.nitEmpresa=doc.data().nit

                    this.puntajeClientes=doc.data().puntajeClientes
                    this.puntajeConocimiento=doc.data().puntajeConocimiento
                    this.puntajeInfraestructura=doc.data().puntajeInfraestructura
                    this.puntajeMadurez=doc.data().puntajeMadurez
                    this.puntajeProveedores=doc.data().puntajeProveedores
                    this.puntajeTotal=doc.data().puntajeTotal
                }).catch((error) => {
                   console.log("Sesion terminada regresando al login", error);
                   
    
                });
                
                var contador=1;
                db.collection("datos").where("nit", "!=", this.nitEmpresa).limit(4)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {

                        if(contador == 1){
                          this.puntajeClientes1=doc.data().puntajeClientes
                          this.puntajeConocimiento1=doc.data().puntajeConocimiento
                          this.puntajeInfraestructura1=doc.data().puntajeInfraestructura
                          this.puntajeMadurez1=doc.data().puntajeMadurez
                          this.puntajeProveedores1=doc.data().puntajeProveedores
                          this.puntajeTotal1=doc.data().puntajeTotal
                          contador=contador+1

                        }if(contador==2){
                          this.puntajeClientes2=doc.data().puntajeClientes
                          this.puntajeConocimiento2=doc.data().puntajeConocimiento
                          this.puntajeInfraestructura2=doc.data().puntajeInfraestructura
                          this.puntajeMadurez2=doc.data().puntajeMadurez
                          this.puntajeProveedores2=doc.data().puntajeProveedores
                          this.puntajeTotal2=doc.data().puntajeTotal
                          contador=contador+1

                        }if(contador==3){
                          this.puntajeClientes3=doc.data().puntajeClientes
                          this.puntajeConocimiento3=doc.data().puntajeConocimiento
                          this.puntajeInfraestructura3=doc.data().puntajeInfraestructura
                          this.puntajeMadurez3=doc.data().puntajeMadurez
                          this.puntajeProveedores3=doc.data().puntajeProveedores
                          this.puntajeTotal3=doc.data().puntajeTotal
                          contador=contador+1

                        }if(contador==4){
                          this.puntajeClientes4=doc.data().puntajeClientes
                          this.puntajeConocimiento4=doc.data().puntajeConocimiento
                          this.puntajeInfraestructura4=doc.data().puntajeInfraestructura
                          this.puntajeMadurez4=doc.data().puntajeMadurez
                          this.puntajeProveedores4=doc.data().puntajeProveedores
                          this.puntajeTotal4=doc.data().puntajeTotal
                          contador=contador+1

                        }
                        // doc.data() is never undefined for query doc snapshots

                        //console.log(doc.id, " => ", doc.data());
                    });
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
        },


    
        
      },
      mounted() {
        this.compruebaSesion()
        this.recovery()
      }
    }
    
    
    
    </script>