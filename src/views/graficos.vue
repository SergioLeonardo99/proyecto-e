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
      <area-chart  class="w-16 md:w-32 lg:w-48"  :data="{
        '1': empresaPuntos[1], '2': empresaPuntos[2], '3': empresaPuntos[3], '4': empresaPuntos[4],'5': empresaPuntos[5], '6': empresaPuntos[6], '7': empresaPuntos[7], '8': empresaPuntos[8],'9': empresaPuntos[9],'10': empresaPuntos[10],
        '11': empresaPuntos[11], '12': empresaPuntos[12], '13': empresaPuntos[13], '14': empresaPuntos[14],'15': empresaPuntos[15], '16': empresaPuntos[16], '17': empresaPuntos[17], '18': empresaPuntos[18],'19': empresaPuntos[19],'20': empresaPuntos[20],
        '21': empresaPuntos[21], '22': empresaPuntos[22], '23': empresaPuntos[23], '24': empresaPuntos[24],'25': empresaPuntos[25], '26': empresaPuntos[26], '27': empresaPuntos[27], '28': empresaPuntos[28],'29': empresaPuntos[29],'30': empresaPuntos[30],
        '31': empresaPuntos[31], '32': empresaPuntos[32], '33': empresaPuntos[33], '34': empresaPuntos[34],'35': empresaPuntos[35], '36': empresaPuntos[36], '37': empresaPuntos[37], '38': empresaPuntos[38],'39': empresaPuntos[39],'40': empresaPuntos[40],
        '41': empresaPuntos[41], 
        
        
        }" xtitle="Preguntas" ytitle="Puntaje"></area-chart>
        <pie-chart :data="pruebita" :key="cambio2"></pie-chart>
        
      
      
    </div>
    <div v-if="textoEnviar != 'a'">
      <graficoPalabras  :textuki="textoEnviar" :key="textoEnviar"></graficoPalabras>
    </div>
    
    
  
  </template>
  <script>
  import { shallowRef } from "vue";
  import firebase from "../components/firebase/initFirebase";
  import "firebase/firestore";
  import navBar2 from '../components/views/elementos/navbar2.vue'
  import graficoPalabras from '../views/graficoPalabras.vue'
  import Seguridad from "../components/js/encrypt.js";
  const safe = new Seguridad();
  const db = firebase.firestore();

  
 
 

    export default {
      components: {
        navBar2,
        graficoPalabras
        //'graficoPalabras': () => import('../views/graficoPalabras.vue'),
        

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
          
          empresaPuntos: [],
          totalPuntos: [[1,1],[2,1],[3,1],[4,4]],
          textoEnviar: 'a',
          pruebita: [],
          cambio2: ''
        
        }
      },
      methods: {
        
        recovery(){
          this.nitEmpresa =safe.decrypt($cookies.get(safe.cipher('nit'))).toString()
            var docRef = db.collection("datos").doc(this.nitEmpresa);
                var getOptions = {
                //source: 'cache'
                };
                docRef.get(getOptions).then(async (doc) => {
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
                    this.pruebita.push(['Clientes',doc.data().puntajeClientes])
                    this.pruebita.push(['Conocimiento',doc.data().puntajeConocimiento])
                    this.cambio2='heloudar'
                    var i=0
                    this.empresaPuntos.push(1)
                    this.empresaPuntos.push(parseInt(doc.data().pregunta1['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta2['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta3['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta4['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta5['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta6['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta7['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta8['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta9['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta10['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta11['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta12['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta13['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta14['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta15['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta16['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta17['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta18['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta19['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta20['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta21['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta22['respuesta'].length))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta23['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta24['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta25['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta26['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta27['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta28['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta29['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta30['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta31['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta32['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta33['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta34['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta35['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta36['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta37['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta38['respuesta']))
                    this.empresaPuntos.push(6)
                    this.empresaPuntos.push(parseInt(doc.data().pregunta40['respuesta']))
                    this.empresaPuntos.push(parseInt(doc.data().pregunta41['respuesta']))
                    this.textoEnviar = doc.data().comentarios+' '+doc.data().pregunta1['complemento']
                    console.log(this.textoEnviar)
                    console.log(doc.data().comentarios)

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
                          

                        }if(contador==2){
                          this.puntajeClientes2=doc.data().puntajeClientes
                          this.puntajeConocimiento2=doc.data().puntajeConocimiento
                          this.puntajeInfraestructura2=doc.data().puntajeInfraestructura
                          this.puntajeMadurez2=doc.data().puntajeMadurez
                          this.puntajeProveedores2=doc.data().puntajeProveedores
                          this.puntajeTotal2=doc.data().puntajeTotal
                          

                        }if(contador==3){
                          this.puntajeClientes3=doc.data().puntajeClientes
                          this.puntajeConocimiento3=doc.data().puntajeConocimiento
                          this.puntajeInfraestructura3=doc.data().puntajeInfraestructura
                          this.puntajeMadurez3=doc.data().puntajeMadurez
                          this.puntajeProveedores3=doc.data().puntajeProveedores
                          this.puntajeTotal3=doc.data().puntajeTotal
                          

                        }if(contador==4){
                          this.puntajeClientes4=doc.data().puntajeClientes
                          this.puntajeConocimiento4=doc.data().puntajeConocimiento
                          this.puntajeInfraestructura4=doc.data().puntajeInfraestructura
                          this.puntajeMadurez4=doc.data().puntajeMadurez
                          this.puntajeProveedores4=doc.data().puntajeProveedores
                          this.puntajeTotal4=doc.data().puntajeTotal
                          

                        }
                        // doc.data() is never undefined for query doc snapshots

                        //console.log(doc.id, " => ", doc.data());
                        contador=contador+1
                    });
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
        },
        
        


    
        
      },
      
      
      mounted() {
        this.recovery()
        
      }
    }
    
    
    
    </script>