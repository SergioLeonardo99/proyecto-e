<template>
  <navBar2></navBar2>
  


  <section  class="relative py-20 space-y-10">
        <!--Encabezadp-->
        <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-6/12 px-4"> 
              <h2 class="text-4xl font-semibold">Estadística</h2>
              <p class="text-lg leading-relaxed m-4 text-blueGray-500">
                Descripción
              </p>
              <div class="flex flex-wrap justify-center text-center mb-24">
   
          <label for="opciones" class="sr-only">Underline select</label>
          <select id="opciones" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-black dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
              <option selected="">Selecciona alguna estadística</option>
              
              <option value="1">Estadística 1</option>
              <option value="2">Estadística 2</option>
              <option value="3">Estadística 3</option>
              <option value="4">Estadística 4</option>
              <option value="5">Estadística 5</option>
              <option value="6">Estadística 6</option>
              <option value="7">Estadística 7</option>
              <option value="8">Estadística 8</option>
              <option value="9">Estadística 9</option>
          </select>

          </div>
            </div>
          </div>
        
        <!--Primero-->  
        <div class="container mx-auto px-4 flex lg:max-w-full   justify-center  ">
          <div class="items-center flex flex-wrap ">
            <div class="w-full md:w-6/12 lg:max-h-72  mb-12  xl:max-h-52/max-w-xs  ">
            <div class="relative h-0 overflow-hidden max-w-full w-full" style="padding-bottom: 56.25%">
              <pie-chart  loading="Cargando..."   :data="[['Conocimiento', puntajeConocimiento], ['Infraestructura', puntajeInfraestructura], ['Madurez', puntajeMadurez], ['Clientes', puntajeClientes], ['Proveedores', PuntajeProveedores]]"></pie-chart>
            </div>
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                
                <h3 class="text-3xl font-semibold">Puntaje Conocimiento comparado con otras empresas</h3>
                <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                  The extension comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go.
                </p>
                <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                        >
                          <i class="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-blueGray-500">
                          Carefully crafted components
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                        >
                          <i class="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-blueGray-500">
                          Amazing page examples
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                        >
                          <i class="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-blueGray-500">Dynamic components</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


 <div v-if="mostrar" class="flex flex-wrap space-x-10 space-y-10 justify-center" id="todo"> 
  <div class="flex justify-center space-x-10 space-y-10 "></div>
  <div class="flex justify-center ">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <div class=" justify-center border-2 border-cyan-800">
        <h2 class="text-2xl font-semibold"></h2>
        <pie-chart  loading="Cargando..."   :data="[['Conocimiento', puntajeConocimiento], ['Infraestructura', puntajeInfraestructura], ['Madurez', puntajeMadurez], ['Clientes', puntajeClientes], ['Proveedores', PuntajeProveedores]]"></pie-chart>
      </div>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Puntaje Conocimiento comparado con otras empresas</h5>
      <p class="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
    </div>
  </div>
</div>
<div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <div class=" justify-center border-2 border-cyan-800">
          <h2 class="text-2xl font-semibold"></h2>
          <column-chart   class="w-16 md:w-32 lg:w-48" :data="[['Su Empresa',puntajeConocimiento], ['Empresa 1', puntajeConocimiento1],['Empresa 2',puntajeConocimiento2],['Empresa 3',puntajeConocimiento3],['Empresa 4',puntajeConocimiento4]]" :colors="['#3f8880', '#20CBA4','#20CBA4','#20CBA4','#20CBA4']"></column-chart>
          
       </div>  
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Puntaje infraestructura comparado con otras empresas</h5>
      <p class="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
    </div>
  </div>
</div>
<div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <div class=" justify-center border-2 border-cyan-800">
          <h2 class="text-2xl font-semibold"></h2>
          <column-chart   class="w-16 md:w-32 lg:w-48" :data="[['Su Empresa',puntajeInfraestructura], ['Empresa 1', puntajeInfraestructura1],['Empresa 2',puntajeInfraestructura2],['Empresa 3',puntajeInfraestructura3],['Empresa 4',puntajeInfraestructura4]]" :colors="['#20CB3F', '#FC381D','#FC381D','#FC381D','#FC381D']"></column-chart>
          
        </div>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Puntaje Madurez comparado con otras empresas</h5>
      <p class="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
    </div>
  </div>
</div>
<div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <div class=" justify-center border-2 border-cyan-800">
           <h2 class="text-2xl font-semibold"></h2>
           <column-chart   class="w-16 md:w-32 lg:w-48" :data="[['Su Empresa',puntajeMadurez], ['Empresa 1', puntajeMadurez1],['Empresa 2',puntajeMadurez2],['Empresa 3',puntajeMadurez3],['Empresa 4',puntajeMadurez4]]" :colors="['#65FC23', '#2CE6C3','#2CE6C3','#2CE6C3','#2CE6C3']"></column-chart>
           
        </div>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Puntaje Clientes comparado con otras empresas</h5>
      <p class="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
    </div>
  </div>
</div>
<div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <div class=" justify-center border-2 border-cyan-800">  
            <h2 class="text-2xl font-semibold"></h2> 
            <column-chart   class="w-16 md:w-32 lg:w-48" :data="[['Su Empresa',puntajeClientes], ['Empresa 1', puntajeClientes1],['Empresa 2',puntajeClientes2],['Empresa 3',puntajeClientes3],['Empresa 4',puntajeClientes4]]" :colors="['#3f8880', '#a0fb0e','#a0fb0e','#a0fb0e','#a0fb0e']"></column-chart>
            
        </div>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Puntaje Proveedores comparado con otras empresas</h5>
      <p class="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
    </div>
  </div>
</div>
<div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <div class=" justify-center border-2 border-cyan-800">
           <h2 class="text-2xl font-semibold"></h2>
           <column-chart   class="w-16 md:w-32 lg:w-48" :data="[['Su Empresa',puntajeProveedores], ['Empresa 1', puntajeProveedores1],['Empresa 2',puntajeProveedores2],['Empresa 3',puntajeProveedores3],['Empresa 4',puntajeProveedores4]]" :colors="['#ff4e18', '#0a6e9a','#0a6e9a','#0a6e9a','#0a6e9a']"></column-chart>
           
        </div>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Puntaje Total comparado con otras empresas</h5>
      <p class="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
    </div>
  </div>
</div>
<div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <div class=" justify-center border-2 border-cyan-800">
          <column-chart   class="w-16 md:w-32 lg:w-48" :data="[['Su Empresa',puntajeTotal], ['Empresa 1', puntajeTotal1],['Empresa 2',puntajeTotal2],['Empresa 3',puntajeTotal3],['Empresa 4',puntajeTotal4]]" :colors="['#0667ce', '#06d986','#06d986','#06d986','#06d986']"></column-chart>
    </div>
    
      <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Puntaje Total</h5>
      <p class="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
    </div>
  </div>
</div>
<div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <div class=" justify-center border-2 border-cyan-800">
      <area-chart  class="w-16 md:w-32 lg:w-48"  :data="{
        '1': empresaPuntos[1], '2': empresaPuntos[2], '3': empresaPuntos[3], '4': empresaPuntos[4],'5': empresaPuntos[5], '6': empresaPuntos[6], '7': empresaPuntos[7], '8': empresaPuntos[8],'9': empresaPuntos[9],'10': empresaPuntos[10],
        '11': empresaPuntos[11], '12': empresaPuntos[12], '13': empresaPuntos[13], '14': empresaPuntos[14],'15': empresaPuntos[15], '16': empresaPuntos[16], '17': empresaPuntos[17], '18': empresaPuntos[18],'19': empresaPuntos[19],'20': empresaPuntos[20],
        '21': empresaPuntos[21], '22': empresaPuntos[22], '23': empresaPuntos[23], '24': empresaPuntos[24],'25': empresaPuntos[25], '26': empresaPuntos[26], '27': empresaPuntos[27], '28': empresaPuntos[28],'29': empresaPuntos[29],'30': empresaPuntos[30],
        '31': empresaPuntos[31], '32': empresaPuntos[32], '33': empresaPuntos[33], '34': empresaPuntos[34],'35': empresaPuntos[35], '36': empresaPuntos[36], '37': empresaPuntos[37], '38': empresaPuntos[38],'39': empresaPuntos[39],'40': empresaPuntos[40],
        '41': empresaPuntos[41], 
        
        
        }" xtitle="Preguntas" ytitle="Puntaje" :colors="['#00c6ab']"></area-chart>
    </div>
      <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Puntaje de la empresa</h5>
      <p class="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
    </div>
  </div>
</div>
<div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <div class=" justify-center border-2 border-cyan-800">
      <div v-if="textoEnviar != 'a'">
      <graficoPalabras  :textuki="textoEnviar" :key="textoEnviar"></graficoPalabras>
    </div>
    </div>
      <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Puntaje de la empresa</h5>
      <p class="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
    </div>
  </div>
</div>



</div>
<!-- <div v-if="textoEnviar != 'a'">
      <graficoPalabras  :textuki="textoEnviar" :key="textoEnviar"></graficoPalabras>
    </div> -->

<div class="flex flex-row justify-center font-semibold mx-auto my-4">
        
        <button @click="generar()" type="button" class="bg-grey-light hover:bg-grey text-grey-darkest font-bold inline-flex items-center my-auto text-gray-800 py-1 px-4 border-2 border-cyan-600 hover:bg-cyan-600 hover:cursor-pointer hover:text-white rounded-3xl mx-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>

        <span>Generar reporte</span>
        </button>

</div>
<!--
    <div class="flex flex-wrap space-x-4  space-y-10" id="pagina">
   
      <div class=" justify-center border-2 border-cyan-800">
        <h2 class="text-2xl font-semibold">Puntaje Conocimiento comparado con otras empresas</h2>
        <pie-chart  loading="Cargando..."   :data="[['Conocimiento', puntajeConocimiento], ['Infraestructura', puntajeInfraestructura], ['Madurez', puntajeMadurez], ['Clientes', puntajeClientes], ['Proveedores', PuntajeProveedores]]"></pie-chart>
      </div>
       <div class=" justify-center border-2 border-cyan-800">
          <h2 class="text-2xl font-semibold">Puntaje infraestructura comparado con otras empresas</h2>
          <column-chart   class="w-16 md:w-32 lg:w-48" :data="[['Su Empresa',puntajeConocimiento], ['Empresa 1', puntajeConocimiento1],['Empresa 2',puntajeConocimiento2],['Empresa 3',puntajeConocimiento3],['Empresa 4',puntajeConocimiento4]]" :colors="['#2C3333', '#20CBA4','#20CBA4','#20CBA4','#20CBA4']"></column-chart>
          
       </div>     
        <div class=" justify-center border-2 border-cyan-800">
          <h2 class="text-2xl font-semibold">Puntaje Madurez comparado con otras empresas</h2>
          <column-chart   class="w-16 md:w-32 lg:w-48" :data="[['Su Empresa',puntajeInfraestructura], ['Empresa 1', puntajeInfraestructura1],['Empresa 2',puntajeInfraestructura2],['Empresa 3',puntajeInfraestructura3],['Empresa 4',puntajeInfraestructura4]]" :colors="['#20CB3F', '#FC931D','#FC931D','#FC931D','#FC931D']"></column-chart>
          
        </div>
        <div class=" justify-center border-2 border-cyan-800">
           <h2 class="text-2xl font-semibold">Puntaje Clientes comparado con otras empresas</h2>
           <column-chart   class="w-16 md:w-32 lg:w-48" :data="[['Su Empresa',puntajeMadurez], ['Empresa 1', puntajeMadurez1],['Empresa 2',puntajeMadurez2],['Empresa 3',puntajeMadurez3],['Empresa 4',puntajeMadurez4]]" :colors="['#b00', '#666','#666','#666','#666']"></column-chart>
           
        </div>
        <div class=" justify-center border-2 border-cyan-800">  
            <h2 class="text-2xl font-semibold">Puntaje Proveedores comparado con otras empresas</h2> 
            <column-chart   class="w-16 md:w-32 lg:w-48" :data="[['Su Empresa',puntajeClientes], ['Empresa 1', puntajeClientes1],['Empresa 2',puntajeClientes2],['Empresa 3',puntajeClientes3],['Empresa 4',puntajeClientes4]]" :colors="['#b00', '#666','#666','#666','#666']"></column-chart>
            
        </div>
        <div class=" justify-center border-2 border-cyan-800">
           <h2 class="text-2xl font-semibold">Puntaje Total comparado con otras empresas</h2>
           <column-chart   class="w-16 md:w-32 lg:w-48" :data="[['Su Empresa',puntajeProveedores], ['Empresa 1', puntajeProveedores1],['Empresa 2',puntajeProveedores2],['Empresa 3',puntajeProveedores3],['Empresa 4',puntajeProveedores4]]" :colors="['#b00', '#666','#666','#666','#666']"></column-chart>
           
        </div>
        <div class=" justify-center border-2 border-cyan-800">
          <column-chart   class="w-16 md:w-32 lg:w-48" :data="[['Su Empresa',puntajeTotal], ['Empresa 1', puntajeTotal1],['Empresa 2',puntajeTotal2],['Empresa 3',puntajeTotal3],['Empresa 4',puntajeTotal4]]" :colors="['#b00', '#666','#666','#666','#666']"></column-chart>
          <scatter-chart  class="w-16 md:w-32 lg:w-48" :data="empresaPuntos" xtitle="Size" ytitle="Population"></scatter-chart>
        </div>

  </div>-->
 

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
          mostar: false,
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
        generar(){
         window.print();
        },
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


