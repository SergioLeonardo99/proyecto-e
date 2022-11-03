<template>



  <section class="relative py-20 space-y-10">
    <!--Encabezadp-->
    <div class="flex flex-wrap justify-center text-center mb-14">
      <div class="w-full lg:w-6/12 px-4">
        <h2 class="text-4xl font-semibold">Estadística</h2>
        <p class="text-lg leading-relaxed m-4 text-blueGray-500">
          Descripción
        </p>
        <div class="flex flex-wrap justify-center text-center mb-14">


          <select v-model="tipoGrafico"
            class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-black dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
            <option disabled value="">Seleccione el tipo de grafica</option>

            <option>Nivel General</option>
            <option>Nivel Conocimiento</option>
            <option>Nivel Infraestructura</option>
            <option>Nivel Madurez</option>
            <option>Nivel Clientes</option>
            <option>Nivel Proveedores</option>
            <option>Nivel Total</option>}
          </select>
            
        </div>
         <!--Primero-->
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
                :colors="['#3f8880', '#20CBA4', '#20CBA4', '#20CBA4', '#20CBA4']"></bar-chart>
            </div>
            <div v-if="tipoGrafico == 'Nivel Infraestructura'">
              <bar-chart class="w-16 md:w-32 lg:w-48"
                :data="[['Promedio empresas', puntajeInfraestructura], [nombre1, puntajeInfraestructura1], [nombre2, puntajeInfraestructura2], [nombre3, puntajeInfraestructura3], [nombre4, puntajeInfraestructura4]]"
                :colors="['#20CB3F', '#FC381D', '#FC381D', '#FC381D', '#FC381D']"></bar-chart>
            </div>

            <div v-if="tipoGrafico == 'Nivel Madurez'">
              <bar-chart class="w-16 md:w-32 lg:w-48"
                :data="[['Promedio empresas', puntajeMadurez], [nombre1, puntajeMadurez1], [nombre2, puntajeMadurez2], [nombre3, puntajeMadurez3], [nombre4, puntajeMadurez4]]"
                :colors="['#65FC23', '#2CE6C3', '#2CE6C3', '#2CE6C3', '#2CE6C3']"></bar-chart>

            </div>
            <div v-if="tipoGrafico == 'Nivel Clientes'">
              <bar-chart class="w-16 md:w-32 lg:w-48"
                :data="[['Promedio empresas', puntajeClientes], [nombre1, puntajeClientes1], [nombre2, puntajeClientes2], [nombre3, puntajeClientes3], [nombre4, puntajeClientes4]]"
                :colors="['#3f8880', '#a0fb0e', '#a0fb0e', '#a0fb0e', '#a0fb0e']"></bar-chart>

            </div>
            <div v-if="tipoGrafico == 'Nivel Proveedores'">
              <bar-chart class="w-16 md:w-32 lg:w-48"
                :data="[['Promedio empresas', puntajeProveedores], [nombre1, puntajeProveedores1], [nombre2, puntajeProveedores2], [nombre3, puntajeProveedores3], ['Empresa 4', puntajeProveedores4]]"
                :colors="['#ff4e18', '#0a6e9a', '#0a6e9a', '#0a6e9a', '#0a6e9a']"></bar-chart>

            </div>


            <div v-if="tipoGrafico == 'Nivel Total'">
              <bar-chart class="w-16 md:w-32 lg:w-48"
                :data="[['Promedio empresas', puntajeTotal], [nombre1, puntajeTotal1], [nombre2, puntajeTotal2], [nombre3, puntajeTotal3], [nombre4, puntajeTotal4]]"
                :colors="['#0667ce', '#06d986', '#06d986', '#06d986', '#06d986']"></bar-chart>

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

            <h3 class="text-3xl font-semibold">Nivel conocimiento general comparado con otras empresas del sector:</h3>
            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
              El conocimiento general de la empresa se enfoca en resaltar los aspectos generales de la empresa,
              enfocándose en determinar su estado con respecto a las otras empresas, para así generar una base solida en
              la cual se puede trabajar para seguir con el ciclo de mejora continua.
            </p>

          </div>
        </div>
        <div v-if="tipoGrafico == 'Nivel Infraestructura'" class="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div class="md:pr-12">

            <h3 class="text-3xl font-semibold">Nivel Infraestructura Tecnológica comparado con otras empresas del
              sector:</h3>
            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
              La infraestructura tecnológica permite evidenciar en que nivel se encuentra la empresa con respecto a el
              software que utilice para mejorar sus procesos internos, de igual manera en este nivel se evalúan los
              diferentes tipos de maquinaria que se utilicen.
            </p>

          </div>
        </div>
        <div v-if="tipoGrafico == 'Nivel Madurez'" class="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div class="md:pr-12">

            <h3 class="text-3xl font-semibold">Nivel Madurez de procesos comparado con otras empresas del sector:</h3>
            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
              La madurez de procesos busca determinar el nivel de implementación documental de la empresa, las
              certificaciones aplicadas a la empresa, el número de asesorías en diversos temas de interés, y finalmente
              su interés con respecto a las capacitaciones futuras.
            </p>

          </div>
        </div>
        <div v-if="tipoGrafico == 'Nivel Clientes'" class="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div class="md:pr-12">

            <h3 class="text-3xl font-semibold">Nivel Relaciones con los clientes comparado con otras empresas del
              sector:</h3>
            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
              Las relaciones con los clientes buscan evaluar la cantidad de clientes, los formatos que utilizan para el
              intercambio de información y la percepción de las empresas al momento de interactuar con los clientes.
            </p>

          </div>
        </div>
        <div v-if="tipoGrafico == 'Nivel Proveedores'" class="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div class="md:pr-12">

            <h3 class="text-3xl font-semibold">Nivel relaciones con los proveedores comparado con otras empresas del
              sector:</h3>
            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
              Las relaciones con los proveedores buscan evaluar la cantidad de proveedores, los formatos que utilizan
              para el intercambio de información junto con el tiempo respectivo en el que se utilizan finalmente se mide
              la percepción de las empresas al momento de interactuar con los clientes.
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
      </div>
    </div>
      </div>
    </div>

   
  </section>




  <div class="flex flex-row justify-center font-semibold mx-auto my-4">

    <button @click="generar()" type="button"
      class="bg-grey-light hover:bg-grey text-grey-darkest font-bold inline-flex items-center my-auto text-gray-800 py-1 px-4 border-2 border-cyan-600 hover:bg-cyan-600 hover:cursor-pointer hover:text-white rounded-3xl mx-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>

      <span>Generar reporte</span>
    </button>

  </div>



</template>
<script>
import { shallowRef } from "vue";
import firebase from "../firebase/initFirebase";
import "firebase/firestore";
import navBar2 from '../views/elementos/navbar2.vue'
import graficoPalabras from '../../views/graficoPalabras.vue'
import Seguridad from "../js/encrypt.js";


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

      nombre2:null,
      puntajeClientes2: null,
      puntajeConocimiento2: null,
      puntajeInfraestructura2: null,
      puntajeMadurez2: null,
      puntajeProveedores2: null,
      puntajeTotal2: null,

      nombre3:null,
      puntajeClientes3: null,
      puntajeConocimiento3: null,
      puntajeInfraestructura3: null,
      puntajeMadurez3: null,
      puntajeProveedores3: null,
      puntajeTotal3: null,

      nombre4:null,
      puntajeClientes4: null,
      puntajeConocimiento4: null,
      puntajeInfraestructura4: null,
      puntajeMadurez4: null,
      puntajeProveedores4: null,
      puntajeTotal4: null,

      empresaPuntos: [],
      totalPuntos: [[1, 1], [2, 1], [3, 1], [4, 4]],
      textoEnviar: 'a',
      pruebita: [],
      cambio2: ''

    }
  },
  methods: {
    
    recovery() {
     
      var contador = 1;
      db.collection("datos").limit(4)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.puntajeClientes= this.puntajeClientes+ doc.data().puntajeClientes
            this.puntajeConocimiento =this.puntajeConocimiento+doc.data().puntajeClientes 
            this.puntajeInfraestructura= this.puntajeInfraestructura+doc.data().puntajeInfraestructura
            this.puntajeMadurez = this.puntajeMadurez+doc.data().puntajeMadurez
            this.puntajeProveedores =this.puntajeProveedores+doc.data().puntajeProveedores
            this.puntajeTotal=this.puntajeTotal+doc.data().puntajeTotal

            if (contador == 1) {
              this.puntajeClientes1 = doc.data().puntajeClientes
              this.puntajeConocimiento1 = doc.data().puntajeConocimiento
              this.puntajeInfraestructura1 = doc.data().puntajeInfraestructura
              this.puntajeMadurez1 = doc.data().puntajeMadurez
              this.puntajeProveedores1 = doc.data().puntajeProveedores
              this.puntajeTotal1 = doc.data().puntajeTotal
              this.nombre1=doc.data().nit


            } if (contador == 2) {
              this.puntajeClientes2 = doc.data().puntajeClientes
              this.puntajeConocimiento2 = doc.data().puntajeConocimiento
              this.puntajeInfraestructura2 = doc.data().puntajeInfraestructura
              this.puntajeMadurez2 = doc.data().puntajeMadurez
              this.puntajeProveedores2 = doc.data().puntajeProveedores
              this.puntajeTotal2 = doc.data().puntajeTotal
              this.nombre2=doc.data().nit


            } if (contador == 3) {
              this.puntajeClientes3 = doc.data().puntajeClientes
              this.puntajeConocimiento3 = doc.data().puntajeConocimiento
              this.puntajeInfraestructura3 = doc.data().puntajeInfraestructura
              this.puntajeMadurez3 = doc.data().puntajeMadurez
              this.puntajeProveedores3 = doc.data().puntajeProveedores
              this.puntajeTotal3 = doc.data().puntajeTotal
              this.nombre3=doc.data().nit

            } if (contador == 4) {
              this.puntajeClientes4 = doc.data().puntajeClientes
              this.puntajeConocimiento4 = doc.data().puntajeConocimiento
              this.puntajeInfraestructura4 = doc.data().puntajeInfraestructura
              this.puntajeMadurez4 = doc.data().puntajeMadurez
              this.puntajeProveedores4 = doc.data().puntajeProveedores
              this.puntajeTotal4 = doc.data().puntajeTotal
              this.nombre4=doc.data().nit
            }
            // doc.data() is never undefined for query doc snapshots

            //console.log(doc.id, " => ", doc.data());
            contador = contador + 1
          });
          this.calculin()
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
        
        
    },
    calculin(){
      this.puntajeClientes= this.puntajeClientes/4
      this.puntajeConocimiento =this.puntajeConocimiento/4
      this.puntajeInfraestructura= this.puntajeInfraestructura/4
      this.puntajeMadurez = this.puntajeMadurez/4
      this.puntajeProveedores =this.puntajeProveedores/4
      this.puntajeTotal=this.puntajeTotal/4
    }






  },


  mounted() {
    this.recovery()

  }
}



</script>
  