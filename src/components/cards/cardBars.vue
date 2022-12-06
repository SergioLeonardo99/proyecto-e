<template>


  <div class="flex flex-col justify-center h-full">

    <body
      class="bg-gray-100 text-gray-900 tracking-wider relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700 leading-normal">
      <div
  class=" text-gray-900 tracking-wider    break-words w-full mb-6 shadow-lg rounded    overflow-hidden  lg:max-w-full 2xl:max-w-full">
  <div class="container w-full md:w-1/1 xl:w-6/20  mx-auto px-2 lg:max-w-full 2xl:max-w-full ">
    <div class="flex flex-wrap justify-center text-center mb-14">
      <div class="flex flex-wrap justify-center text-center mb-14">
        <div class="p-10 mt-6 lg:mt-0 rounded shadow bg-white">
          <div class="overflow-x-auto p-3">
            <header class="px-5 py-4">
              <div
                class="letra   text-4xl flex space-x-1 items-center text-center letra leading-tight text-black justifi-text-center">
                Estadística áreas de la empresa </div>


            </header>
            <select v-model="tipoGrafico"
              class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-black dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
              <option disabled value="">Seleccione el tipo de gráfica</option>

              <option>Nivel General</option>
              <option>Nivel Conocimiento</option>
              <option>Nivel Infraestructura</option>
              <option>Nivel Madurez</option>
              <option>Nivel Clientes</option>
              <option>Nivel Proveedores</option>
              <option>Nivel Total</option>
              <option>Complementos y cambios tecnológicos</option>
            </select>
            <div class="container mx-auto px-0 flex lg:max-w-full   justify-center  ">
          <div class="items-center flex flex-wrap ">
            <div class="w-full md:w-6/12 lg:max-h-72  mb-12  xl:max-h-52/max-w-xs  ">
              <div class="relative h-0 overflow-hidden max-w-full w-full" style="padding-bottom: 80.25%">
                <div v-if="tipoGrafico == 'Nivel General'">
                  <pie-chart loading="Cargando..."
                  :data="[['Conocimiento', puntajeConocimiento], ['Infraestructura', puntajeInfraestructura], ['Madurez', puntajeMadurez], ['Clientes', puntajeClientes], ['Proveedores', puntajeProveedores]]">
                  </pie-chart>
                </div>
                <div v-if="tipoGrafico == 'Nivel Conocimiento'">
                  <bar-chart class="w-16 md:w-32 lg:w-48"
                    :data="[['Promedio empresas', puntajeConocimiento], [nombre1, puntajeConocimiento1], [nombre2, puntajeConocimiento2], [nombre3, puntajeConocimiento3], [nombre4, puntajeConocimiento4]]"
                    :colors="['#3f8880', '#4EF1BB', '#4EF1BB', '#4EF1BB', '#4EF1BB']"></bar-chart>
                </div>
                <div v-if="tipoGrafico == 'Nivel Infraestructura'">
                  <bar-chart class="w-16 md:w-32 lg:w-48"
                    :data="[['Promedio empresas', puntajeInfraestructura], [nombre1, puntajeInfraestructura1], [nombre2, puntajeInfraestructura2], [nombre3, puntajeInfraestructura3], [nombre4, puntajeInfraestructura4]]"
                    :colors="['#3f8880', '#4EF1BB', '#4EF1BB', '#4EF1BB', '#4EF1BB']"></bar-chart>
                </div>

                <div v-if="tipoGrafico == 'Nivel Madurez'">
                  <bar-chart class="w-16 md:w-32 lg:w-48"
                    :data="[['Promedio empresas', puntajeMadurez], [nombre1, puntajeMadurez1], [nombre2, puntajeMadurez2], [nombre3, puntajeMadurez3], [nombre4, puntajeMadurez4]]"
                    :colors="['#3f8880', '#4EF1BB', '#4EF1BB', '#4EF1BB', '#4EF1BB']"></bar-chart>

                </div>
                <div v-if="tipoGrafico == 'Nivel Clientes'">
                  <bar-chart class="w-16 md:w-32 lg:w-48"
                    :data="[['Promedio empresas', puntajeClientes], [nombre1, puntajeClientes1], [nombre2, puntajeClientes2], [nombre3, puntajeClientes3], [nombre4, puntajeClientes4]]"
                    :colors="['#3f8880', '#4EF1BB', '#4EF1BB', '#4EF1BB', '#4EF1BB']"></bar-chart>
       </div>
                <div v-if="tipoGrafico == 'Nivel Proveedores'">
                  <bar-chart class="w-16 md:w-32 lg:w-48"
                    :data="[['Promedio empresas', puntajeProveedores], [nombre1, puntajeProveedores1], [nombre2, puntajeProveedores2], [nombre3, puntajeProveedores3], [nombre4, puntajeProveedores4]]"
                    :colors="['#3f8880', '#4EF1BB', '#4EF1BB', '#4EF1BB', '#4EF1BB']"></bar-chart>

                </div>


                <div v-if="tipoGrafico == 'Nivel Total'">
                  <bar-chart class="w-16 md:w-32 lg:w-48"
                  :data="[['Promedio empresas', puntajeTotal], [nombre1, puntajeTotal1], [nombre2, puntajeTotal2], [nombre3, puntajeTotal3], [nombre4, puntajeTotal4]]"
                    :colors="['#3f8880', '#06d986', '#06d986', '#06d986', '#06d986']"></bar-chart>

                </div>
                <div v-if="tipoGrafico == 'Complementos y cambios tecnológicos'">
                  <graficoPalabras :textuki="textoEnviar" :key="textoEnviar"></graficoPalabras>
                </div>

              </div>
            </div>
            <div v-if="tipoGrafico == 'Nivel General'" class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">

                <h3 class="text-3xl font-semibold">Nivel general basado en la encuesta:</h3>
                <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Nivel evaluado en la encuesta con 5 áreas clave para su empresa, Conocimiento general de la empresa,
                  Infraestructura tecnológica, Madurez de los procesos, relaciones con los clientes y relaciones con los
                  proveedores.
                </p>

              </div>
            </div>
            <div v-if="tipoGrafico == 'Nivel Conocimiento'" class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">

                <h3 class="text-3xl font-semibold">Nivel conocimiento general comparado con otras empresas del sector:
                </h3>
                <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                  El conocimiento general de la empresa se enfoca en resaltar los aspectos generales de la empresa,
                  enfocándose en determinar su estado con respecto a las otras empresas, para así generar una base
                  solida en la cual se puede trabajar para seguir con el ciclo de mejora continua.
                  <br>
                  Su empresa de encuentra en siguiente nivel de 29 puntos posibles, su empresa se encuentra en: {{puntajeConocimiento}} puntos.
                  <br>
                  Rangos:
                  <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-600 mr-3"
                        >
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        </span>
                      </div>
                      <div>
                        <h4>  
                          1-7
                        </h4>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-500 bg-yellow-500 mr-3"
                        >
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        </span>
                      </div>
                      <div>
                        <h4>
                          8-15
                        </h4>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-500 bg-green-500 mr-3"
                        >
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        </span>
                      </div>
                      <div>
                        <h4 >
                          15-29
                        </h4>
                      </div>
                    </div>
                </p>

              </div>
            </div>
            <div v-if="tipoGrafico == 'Nivel Infraestructura'" class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">

                <h3 class="text-3xl font-semibold">Nivel Infraestructura Tecnológica comparado con otras empresas del
                  sector:</h3>
                <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                  La infraestructura tecnológica permite evidenciar en que nivel se encuentra la empresa con respecto a
                  el
                  software que utilice para mejorar sus procesos internos, de igual manera en este nivel se evalúan los
                  diferentes tipos de maquinaria que se utilicen.
                  <br>
                  Su empresa de encuentra en siguiente nivel de 33 puntos posibles, su empresa se encuentra en: {{puntajeInfraestructura}} puntos.
                  <br>
                  Rangos:
                  <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-600 mr-3"
                        >
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        </span>
                      </div>
                      <div>
                        <h4>  
                          1-2
                        </h4>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-500 bg-yellow-500 mr-3"
                        >
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        </span>
                      </div>
                      <div>
                        <h4>
                          3-16
                        </h4>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-500 bg-green-500 mr-3"
                        >
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        </span>
                      </div>
                      <div>
                        <h4 >
                        17-33
                        </h4>
                      </div>
                    </div>
                
                </p>

              </div>
            </div>
            <div v-if="tipoGrafico == 'Nivel Madurez'" class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">

                <h3 class="text-3xl font-semibold">Nivel Madurez de procesos comparado con otras empresas del sector:
                </h3>
                <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                  La madurez de procesos busca determinar el nivel de implementación documental de la empresa, las
                  certificaciones aplicadas a la empresa, el número de asesorías en diversos temas de interés, y
                  finalmente
                  su interés con respecto a las capacitaciones futuras.
                  <br>
                  Su empresa de encuentra en siguiente nivel de 14 puntos posibles, su empresa se encuentra en: {{puntajeMadurez}} puntos.
                  <br>
                  Rangos:
                 
                  <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-600 mr-3"
                        >
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        </span>
                      </div>
                      <div>
                        <h4>  
                          1-2
                        </h4>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-500 bg-yellow-500 mr-3"
                        >
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        </span>
                      </div>
                      <div>
                        <h4>
                         3-7
                        </h4>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-500 bg-green-500 mr-3"
                        >
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        </span>
                      </div>
                      <div>
                        <h4 >
                        8-14
                        </h4>
                      </div>
                    </div>
                
                
                
                </p>

              </div>
            </div>
            <div v-if="tipoGrafico == 'Nivel Clientes'" class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">

                <h3 class="text-3xl font-semibold">Nivel Relaciones con los clientes comparado con otras empresas del
                  sector:</h3>
                <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Las relaciones con los clientes buscan evaluar la cantidad de clientes, los formatos que utilizan para
                  el
                  intercambio de información y la percepción de las empresas al momento de interactuar con los clientes.
                  <br>
                  Su empresa de encuentra en siguiente nivel de 25 puntos posibles, su empresa se encuentra en: {{puntajeClientes}} puntos.
                  <br>
                  Rangos:
                
                  <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-600 mr-3"
                        >
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        </span>
                      </div>
                      <div>
                        <h4>  
                          1-2
                        </h4>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-500 bg-yellow-500 mr-3"
                        >
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        </span>
                      </div>
                      <div>
                        <h4>
                          3-12
                        </h4>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-500 bg-green-500 mr-3"
                        >
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        </span>
                      </div>
                      <div>
                        <h4 >
                        13-25
                        </h4>
                      </div>
                    </div>
                
                </p>

              </div>
            </div>
            <div v-if="tipoGrafico == 'Nivel Proveedores'" class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">

                <h3 class="text-3xl font-semibold">Nivel relaciones con los proveedores comparado con otras empresas del
                  sector:</h3>
                <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Las relaciones con los proveedores buscan evaluar la cantidad de proveedores, los formatos que
                  utilizan
                  para el intercambio de información junto con el tiempo respectivo en el que se utilizan finalmente se
                  mide
                  la percepción de las empresas al momento de interactuar con los clientes.
                  <br>
                  Su empresa de encuentra en siguiente nivel de 47 puntos posibles, su empresa se encuentra en: {{puntajeProveedores}} puntos.
                  <br>
                  Rangos:
                 
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-600 mr-3"
                        >
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        </span>
                      </div>
                      <div>
                        <h4>  
                          1-2
                        </h4>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-500 bg-yellow-500 mr-3"
                        >
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        </span>
                      </div>
                      <div>
                        <h4>
                          3-22
                        </h4>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-500 bg-green-500 mr-3"
                        >
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        </span>
                      </div>
                      <div>
                        <h4 >
                          23-47
                        </h4>
                      </div>
                    </div>
                  
                </p>

              </div>
            </div>
            <div v-if="tipoGrafico == 'Nivel Total'" class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">

                <h3 class="text-3xl font-semibold">Nivel Total comparado con otras empresas del sector:</h3>
                <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Evalúa en conjunto los 5 niveles anteriores, para sumar un ponderado y realizar una comparación con
                  respecto a otras empresas del sector.
                
                </p>

              </div>
            </div>
            <div v-if="tipoGrafico == 'Complementos y cambios tecnológicos'"
              class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">

                <h3 class="text-3xl font-semibold">Complementos y cambios tecnológicos:</h3>
                <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Se puede observar que palabra en el formulario presenta una mayor cantidad de frecuencia, para
                  observar el
                  interés general de la empresa.
                </p>

              </div>
            </div>
          </div>
        </div>

          </div>
        </div>




      </div>

      <!--Primero-->



    </div>


  </div>
  <div class="flex flex-row justify-center font-semibold mx-auto my-4">


  </div>


</div>


    </body>


  </div>







</template>
<script>
import { shallowRef } from "vue";
import firebase from "../firebase/initFirebase";
import "firebase/firestore";
import graficoPalabras from './cardWordCloud.vue'
import Seguridad from "../js/encrypt.js";


const safe = new Seguridad();
const db = firebase.firestore();





export default {
  components: {
    graficoPalabras
    //'graficoPalabras': () => import('../views/graficoPalabras.vue'),


  },
  data() {
    return {
      tipoGrafico: '',
      mostrar: true,
      puntajeClientes: null,
      puntajeConocimiento: null,
      puntajeInfraestructura: null,
      puntajeMadurez: null,
      puntajeProveedores: null,
      puntajeTotal: null,

      nombre1: null,
      puntajeClientes1: null,
      puntajeConocimiento1: null,
      puntajeInfraestructura1: null,
      puntajeMadurez1: null,
      puntajeProveedores1: null,
      puntajeTotal1: null,

      nombre2: null,
      puntajeClientes2: null,
      puntajeConocimiento2: null,
      puntajeInfraestructura2: null,
      puntajeMadurez2: null,
      puntajeProveedores2: null,
      puntajeTotal2: null,

      nombre3: null,
      puntajeClientes3: null,
      puntajeConocimiento3: null,
      puntajeInfraestructura3: null,
      puntajeMadurez3: null,
      puntajeProveedores3: null,
      puntajeTotal3: null,

      nombre4: null,
      puntajeClientes4: null,
      puntajeConocimiento4: null,
      puntajeInfraestructura4: null,
      puntajeMadurez4: null,
      puntajeProveedores4: null,
      puntajeTotal4: null,

      empresaPuntos: [],
      totalPuntos: [[1, 1], [2, 1], [3, 1], [4, 4]],
      textoEnviar: '',
      pruebita: [],
      cambio2: ''

    }
  },
  methods: {

    recovery() {

      var contador = 1;
      db.collection("datos").limit(50)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.puntajeClientes = this.puntajeClientes + doc.data().puntajeClientes
            this.puntajeConocimiento = this.puntajeConocimiento + doc.data().puntajeClientes
            this.puntajeInfraestructura = this.puntajeInfraestructura + doc.data().puntajeInfraestructura
            this.puntajeMadurez = this.puntajeMadurez + doc.data().puntajeMadurez
            this.puntajeProveedores = this.puntajeProveedores + doc.data().puntajeProveedores
            this.puntajeTotal = this.puntajeTotal + doc.data().puntajeTotal
            this.textoEnviar =this.textoEnviar+doc.data().comentarios + ' '

            if (contador == 1) {
              this.puntajeClientes1 = doc.data().puntajeClientes
              this.puntajeConocimiento1 = doc.data().puntajeConocimiento
              this.puntajeInfraestructura1 = doc.data().puntajeInfraestructura
              this.puntajeMadurez1 = doc.data().puntajeMadurez
              this.puntajeProveedores1 = doc.data().puntajeProveedores
              this.puntajeTotal1 = doc.data().puntajeTotal
              this.nombre1 = doc.data().nit


            } if (contador == 2) {
              this.puntajeClientes2 = doc.data().puntajeClientes
              this.puntajeConocimiento2 = doc.data().puntajeConocimiento
              this.puntajeInfraestructura2 = doc.data().puntajeInfraestructura
              this.puntajeMadurez2 = doc.data().puntajeMadurez
              this.puntajeProveedores2 = doc.data().puntajeProveedores
              this.puntajeTotal2 = doc.data().puntajeTotal
              this.nombre2 = doc.data().nit


            } if (contador == 3) {
              this.puntajeClientes3 = doc.data().puntajeClientes
              this.puntajeConocimiento3 = doc.data().puntajeConocimiento
              this.puntajeInfraestructura3 = doc.data().puntajeInfraestructura
              this.puntajeMadurez3 = doc.data().puntajeMadurez
              this.puntajeProveedores3 = doc.data().puntajeProveedores
              this.puntajeTotal3 = doc.data().puntajeTotal
              this.nombre3 = doc.data().nit

            } if (contador == 4) {
              this.puntajeClientes4 = doc.data().puntajeClientes
              this.puntajeConocimiento4 = doc.data().puntajeConocimiento
              this.puntajeInfraestructura4 = doc.data().puntajeInfraestructura
              this.puntajeMadurez4 = doc.data().puntajeMadurez
              this.puntajeProveedores4 = doc.data().puntajeProveedores
              this.puntajeTotal4 = doc.data().puntajeTotal
              this.nombre4 = doc.data().nit
            }
            // doc.data() is never undefined for query doc snapshots

            //console.log(doc.id, " => ", doc.data());
            contador = contador + 1
          });
          this.calculin(contador)
        })
        .catch((error) => {
          //console.log("Error getting documents: ", error);
        });


    },
    calculin(contador) {
      this.puntajeClientes = this.puntajeClientes / contador
      this.puntajeConocimiento = this.puntajeConocimiento / contador
      this.puntajeInfraestructura = this.puntajeInfraestructura / contador
      this.puntajeMadurez = this.puntajeMadurez / contador
      this.puntajeProveedores = this.puntajeProveedores / contador
      this.puntajeTotal = this.puntajeTotal / contador
    }






  },


  mounted() {
    this.recovery()

  }
}



</script>
  