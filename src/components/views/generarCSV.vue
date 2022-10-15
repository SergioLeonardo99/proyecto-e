<template>
    <navAdmin></navAdmin>

    <body class="bg-gray-100 text-gray-900 tracking-wider leading-normal">
        
      
        <div class="container mx-auto px-4 sm:px-8">
         
            <div class="py-8">
                <div class="letra text-12xm  text-center text-teal-700 ">Resultados Encuestas</div>
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                        
                        <table class="min-w-full leading-normal" id="customers">
                            
                            <thead>
                                <tr>
                                    <th  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Nit</th>
                                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Fecha</th>
                                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Pregunta1</th>
                                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Complemento1</th>
                                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Pregunta2</th>
                                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Complemento2</th>
                                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Pregunta3</th>
                                    <th>Complemento3</th>
                                    <th>Pregunta4</th>
                                    <th>Complemento4</th>
                                    <th>Pregunta5</th>
                                    <th>Complemento5</th>
                                    <th>Pregunta6</th>
                                    <th>Complemento6</th>
                                    <th>Pregunta7</th>
                                    <th>Complemento7</th>
                                    <th>Pregunta8</th>
                                    <th>Complemento8</th>
                                    <th>Pregunta9</th>
                                    <th>Complemento9</th>
                                    <th>Pregunta10</th>
                                    <th>Complemento10</th>
                                    <th>Pregunta11</th>
                                    <th>Complemento11</th>
                                    <th>Pregunta12</th>
                                    <th>Pregunta13</th>
                                    <th>Pregunta14</th>
                                    <th>Complemento14</th>
                                    <th>Pregunta15</th>
                                    <th>Complemento15</th>
                                    <th>Pregunta16</th>
                                    <th>Complemento16</th>
                                    <th>Pregunta17</th>
                                    <th>Pregunta18</th>
                                    <th>Complemento18</th>
                                    <th>Pregunta19</th>
                                    <th>Complemento19</th>
                                    <th>Pregunta20</th>
                                    <th>Complemento20</th>
                                    <th>Pregunta21</th>
                                    <th>Complemento21</th>
                                    <th>Pregunta22</th>
                                    <th>Pregunta23</th>
                                    <th>Complemento23</th>
                                    <th>Pregunta24</th>
                                    <th>Complemento24</th>
                                    <th>Pregunta25</th>
                                    <th>Complemento25</th>
                                    <th>Pregunta26</th>
                                    <th>Complemento26</th>
                                    <th>Pregunta26_1</th>
                                    <th>Complemento26_1</th>
                                    <th>Pregunta27</th>
                                    <th>Pregunta28</th>
                                    <th>Complemento28</th>
                                    <th>Pregunta29</th>
                                    <th>Complemento29</th>
                                    <th>Pregunta30</th>
                                    <th>Complemento30</th>
                                    <th>Pregunta31</th>
                                    <th>Pregunta32</th>
                                    <th>Pregunta33</th>
                                    <th>Pregunta34</th>
                                    <th>Complemento34</th>
                                    <th>Pregunta35</th>
                                    <th>Pregunta36</th>
                                    <th>Pregunta37</th>
                                    <th>Pregunta38</th>
                                    <th>FrecuenciaÓrdenesdeCompra</th>
                                    <th>NúmeroÓrdenesdeCompra</th>
                                    <th>FrecuenciaFacturas</th>
                                    <th>NúmeroFacturas</th>
                                    <th>FrecuenciaRemisiones</th>
                                    <th>NúmeroRemisiones</th>
                                    <th>FrecuenciaConfirmacionesdedespacho</th>
                                    <th>NúmeroConfirmacionesdedespacho</th>
                                    <th>FrecuenciaCotizaciones</th>
                                    <th>NúmeroCotizaciones</th>
                                    <th>FrecuenciaCatálogosdeproductos</th>
                                    <th>NúmeroCatálogosdeproductos</th>
                                    <th>FrecuenciaOtros</th>
                                    <th>NúmeroOtros</th>
                                    <th>Pregunta40</th>
                                    <th>Complemento40</th>
                                    <th>Pregunta41</th>
                                    <th>Complemento41</th>
                                    <th>Comentarios</th>
                                    <th>puntajeClientes</th>
                                    <th>puntajeConocimiento</th>
                                    <th>puntajeInfraestructura</th>
                                    <th>puntajeMadurez</th>
                                    <th>PuntajeProveedores</th>
                                    <th>PuntajeTotal</th>
                                    
                                    
                                </tr>
                                    <tr v-for="data in all_data ">
                                        <td>{{data.nit}}</td>
                                        <td>{{data.fecha}}</td>
                                        <td>{{data.p1}}</td>
                                        <td>{{data.c1}}</td>
                                        <td>{{data.p2}}</td>
                                        <td>{{data.c2}}</td>
                                        <td>{{data.p3}}</td>
                                        <td>{{data.c3}}</td>
                                        <td>{{data.p4}}</td>
                                        <td>{{data.c4}}</td>
                                        <td>{{data.p5}}</td>
                                        <td>{{data.c5}}</td>
                                        <td>{{data.p6}}</td>
                                        <td>{{data.c6}}</td>
                                        <td>{{data.p7}}</td>
                                        <td>{{data.c7}}</td>
                                        <td>{{data.p8}}</td>
                                        <td>{{data.c8}}</td>
                                        <td>{{data.p9}}</td>
                                        <td>{{data.c9}}</td>
                                        <td>{{data.p10}}</td>
                                        <td>{{data.c10}}</td>
                                        <td>{{data.p11}}</td>
                                        <td>{{data.c11}}</td>
                                        <td>{{data.p12}}</td>
                                        <td>{{data.p13}}</td>
                                        <td>{{data.p14}}</td>
                                        <td>{{data.c14}}</td>
                                        <td>{{data.p15}}</td>
                                        <td>{{data.c15}}</td>
                                        <td>{{data.p16}}</td>
                                        <td>{{data.c16}}</td>
                                        <td>{{data.p17}}</td>
                                        <td>{{data.p18}}</td>
                                        <td>{{data.c18}}</td>
                                        <td>{{data.p19}}</td>
                                        <td>{{data.c19}}</td>
                                        <td>{{data.p20}}</td>
                                        <td>{{data.c20}}</td>
                                        <td>{{data.p21}}</td>
                                        <td>{{data.c21}}</td>
                                        <td>{{data.p22}}</td>
                                        <td>{{data.p23}}</td>
                                        <td>{{data.c23}}</td>
                                        <td>{{data.p24}}</td>
                                        <td>{{data.c24}}</td>
                                        <td>{{data.p25}}</td>
                                        <td>{{data.c25}}</td>
                                        <td>{{data.p26}}</td>
                                        <td>{{data.c26}}</td>
                                        <td>{{data.p26_1}}</td>
                                        <td>{{data.c26_1}}</td>
                                        <td>{{data.p27}}</td>
                                        <td>{{data.p28}}</td>
                                        <td>{{data.c28}}</td>
                                        <td>{{data.p29}}</td>
                                        <td>{{data.c29}}</td>
                                        <td>{{data.p30}}</td>
                                        <td>{{data.c30}}</td>
                                        <td>{{data.p31}}</td>
                                        <td>{{data.p32}}</td>
                                        <td>{{data.p33}}</td>
                                        <td>{{data.p34}}</td>
                                        <td>{{data.c34}}</td>
                                        <td>{{data.p35}}</td>
                                        <td>{{data.p36}}</td>
                                        <td>{{data.p37}}</td>
                                        <td>{{data.p38}}</td>
                                        <td>{{data.p39a}}</td>
                                        <td>{{data.n39a}}</td>
                                        <td>{{data.p39b}}</td>
                                        <td>{{data.n39b}}</td>
                                        <td>{{data.p39c}}</td>
                                        <td>{{data.n39c}}</td>
                                        <td>{{data.p39d}}</td>
                                        <td>{{data.n39d}}</td>
                                        <td>{{data.p39e}}</td>
                                        <td>{{data.n39e}}</td>
                                        <td>{{data.p39f}}</td>
                                        <td>{{data.n39f}}</td>
                                        <td>{{data.p39g}}</td>
                                        <td>{{data.n39g}}</td>
                                        <td>{{data.p40}}</td>
                                        <td>{{data.c40}}</td>
                                        <td>{{data.p41}}</td>
                                        <td>{{data.c41}}</td>
                                        <td>{{data.comentarios}}</td>
                                        <td>{{data.pClientes}}</td>
                                        <td>{{data.pConocimiento}}</td>
                                        <td>{{data.pInfraestructura}}</td>
                                        <td>{{data.pMadurez}}</td>
                                        <td>{{data.pProveedores}}</td>
                                        <td>{{data.pTotal}}</td>
                                
                                
                                
                                
                                
                                        
                                        
                                        
                                    </tr>
    
                            </thead>
                        </table>
                      
    
                    </div>
                   
                    
    
                </div>
               
    
        </div>
    </div>

    </body>


<button  @click="tableToCSV()"  class="flex space-x-1 items-center px-3 py-3 bg-teal-800 hover:bg-teal-500 rounded-full drop-shadow-md h-10  m-2 text-indigo-100 transition-colors duration-150  focus:shadow-outline ">
    <svg class="h-8 w-8 text-white"  x="0px" y="0px" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16a5 5 0 01-.916-9.916 5.002 5.002 0 019.832 0A5.002 5.002 0 0116 16m-7 3l3 3m0 0l3-3m-3 3V10"/>
      </svg>
<span>Descargar CSV</span>
</button>
    
   





	
</template>

<script>
    //LLamado del navbar2 a la clase
import "firebase/storage";
import "firebase/firestore";
import firebase from "../../components/firebase/initFirebase";
import Sidebar from "@/components/sidebar/sidebar.vue";
import navAdmin from "@/components/views/elementos/navbar3.vue";

const db = firebase.firestore();




export default {

    name: 'PerfilDeEmpresa',
    data() {
    return {
      all_data: [],
      relleno: {},
    }
  },
    components: {
       Sidebar,
       navAdmin
    },
    
    methods: {
        cargarDatos() {
            db.collection("datos").where("nit", "!=", '6667')
                .get()
                .then((querySnapshot) => {
                    
                    querySnapshot.forEach((doc) => {

                        // doc.data() is never undefined for query doc snapshots
                        this.relleno['nit']=doc.data().nit
                        this.relleno['fecha']=doc.data().fechaCreacion
                        if(doc.data().pregunta1['respuesta']=='1'){
                            this.relleno['p1']='Ganadería'
                        }if(doc.data().pregunta1['respuesta']=='2'){
                            this.relleno['p1']='Minería de carbón'

                        }if(doc.data().pregunta1['respuesta']=='3'){
                            this.relleno['p1']='Comercio'

                        }if(doc.data().pregunta1['respuesta']=='4'){
                            this.relleno['p1']='Arcillas'

                        }if(doc.data().pregunta1['respuesta']=='5'){
                            this.relleno['p1']='Gravas'

                        }if(doc.data().pregunta1['respuesta']=='6'){
                            this.relleno['p1']='Cuero y/o calzado'

                        }if(doc.data().pregunta1['respuesta']=='7'){
                            this.relleno['p1']='Artefactos domésticos'

                        }if(doc.data().pregunta1['respuesta']=='8'){
                            this.relleno['p1']='Equipo y Maquinaria eléctrica y electrónica '

                        }if(doc.data().pregunta1['respuesta']=='9'){
                            this.relleno['p1']='Lácteos'

                        }if(doc.data().pregunta1['respuesta']=='10'){
                            this.relleno['p1']='Convenio software y servicios asociados'

                        }if(doc.data().pregunta1['respuesta']=='11'){
                            this.relleno['p1']='Servicios de salud'

                        }if(doc.data().pregunta1['respuesta']=='12'){
                            this.relleno['p1']='Financiero'

                        }if(doc.data().pregunta1['respuesta']=='13'){
                            this.relleno['p1']='Telecomunicaciones'

                        }if(doc.data().pregunta1['respuesta']=='14'){
                            this.relleno['p1']='Servicios'
                        }
                        this.relleno['c1']=doc.data().pregunta1['complemento']
                        if(doc.data().pregunta2['respuesta']=='1'){
                            this.relleno['p2']='Ganadería'
                        }if(doc.data().pregunta2['respuesta']=='2'){
                            this.relleno['p2']='Minería de carbón'

                        }if(doc.data().pregunta2['respuesta']=='3'){
                            this.relleno['p2']='Comercio'

                        }if(doc.data().pregunta2['respuesta']=='4'){
                            this.relleno['p2']='Arcillas'

                        }if(doc.data().pregunta2['respuesta']=='5'){
                            this.relleno['p2']='Gravas'

                        }if(doc.data().pregunta2['respuesta']=='6'){
                            this.relleno['p2']='Cuero y/o calzado'

                        }if(doc.data().pregunta2['respuesta']=='7'){
                            this.relleno['p2']='Artefactos domésticos'

                        }if(doc.data().pregunta2['respuesta']=='8'){
                            this.relleno['p2']='Equipo y Maquinaria eléctrica y electrónica '

                        }if(doc.data().pregunta2['respuesta']=='9'){
                            this.relleno['p2']='Lácteos'

                        }if(doc.data().pregunta2['respuesta']=='10'){
                            this.relleno['p2']='Convenio software y servicios asociados'

                        }if(doc.data().pregunta2['respuesta']=='11'){
                            this.relleno['p2']='Servicios de salud'

                        }if(doc.data().pregunta2['respuesta']=='12'){
                            this.relleno['p2']='Financiero'

                        }if(doc.data().pregunta2['respuesta']=='13'){
                            this.relleno['p2']='Telecomunicaciones'

                        }if(doc.data().pregunta2['respuesta']=='14'){
                            this.relleno['p2']='Servicios'
                        }
                        this.relleno['c2']=doc.data().pregunta2['complemento']
                        if(doc.data().pregunta3['respuesta']=='1'){
                            this.relleno['p3']='Ganadería'
                        }if(doc.data().pregunta3['respuesta']=='2'){
                            this.relleno['p3']='Minería de carbón'

                        }if(doc.data().pregunta3['respuesta']=='3'){
                            this.relleno['p3']='Comercio'

                        }if(doc.data().pregunta3['respuesta']=='4'){
                            this.relleno['p3']='Arcillas'

                        }if(doc.data().pregunta3['respuesta']=='5'){
                            this.relleno['p3']='Gravas'

                        }if(doc.data().pregunta3['respuesta']=='6'){
                            this.relleno['p3']='Cuero y/o calzado'

                        }if(doc.data().pregunta3['respuesta']=='7'){
                            this.relleno['p3']='Artefactos domésticos'

                        }if(doc.data().pregunta3['respuesta']=='8'){
                            this.relleno['p3']='Equipo y Maquinaria eléctrica y electrónica '

                        }if(doc.data().pregunta3['respuesta']=='9'){
                            this.relleno['p3']='Lácteos'

                        }if(doc.data().pregunta3['respuesta']=='10'){
                            this.relleno['p3']='Convenio software y servicios asociados'

                        }if(doc.data().pregunta3['respuesta']=='11'){
                            this.relleno['p3']='Servicios de salud'

                        }if(doc.data().pregunta3['respuesta']=='12'){
                            this.relleno['p3']='Financiero'

                        }if(doc.data().pregunta3['respuesta']=='13'){
                            this.relleno['p3']='Telecomunicaciones'

                        }if(doc.data().pregunta3['respuesta']=='14'){
                            this.relleno['p3']='Servicios'
                        }
                        this.relleno['c3']=doc.data().pregunta3['complemento']
                        if(doc.data().pregunta4['respuesta']=='1'){
                            this.relleno['p4']='Inferiores a $500 millones de pesos anuales'
                        }if(doc.data().pregunta4['respuesta']=='2'){
                            this.relleno['p4']='Entre $501 y $1000 millones de pesos anuales'

                        }if(doc.data().pregunta4['respuesta']=='3'){
                            this.relleno['p4']='Entre $1001 y $5000 millones de pesos anuales'

                        }if(doc.data().pregunta4['respuesta']=='4'){
                            this.relleno['p4']='Entre $5001 y $10.000 millones de pesos anuales'

                        }if(doc.data().pregunta4['respuesta']=='5'){
                            this.relleno['p4']='Entre $10.001 y $20.000 millones de pesos anuales'

                        }if(doc.data().pregunta4['respuesta']=='6'){
                            this.relleno['p4']='Más de $20.001 millones de pesos anuales'

                        }
                        this.relleno['c4']=doc.data().pregunta4['complemento']
                        if(doc.data().pregunta5['respuesta']=='1'){
                            this.relleno['p5']='Materia prima para otras empresas'
                        }if(doc.data().pregunta5['respuesta']=='2'){
                            this.relleno['p5']='Producto semi - terminado para otras empresas'

                        }if(doc.data().pregunta5['respuesta']=='3'){
                            this.relleno['p5']='Producto terminado para usuarios finales o canales de distribución'

                        }if(doc.data().pregunta5['respuesta']=='4'){
                            this.relleno['p5']='Servicios'
                        }
                        this.relleno['c5']=doc.data().pregunta5['complemento']
                        if(doc.data().pregunta6['respuesta']=='1'){
                            this.relleno['p6']='Operación en un solo sitio local'
                        }if(doc.data().pregunta6['respuesta']=='2'){
                            this.relleno['p6']='Operación en una región'

                        }if(doc.data().pregunta6['respuesta']=='3'){
                            this.relleno['p6']='Operamos nivel de todo el país'

                        }if(doc.data().pregunta6['respuesta']=='4'){
                            this.relleno['p6']='Operamos a nivel nacional e internacional.'
                        }
                        this.relleno['c6']=doc.data().pregunta6['complemento']
                        if(doc.data().pregunta7['respuesta']=='1'){
                            this.relleno['p7']='Primaria'
                        }if(doc.data().pregunta7['respuesta']=='2'){
                            this.relleno['p7']='Bachillerato '

                        }if(doc.data().pregunta7['respuesta']=='3'){
                            this.relleno['p7']='Técnico'

                        }if(doc.data().pregunta7['respuesta']=='4'){
                            this.relleno['p7']='Tecnólogo'

                        }if(doc.data().pregunta7['respuesta']=='5'){
                            this.relleno['p7']='Universitario'

                        }if(doc.data().pregunta7['respuesta']=='6'){
                            this.relleno['p7']='Postgrado'

                        }if(doc.data().pregunta7['respuesta']=='7'){
                            this.relleno['p7']='Ninguno'
                        }
                        this.relleno['c7']=doc.data().pregunta7['complemento']
                        if(doc.data().pregunta8['respuesta']=='1'){
                            this.relleno['p8']='Primaria'
                        }if(doc.data().pregunta8['respuesta']=='2'){
                            this.relleno['p8']='Bachillerato '

                        }if(doc.data().pregunta8['respuesta']=='3'){
                            this.relleno['p8']='Técnico'

                        }if(doc.data().pregunta8['respuesta']=='4'){
                            this.relleno['p8']='Tecnólogo'

                        }if(doc.data().pregunta8['respuesta']=='5'){
                            this.relleno['p8']='Universitario'

                        }if(doc.data().pregunta8['respuesta']=='6'){
                            this.relleno['p8']='Postgrado'

                        }if(doc.data().pregunta8['respuesta']=='7'){
                            this.relleno['p8']='Ninguno'
                        }
                        this.relleno['c8']=doc.data().pregunta8['complemento']
                        if(doc.data().pregunta9['respuesta']=='1'){
                            this.relleno['p9']='Si'
                        }if(doc.data().pregunta9['respuesta']=='2'){
                            this.relleno['p9']='No '

                        }if(doc.data().pregunta9['respuesta']=='3'){
                            this.relleno['p9']='No tengo información'

                        }
                        this.relleno['c9']=doc.data().pregunta9['complemento']
                        if(doc.data().pregunta10['respuesta']=='1'){
                            this.relleno['p10']='Si'
                        }if(doc.data().pregunta10['respuesta']=='2'){
                            this.relleno['p10']='No '

                        }if(doc.data().pregunta10['respuesta']=='3'){
                            this.relleno['p10']='No tengo información'

                        }
                        this.relleno['c10']=doc.data().pregunta10['complemento']
                        if(doc.data().pregunta11['respuesta']=='1'){
                            this.relleno['p11']='Si'
                        }if(doc.data().pregunta11['respuesta']=='2'){
                            this.relleno['p11']='No '

                        }if(doc.data().pregunta11['respuesta']=='3'){
                            this.relleno['p11']='No tengo información'

                        }
                        this.relleno['c11']=doc.data().pregunta11['complemento']
                        if(doc.data().pregunta12['respuesta']=='1'){
                            this.relleno['p12']='Si'
                        }if(doc.data().pregunta12['respuesta']=='2'){
                            this.relleno['p12']='No '

                        }if(doc.data().pregunta12['respuesta']=='3'){
                            this.relleno['p12']='No tengo información'
                        }
                        if(doc.data().pregunta13['respuesta']=='1'){
                            this.relleno['p13']='Si'
                        }if(doc.data().pregunta13['respuesta']=='2'){
                            this.relleno['p13']='No '

                        }if(doc.data().pregunta13['respuesta']=='3'){
                            this.relleno['p13']='No tengo información'
                        }
                        if(doc.data().pregunta14['respuesta']=='1'){
                            this.relleno['p14']='Un computador'
                        }if(doc.data().pregunta14['respuesta']=='2'){
                            this.relleno['p14']='De dos a cinco computadores '

                        }if(doc.data().pregunta14['respuesta']=='3'){
                            this.relleno['p14']='De cinco a 20 computadores'

                        }if(doc.data().pregunta14['respuesta']=='4'){
                            this.relleno['p14']='Más de 20 computadores'

                        }if(doc.data().pregunta14['respuesta']=='5'){
                            this.relleno['p14']='Mi empresa no tiene computadores'

                        }
                        this.relleno['c14']=doc.data().pregunta14['complemento']
                        if(doc.data().pregunta15['respuesta']=='1'){
                            this.relleno['p15']='Si'
                        }if(doc.data().pregunta15['respuesta']=='2'){
                            this.relleno['p15']='No '

                        }if(doc.data().pregunta15['respuesta']=='3'){
                            this.relleno['p15']='No tengo información'
                        }
                        this.relleno['c15']=doc.data().pregunta15['complemento']
                        if(doc.data().pregunta16['respuesta']=='1'){
                            this.relleno['p16']='Tiene acceso a Internet solo para un solo computador y utiliza línea telefónica.'
                        }if(doc.data().pregunta16['respuesta']=='2'){
                            this.relleno['p16']='Varios computadores de mi empresa tienen acceso a Internet.'

                        }if(doc.data().pregunta16['respuesta']=='3'){
                            this.relleno['p16']='Todos los computadores de mi empresa tienen acceso a Internet.'

                        }if(doc.data().pregunta16['respuesta']=='4'){
                            this.relleno['p16']='Mi empresa no tiene acceso a Internet.'

                        }
                        this.relleno['c16']=doc.data().pregunta16['complemento']
                        if(doc.data().pregunta17['respuesta']=='1'){
                            this.relleno['p17']='Conexión vía satélite'
                        }if(doc.data().pregunta17['respuesta']=='2'){
                            this.relleno['p17']='Inalámbrica (radioenlace)'

                        }if(doc.data().pregunta17['respuesta']=='3'){
                            this.relleno['p17']='Conexiones de datos móviles'

                        }if(doc.data().pregunta17['respuesta']=='4'){
                            this.relleno['p17']='Estándar WiMAX'

                        }if(doc.data().pregunta17['respuesta']=='5'){
                            this.relleno['p17']='Sistema LMDS (Local Multipoint Distribution System)'

                        }if(doc.data().pregunta17['respuesta']=='6'){
                            this.relleno['p17']='Fibra óptica'

                        }if(doc.data().pregunta17['respuesta']=='7'){
                            this.relleno['p17']='Conexión ADSL'

                        }if(doc.data().pregunta17['respuesta']=='8'){
                            this.relleno['p17']='Red digital RDSI'

                        }if(doc.data().pregunta17['respuesta']=='9'){
                            this.relleno['p17']='No tengo información'

                        }
                        if(doc.data().pregunta18['respuesta']=='1'){
                            this.relleno['p18']='Si'
                        }if(doc.data().pregunta18['respuesta']=='2'){
                            this.relleno['p18']='No '

                        }if(doc.data().pregunta18['respuesta']=='3'){
                            this.relleno['p18']='No tengo información'
                        }
                        this.relleno['c18']=doc.data().pregunta18['complemento']
                        if(doc.data().pregunta19['respuesta']=='1'){
                            this.relleno['p19']='Una cuenta de correo electrónico para la compañía'
                        }if(doc.data().pregunta19['respuesta']=='2'){
                            this.relleno['p19']='Correo electrónico para algunos empleados de la compañía'

                        }if(doc.data().pregunta19['respuesta']=='3'){
                            this.relleno['p19']='Correo electrónico para cada uno de los empleados de la compañía'

                        }if(doc.data().pregunta19['respuesta']=='4'){
                            this.relleno['p19']='Otros'

                        }
                        this.relleno['c19']=doc.data().pregunta19['complemento']
                        if(doc.data().pregunta20['respuesta']=='1'){
                            this.relleno['p20']='Si'
                        }if(doc.data().pregunta20['respuesta']=='2'){
                            this.relleno['p20']='No '

                        }if(doc.data().pregunta20['respuesta']=='3'){
                            this.relleno['p20']='No tengo información'
                        }
                        this.relleno['c20']=doc.data().pregunta20['complemento']
                        if(doc.data().pregunta21['respuesta']=='1'){
                            this.relleno['p21']='Si'
                        }if(doc.data().pregunta21['respuesta']=='2'){
                            this.relleno['p21']='No '

                        }if(doc.data().pregunta21['respuesta']=='3'){
                            this.relleno['p21']='No tengo información'
                        }
                        this.relleno['c21']=doc.data().pregunta21['complemento']
                        var texto22 = ''
                        
                        for (var i = 0; i < doc.data().pregunta22.respuesta.length; i++) {
                            if(doc.data().pregunta22.respuesta[i]=='1'){
                            texto22=texto22+' -Hoja de calculo'
                            }if(doc.data().pregunta22.respuesta[i]=='2'){
                                texto22=texto22+' -Página web'

                            }if(doc.data().pregunta22.respuesta[i]=='3'){
                                texto22=texto22+' -Planeación de venta'

                            }if(doc.data().pregunta22.respuesta[i]=='4'){
                                texto22=texto22+' -Herramientas de presentación multimedia'

                            }if(doc.data().pregunta22.respuesta[i]=='5'){
                                texto22=texto22+' -Base de datos'

                            }if(doc.data().pregunta22.respuesta[i]=='6'){
                                texto22=texto22+' -Manejo de inventario'

                            }if(doc.data().pregunta22.respuesta[i]=='7'){
                                texto22=texto22+' -Correo electrónico'

                            }if(doc.data().pregunta22.respuesta[i]=='8'){
                                texto22=texto22+' -Programa seguimientos de proyectos agenda'

                            }if(doc.data().pregunta22.respuesta[i]=='9'){
                                texto22=texto22+' -Redes sociales'

                            }
                           
                            }
                        this.relleno['p22']=texto22
                        if(doc.data().pregunta23['respuesta']=='1'){
                            this.relleno['p23']='Si'
                        }if(doc.data().pregunta23['respuesta']=='2'){
                            this.relleno['p23']='No '

                        }if(doc.data().pregunta23['respuesta']=='3'){
                            this.relleno['p23']='No tengo información'
                        }
                        this.relleno['c23']=doc.data().pregunta23['complemento']
                        if(doc.data().pregunta24['respuesta']=='1'){
                            this.relleno['p24']='Si'
                        }if(doc.data().pregunta24['respuesta']=='2'){
                            this.relleno['p24']='No '

                        }if(doc.data().pregunta24['respuesta']=='3'){
                            this.relleno['p24']='No tengo información'
                        }
                        this.relleno['c24']=doc.data().pregunta24['complemento']
                        if(doc.data().pregunta25['respuesta']=='1'){
                            this.relleno['p25']='Si'
                        }if(doc.data().pregunta25['respuesta']=='2'){
                            this.relleno['p25']='No '

                        }if(doc.data().pregunta25['respuesta']=='3'){
                            this.relleno['p25']='No tengo información'
                        }
                        this.relleno['c25']=doc.data().pregunta25['complemento']
                        if(doc.data().pregunta26['respuesta']=='1'){
                            this.relleno['p26']='Unos pocos procesos están estandarizados'
                        }if(doc.data().pregunta26['respuesta']=='2'){
                            this.relleno['p26']='Algunos procesos están estandarizados y otros no'

                        }if(doc.data().pregunta26['respuesta']=='3'){
                            this.relleno['p26']='En mi empresa los procesos están estandarizados'
                        }if(doc.data().pregunta26['respuesta']=='0'){
                            this.relleno['p26']='Ningún proceso está estandarizado'
                        }
                        if(doc.data().pregunta26_1['respuesta']=='1'){
                            this.relleno['p26_1']='Si'
                        }if(doc.data().pregunta26_1['respuesta']=='2'){
                            this.relleno['p26_1']='No '

                        }if(doc.data().pregunta26_1['respuesta']=='3'){
                            this.relleno['p26_1']='No tengo información'
                        }
                        this.relleno['c26_1']=doc.data().pregunta26_1['complemento']
                        if(doc.data().pregunta27['respuesta']=='1'){
                            this.relleno['p27']='Están definidos pero nunca se utilizan'
                        }if(doc.data().pregunta27['respuesta']=='2'){
                            this.relleno['p27']='Algunas veces se utilizan'

                        }if(doc.data().pregunta27['respuesta']=='3'){
                            this.relleno['p27']='Siempre se utilizan'
                        }if(doc.data().pregunta27['respuesta']=='0'){
                            this.relleno['p27']='No tenemos procesos internos estandarizados'
                        }
                        if(doc.data().pregunta28['respuesta']=='1'){
                            this.relleno['p28']='Usamos otros medios como Fax'
                        }if(doc.data().pregunta28['respuesta']=='2'){
                            this.relleno['p28']='Utilizamos correo electrónico'

                        }if(doc.data().pregunta28['respuesta']=='3'){
                            this.relleno['p28']='Utilizamos correo electrónico y/o la página Web (Página en Internet) de nuestra compañía o de nuestros proveedores'
                        }if(doc.data().pregunta28['respuesta']=='4'){
                            this.relleno['p28']='Utilizamos formatos pre -establecidos para intercambiar información'
                        }if(doc.data().pregunta28['respuesta']=='5'){
                            this.relleno['p28']='Intercambio Electrónico de Documentos (EDI - Electronic Data Interchange)'
                        }if(doc.data().pregunta28['respuesta']=='0'){
                            this.relleno['p28']='No usamos ningún medio electrónico'
                        }
                        this.relleno['c28']=doc.data().pregunta28['complemento']
                        if(doc.data().pregunta29['respuesta']=='0'){
                            this.relleno['p29']='Nunca hemos tenido asesoría'
                        }if(doc.data().pregunta29['respuesta']=='1'){
                            this.relleno['p29']='Tenemos actualmente asesoría'

                        }if(doc.data().pregunta29['respuesta']=='2'){
                            this.relleno['p29']='Hemos tenido asesoría'
                        }
                        this.relleno['c29']=doc.data().pregunta29['complemento']
                        if(doc.data().pregunta30['respuesta']=='1'){
                            this.relleno['p30']='Si'
                        }if(doc.data().pregunta30['respuesta']=='2'){
                            this.relleno['p30']='No'

                        }if(doc.data().pregunta30['respuesta']=='3'){
                            this.relleno['p30']='No tengo información'
                        }
                        this.relleno['c30']=doc.data().pregunta30['complemento']
                        if(doc.data().pregunta31['respuesta']=='1'){
                            this.relleno['p31']='Entre uno (1) y dos (2) clientes nacionales'
                        }if(doc.data().pregunta31['respuesta']=='2'){
                            this.relleno['p31']='Entre tres (3) y cinco (5) clientes nacionales'

                        }if(doc.data().pregunta31['respuesta']=='3'){
                            this.relleno['p31']='Entre seis (6) (10) y diez clientes nacionales'

                        }if(doc.data().pregunta31['respuesta']=='4'){
                            this.relleno['p31']='Entre once (11) y cincuenta (50) clientes nacionales'

                        }if(doc.data().pregunta31['respuesta']=='5'){
                            this.relleno['p31']='Entre cincuenta y uno (51) y cien (100) clientes nacionales'

                        }if(doc.data().pregunta31['respuesta']=='6'){
                            this.relleno['p31']='Entre ciento uno (101) y doscientos (200) clientes nacionales'

                        }if(doc.data().pregunta31['respuesta']=='7'){
                            this.relleno['p31']='Mas de doscientos (200) clientes nacionales'

                        }if(doc.data().pregunta31['respuesta']=='8'){
                            this.relleno['p31']='Ningún cliente nacional'

                        }
                        if(doc.data().pregunta32['respuesta']=='1'){
                            this.relleno['p32']='Entre uno (1) y dos (2) clientes'
                        }if(doc.data().pregunta32['respuesta']=='2'){
                            this.relleno['p32']='Entre tres (3) y cinco (5) clientes'

                        }if(doc.data().pregunta32['respuesta']=='3'){
                            this.relleno['p32']='Entre seis (6) (10) y diez clientes internacionales'

                        }if(doc.data().pregunta32['respuesta']=='4'){
                            this.relleno['p32']='Entre once (11) y cincuenta (50) clientes internacionales'

                        }if(doc.data().pregunta32['respuesta']=='5'){
                            this.relleno['p32']='Entre cincuenta y uno (51) y cien (100) clientes internacionales'

                        }if(doc.data().pregunta32['respuesta']=='6'){
                            this.relleno['p32']='Entre ciento uno (101) y doscientos (200) clientes internacionales'

                        }if(doc.data().pregunta32['respuesta']=='7'){
                            this.relleno['p32']='Mas de doscientos (200) clientes internacionales'

                        }if(doc.data().pregunta32['respuesta']=='8'){
                            this.relleno['p32']='Ningún cliente internacional'

                        }
                        if(doc.data().pregunta33['respuesta']=='1'){
                            this.relleno['p33']='Menor a diez (10)'
                        }if(doc.data().pregunta33['respuesta']=='2'){
                            this.relleno['p33']='Entre once (11) y cincuenta (50)'

                        }if(doc.data().pregunta33['respuesta']=='3'){
                            this.relleno['p33']='Entre cincuenta y uno (51) y cien (100)'

                        }if(doc.data().pregunta33['respuesta']=='4'){
                            this.relleno['p33']='Entre ciento uno (101) y doscientos (200)'

                        }if(doc.data().pregunta33['respuesta']=='5'){
                            this.relleno['p33']='Entre doscientos (200) y mil (1.000)'

                        }if(doc.data().pregunta33['respuesta']=='6'){
                            this.relleno['p33']='Más de mil (1.000)'

                        }
                        if(doc.data().pregunta34['respuesta']=='1'){
                            this.relleno['p34']='No tienen un procedimiento estándar cada uno de los clientes usa sus propios formatos y mi compañía se adapta'
                        }if(doc.data().pregunta34['respuesta']=='2'){
                            this.relleno['p34']='Tienen un procedimiento estándar definido de común acuerdo con los clientes'

                        }if(doc.data().pregunta34['respuesta']=='3'){
                            this.relleno['p34']='Tienen un procedimiento estándar definido por nuestra compañía'
                        }
                        this.relleno['c34']=doc.data().pregunta34['complemento']
                        if(doc.data().pregunta35['respuesta']=='1'){
                            this.relleno['p35']='Son completamente esporádicas'
                        }if(doc.data().pregunta35['respuesta']=='2'){
                            this.relleno['p35']='Son en algunos casos esporádicos pero hay una base estable'

                        }if(doc.data().pregunta35['respuesta']=='3'){
                            this.relleno['p35']='Son estables y permanentes'
                        }
                        if(doc.data().pregunta36['respuesta']=='1'){
                            this.relleno['p36']='Entre uno (1) y dos (2) proveedores'
                        }if(doc.data().pregunta36['respuesta']=='2'){
                            this.relleno['p36']='Entre tres (3) y cinco (5) proveedores'

                        }if(doc.data().pregunta36['respuesta']=='3'){
                            this.relleno['p36']='Entre seis (6) (10) y diez proveedoress'

                        }if(doc.data().pregunta36['respuesta']=='4'){
                            this.relleno['p36']='Entre once (11) y cincuenta (50) proveedores'

                        }if(doc.data().pregunta36['respuesta']=='5'){
                            this.relleno['p36']='Entre cincuenta y uno (51) y cien (100) proveedores'

                        }if(doc.data().pregunta36['respuesta']=='6'){
                            this.relleno['p36']='Entre ciento uno (101) y doscientos (200) proveedores'

                        }if(doc.data().pregunta36['respuesta']=='7'){
                            this.relleno['p36']='Mas de doscientos (200) proveedores'

                        }if(doc.data().pregunta36['respuesta']=='8'){
                            this.relleno['p36']='No sabe / No recuerda'

                        }
                        if(doc.data().pregunta37['respuesta']=='1'){
                            this.relleno['p37']='Entre uno (1) y dos (2) proveedores'
                        }if(doc.data().pregunta37['respuesta']=='2'){
                            this.relleno['p37']='Entre tres (3) y cinco (5) proveedores'

                        }if(doc.data().pregunta37['respuesta']=='3'){
                            this.relleno['p37']='Entre seis (6) (10) y diez proveedoress'

                        }if(doc.data().pregunta37['respuesta']=='4'){
                            this.relleno['p37']='Entre once (11) y cincuenta (50) proveedores'

                        }if(doc.data().pregunta37['respuesta']=='5'){
                            this.relleno['p37']='Entre cincuenta y uno (51) y cien (100) proveedores'

                        }if(doc.data().pregunta37['respuesta']=='6'){
                            this.relleno['p37']='Entre ciento uno (101) y doscientos (200) proveedores'

                        }if(doc.data().pregunta37['respuesta']=='7'){
                            this.relleno['p37']='Mas de doscientos (200) proveedores'

                        }if(doc.data().pregunta37['respuesta']=='8'){
                            this.relleno['p37']='No sabe / No recuerda'

                        }
                        if(doc.data().pregunta38['respuesta']=='1'){
                            this.relleno['p38']='Entre uno (1) y dos (2) proveedores'
                        }if(doc.data().pregunta38['respuesta']=='2'){
                            this.relleno['p38']='Entre tres (3) y cinco (5) proveedores'

                        }if(doc.data().pregunta38['respuesta']=='3'){
                            this.relleno['p38']='Entre seis (6) (10) y diez proveedoress'

                        }if(doc.data().pregunta38['respuesta']=='4'){
                            this.relleno['p38']='Entre once (11) y cincuenta (50) proveedores'

                        }if(doc.data().pregunta38['respuesta']=='5'){
                            this.relleno['p38']='Más de cincuenta y un (51) proveedores'

                        }if(doc.data().pregunta38['respuesta']=='6'){
                            this.relleno['p38']='No sabe'

                        }

                        if(doc.data().pregunta39['respuestaA']=='1'){
                            this.relleno['p39a']='Mensual'
                        }if(doc.data().pregunta39['respuestaA']=='2'){
                            this.relleno['p39a']='Semanal'

                        }if(doc.data().pregunta39['respuestaA']=='3'){
                            this.relleno['p39a']='Diaria'
                        }
                        if(doc.data().pregunta39['respuestaB']=='1'){
                            this.relleno['p39b']='Mensual'
                        }if(doc.data().pregunta39['respuestaB']=='2'){
                            this.relleno['p39b']='Semanal'

                        }if(doc.data().pregunta39['respuestaB']=='3'){
                            this.relleno['p39b']='Diaria'
                        }
                        if(doc.data().pregunta39['respuestaC']=='1'){
                            this.relleno['p39c']='Mensual'
                        }if(doc.data().pregunta39['respuestaC']=='2'){
                            this.relleno['p39c']='Semanal'

                        }if(doc.data().pregunta39['respuestaC']=='3'){
                            this.relleno['p39c']='Diaria'
                        }
                        if(doc.data().pregunta39['respuestaD']=='1'){
                            this.relleno['p39d']='Mensual'
                        }if(doc.data().pregunta39['respuestaD']=='2'){
                            this.relleno['p39d']='Semanal'

                        }if(doc.data().pregunta39['respuestaD']=='3'){
                            this.relleno['p39d']='Diaria'
                        }
                        if(doc.data().pregunta39['respuestaE']=='1'){
                            this.relleno['p39e']='Mensual'
                        }if(doc.data().pregunta39['respuestaE']=='2'){
                            this.relleno['p39e']='Semanal'

                        }if(doc.data().pregunta39['respuestaE']=='3'){
                            this.relleno['p39e']='Diaria'
                        }
                        if(doc.data().pregunta39['respuestaF']=='1'){
                            this.relleno['p39f']='Mensual'
                        }if(doc.data().pregunta39['respuestaF']=='2'){
                            this.relleno['p39f']='Semanal'

                        }if(doc.data().pregunta39['respuestaF']=='3'){
                            this.relleno['p39f']='Diaria'
                        }
                        if(doc.data().pregunta39['respuestaG']=='1'){
                            this.relleno['p39g']='Mensual'
                        }if(doc.data().pregunta39['respuestaG']=='2'){
                            this.relleno['p39g']='Semanal'

                        }if(doc.data().pregunta39['respuestaG']=='3'){
                            this.relleno['p39g']='Diaria'
                        }
                        this.relleno['n39a']=doc.data().pregunta39['numDocumentosA']
                        this.relleno['n39b']=doc.data().pregunta39['numDocumentosB']
                        this.relleno['n39c']=doc.data().pregunta39['numDocumentosC']
                        this.relleno['n39d']=doc.data().pregunta39['numDocumentosD']
                        this.relleno['n39e']=doc.data().pregunta39['numDocumentosE']
                        this.relleno['n39f']=doc.data().pregunta39['numDocumentosF']
                        this.relleno['n39g']=doc.data().pregunta39['numDocumentosG']
                        if(doc.data().pregunta40['respuesta']=='1'){
                            this.relleno['p40']='Otra'
                        }if(doc.data().pregunta40['respuesta']=='2'){
                            this.relleno['p40']='No tienen un procedimiento estándar cada uno de los proveedores usa sus propios formatos y mi compañía se adapta'

                        }if(doc.data().pregunta40['respuesta']=='3'){
                            this.relleno['p40']='Tienen un procedimiento estándar definido de común acuerdo con los proveedores'

                        }if(doc.data().pregunta40['respuesta']=='4'){
                            this.relleno['p40']='Tienen un procedimiento estándar definido por nuestra compañía'

                        }
                        this.relleno['c40']=doc.data().pregunta40['complemento']
                        if(doc.data().pregunta41['respuesta']=='1'){
                            this.relleno['p41']='Son completamente esporádicas'
                        }if(doc.data().pregunta41['respuesta']=='2'){
                            this.relleno['p41']='Son en algunos casos esporádicos pero hay una base estable'

                        }if(doc.data().pregunta41['respuesta']=='3'){
                            this.relleno['p41']='Son estables y permanentes'

                        }
                        this.relleno['c41']=doc.data().pregunta41['complemento']
                        this.relleno['comentarios']=doc.data().comentarios
                        this.relleno['pClientes']=doc.data().puntajeClientes
                        this.relleno['pConocimiento']=doc.data().puntajeConocimiento
                        this.relleno['pInfraestructura']=doc.data().puntajeInfraestructura
                        this.relleno['pMadurez']=doc.data().puntajeMadurez
                        this.relleno['pProveedores']=doc.data().puntajeProveedores
                        this.relleno['pTotal']=doc.data().puntajeTotal






                        



                        this.all_data.push(this.relleno)
                        this.relleno={}

                        //console.log(doc.id, " => ", doc.data());
                    });
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
            
        
      

    },
    tableToCSV() {
        
        // Variable to store the final csv data
        var csv_data = [];

        // Get each row data
        var rows = document.getElementsByTagName('tr');
        for (var i = 0; i < rows.length; i++) {

            // Get each column data
            var cols = rows[i].querySelectorAll('td,th');

            // Stores each csv row data
            var csvrow = [];
            for (var j = 0; j < cols.length; j++) {

                // Get the text data of each cell of
                // a row and push it to csvrow
                csvrow.push(cols[j].innerHTML);
            }

            // Combine each column value with comma
            csv_data.push(csvrow.join(","));
        }
        // combine each row data with new line character
        csv_data = csv_data.join('\n');
        this.downloadCSVFile(csv_data);

        /* We will use this function later to download
        the data in a csv file downloadCSVFile(csv_data);
        */
        },
        downloadCSVFile(csv_data) {
        
        // Create CSV file object and feed our
        // csv_data into it
        var CSVFile = new Blob([csv_data], { type: "text/csv" });

        // Create to temporary link to initiate
        // download process
        var temp_link = document.createElement('a');

        // Download csv file
        temp_link.download = "GfG.csv";
        var url = window.URL.createObjectURL(CSVFile);
        temp_link.href = url;

        // This link should not be displayed
        temp_link.style.display = "none";
        document.body.appendChild(temp_link);

        // Automatically click the link to trigger download
        temp_link.click();
        document.body.removeChild(temp_link);
        },


 
 

    
    


    },
    mounted() {
        this.cargarDatos()
        
        
  }
}

</script>
<style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: rgb(0, 105, 92);
  color: white;
}
</style>

<style>
		/*Overrides for Tailwind CSS */

		/*Form fields*/
		.dataTables_wrapper select,
		.dataTables_wrapper .dataTables_filter input {
			color: #4a5568;
			/*text-gray-700*/
			padding-left: 1rem;
			/*pl-4*/
			padding-right: 1rem;
			/*pl-4*/
			padding-top: .5rem;
			/*pl-2*/
			padding-bottom: .5rem;
			/*pl-2*/
			line-height: 1.25;
			/*leading-tight*/
			border-width: 2px;
			/*border-2*/
			border-radius: .25rem;
			border-color: #edf2f7;
			/*border-gray-200*/
			background-color: #edf2f7;
			/*bg-gray-200*/
		}

		/*Row Hover*/
		table.dataTable.hover tbody tr:hover,
		table.dataTable.display tbody tr:hover {
			background-color: #ebf4ff;
			/*bg-indigo-100*/
		}

		/*Pagination Buttons*/
		.dataTables_wrapper .dataTables_paginate .paginate_button {
			font-weight: 700;
			/*font-bold*/
			border-radius: .25rem;
			/*rounded*/
			border: 1px solid transparent;
			/*border border-transparent*/
		}

		/*Pagination Buttons - Current selected */
		.dataTables_wrapper .dataTables_paginate .paginate_button.current {
			color: #fff !important;
			/*text-white*/
			box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
			/*shadow*/
			font-weight: 700;
			/*font-bold*/
			border-radius: .25rem;
			/*rounded*/
			background: #667eea !important;
			/*bg-indigo-500*/
			border: 1px solid transparent;
			/*border border-transparent*/
		}

		/*Pagination Buttons - Hover */
		.dataTables_wrapper .dataTables_paginate .paginate_button:hover {
			color: #fff !important;
			/*text-white*/
			box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
			/*shadow*/
			font-weight: 700;
			/*font-bold*/
			border-radius: .25rem;
			/*rounded*/
			background: #667eea !important;
			/*bg-indigo-500*/
			border: 1px solid transparent;
			/*border border-transparent*/
		}

		/*Add padding to bottom border */
		table.dataTable.no-footer {
			border-bottom: 1px solid #e2e8f0;
			/*border-b-1 border-gray-300*/
			margin-top: 0.75em;
			margin-bottom: 0.75em;
		}

		/*Change colour of responsive icon*/
		table.dataTable.dtr-inline.collapsed>tbody>tr>td:first-child:before,
		table.dataTable.dtr-inline.collapsed>tbody>tr>th:first-child:before {
			background-color: #667eea !important;
			/*bg-indigo-500*/
		}
	</style>