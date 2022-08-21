<template>
    <div>
        <h1>Ventana de formulario</h1>

       <section>
        <p>1.	¿A qué sector económico pertenece su empresa?</p>

        <select v-model="selected1">
          <option disabled value="">Seleccione uno...</option>
          <option>Ganadería</option>
          <option>Minería de carbón</option>
          <option>Comercio</option>
          <option>Arcillas</option>
          <option>Gravas</option>
          <option>Cuero y/o calzado</option>
          <option>Artefactos domésticos</option>
          <option>Equipo y Maquinaria </option>
          <option>Eléctrica y electrónica </option>
          <option>Lácteos</option>
          <option>Convenio software y servicios asociados</option>
          <option>Servicios de salud</option>
          <option>Financiero</option>
          <option>Telecomunicaciones</option>
          <option>Servicios</option>

        </select>
        </section>
        <section>
        <p>4.	Indique el rango de ingresos anuales de su empresa a partir de la actividad productiva o económica</p>
        <select v-model="selected2">
          <option disabled value="">Seleccione uno...</option>
          <option>Inferiores a $500 millones de pesos anuales</option>
          <option>Entre $501 y $1000 millones de pesos anuales</option>
          <option>Entre $1001 y $5000 millones de pesos anuales</option>
          <option>Entre $5001 y $10.000 millones de pesos anuales</option>
          <option>Entre $10.001 y $20.000 millones de pesos anuales</option>
          <option>Más de $20.001 millones de pesos anuales</option>

        </select>
        </section>

        <section>
        <p>5.	¿Cuál es el producto final de su empresa?</p>
        <select v-model="selected3">
          <option disabled value="">Seleccione uno...</option>
          <option>Materia prima para otras empresas</option>
          <option>Producto semi - terminado para otras empresas</option>
          <option>Producto terminado para usuarios finales o canales de distribución</option>
          <option>Servicios.</option>
        </select>
        </section>

        <section>
        <p>6.	La zona de influencia de su compañía es:</p>
        <select v-model="selected4">
          <option disabled value="">Seleccione uno...</option>
          <option>Operación en un solo sitio, local</option>
          <option>Operación en una región</option>
          <option>Operamos nivel de todo el país</option>
          <option>Operamos a nivel nacional e internacional</option>
        </select>
        </section>

        <section>
        <p>7.	Seleccione el nivel educativo de los empleados en el campo laboral directivo</p>
        <select v-model="selected5">
          <option disabled value="">Seleccione uno...</option>
          <option>Primaria</option>
          <option>Bachillerato</option>
          <option>Técnico</option>
          <option>Tecnólogo</option>
          <option>Universitario</option>
          <option>Postgrado</option>
          <option>Ninguno</option>
        </select>
        </section>

        <section>
        <p>8.	Seleccione el nivel educativo de los empleados en el campo laboral operativo</p>
        <select v-model="selected6">
          <option disabled value="">Seleccione uno...</option>
          <option>Primaria</option>
          <option>Bachillerato</option>
          <option>Técnico</option>
          <option>Tecnólogo</option>
          <option>Universitario</option>
          <option>Postgrado</option>
          <option>Ninguno</option>
        </select>
        </section>

        <section>
        <p>9.	Si su empresa cuenta con algún software, especifique cual es</p>
        <input type="text" v-model="open1" >
        </section>

        <section>
        <p>9.1	¿Cuál es el valor aproximado del software?</p>
        <input type="text" v-model="open2" >
        </section>

        <section>
        <p>10.	¿Pagaría usted por un software o herramienta tecnológica que le permita mejorar sus procesos?</p>
    
        <input type="radio" id="si" value="Si" v-model="pick1" />
        <label for="one">Si</label>

        <input type="radio" id="no" value="No" v-model="pick1" />
        <label for="two">No</label>
        </section>

        <section>
        <p>11.	¿En la empresa tiene algún rubro presupuestal destinado a actualización en TI?</p>
    
        <input type="radio" id="si" value="Si" v-model="pick2" />
        <label for="one">Si</label>

        <input type="radio" id="no" value="No" v-model="pick2" />
        <label for="two">No</label>
        </section>

        <section>
        <p>12.	¿Qué grado de relevancia le da a la transformación digital empresarial?</p>
        <select v-model="selected7">
          <option disabled value="">Seleccione uno...</option>
          <option>Bajo o sin importancia</option>
          <option>Medianamente importante</option>
          <option>Muy importante</option>
        </select>
        </section>
        
        <section>
        <p>13.	¿En el presupuesto de su empresa tiene algún monto destinado a la adquisición de soluciones de base tecnológica?</p>
    
        <input type="radio" id="si" value="Si" v-model="pick3" />
        <label for="one">Si</label>

        <input type="radio" id="no" value="No" v-model="pick3" />
        <label for="two">No</label>
        </section>

        <section>
        <p>14.	Con cuantos computadores cuenta su compañía</p>
        <select v-model="selected8">
          <option disabled value="">Seleccione uno...</option>
          <option></option>
          <option>Un computador</option>
          <option>De dos a cinco computadores</option>
          <option>De cinco a 20 computadores</option>
          <option>Más de 20 computadores</option>
          <option>Mi empresa no tiene computadores</option>
        </select>
        </section>

        <section>
        <p>15.	¿Los computadores de su compañía esta interconectados en una red?</p>
    
        <input type="radio" id="si" value="Si" v-model="pick4" />
        <label for="one">Si</label>

        <input type="radio" id="no" value="No" v-model="pick4" />
        <label for="two">No</label>

        <input type="radio" id="no info" value="No info" v-model="pick4" />
        <label for="two">No tengo información</label>
        </section>

        <section>
        <p>16.	Su compañía cuenta con acceso a Internet</p>
        <select v-model="selected9">
          <option disabled value="">Seleccione uno...</option>
          <option></option>
          <option>Tiene acceso a Internet solo para un solo computador y utiliza línea telefónica.</option>
          <option>Varios computadores de mi empresa tienen acceso a Internet.</option>
          <option>Todos los computadores de mi empresa tienen acceso a Internet.</option>
          <option>Mi empresa no tiene acceso a Internet.</option>
        </select>
        </section>

        <section>
        <p>17.	Con que tipo de internet cuenta su compañía</p>
        <select v-model="selected10">
          <option disabled value="">Seleccione uno...</option>
          <option></option>
          <option>Conexión vía satélite</option>
          <option>Inalámbrica (radioenlace)</option>
          <option>Conexiones de datos móviles</option>
          <option>Estándar WiMAX</option>
          <option>Sistema LMDS (Local Multipoint Distribution System)</option>
          <option>Fibra óptica</option>
          <option>Conexión ADSL</option>
          <option>Red digital RDSI</option>
        </select>
        </section>

        <section>
        <p>18.	Su compañía cuenta con un dominio en internet:</p>
        <input type="text" v-model="open3">
        </section>

        <section>
        <p>18.1 ¿Sabe cuánto cuesta un dominio al año para su empresa?</p>
        <input type="text" v-model="open4">
        </section>

        <section>
        <p>19.	Su compañía cuenta con:</p>
        <select v-model="selected11">
          <option disabled value="">Seleccione uno...</option>
          <option>Una cuenta de correo electrónico para la compañía</option>
          <option>Correo electrónico para algunos empleados de la compañía </option>
          <option>Correo electrónico para cada uno de los empleados de la compañía</option>
          <option>Otros</option>
        </select>
        </section>

        <section>
        <p>20.	¿Cuenta con página WEB?</p>
    
        <input type="radio" id="si" value="Si" v-model="pick5" />
        <label for="one">Si</label>

        <input type="radio" id="no" value="No" v-model="pick5" />
        <label for="two">No</label>
        </section>

        <section>
        <p>21.	¿Su compañía tiene algún tipo de interacción con Internet o con el comercio electrónico, publicidad en internet, televisión, radio?</p>
    
        <input type="radio" id="si" value="Si" v-model="pick6" />
        <label for="one">Si</label>

        <input type="radio" id="no" value="No" v-model="pick6" />
        <label for="two">No</label>
        </section>

        <section>
        <p>22.	Cuál de estas herramientas utiliza su empresa:</p>
        <input type="checkbox" id="hoja" value="Hoja" v-model="check1">
        <label for="hoja">Hoja de calculo</label>

        <input type="checkbox" id="pagina" value="Pagina" v-model="check1">
        <label for="pagina">Página web</label>

        <input type="checkbox" id="plan" value="Plan" v-model="check1">
        <label for="plan">Planeación de ventas</label>

        <input type="checkbox" id="multi" value="Multi" v-model="check1">
        <label for="multi">Herramientas de presentación multimedia</label>

        <input type="checkbox" id="base" value="Base" v-model="check1">
        <label for="base">Base de datos</label>

        <input type="checkbox" id="inventario" value="Inventario" v-model="check1">
        <label for="inventario">Manejo de inventario</label>

        <input type="checkbox" id="correo" value="Correo" v-model="check1">
        <label for="correo">Correo electrónico</label>

        <input type="checkbox" id="proyecto" value="Proyecto" v-model="check1">
        <label for="proyecto">Programa seguimientos de proyectos, agenda</label>

        <input type="checkbox" id="social" value="Social" v-model="check1">
        <label for="social">Redes sociales</label>
        </section>

        <section>
        <p>23.	¿Su compañía cuenta con un Software en el que se realice la contabilidad, facturación, compras o gastos?</p>
    
        <input type="radio" id="si" value="Si" v-model="pick7" />
        <label for="one">Si</label>

        <input type="radio" id="no" value="No" v-model="pick7" />
        <label for="two">No</label>
        </section>

        <section>
        <p>24.  ¿Su compañía tiene un Software para los procesos de Dirección, análisis de datos y generación de reportes para la toma de decisiones gerenciales, Financieros, Comerciales y/o Administrativos?</p>
    
        <input type="radio" id="si" value="Si" v-model="pick8" />
        <label for="one">Si</label>

        <input type="radio" id="no" value="No" v-model="pick8" />
        <label for="two">No</label>
        </section>

        <section>
        <p>25.  ¿La empresa hace uso de alguna herramienta tecnológica? </p>
    
        <input type="radio" id="si" value="Si" v-model="pick9" />
        <label for="one">Si</label>

        <input type="radio" id="no" value="No" v-model="pick9" />
        <label for="two">No</label>
        </section>

        <section>
        <p>26.	¿Su empresa ha definido formatos y procedimientos estándares para los procesos administrativos y de operación? </p>
        <select v-model="selected11">
          <option disabled value="">Seleccione uno...</option>
          <option>En mi empresa los procesos están estandarizados</option>
          <option>Algunos procesos están estandarizados y otros no</option>
          <option>Unos pocos procesos están estandarizados</option>
          <option>Ningún proceso está estandarizado</option>
        </select>
        </section>

        <section>
        <p>25.1  ¿Cuenta con alguna certificación en calidad, medio ambiente o Seguridad y salud en el trabajo?</p>
    
        <input type="radio" id="si" value="Si" v-model="pick10" />
        <label for="one">Si</label>

        <input type="radio" id="no" value="No" v-model="pick10" />
        <label for="two">No</label>
        </section>

        <section>
        <p>27.	¿Con qué frecuencia utiliza los procedimientos y formatos definidos para los procesos administrativos y de operación de su empresa? </p>
        <select v-model="selected12">
          <option disabled value="">Seleccione uno...</option>
          <option>Siempre se utilizan</option>
          <option>Algunas veces se utilizan</option>
          <option>Están definidos, pero nunca se utilizan</option>
          <option>No tenemos procesos internos estandarizados</option>
        </select>
        </section>

        <section>
        <p>28.	Su compañía utiliza algún medio electrónico para mantener relaciones con sus clientes y proveedores  </p>
        <select v-model="selected13">
          <option disabled value="">Seleccione uno...</option>
          <option>Utilizamos correo electrónico</option>
          <option>Utilizamos correo electrónico y/o la página Web (Página en Internet) de nuestra compañía o de nuestros proveedores.</option>
          <option>Utilizamos formatos pre -establecidos para intercambiar información.</option>
          <option>Intercambio Electrónico de Documentos (EDI - Electronic Data Interchange) </option>
          <option>No usamos ningún medio electrónico</option>
          <option>Usamos otros medios como Fax.</option>
          
        </select>
        </section>

        <section>
        <p>29.	¿Su compañía tiene o ha tenido algún tipo de asesoría para el mejoramiento de los procesos internos?</p>
        <select v-model="selected14">
          <option disabled value="">Seleccione uno...</option>
          <option>Hemos tenido asesoría</option>
          <option>Tenemos actualmente asesoría</option>
          <option>Nunca hemos tenido asesoría</option>         
        </select>
        </section>

        <section>
        <p>30.	¿Le gustaría que las personas que trabajan en su empresa o a usted le brindaran acompañamiento o capacitaciones en algún tema específico? ¿En cuál?</p>
        <input type="text" v-model="open5">
        </section>

        <section>
        <p>31.	¿Cuántos clientes nacionales tiene su compañía?  </p>
        <select v-model="selected15">
          <option disabled value="">Seleccione uno...</option>
          <option>Entre uno (1) y dos (2) clientes</option>
          <option>Entre tres (3) y cinco (5) clientes</option>
          <option>Entre seis (6)  (10) y diez clientes</option>         
          <option>Entre once (11) y cincuenta (50)</option>         
          <option>Entre cincuenta y uno (51) y cien (100)</option>         
          <option>Entre ciento uno (101) y doscientos (200)</option>         
          <option>Mas de doscientos (200)</option>         
          <option>Ningún cliente nacional</option>         
        </select>
        </section>

        <section>
        <p>32.	¿Cuántos clientes internacionales tiene su compañía?  </p>
        <select v-model="selected16">
          <option disabled value="">Seleccione uno...</option>
          <option>Entre uno (1) y dos (2) clientes</option>
          <option>Entre tres (3) y cinco (5) clientes</option>
          <option>Entre seis (6)  (10) y diez clientes</option>         
          <option>Entre once (11) y cincuenta (50)</option>         
          <option>Entre cincuenta y uno (51) y cien (100)</option>         
          <option>Entre ciento uno (101) y doscientos (200)</option>         
          <option>Mas de doscientos (200)</option>         
          <option>Ningún cliente internacional</option>         
        </select>
        </section>

        <section>
        <p>33.	¿Con cuántos clientes su empresa logra el 70% de las ventas totales?  </p>
        <select v-model="selected17">
          <option disabled value="">Seleccione uno...</option>
          <option>Menor a diez (10)</option>
          <option>Entre once (11) y cincuenta (50)</option>
          <option>Entre cincuenta y uno (51) y cien (100)</option>         
          <option>Entre ciento uno (101) y doscientos (200)</option>         
          <option>Entre doscientos (200) y mil (1.000)</option>         
          <option>Más de mil (1.000)</option>             
        </select>
        </section>

        <section>
        <p>34.	Las relaciones con estos clientes siguen un procedimiento definido y estándar en su compañía.</p>
        <select v-model="selected18">
          <option disabled value="">Seleccione uno...</option>
          <option>Tienen un procedimiento estándar definido de común acuerdo con los clientes</option>
          <option>Tienen un procedimiento estándar definido por nuestra compañía</option>
          <option>No tienen un procedimiento estándar, cada uno de los clientes usa sus propios formatos y mi compañía se adapta.</option>          
        </select>
        </section>

        <section>
        <p>35.	Cómo califica las relaciones con sus clientes: </p>
        <select v-model="selected19">
          <option disabled value="">Seleccione uno...</option>
          <option>Son estables y permanentes</option>
          <option>Son en algunos casos esporádicos, pero hay una base estable</option>
          <option>Son completamente esporádicas</option>          
        </select>
        </section>

        <section>
        <p>36.	¿Cuántos proveedores de materias primas tiene su compañía? </p>
        <select v-model="selected20">
          <option disabled value="">Seleccione uno...</option>
          <option>Entre uno (1) y dos (2) proveedores</option>
          <option>Entre tres (3) y cinco (5) proveedores</option>
          <option>Entre seis (6) y diez (10) proveedores</option>          
          <option>Entre once (11) y cincuenta (50) proveedores</option>          
          <option>Entre cincuenta y uno (51) y cien (100) proveedores</option>          
          <option>Entre ciento uno (101) y doscientos (200) proveedores</option>          
          <option>Mas de doscientos (200) proveedores</option>          
          <option>No sabe / No recuerda</option>    
        </select>
        </section>

        <section>
        <p>37.	¿Cuántos proveedores de productos terminados tiene su compañía? </p>
        <select v-model="selected21">
          <option disabled value="">Seleccione uno...</option>
          <option>Entre uno (1) y dos (2) proveedores</option>
          <option>Entre tres (3) y cinco (5) proveedores</option>
          <option>Entre seis (6) y diez (10) proveedores</option>          
          <option>Entre once (11) y cincuenta (50) proveedores</option>          
          <option>Entre cincuenta y uno (51) y cien (100) proveedores</option>          
          <option>Entre ciento uno (101) y doscientos (200) proveedores</option>          
          <option>Mas de doscientos (200) proveedores</option>          
          <option>No sabe / No recuerda</option>    
        </select>
        </section>

        <section>
        <p>38.	¿Cuántos proveedores de servicios tiene su compañía? </p>
        <select v-model="selected21">
          <option disabled value="">Seleccione uno...</option>
          <option>Entre uno (1) y dos (2) proveedores</option>
          <option>Entre tres (3) y cinco (5) proveedores</option>
          <option>Entre seis (6) y diez (10) proveedores</option>          
          <option>Entre once (11) y cincuenta (50) proveedores</option>          
          <option>Entre cincuenta y uno (51) y cien (100) proveedores</option>          
          <option>Entre ciento uno (101) y doscientos (200) proveedores</option>          
          <option>Mas de doscientos (200) proveedores</option>          
          <option>No sabe / No recuerda</option>    
        </select>
        </section>

        <section>
        <p>40.	Las relaciones con sus proveedores siguen un procedimiento estándar en su compañía. </p>
        <select v-model="selected22">
          <option disabled value="">Seleccione uno...</option>
          <option>Tienen un procedimiento estándar definido de común acuerdo con los proveedores</option>
          <option>Tienen un procedimiento estándar definido por nuestra compañía</option>
          <option>Otra</option>           
        </select>
        </section>

        <section>
        <p>41.	Cómo califica las relaciones con sus proveedores</p>
        <select v-model="selected23">
          <option disabled value="">Seleccione uno...</option>
          <option>Son estables y permanentes</option>
          <option>Son en algunos casos esporádicos, pero hay una base estable</option>
          <option>Son completamente esporádicas</option>           
        </select>
        </section>

        <section>
        <p>42.	Indique Si desea realizar algún cambio de su negocio y ¿Porque?</p>
        <input type="text" v-model="open6">
        </section>
        
        <button type="button"  @click="verificar()"> 
                Ingresar
            </button>
        <label for="mensaje">{{mensaje}}</label>
        
        
    </div>
</template>

<script>

import db from "../components/firebase/initFirebase";
import VueCookies from 'vue-cookies'
import { registerFirestore } from "@firebase/firestore-compat";

export default {
  data() {
    return {
      selected1: '',
      selected2: '',
      selected3: '',
      selected4: '',
      selected5: '',
      selected6: '',
      selected7: '',
      selected8: '',
      selected9: '',
      selected10: '',
      selected11: '',
      selected12: '',
      selected13: '',
      selected14: '',
      selected15: '',
      selected16: '',
      selected17: '',
      selected18: '',
      selected19: '',
      selected20: '',
      selected21: '',
      selected22: '',
      selected23: '',
      pick1: '',
      pick2: '',
      pick3: '',
      pick4: '',
      pick5: '',
      pick6: '',
      pick7: '',
      pick8: '',
      pick9: '',
      pick10: '',
      open1: '',
      open2: '',
      open3: '',
      open4: '',
      open5: '',
      open6: '',
      check1: [],
      mensaje: '',
      probando: false,
    }
  },
  methods: {
    verificar(){
      console.log(this.selected1)
    }
    
  },
  mounted() {
    // methods can be called in lifecycle hooks, or other methods!
  }
}



</script>