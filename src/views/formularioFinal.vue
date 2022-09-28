<template>
    
    <navBar2></navBar2>
    <body class="antialiased text-gray-700 bg-gray-100">
       <div class="flex w-full  justify-center items-center">
      <div class="w-full max-w-3xl" >
        <div class="bg-white p-12 rounded-lg shadow-lg w-full mt-8">
           <section>
            <h1 class="font-semibold text-3xl text-center text-teal-700">
                      Encuesta de caracterizacion 
            </h1>
            <br>
        <p>1.¿A qué sector económico pertenece su empresa?</p>
    

          <form action="" class="formulario">
        <div class="radio">
          
            <ul>
              
            <li>
                <input  type="radio" id="ganaderia" value="1" v-model="p1">
                <label class="radio" for="ganaderia" >Ganadería</label>
            </li>
              
            <li>
                <input type="radio" id="mineria" value="2" v-model="p1">
                <label class="radio" for="mineria">Minería de carbón </label>
                
            </li>
              
            <li>
              <input type="radio" id="comercio" value="3" v-model="p1">
                <label class="radio" for="comercio">Comercio</label>
            </li>
              
            <li>
              <input type="radio" id="arcilla" value="4" v-model="p1">
              <label class="radio" for="arcilla">Arcillas</label>
            </li>
              
              <li>
                <input type="radio" id="gravas" value="5" v-model="p1">
                <label class="radio" for="gravas">Gravas</label>
            </li>

                <li>
                  <input type="radio" id="cuero" value="6" v-model="p1">
                <label class="radio" for="cuero">Cuero y/o calzado </label>
            </li>
            
                <li>
                  <input type="radio" id="artefactos"  value="7" v-model="p1">
                <label class="radio" for="artefactos">Artefactos domésticos</label>
            </li>

              <li>
                <input type="radio" id="eme" value="8" v-model="p1">
                <label class="radio" for="eme">Equipo y Maquinaria eléctrica y electrónica</label>
            </li>
            <li>
              <input type="radio" id="lacteos" value="9" v-model="p1">
                <label class="radio" for="lacteos">Lácteos</label>
            </li>
            <li>
              <input type="radio" id="cssa" value="10" v-model="p1">
                <label class="for" for="cssa">Convenio software y servicios asociados</label>
            </li>
              <li>
                <input type="radio" id="salud" value="11" v-model="p1" >
                <label class="radio" for="salud">Servicios de salud</label>
            </li>
              <li>
                <input type="radio" id="financiero" value="12" v-model="p1">
                <label class="radio" for="financiero">Financiero</label>
            </li>
              <li>
                <input type="radio" id="tele" value="13" v-model="p1">
                <label class="for" for="tele">Telecomunicaciones </label>
            </li>
              <li>
                <input type="radio" id="servicios" value="14" v-model="p1">
                <label class="radio" for="servicios">Servicios</label>
            </li>
            

            </ul>
          
        </div>
      </form>
        <p>Complemento</p>
        <input type="text" v-model="c1" >
      </section>

      <section>
        <p>2.	Por favor indique el sector económico objetivo de su actividad principal</p>
   
                  <form action="" class="formulario">
            <div class="radio">
              
                <ul>
                  
                <li>
                    <input  type="radio" id="1.1" value="1" v-model="p2">
                    <label class="radio" for="1.1" >Ganadería</label>
                </li>
                  
                <li>
                    <input type="radio" id="1.2" value="2" v-model="p2">
                    <label class="radio" for="1.2">Minería de carbón </label>
                    
                </li>
                  
                <li>
                  <input type="radio" id="1.3" value="3" v-model="p2">
                    <label class="radio" for="1.3">Comercio</label>
                </li>
                  
                <li>
                  <input type="radio" id="1.4" value="4" v-model="p2">
                  <label class="radio" for="1.4">Arcillas</label>
                </li>
                  
                  <li>
                    <input type="radio" id="1.5" value="5" v-model="p2">
                    <label class="radio" for="1.5">Gravas</label>
                </li>

                    <li>
                      <input type="radio" id="1.6" value="6" v-model="p2">
                    <label class="radio" for="1.6">Cuero y/o calzado </label>
                </li>
                
                    <li>
                      <input type="radio" id="1.7"  value="7" v-model="p2">
                    <label class="radio" for="1.7">Artefactos domésticos</label>
                </li>

                  <li>
                    <input type="radio" id="1.8" value="8" v-model="p2">
                    <label class="radio" for="1.8">Equipo y Maquinaria eléctrica y electrónica</label>
                </li>
                <li>
                  <input type="radio" id="1.9" value="9" v-model="p2">
                    <label class="radio" for="1.9">Lácteos</label>
                </li>
                <li>
                  <input type="radio" id="1.10" value="10" v-model="p2">
                    <label class="for" for="1.10">Convenio software y servicios asociados</label>
                </li>
                  <li>
                    <input type="radio" id="1.11" value="11" v-model="p2" >
                    <label class="radio" for="1.11">Servicios de salud</label>
                </li>
                  <li>
                    <input type="radio" id="1.12" value="12" v-model="p2">
                    <label class="radio" for="1.12">Financiero</label>
                </li>
                  <li>
                    <input type="radio" id="1.13" value="13" v-model="p2">
                    <label class="for" for="1.13">Telecomunicaciones </label>
                </li>
                  <li>
                    <input type="radio" id="1.14" value="14" v-model="p2">
                    <label class="radio" for="1.14">Servicios</label>
                </li>
                

                </ul>
              
            </div>
          </form>
 

        <p>Complemento</p>
        <input type="text" v-model="c2">
      </section>

      <section>
        <p>3.	Por favor indique de qué sector económico provienen los insumos para su actividad productiva o económica </p>
   
            <form action="" class="formulario">
            <div class="radio">
              
                <ul>
                  
                <li>
                    <input  type="radio" id="2.1" value="1" v-model="p3">
                    <label class="radio" for="2.1" >Ganadería</label>
                </li>
                  
                <li>
                    <input type="radio" id="2.2" value="2" v-model="p3">
                    <label class="radio" for="2.2">Minería de carbón </label>
                    
                </li>
                  
                <li>
                  <input type="radio" id="2.3" value="3" v-model="p3">
                    <label class="radio" for="2.3">Comercio</label>
                </li>
                  
                <li>
                  <input type="radio" id="2.4" value="4" v-model="p3">
                  <label class="radio" for="2.4">Arcillas</label>
                </li>
                  
                  <li>
                    <input type="radio" id="2.5" value="5" v-model="p3">
                    <label class="radio" for="2.5">Gravas</label>
                </li>

                    <li>
                      <input type="radio" id="2.6" value="6" v-model="p3">
                    <label class="radio" for="2.6">Cuero y/o calzado </label>
                </li>
                
                    <li>
                      <input type="radio" id="2.7"  value="7" v-model="p3">
                    <label class="radio" for="2.7">Artefactos domésticos</label>
                </li>

                  <li>
                    <input type="radio" id="2.8" value="8" v-model="p3">
                    <label class="radio" for="2.8">Equipo y Maquinaria eléctrica y electrónica</label>
                </li>
                <li>
                  <input type="radio" id="2.9" value="9" v-model="p3">
                    <label class="radio" for="2.9">Lácteos</label>
                </li>
                <li>
                  <input type="radio" id="2.10" value="10" v-model="p3">
                    <label class="for" for="2.10">Convenio software y servicios asociados</label>
                </li>
                  <li>
                    <input type="radio" id="2.11" value="11" v-model="p3" >
                    <label class="radio" for="2.11">Servicios de salud</label>
                </li>
                  <li>
                    <input type="radio" id="2.12" value="12" v-model="p3">
                    <label class="radio" for="2.12">Financiero</label>
                </li>
                  <li>
                    <input type="radio" id="2.13" value="13" v-model="p3">
                    <label class="for" for="2.13">Telecomunicaciones </label>
                </li>
                  <li>
                    <input type="radio" id="2.14" value="14" v-model="p3">
                    <label class="radio" for="2.14">Servicios</label>
                </li>
                

                </ul>
              
            </div>
          </form>

        <p>Complemento</p>
        <input type="text" v-model="c3">
      </section>

      <section>
        <p>4.	Indique el rango de ingresos anuales de su empresa a partir de la actividad productiva o económica</p>
    
   
            <form action="" class="formulario">
            <div class="radio">
              
                <ul>
                  
                <li>
                    <input  type="radio" id="500mill" value="1" v-model="p4">
                    <label class="radio" for="500mill" >Inferiores a $500 millones de pesos anuales</label>
                </li>
                  
                <li>
                    <input type="radio" id="500-1000" value="2" v-model="p4">
                    <label class="radio" for="500-1000">Entre $501 y $1000 millones de pesos anuales</label>
                    
                </li>
                  
                <li>
                  <input type="radio" id="1000-5000" value="3" v-model="p4">
                    <label class="radio" for="1000-5000">Entre $1001 y $5000 millones de pesos anuales</label>
                </li>
                  
                <li>
                  <input type="radio" id="5000-10000" value="4" v-model="p4">
                  <label class="radio" for="5000-10000">Entre $5001 y $10.000 millones de pesos anuales</label>
                </li>
                  
                  <li>
                    <input type="radio" id="10000-20000" value="5" v-model="p4">
                    <label class="radio" for="10000-20000">Entre $10.001 y $20.000 millones de pesos anuales</label>
                </li>

                    <li>
                      <input type="radio" id="20000" value="6" v-model="p4">
                    <label class="radio" for="20000">Más de $20.001 millones de pesos anuales</label>
                </li>

                </ul>
              
            </div>
          </form>


        <p>Complemento</p>
        <input type="text" v-model="c4">
        </section>
      <section>

        <p>5.	Cuál es el producto final de su empresa</p>

            <form action="" class="formulario">
            <div class="radio">
              
                <ul>
                  
                <li>
                    <input  type="radio" id="materia" value="1" v-model="p5">
                    <label class="radio" for="materia" >Materia prima para otras empresas</label>
                </li>
                  
                <li>
                    <input type="radio" id="product-semi" value="2" v-model="p5">
                    <label class="radio" for="product-semi">Producto semi - terminado para otras empresas</label>
                    
                </li>
                  
                <li>
                  <input type="radio" id="product-ter" value="3" v-model="p5">
                    <label class="radio" for="product-ter">Producto terminado para usuarios finales o canales de distribución</label>
                </li>
                  
                <li>
                  <input type="radio" id="servic" value="4" v-model="p5">
                  <label class="radio" for="servic">Servicios.</label>
                </li>
                  
                </ul>
              
            </div>
          </form>

        <p>Complemento</p>
        <input type="text" v-model="c5">
        </section>
      <section>

        <p >6.	La zona de influencia de su compañía es</p>

          <form action="" class="formulario">
          <div class="radio">
            
              <ul>
                
              <li>
                  <input  type="radio" id="local" value="1" v-model="p6">
                  <label class="radio" for="local" >Operación en un solo sitio, local</label>
              </li>
                
              <li>
                  <input type="radio" id="region" value="2" v-model="p6">
                  <label class="radio" for="region">Operación en una región</label>
                  
              </li>
                
              <li>
                <input type="radio" id="pais" value="3" v-model="p6">
                  <label class="radio" for="pais">Operamos nivel de todo el país</label>
              </li>
                
              <li>
                <input type="radio" id="nacional-inter" value="4" v-model="p6">
                <label class="radio" for="nacional-inter">Operamos a nivel nacional e internacional.</label>
              </li>
                
              </ul>
            
          </div>
        </form>

        <p>Complemento</p>
        <input type="text" v-model="c6">
        </section>
      <section>

        <p>7.	Seleccione el nivel educativo de los empleados en el campo laboral directivo</p>
            
                <form action="" class="formulario">
          <div class="radio">
            
              <ul>
                
              <li>
                  <input  type="radio" id="primaria" value="1" v-model="p7">
                  <label class="radio" for="primaria" >Primaria</label>
              </li>
                
              <li>
                  <input type="radio" id="bachiderato" value="2" v-model="p7">
                  <label class="radio" for="bachiderato">Bachillerato </label>
                  
              </li>
                
              <li>
                <input type="radio" id="tecnico" value="3" v-model="p7">
                  <label class="radio" for="tecnico">Técnico</label>
              </li>
                
              <li>
                <input type="radio" id="tecnologo" value="4" v-model="p7">
                <label class="radio" for="tecnologo">Tecnólogo</label>
              </li>
                
                <li>
                  <input type="radio" id="universiatrio" value="5" v-model="p7">
                  <label class="radio" for="universiatrio">Universitario</label>
              </li>

                  <li>
                    <input type="radio" id="postgrado" value="6" v-model="p7">
                  <label class="radio" for="postgrado">Postgrado</label>
              </li>
              
                  <li>
                    <input type="radio" id="ninguno"  value="7" v-model="p7">
                  <label class="radio" for="ninguno">Ninguno</label>
              </li>

                
              

              </ul>
            
          </div>
        </form>

        <p>Complemento</p>
        <input type="text" v-model="c7">
        </section>

        <section>
        <p>8.	Seleccione el nivel educativo de los empleados en el campo laboral operativo</p>
  
                  <form action="" class="formulario">
            <div class="radio">
              
                <ul>
                  
                <li>
                    <input  type="radio" id="1" value="1" v-model="p8">
                    <label class="radio" for="1" >Primaria</label>
                </li>
                  
                <li>
                    <input type="radio" id="2" value="2" v-model="p8">
                    <label class="radio" for="2">Bachillerato </label>
                    
                </li>
                  
                <li>
                  <input type="radio" id="3" value="3" v-model="p8">
                    <label class="radio" for="3">Técnico</label>
                </li>
                  
                <li>
                  <input type="radio" id="4" value="4" v-model="p8">
                  <label class="radio" for="4">Tecnólogo</label>
                </li>
                  
                  <li>
                    <input type="radio" id="5" value="5" v-model="p8">
                    <label class="radio" for="5">Universitario</label>
                </li>

                    <li>
                      <input type="radio" id="6" value="6" v-model="p8">
                    <label class="radio" for="6">Postgrado</label>
                </li>
                
                    <li>
                      <input type="radio" id="7"  value="7" v-model="p8">
                    <label class="radio" for="7">Ninguno</label>
                </li>


                </ul>
              
            </div>
          </form>

        <p>Complemento</p>
        <input type="text" v-model="c8">
        </section>

      <section>
        <p>9.	¿Si su empresa cuenta con algún software, especifique cual y si conoce el costo cuál es?</p>
        <form action="" class="formulario">
          <div class="radio">
            
              <ul>
                
              <li>
                  <input  type="radio" id="9.1" value="1" v-model="p9">
                  <label class="radio" for="9.1" >Si</label>
              </li>
                
              <li>
                  <input type="radio" id="9.2" value="2" v-model="p9">
                  <label class="radio" for="9.2">No</label>
                  
              </li>
                
              <li>
                <input type="radio" id="9.3" value="3" v-model="p9">
                  <label class="radio" for="9.3">No tengo información</label>
              </li>
              
              
              </ul>
            
          </div>
        </form>
        

        <p>9.1 ¿Recuerda cual es y el valor aproximado de la compra? </p>
        <input type="text" v-model="c9">
        </section>
      <section>
        <p>10.	¿Pagaría usted por un software o herramienta tecnológica que le permita mejorar sus procesos?</p>
    

          <form action="" class="formulario">
          <div class="radio">
            
              <ul>
                
              <li>
                  <input  type="radio" id="10.1" value="1" v-model="p10">
                  <label class="radio" for="10.1" >Si</label>
              </li>
                
              <li>
                  <input type="radio" id="10.2" value="2" v-model="p10">
                  <label class="radio" for="10.2">No</label>
                  
              </li>
                
              <li>
                <input type="radio" id="10.3" value="3" v-model="p10">
                  <label class="radio" for="10.3">No tengo información</label>
              </li>
              
              
              </ul>
            
          </div>
        </form>
        <p>Complemento</p>
        <input type="text" v-model="c10">
        </section>
      <section>
        <p>11.	¿En la empresa tiene algún rubro presupuestal destinado a actualización en TI?</p>
  
          <form action="" class="formulario">
          <div class="radio">
            
              <ul>
                
              <li>
                  <input  type="radio" id="11.1" value="1" v-model="p11">
                  <label class="radio" for="11.1" >Si</label>
              </li>
                
              <li>
                  <input type="radio" id="11.2" value="2" v-model="p11">
                  <label class="radio" for="11.2">No</label>
                  
              </li>
                
              <li>
                <input type="radio" id="11.3" value="3" v-model="p11">
                  <label class="radio" for="11.3">No tengo información</label>
              </li>
              
              
              </ul>
            
          </div>
        </form>

        <p>Complemento</p>
        <input type="text" v-model="c11">
        </section>
      <section>
        <p>12.	¿Qué grado de relevancia le da a la transformación digital empresarial?</p>

          <form action="" class="formulario">
          <div class="radio">
            
              <ul>
                
              <li>
                  <input  type="radio" id="12.1" value="1" v-model="p12">
                  <label class="radio" for="12.1" >Bajo o sin importancia</label>
              </li>
                
              <li>
                  <input type="radio" id="12.2" value="2" v-model="p12">
                  <label class="radio" for="12.2">Medianamente importante</label>
                  
              </li>
                
              <li>
                <input type="radio" id="12.3" value="3" v-model="p12">
                  <label class="radio" for="12.3">Muy importante</label>
              </li>
              
              
              </ul>
            
          </div>
        </form>
        </section>
      <section>
        <p>13.	¿En el presupuesto de su empresa tiene algún monto destinado a la adquisición de soluciones de base tecnológica?</p>
    
          <form action="" class="formulario">
          <div class="radio">
            
              <ul>
                
              <li>
                  <input  type="radio" id="13.1" value="1" v-model="p13">
                  <label class="radio" for="13.1" >Si</label>
              </li>
                
              <li>
                  <input type="radio" id="13.2" value="2" v-model="p13">
                  <label class="radio" for="13.2">No</label>
                  
              </li>
                
              <li>
                <input type="radio" id="13.3" value="3" v-model="p13">
                  <label class="radio" for="13.3">No tengo información</label>
              </li>
              
              
              </ul>
            
          </div>
        </form>
        </section>
      <section>
        <p>14.	¿Con cuántos computadores cuenta su compañía?</p>
          <form action="" class="formulario">
          <div class="radio">
            
              <ul>
                
              <li>
                  <input  type="radio" id="14.1" value="1" v-model="p14">
                  <label class="radio" for="14.1" >Un computador</label>
              </li>
                
              <li>
                  <input type="radio" id="14.2" value="2" v-model="p14">
                  <label class="radio" for="14.2">De dos a cinco computadores</label>
                  
              </li>
                
              <li>
                <input type="radio" id="14.3" value="3" v-model="p14">
                  <label class="radio" for="14.3">De cinco a 20 computadores</label>
              </li>
              <li>
                <input type="radio" id="14.4" value="4" v-model="p14">
                  <label class="radio" for="14.4">Más de 20 computadores</label>
              </li>
              <li>
                <input type="radio" id="14.5" value="5" v-model="p14">
                  <label class="radio" for="14.5">Mi empresa no tiene computadores</label>
              </li>

              </ul>
            
          </div>
        </form>

        <p>Complemento</p>
        <input type="text" v-model="c14">
        </section>
      <section>

        <p>15.	¿Los computadores de su compañía esta interconectados en una red? Interna o externa (realizar en complemento según respuesta)</p>
    
      
          <form action="" class="formulario">
          <div class="radio">
            
              <ul>
                
              <li>
                  <input  type="radio" id="15.1" value="1" v-model="p15">
                  <label class="radio" for="15.1" >Si</label>
              </li>
                
              <li>
                  <input type="radio" id="15.2" value="2" v-model="p15">
                  <label class="radio" for="15.2">No</label>
                  
              </li>
                
              <li>
                <input type="radio" id="15.3" value="3" v-model="p15">
                  <label class="radio" for="15.3">No tengo información</label>
              </li>
              
              
              </ul>
            
          </div>
        </form>

        <p>Complemento</p>
        <input type="text" v-model="c15">
        </section>
      <section>
        <p>16.	Su compañía cuenta con acceso a Internet</p>
    
          <form action="" class="formulario">
          <div class="radio">
            
              <ul>
                
              <li>
                  <input  type="radio" id="16.1" value="1" v-model="p16">
                  <label class="radio" for="16.1" >Tiene acceso a Internet solo para un solo computador y utiliza línea telefónica.</label>
              </li>
                
              <li>
                  <input type="radio" id="16.2" value="2" v-model="p16">
                  <label class="radio" for="16.2">Varios computadores de mi empresa tienen acceso a Internet.</label>
                  
              </li>
                
              <li>
                <input type="radio" id="16.3" value="3" v-model="p16">
                  <label class="radio" for="16.3">Todos los computadores de mi empresa tienen acceso a Internet.</label>
              </li>
              <li>
                <input type="radio" id="16.4" value="4" v-model="p16">
                  <label class="radio" for="16.4">Mi empresa no tiene acceso a Internet.</label>
              </li>

              </ul>
            
          </div>
        </form>

        <p>Complemento</p>
        <input type="text" v-model="c16">
        </section>
      <section>
        <p>17.	Con que tipo de internet cuenta su compañía.</p>
          <form action="" class="formulario">
          <div class="radio">
            
              <ul>
                
              <li>
                  <input  type="radio" id="17.1" value="1" v-model="p17">
                  <label class="radio" for="17.1" >Conexión vía satélite</label>
              </li>
                
              <li>
                  <input type="radio" id="17.2" value="2" v-model="p17">
                  <label class="radio" for="17.2">Inalámbrica (radioenlace)</label>
                  
              </li>
                
              <li>
                <input type="radio" id="17.3" value="3" v-model="p17">
                  <label class="radio" for="17.3">Conexiones de datos móviles</label>
              </li>
                
              <li>
                <input type="radio" id="17.4" value="4" v-model="p17">
                <label class="radio" for="17.4">Estándar WiMAX</label>
              </li>
                
                <li>
                  <input type="radio" id="17.5" value="5" v-model="p17">
                  <label class="radio" for="17.5">Sistema LMDS (Local Multipoint Distribution System)</label>
              </li>

                  <li>
                    <input type="radio" id="17.6" value="6" v-model="p17">
                  <label class="radio" for="17.6">Fibra óptica</label>
              </li>
              
                <li>
                    <input type="radio" id="17.7"  value="7" v-model="p17">
                  <label class="radio" for="17.7">Conexión ADSL</label>
              </li>

              <li>
                    <input type="radio" id="17.8"  value="8" v-model="p17">
                  <label class="radio" for="17.8">Red digital RDSI</label>
              </li>

              <li>
                    <input type="radio" id="17.9"  value="9" v-model="p17">
                  <label class="radio" for="17.9">No tengo información</label>
              </li>


              </ul>
            
          </div>
        </form>

        </section>
      <section>
        <p>18.	Su compañía cuenta con un dominio en internet</p>
        
        <form action="" class="formulario">
          <div class="radio">
            
              <ul>
                
              <li>
                  <input  type="radio" id="18.1" value="1" v-model="p18">
                  <label class="radio" for="18.1" >Si</label>
              </li>
                
              <li>
                  <input type="radio" id="18.2" value="2" v-model="p18">
                  <label class="radio" for="18.2">No</label>
                  
              </li>
                
              <li>
                <input type="radio" id="18.3" value="3" v-model="p18">
                  <label class="radio" for="18.3">No tengo información</label>
              </li>
              
              
              </ul>
            
          </div>
        </form>

        <p>18.1 ¿Sabe cuánto cuesta un dominio al año para su empresa?</p>
        <input type="text" v-model="c18">
        </section>
      <section>
        <p>19.	Su compañía cuenta con:</p>
            <form action="" class="formulario">
            <div class="radio">
              
                <ul>
                  
                <li>
                    <input  type="radio" id="19.1" value="1" v-model="p19">
                    <label class="radio" for="19.1" >Una cuenta de correo electrónico para la compañía</label>
                </li>
                  
                <li>
                    <input type="radio" id="19.2" value="2" v-model="p19">
                    <label class="radio" for="19.2">Correo electrónico para algunos empleados de la compañía</label>
                    
                </li>
                  
                <li>
                  <input type="radio" id="19.3" value="3" v-model="p19">
                    <label class="radio" for="19.3">Correo electrónico para cada uno de los empleados de la compañía</label>
                </li>
                <li>
                  <input type="radio" id="19.4" value="4" v-model="p19">
                    <label class="radio" for="19.4">Otros</label>
                </li>

                </ul>
              
            </div>
          </form>

        <p>Complemento</p>
        <input type="text" v-model="c19">
        </section>
      <section>
        <p>20.	¿Cuenta con página WEB?</p>
    
          <form action="" class="formulario">
          <div class="radio">
            
              <ul>
                
              <li>
                  <input  type="radio" id="20.1" value="1" v-model="p20">
                  <label class="radio" for="20.1" >Si</label>
              </li>
                
              <li>
                  <input type="radio" id="20.2" value="2" v-model="p20">
                  <label class="radio" for="20.2">No</label>
                  
              </li>
                
              <li>
                <input type="radio" id="20.3" value="3" v-model="p20">
                  <label class="radio" for="20.3">No tengo información</label>
              </li>
              
              
              </ul>
            
          </div>
        </form>

        <p>Complemento</p>
        <input type="text" v-model="c20">
        </section>
      <section>
        <p>21.	¿Su compañía tiene algún tipo de interacción con Internet o con el comercio electrónico, publicidad en internet, televisión, radio?</p>
          <form action="" class="formulario">
            <div class="radio">
              
                <ul>
                  
                <li>
                    <input  type="radio" id="21.1" value="1" v-model="p21">
                    <label class="radio" for="21.1" >Si</label>
                </li>
                  
                <li>
                    <input type="radio" id="21.2" value="2" v-model="p21">
                    <label class="radio" for="21.2">No</label>
                    
                </li>
                  
                <li>
                  <input type="radio" id="21.3" value="3" v-model="p21">
                    <label class="radio" for="21.3">No tengo información</label>
                </li>
                
                
                </ul>
              
            </div>
          </form>

        <p>Complemento</p>
        <input type="text" v-model="c21">
        </section>
      <section>
        <p>22.	Cuál de estas herramientas utiliza su empresa:</p>
          <form action="" class="formulario">
          <div class="checkbox">
            
              <ul>
                
              <li>
                  <input  type="checkbox" id="22.1" value="1" v-model="p22">
                  <label class="checkbox" for="22.1" >Hoja de calculo</label>
              </li>
                
              <li>
                  <input type="checkbox" id="22.2" value="2" v-model="p22">
                  <label class="checkbox" for="22.2">Página web</label>
                  
              </li>
                
              <li>
                <input type="checkbox" id="22.3" value="3" v-model="p22">
                  <label class="checkbox" for="22.3">Planeación de venta</label>
              </li>
                
              <li>
                <input type="checkbox" id="22.4" value="4" v-model="p22">
                <label class="checkbox" for="22.4">Herramientas de presentación multimedia</label>
              </li>
                
                <li>
                  <input type="checkbox" id="22.5" value="5" v-model="p22">
                  <label class="checkbox" for="22.5">Base de datos</label>
              </li>

                  <li>
                    <input type="checkbox" id="22.6" value="6" v-model="p22">
                  <label class="checkbox" for="22.6">Manejo de inventario</label>
              </li>
              
                <li>
                    <input type="checkbox" id="22.7"  value="7" v-model="p22">
                  <label class="checkbox" for="22.7">Correo electrónico</label>
              </li>

              <li>
                    <input type="checkbox" id="22.8"  value="8" v-model="p22">
                  <label class="checkbox" for="22.8">Programa seguimientos de proyectos, agenda</label>
              </li>

              <li>
                    <input type="checkbox" id="22.9"  value="9" v-model="p22">
                  <label class="checkbox" for="22.9">Redes sociales</label>
              </li>


              </ul>
            
          </div>
        </form>

        </section>
      <section>
        <p>23.	¿Su compañía cuenta con un Software en el que se realice la contabilidad, facturación, compras o gastos?</p>
  
            <form action="" class="formulario">
            <div class="radio">
              
                <ul>
                  
                <li>
                    <input  type="radio" id="23.1" value="1" v-model="p23">
                    <label class="radio" for="23.1" >Si</label>
                </li>
                  
                <li>
                    <input type="radio" id="23.2" value="2" v-model="p23">
                    <label class="radio" for="23.2">No</label>
                    
                </li>
                  
                <li>
                  <input type="radio" id="23.3" value="3" v-model="p23">
                    <label class="radio" for="23.3">No tengo información</label>
                </li>
                
                
                </ul>
              
            </div>
          </form>

        <p>Complemento</p>
        <input type="text" v-model="c23">
        </section>
      <section>
        <p>24.  ¿Su compañía tiene un Software para los procesos de Dirección, análisis de datos y generación de reportes para la toma de decisiones gerenciales, Financieros, Comerciales y/o Administrativos?</p>

          <form action="" class="formulario">
          <div class="radio">
            
              <ul>
                
              <li>
                  <input  type="radio" id="24.1" value="1" v-model="p24">
                  <label class="radio" for="24.1" >Si</label>
              </li>
                
              <li>
                  <input type="radio" id="24.2" value="2" v-model="p24">
                  <label class="radio" for="24.2">No</label>
                  
              </li>
                
              <li>
                <input type="radio" id="24.3" value="3" v-model="p24">
                  <label class="radio" for="24.3">No tengo información</label>
              </li>
              
              
              </ul>
            
          </div>
        </form>

        <p>Complemento</p>
        <input type="text" v-model="c24">
        </section>
      <section>
        <p>25.  ¿La empresa hace uso de alguna herramienta tecnológica? </p>
  
          <form action="" class="formulario">
          <div class="radio">
            
              <ul>
                
              <li>
                  <input  type="radio" id="25.1" value="1" v-model="p25">
                  <label class="radio" for="25.1" >Si</label>
              </li>
                
              <li>
                  <input type="radio" id="25.2" value="2" v-model="p25">
                  <label class="radio" for="25.2">No</label>
                  
              </li>
                
              <li>
                <input type="radio" id="25.3" value="3" v-model="p25">
                  <label class="radio" for="25.3">No tengo información</label>
              </li>
              
              
              </ul>
            
          </div>
        </form>

        <p>Complemento</p>
        <input type="text" v-model="c25">
        </section>
      <section>
        <p>26.	¿Su empresa ha definido formatos y procedimientos estándares para los procesos administrativos y de operación? (seleccione la respuesta que mejor se aplique)</p>
            <form action="" class="formulario">
            <div class="radio">
              
                <ul>
                  
                <li>
                    <input  type="radio" id="26.1" value="3" v-model="p26">
                    <label class="radio" for="26.1" >En mi empresa los procesos están estandarizados</label>
                </li>
                  
                <li>
                    <input type="radio" id="26.2" value="2" v-model="p26">
                    <label class="radio" for="26.2">Algunos procesos están estandarizados y otros no</label>
                    
                </li>
                  
                <li>
                  <input type="radio" id="26.3" value="1" v-model="p26">
                    <label class="radio" for="26.3">Unos pocos procesos están estandarizados</label>
                </li>
                <li>

                  <input type="radio" id="26.4" value="0" v-model="p26">
                    <label class="radio" for="26.4">Ningún proceso está estandarizado</label>
                </li>
                </ul>
              
            </div>
          </form>

        <p>Complemento</p>
        <input type="text" v-model="c26">
        </section>

        <section>
        <p>26.1	¿Cuenta con alguna certificación en calidad, medio ambiente o Seguridad y salud en el trabajo?</p>
        <form action="" class="formulario">
          <div class="radio">
            
              <ul>
                
              <li>
                  <input  type="radio" id="26.1.1" value="1" v-model="p26_1">
                  <label class="radio" for="26.1.1" >Si</label>
              </li>
                
              <li>
                  <input type="radio" id="26.1.2" value="2" v-model="p26_1">
                  <label class="radio" for="26.1.2">No</label>
                  
              </li>
                
              <li>
                <input type="radio" id="26.1.3" value="3" v-model="p26_1">
                  <label class="radio" for="26.1.3">No tengo información</label>
              </li>
              
              
              </ul>
            
          </div>
        </form>

        <p>Complemento</p>
        <input type="text" v-model="c26_1">
        </section>

      <section>
        <p>27.	¿Con qué frecuencia utiliza los procedimientos y formatos definidos para los procesos administrativos y de operación de su empresa? </p>
          <form action="" class="formulario">
          <div class="radio">
            
              <ul>
                
              <li>
                  <input  type="radio" id="27.1" value="3" v-model="p27">
                  <label class="radio" for="27.1" >Siempre se utilizan</label>
              </li>
                
              <li>
                  <input type="radio" id="27.2" value="2" v-model="p27">
                  <label class="radio" for="27.2">Algunas veces se utilizan</label>
                  
              </li>
                
              <li>
                <input type="radio" id="27.3" value="1" v-model="p27">
                  <label class="radio" for="27.3">Están definidos, pero nunca se utilizan</label>
              </li>
              <li>

                <input type="radio" id="27.4" value="0" v-model="p27">
                  <label class="radio" for="27.4">No tenemos procesos internos estandarizados</label>
              </li>
              </ul>
            
          </div>
        </form>
        </section>
      <section>
        <p>28.	Su compañía utiliza algún medio electrónico para mantener relaciones con sus clientes y proveedores </p>
            <form action="" class="formulario">
            <div class="radio">
              
                <ul>
                  
                <li>
                    <input  type="radio" id="28.1" value="2" v-model="p28">
                    <label class="radio" for="28.1" >Utilizamos correo electrónico</label>
                </li>
                  
                <li>
                    <input type="radio" id="28.2" value="3" v-model="p28">
                    <label class="radio" for="28.2">Utilizamos correo electrónico y/o la página Web (Página en Internet) de nuestra compañía o de nuestros proveedores</label>
                    
                </li>
                  
                <li>
                  <input type="radio" id="28.3" value="4" v-model="p28">
                    <label class="radio" for="28.3">Utilizamos formatos pre -establecidos para intercambiar información</label>
                </li>
                <li>

                  <input type="radio" id="28.4" value="5" v-model="p28">
                    <label class="radio" for="28.4">Intercambio Electrónico de Documentos (EDI - Electronic Data Interchange)</label>
                </li>
                <li>

                  <input type="radio" id="28.5" value="0" v-model="p28">
                    <label class="radio" for="28.5">No usamos ningún medio electrónico</label>
                  </li>
                  <li>

                  <input type="radio" id="28.6" value="1" v-model="p28">
                    <label class="radio" for="28.6">Usamos otros medios como Fax</label>
                  </li>
                
                </ul>
              
            </div>
          </form>

        <p>Complemento</p>
        <input type="text" v-model="c28">
        </section>
      <section>
        <p>29.	¿Su compañía tiene o ha tenido algún tipo de asesoría para el mejoramiento de los procesos internos?</p>
            <form action="" class="formulario">
            <div class="radio">
              
                <ul>
                  
                <li>
                    <input  type="radio" id="29.1" value="2" v-model="p29">
                    <label class="radio" for="29.1" >Hemos tenido asesoría</label>
                </li>
                  
                <li>
                    <input type="radio" id="29.2" value="1" v-model="p29">
                    <label class="radio" for="29.2">Tenemos actualmente asesoría</label>
                    
                </li>
                  
                <li>
                  <input type="radio" id="29.3" value="0" v-model="p29">
                    <label class="radio" for="29.3">Nunca hemos tenido asesoría</label>
                </li>
                
                
                </ul>
              
            </div>
          </form>

        <p>Complemento</p>
        <input type="text" v-model="c29">
        </section>
      <section>
        <p>30.	¿Le gustaría que las personas que trabajan en su empresa o a usted le brindaran acompañamiento o capacitaciones en algún tema específico? ¿En cuál?</p>
          
          <form action="" class="formulario">
          <div class="radio">
            
              <ul>
                
              <li>
                  <input  type="radio" id="30.1" value="1" v-model="p30">
                  <label class="radio" for="30.1" >Si</label>
              </li>
                
              <li>
                  <input type="radio" id="30.2" value="2" v-model="p30">
                  <label class="radio" for="30.2">No</label>
                  
              </li>
                
              <li>
                <input type="radio" id="30.3" value="3" v-model="p30">
                  <label class="radio" for="30.3">No tengo información</label>
              </li>
              
              
              </ul>
            
          </div>
        </form>

        <p>Complemento</p>
        <input type="text" v-model="c30">
        </section>
      <section>
        <p>31.	¿Cuántos clientes nacionales tiene su compañía?</p>
 
          <form action="" class="formulario">
          <div class="radio">
            
              <ul>
                
              <li>
                  <input  type="radio" id="31.1" value="1" v-model="p31">
                  <label class="radio" for="31.1" >Entre uno (1) y dos (2) clientes</label>
              </li>
                
              <li>
                  <input type="radio" id="31.2" value="2" v-model="p31">
                  <label class="radio" for="31.2">Entre tres (3) y cinco (5) clientes</label>
                  
              </li>
                
              <li>
                <input type="radio" id="31.3" value="3" v-model="p31">
                  <label class="radio" for="31.3">Entre seis (6)  (10) y diez clientes</label>
              </li>
                
              <li>
                <input type="radio" id="31.4" value="4" v-model="p31">
                <label class="radio" for="31.4">Entre once (11) y cincuenta (50)</label>
              </li>
                
                <li>
                  <input type="radio" id="31.5" value="5" v-model="p31">
                  <label class="radio" for="31.5">Entre cincuenta y uno (51) y cien (100)</label>
              </li>

                  <li>
                    <input type="radio" id="31.6" value="6" v-model="p31">
                  <label class="radio" for="31.6">Entre ciento uno (101) y doscientos (200)</label>
              </li>
              
                <li>
                    <input type="radio" id="31.7"  value="7" v-model="p31">
                  <label class="radio" for="31.7">Mas de doscientos (200)</label>
              </li>

              <li>
                    <input type="radio" id="31.8"  value="8" v-model="p31">
                  <label class="radio" for="31.8">Ningún cliente nacional</label>
              </li>

              </ul>
            
          </div>
        </form>

        </section>
      <section>
        <p>32.	¿Cuántos clientes internacionales tiene su compañía? </p>
          <form action="" class="formulario">
          <div class="radio">
            
              <ul>
                
              <li>
                  <input  type="radio" id="32.1" value="1" v-model="p32">
                  <label class="radio" for="32.1" >Entre uno (1) y dos (2) clientes internacionales</label>
              </li>
                
              <li>
                  <input type="radio" id="32.2" value="2" v-model="p32">
                  <label class="radio" for="32.2">Entre tres (3) y cinco (5) clientes internacionales</label>
                  
              </li>
                
              <li>
                <input type="radio" id="32.3" value="3" v-model="p32">
                  <label class="radio" for="32.3">Entre seis (6)  y diez (10) clientes internacionales</label>
              </li>
                
              <li>
                <input type="radio" id="32.4" value="4" v-model="p32">
                <label class="radio" for="32.4">Entre once (11) y cincuenta (50) clientes internacionales</label>
              </li>
                
                <li>
                  <input type="radio" id="32.5" value="5" v-model="p32">
                  <label class="radio" for="32.5">Entre cincuenta y uno (51) y cien (100) clientes internacionales</label>
              </li>

                  <li>
                    <input type="radio" id="32.6" value="6" v-model="p32">
                  <label class="radio" for="32.6">Entre ciento uno (101) y doscientos (200) clientes internacionales</label>
              </li>
              
                <li>
                    <input type="radio" id="32.7"  value="7" v-model="p32">
                  <label class="radio" for="32.7">Mas de doscientos (200) clientes internacionales</label>
              </li>

              <li>
                    <input type="radio" id="32.8"  value="8" v-model="p32">
                  <label class="radio" for="32.8">Ningún cliente internacional</label>
              </li>

              </ul>
            
          </div>
        </form>
        </section>
      <section>
        <p>33.	¿Con cuántos clientes su empresa logra el 70% de las ventas totales? </p>
          <form action="" class="formulario">
          <div class="radio">
            
              <ul>
                
              <li>
                  <input  type="radio" id="33.1" value="1" v-model="p33">
                  <label class="radio" for="33.1" >Menor a diez (10)</label>
              </li>
                
              <li>
                  <input type="radio" id="33.2" value="2" v-model="p33">
                  <label class="radio" for="33.2">Entre once (11) y cincuenta (50)</label>
                  
              </li>
                
              <li>
                <input type="radio" id="33.3" value="3" v-model="p33">
                  <label class="radio" for="33.3">Entre cincuenta y uno (51) y cien (100)</label>
              </li>
                
              <li>
                <input type="radio" id="33.4" value="4" v-model="p33">
                <label class="radio" for="33.4">Entre ciento uno (101) y doscientos (200)</label>
              </li>
                
                <li>
                  <input type="radio" id="33.5" value="5" v-model="p33">
                  <label class="radio" for="33.5">Entre doscientos (200) y mil (1.000)</label>
              </li>

                  <li>
                    <input type="radio" id="33.6" value="6" v-model="p33">
                  <label class="radio" for="33.6">Más de mil (1.000)</label>
              </li>

              </ul>
            
          </div>
        </form>

        </section>
      <section>
        <p>34.	Las relaciones con estos clientes siguen un procedimiento definido y estándar en su compañía. </p>
  
          <form action="" class="formulario">
          <div class="radio">
            
              <ul>
                
              <li>
                  <input  type="radio" id="34.1" value="2" v-model="p34">
                  <label class="radio" for="34.1" >Tienen un procedimiento estándar definido de común acuerdo con los clientes</label>
              </li>
                
              <li>
                  <input type="radio" id="34.2" value="3" v-model="p34">
                  <label class="radio" for="34.2">Tienen un procedimiento estándar definido por nuestra compañía</label>
                  
              </li>
                
              <li>
                <input type="radio" id="34.3" value="1" v-model="p34">
                  <label class="radio" for="34.3">No tienen un procedimiento estándar, cada uno de los clientes usa sus propios formatos y mi compañía se adapta</label>
              </li>
              
              
              </ul>
            
          </div>
        </form>
        <p>Complemento</p>
        <input type="text" v-model="c34">
        </section>
      <section>
        <p>35.	Cómo califica las relaciones con sus clientes: </p>
  
        <form action="" class="formulario">
        <div class="radio">
          
            <ul>
              
            <li>
                <input  type="radio" id="35.1" value="3" v-model="p35">
                <label class="radio" for="35.1">Son estables y permanentes</label>
            </li>
              
            <li>
                <input type="radio" id="35.2" value="2" v-model="p35">
                <label class="radio" for="35.2">Son en algunos casos esporádicos, pero hay una base estable</label>
                
            </li>
              
            <li>
              <input type="radio" id="35.3" value="1" v-model="p35">
                <label class="radio" for="35.3">Son completamente esporádicas</label>
            </li>
            
            </ul>
          
        </div>
      </form>

        </section>
      <section>
        <p>36.	¿Cuántos proveedores de materias primas tiene su compañía? </p>
            
          <form action="" class="formulario">
          <div class="radio">
            
              <ul>
                
              <li>
                  <input  type="radio" id="36.1" value="1" v-model="p36">
                  <label class="radio" for="36.1" >Entre uno (1) y dos (2) proveedores</label>
              </li>
                
              <li>
                  <input type="radio" id="36.2" value="2" v-model="p36">
                  <label class="radio" for="36.2">Entre tres (3) y cinco (5) proveedores</label>
                  
              </li>
                
              <li>
                <input type="radio" id="36.3" value="3" v-model="p36">
                  <label class="radio" for="36.3">Entre seis (6) y diez (10) proveedores</label>
              </li>
                
              <li>
                <input type="radio" id="36.4" value="4" v-model="p36">
                <label class="radio" for="36.4">Entre once (11) y cincuenta (50) proveedores</label>
              </li>
                
                <li>
                  <input type="radio" id="36.5" value="5" v-model="p36">
                  <label class="radio" for="36.5">Entre cincuenta y uno (51) y cien (100) proveedores</label>
              </li>

                  <li>
                    <input type="radio" id="36.6" value="6" v-model="p36">
                  <label class="radio" for="36.6">Entre ciento uno (101) y doscientos (200) proveedores</label>
              </li>
              
                <li>
                    <input type="radio" id="36.7"  value="7" v-model="p36">
                  <label class="radio" for="36.7">Mas de doscientos (200) proveedores</label>
              </li>

              <li>
                    <input type="radio" id="36.8"  value="8" v-model="p36">
                  <label class="radio" for="36.8">No sabe / No recuerda</label>
              </li>

              </ul>
            
          </div>
        </form>

        </section>
      <section>
        <p>37.	¿Cuántos proveedores de productos terminados tiene su compañía? </p>
    
          <form action="" class="formulario">
          <div class="radio">
            
              <ul>
                
              <li>
                  <input  type="radio" id="37.1" value="1" v-model="p37">
                  <label class="radio" for="37.1" >Entre uno (1) y dos (2) proveedores</label>
              </li>
                
              <li>
                  <input type="radio" id="37.2" value="2" v-model="p37">
                  <label class="radio" for="37.2">Entre tres (3) y cinco (5) proveedores</label>
                  
              </li>
                
              <li>
                <input type="radio" id="37.3" value="3" v-model="p37">
                  <label class="radio" for="37.3">Entre seis (6) y diez (10) proveedores</label>
              </li>
                
              <li>
                <input type="radio" id="37.4" value="4" v-model="p37">
                <label class="radio" for="37.4">Entre once (11) y cincuenta (50) proveedores</label>
              </li>
                
                <li>
                  <input type="radio" id="37.5" value="5" v-model="p37">
                  <label class="radio" for="37.5">Entre cincuenta y uno (51) y cien (100) proveedores</label>
              </li>

                  <li>
                    <input type="radio" id="37.6" value="6" v-model="p37">
                  <label class="radio" for="37.6">Entre ciento uno (101) y doscientos (200) proveedores</label>
              </li>
              
                <li>
                    <input type="radio" id="37.7"  value="7" v-model="p37">
                  <label class="radio" for="37.7">Mas de doscientos (200) proveedores</label>
              </li>

              <li>
                    <input type="radio" id="37.8"  value="8" v-model="p37">
                  <label class="radio" for="37.8">No sabe / No recuerda</label>
              </li>

              </ul>
            
          </div>
        </form>

        </section>
      <section>
        <p>38.	¿Cuántos proveedores de servicios tiene su compañía? (responda una de las siguientes opciones)</p>
        <form action="" class="formulario">
        <div class="radio">
          
            <ul>
              
            <li>
                <input  type="radio" id="38.1" value="1" v-model="p38">
                <label class="radio" for="38.1">Entre uno (1) y dos (2) proveedores</label>
            </li>
              
            <li>
                <input type="radio" id="38.2" value="2" v-model="p38">
                <label class="radio" for="38.2">Entre tres (3) y cinco (5) proveedores</label>
                
            </li>
              
            <li>
              <input type="radio" id="38.3" value="3" v-model="p38">
                <label class="radio" for="38.3">Entre seis (6) y diez (10) proveedores</label>
            </li>
              
            <li>
              <input type="radio" id="38.4" value="4" v-model="p38">
              <label class="radio" for="38.4">Entre once (11) y cincuenta (50) proveedores</label>
            </li>
              
              <li>
                <input type="radio" id="38.5" value="5" v-model="p38">
                <label class="radio" for="38.5">Más de cincuenta y un (51) proveedores</label>
            </li>

                <li>
                  <input type="radio" id="38.6" value="6" v-model="p38">
                <label class="radio" for="38.6">No sabe</label>
            </li>

            </ul>
          
        </div>
      </form>
    

        </section>
      <section>
      
        <p>39.	Indique la periodicidad (frecuencia; diaria, semanal mensual) y el número de documentos que su empresa intercambia con sus proveedores</p>
        <br>
        <table>
        <tr>
            <th></th>
          
            <th>Diaria</th>
            <th>Semanal</th>
            <th>Mensual</th>
            <th>N° Documentos</th>

        </tr>
        <tr>
            <td>Órdenes de Compra</td>
            <td><input type="radio" name="row-1" data-col="1" value="3" v-model="p39a"></td>
            <td><input type="radio" name="row-1" data-col="2" value="2" v-model="p39a"></td>
            <td><input type="radio" name="row-1" data-col="3" value="1" v-model="p39a"></td>
            <td><input type="number" v-model="c39a" class="bg-gray-50 border border-gray-300 content-center text-gray-900 text-sm rounded-lg block w-20 p-1"  id="numero" name="numero" ></td>
        </tr>
        <tr>
            <td>Facturas</td>
            <td><input type="radio" name="row-2" data-col="1" value="3" v-model="p39b"></td>
            <td><input type="radio" name="row-2" data-col="2" value="2" v-model="p39b"></td>
            <td><input type="radio" name="row-2" data-col="3" value="1" v-model="p39b"></td>
            <td><input type="number" v-model="c39b" class="bg-gray-50 border border-gray-300 content-center text-gray-900 text-sm rounded-lg block w-20 p-1"  id="numero" name="numero" ></td>
        </tr>
        <tr>
            <td>Remisiones</td>
            <td><input type="radio" name="row-3" data-col="1" value="3" v-model="p39c"></td>
            <td><input type="radio" name="row-3" data-col="2" value="2" v-model="p39c"></td>
            <td><input type="radio" name="row-3" data-col="3" value="1" v-model="p39c"></td>
            <td><input type="number" v-model="c39c" class="bg-gray-50 border border-gray-300 content-center text-gray-900 text-sm rounded-lg block w-20 p-1"  id="numero" name="numero" ></td>
        </tr>
        <tr>

            <td>Confirmaciones de despacho</td>
            <td><input type="radio" name="row-4" data-col="1" value="3" v-model="p39d"></td>
            <td><input type="radio" name="row-4" data-col="2" value="2" v-model="p39d"></td>
            <td><input type="radio" name="row-4" data-col="3" value="1" v-model="p39d"></td>
            <td><input type="number"  v-model="c39d" class="bg-gray-50 border border-gray-300 content-center text-gray-900 text-sm rounded-lg block w-20 p-1"  id="numero" name="numero" ></td>

        </tr>
        <tr>

        <td>Cotizaciones</td>
        <td><input type="radio" name="row-5" data-col="1" value="3" v-model="p39e"></td>
        <td><input type="radio" name="row-5" data-col="2" value="2" v-model="p39e"></td>
        <td><input type="radio" name="row-5" data-col="3" value="1" v-model="p39e"></td>
        <td><input type="number" v-model="c39e" class="bg-gray-50 border border-gray-300 content-center text-gray-900 text-sm rounded-lg block w-20 p-1"  id="numero" name="numero" ></td>

        </tr>
        <tr>

        <td>Catálogos de productos</td>
        <td><input type="radio" name="row-6" data-col="1" value="3" v-model="p39f"></td>
        <td><input type="radio" name="row-6" data-col="2" value="2" v-model="p39f" ></td>
        <td><input type="radio" name="row-6" data-col="3" value="1" v-model="p39f"></td>
        <td><input type="number" v-model="c39f" class="bg-gray-50 border border-gray-300 content-center text-gray-900 text-sm rounded-lg block w-20 p-1"  id="numero" name="numero"></td>

        </tr>
        <tr>

        <td>Otros</td>
        <td><input type="radio" name="row-7" data-col="1" value="3" v-model="p39g"></td>
        <td><input type="radio" name="row-7" data-col="2" value="2" v-model="p39g"></td>
        <td><input type="radio" name="row-7" data-col="3" value="1" v-model="p39g"> </td>
        <td><input type="number" v-model="c39g" class="flex justify-center bg-gray-50 border border-gray-300 content-center text-gray-900 text-sm rounded-lg block w-20 p-1"  id="numero" name="numero"></td>

        </tr>

        </table>
        <br>
  
      </section>
        
      <section>
        <p>40.	Las relaciones con sus proveedores siguen un procedimiento estándar en su compañía. </p>
    
              <form action="" class="formulario">
        <div class="radio">
          
            <ul>
              
            <li>
                <input  type="radio" id="40.1" value="3" v-model="p40">
                <label class="radio" for="40.1">Tienen un procedimiento estándar definido de común acuerdo con los proveedores</label>
            </li>
              
            <li>
                <input type="radio" id="40.2" value="4" v-model="p40">
                <label class="radio" for="40.2">Tienen un procedimiento estándar definido por nuestra compañía</label>
                
            </li>
              
            <li>
              <input type="radio" id="40.3" value="2" v-model="p40">
                <label class="radio" for="40.3">No tienen un procedimiento estándar, cada uno de los proveedores usa sus propios formatos y mi compañía se adapta</label>
            </li>
              
            <li>
              <input type="radio" id="40.4" value="1" v-model="p40">
              <label class="radio" for="40.4">Otra</label>
            </li>
              

            </ul>
          
        </div>
      </form>

        <p>Complemento</p>
        <input type="text" v-model="c40">
        </section>
   
        <p>41.	Cómo califica las relaciones con sus proveedores:</p>
    
          <form action="" class="formulario">
          <div class="radio">
            
              <ul>
                
              <li>
                  <input  type="radio" id="41.1" value="3" v-model="p41">
                  <label class="radio" for="41.1">Son estables y permanentes</label>
              </li>
                
              <li>
                  <input type="radio" id="41.2" value="2" v-model="p41">
                  <label class="radio" for="41.2">Son en algunos casos esporádicos, pero hay una base estable</label>
                  
              </li>
                
              <li>
                <input type="radio" id="41.3" value="1" v-model="p41">
                  <label class="radio" for="41.3">Son completamente esporádicas</label>
              </li>
              
                

              </ul>
            
          </div>
        </form>

        <p>Complemento</p>
        <input type="text" v-model="c41">
      

        <section>
        <p>OBSERVACIONES (Indique Si desea realizar algún cambio de su negocio y Porque?: </p>
        <p>Complemento</p>
        <input type="text" v-model="c42">
      
        
        </section>
        <div class="flex justify-center">

          <button class=" bg-teal-700 hover:bg-teal-300 focus:bg-teal-300 text-white font-semibold rounded-lg
          px-16 py-3 mt-6" type="button"  @click="registerForm()"> 
          Ingresar
        </button>
      
    
      </div>
      <label for="mensaje">{{mensaje}}</label>
        </div>
        
       
          
      
        
        
    </div>
      </div>
    </body>
   
      
</template>

<script>


import "firebase/storage";
import firebase from "../components/firebase/initFirebase";
const db = firebase.firestore();
import Seguridad from "../components/js/encrypt.js";
const safe = new Seguridad();

import navBar2 from '../components/views/elementos/navbar2.vue'


export default {
  name: "formulario",
  components: {
        navBar2
    },
  data() {
    return {
      p1: '',
      p2: '',
      p3: '',
      p4: '',
      p5: '',
      p6: '',
      p7: '',
      p8: '',
      p9: '',
      p10: '',
      p11: '',
      p12: '',
      p13: '',
      p14: '',
      p15: '',
      p16: '',
      p17: '',
      p18: '',
      p19: '',
      p20: '',
      p21: '',
      p22: [],
      p23: '',
      p24: '',
      p25: '',
      p26: '',
      p26_1: '',
      p27: '',
      p28: '',
      p29: '',
      p30: '',
      p31: '',
      p32: '',
      p33: '',
      p34: '',
      p35: '',
      p36: '',
      p37: '',
      p38: '',
      p39a: '',
      p39b: '',
      p39c: '',
      p39d: '',
      p39e: '',
      p39f: '',
      p39g: '',
      p40: '',
      p41: '',
      c1: '',
      c2: '',
      c3: '',
      c4: '',
      c5: '',
      c6: '',
      c7: '',
      c8: '',
      c9: '',
      c10: '',
      c11: '',
      c12: '',
      c13: '',
      c14: '',
      c15: '',
      c16: '',
      c17: '',
      c18: '',
      c19: '',
      c20: '',
      c21: '',
      c22: '',
      c23: '',
      c24: '',
      c25: '',
      c26: '',
      c26_1: '',
      c27: '',
      c28: '',
      c29: '',
      c30: '',
      c31: '',
      c32: '',
      c33: '',
      c34: '',
      c35: '',
      c36: '',
      c37: '',
      c38: '',
      c39a: '',
      c39b: '',
      c39c: '',
      c39d: '',
      c39e: '',
      c39f: '',
      c39g: '',
      c40: '',
      c41: '',
      c42: '',
      mensaje: '',
      probando: false,
      nit: '123456',
      conocimiento: 0,
      infraestructura: 0,
      madurez: 0,
      clientes: 0,
      proveedores: 0,
      total: 0,
      nitEmpresa: null,
    }
  },
 
  methods: {
    verificar(){
    
    },
    puntuacion(){
      if (this.p1 != ''){
        this.conocimiento=this.conocimiento+1;
      }if(this.p2 != ''){
        this.conocimiento=this.conocimiento+1;
      }if(this.p3 != ''){
        this.conocimiento=this.conocimiento+1;
      }if(this.p4 != ''){
        this.conocimiento=this.conocimiento+parseInt(this.p4);
      }if(this.p5 != ''){
        this.conocimiento=this.conocimiento+1;
      }if(this.p6 != ''){
        this.conocimiento=this.conocimiento+parseInt(this.p6);
      }if(this.p7 != ''){
        if(this.p7=='7'){

        }else{
          this.conocimiento=this.conocimiento+parseInt(this.p7);
        }
        
      }if(this.p8 != ''){
        if(this.p8=='7'){

        }else{
          this.conocimiento=this.conocimiento+parseInt(this.p8);
        }
        
      }if(this.p9 != ''){
        if(this.p9 == '3' || this.p9 == '2'){
        }else{
          this.conocimiento=this.conocimiento+1;
        }
      }if(this.p10 != ''){
        if(this.p10 == '3' || this.p10 == '2'){
        }else{
          this.conocimiento=this.conocimiento+1;
        }
      }if(this.p11 != ''){
        if(this.p11 == '3' || this.p11 == '2'){
        }else{
          this.conocimiento=this.conocimiento+1;
        }
      }if(this.p12 != ''){
        this.infraestructura=this.infraestructura+parseInt(this.p12);
      }if(this.p13 != ''){
        if(this.p13 == '3' || this.p13 == '2'){
        }else{
          this.infraestructura=this.infraestructura+1;
        }
      }if(this.p14 != ''){
        if(this.p14=='5'){

        }else{
          this.infraestructura=this.infraestructura+parseInt(this.p14);
        }
        
      }if(this.p15 != ''){
        if(this.p15 == '3' || this.p15 == '2'){
        }else{
          this.infraestructura=this.infraestructura+1;
        }
      }if(this.p16 != ''){
        if(this.p16=='4'){

        }else{
          this.infraestructura=this.infraestructura+parseInt(this.p14);
        }
        
      }if(this.p17 != ''){
        if(this.p17=='9'){

        }else{
          this.infraestructura=this.infraestructura+1;
        }
        
      }if(this.p18 != ''){
        if(this.p18 == '3' || this.p18 == '2'){
        }else{
          this.infraestructura=this.infraestructura+1;
        }
      }if(this.p19 != ''){
        if(this.p19=='4'){
          this.infraestructura=this.infraestructura+1;
        }else{
          this.infraestructura=this.infraestructura+parseInt(this.p19);
        }
        
      }if(this.p20 != ''){
        if(this.p20 == '3' || this.p20 == '2'){
        }else{
          this.infraestructura=this.infraestructura+1;
        }
      }
      if(this.p21 != ''){
        if(this.p21 == '3' || this.p21 == '2'){
        }else{
          this.infraestructura=this.infraestructura+1;
        }
      }if(this.p22 != ''){
        this.infraestructura=this.infraestructura+this.p22.length;
      }if(this.p23 != ''){
        if(this.p23 == '3' || this.p23 == '2'){
        }else{
          this.infraestructura=this.infraestructura+1;
        }
      }if(this.p24 != ''){
        if(this.p24 == '3' || this.p24 == '2'){
        }else{
          this.infraestructura=this.infraestructura+1;
        }
      }if(this.p25 != ''){
        if(this.p25 == '3' || this.p25 == '2'){
        }else{
          this.infraestructura=this.infraestructura+1;
        }
      }if(this.p26 != ''){
        this.madurez=this.madurez+parseInt(this.p26);
      }if(this.p26_1 != ''){
        if(this.p26_1 == '3' || this.p26_1 == '2'){
        }else{
          this.infraestructura=this.infraestructura+1;
        }
      }if(this.p27 != ''){
        this.madurez=this.madurez+parseInt(this.p27);
      }if(this.p28 != ''){
        this.madurez=this.madurez+parseInt(this.p28);
      }if(this.p29 != ''){
        this.madurez=this.madurez+parseInt(this.p29);
      }if(this.p30 != ''){
        if(this.p30 == '3' || this.p30 == '2'){
        }else{
          this.madurez=this.madurez+1;
        }
      }if(this.p31 != ''){
        if(this.p31=='8'){
        }else{
          this.clientes=this.clientes+parseInt(this.p31);
        }
        
      }if(this.p32 != ''){
        if(this.p32=='8'){
        }else{
          this.clientes=this.clientes+parseInt(this.p32);
        }
        
      }if(this.p33 != ''){
        this.clientes=this.clientes+parseInt(this.p33);
      }if(this.p34 != ''){
        this.clientes=this.clientes+parseInt(this.p34);
      }if(this.p35 != ''){
        this.clientes=this.clientes+parseInt(this.p35);
      }if(this.p36 != ''){
        if(this.p36=='8'){
        }else{
          this.proveedores=this.proveedores+parseInt(this.p36);
        }
        
      }if(this.p37 != ''){
        if(this.p37=='8'){
        }else{
          this.proveedores=this.proveedores+parseInt(this.p37);
        }
        
      }if(this.p38 != ''){
        if(this.p38=='6'){
        }else{
          this.proveedores=this.proveedores+parseInt(this.p38);
        }
        
      }if(this.p39a != ''){
        this.proveedores=this.proveedores+parseInt(this.p39a);
        
      }if(this.p39b != ''){
        this.proveedores=this.proveedores+parseInt(this.p39b);
        
      }if(this.p39c != ''){
        this.proveedores=this.proveedores+parseInt(this.p39c);
        
      }if(this.p39d != ''){
        this.proveedores=this.proveedores+parseInt(this.p39d);
        
      }if(this.p39e != ''){
        this.proveedores=this.proveedores+parseInt(this.p39e);
        
      }if(this.p39f != ''){
        this.proveedores=this.proveedores+parseInt(this.p39f);
        
      }if(this.p39g != ''){
        this.proveedores=this.proveedores+parseInt(this.p39g);
        
      }if(this.p40 != ''){
        this.proveedores=this.proveedores+parseInt(this.p40);
        
      }if(this.p41 != ''){
        this.proveedores=this.proveedores+parseInt(this.p41);
        
      }

      this.total=this.conocimiento+this.infraestructura+this.madurez+this.clientes+this.proveedores;

    },
    
    registerForm(){
      this.nitEmpresa =safe.decrypt($cookies.get(safe.cipher('nit'))).toString()
      let date = new Date().toLocaleDateString();
      this.puntuacion()
      db.collection("datos").doc(this.nitEmpresa).set({
        pregunta1:{
          respuesta: this.p1,
          complemento: this.c1
        },
        pregunta2:{
          respuesta: this.p2,
          complemento: this.c2
        },
        pregunta3:{
          respuesta: this.p3,
          complemento: this.c3
        },
        pregunta4:{
          respuesta: this.p4,
          complemento: this.c4
        },
        pregunta5:{
          respuesta: this.p5,
          complemento: this.c5
        },
        pregunta6:{
          respuesta: this.p6,
          complemento: this.c6
        },
        pregunta7:{
          respuesta: this.p7,
          complemento: this.c7
        },
        pregunta8:{
          respuesta: this.p8,
          complemento: this.c8
        },
        pregunta9:{
          respuesta: this.p9,
          complemento: this.c9
        },
        pregunta10:{
          respuesta: this.p10,
          complemento: this.c10
        },
        pregunta11:{
          respuesta: this.p11,
          complemento: this.c11
        },
        pregunta12:{
          respuesta: this.p12,
        },
        pregunta13:{
          respuesta: this.p13,
        },
        pregunta14:{
          respuesta: this.p14,
          complemento: this.c14
        },
        pregunta15:{
          respuesta: this.p15,
          complemento: this.c15
        },
        pregunta16:{
          respuesta: this.p16,
          complemento: this.c16
        },
        pregunta17:{
          respuesta: this.p17,
        },
        pregunta18:{
          respuesta: this.p18,
          complemento: this.c18
        },
        pregunta19:{
          respuesta: this.p19,
          complemento: this.c19
        },
        pregunta20:{
          respuesta: this.p20,
          complemento: this.c20
        },
        pregunta21:{
          respuesta: this.p21,
          complemento: this.c21
        },
        pregunta22:{
          respuesta: this.p22,
        },
        pregunta23:{
          respuesta: this.p23,
        },
        pregunta24:{
          respuesta: this.p24,
          complemento: this.c24
        },
        pregunta25:{
          respuesta: this.p25,
          complemento: this.c25
        },
        pregunta26:{
          respuesta: this.p26,
          complemento: this.c26
        },pregunta26_1:{
          respuesta: this.p26_1,
          complemento: this.c26_1
        },
        pregunta27:{
          respuesta: this.p27,
        },
        pregunta28:{
          respuesta: this.p28,
          complemento: this.c28
        },
        pregunta29:{
          respuesta: this.p29,
          complemento: this.c29
        },
        pregunta30:{
          respuesta: this.p30,
          complemento: this.c30
        },
        pregunta31:{
          respuesta: this.p31,
        },
        pregunta32:{
          respuesta: this.p32,
        },
        pregunta33:{
          respuesta: this.p33,
        },
        pregunta34:{
          respuesta: this.p34,
          complemento: this.c34
        },
        pregunta35:{
          respuesta: this.p35,
        },
        pregunta36:{
          respuesta: this.p36,
        },
        pregunta37:{
          respuesta: this.p37,
        },
        pregunta38:{
          respuesta: this.p38,
        },
        pregunta39:{
          respuestaA: this.p39a,
          numDocumentosA: this.c39a,
          respuestaB: this.p39b,
          numDocumentosB: this.c39b,
          respuestaC: this.p39c,
          numDocumentosC: this.c39c,
          respuestaD: this.p39d,
          numDocumentosD: this.c39d,
          respuestaE: this.p39e,
          numDocumentosE: this.c39e,
          respuestaF: this.p39f,
          numDocumentosF: this.c39f,
          respuestaG: this.p39g,
          numDocumentosG: this.c39g,
          
        },
        pregunta40:{
          respuesta: this.p40,
          complemento: this.c40
        },
        pregunta41:{
          respuesta: this.p41,
        },
        comentarios: this.c42,
        puntajeConocimiento: this.conocimiento,
        puntajeInfraestructura: this.infraestructura,
        puntajeMadurez: this.madurez,
        puntajeClientes: this.clientes,
        puntajeProveedores: this.proveedores,
        puntajeTotal: this.total,
        fechaCreacion: date,
        nit: this.nitEmpresa,
      }
      )
  .then(() => {
      this.mensaje="Empresa registrada con exito"
  })
  .catch((error) => {
      console.error("Error writing document: ", error);
      this.mensaje="No se pudo completar el registro, intente nuevamente"
});

    }
  },
  mounted() {
    
  }
}



</script>
<style>

   @import '../assets/style.css'; 
   @import '/public/base/styles.css'; 
 
</style>