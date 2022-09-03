<template>
    <div>
      <section>
        <p>1.	¿A qué sector económico pertenece su empresa?</p>
    
        <input type="radio"  value="1" v-model="p1" />
        <label for="one">Ganadería</label>

        <input type="radio"  value="2" v-model="p1" />
        <label for="two">Minería de carbón</label>

        <input type="radio"  value="3" v-model="p1" />
        <label for="two">Comercio</label>

        <input type="radio"  value="4" v-model="p1" />
        <label for="two">Arcillas</label>

        <input type="radio"  value="5" v-model="p1" />
        <label for="two">Gravas</label>

        <input type="radio"  value="6" v-model="p1" />
        <label for="two">Cuero y/o calzado</label>

        <input type="radio"  value="7" v-model="p1" />
        <label for="two">Artefactos domésticos</label>

        <input type="radio"  value="8" v-model="p1" />
        <label for="two">Equipo y Maquinaria eléctrica y electrónica</label>

        <input type="radio"  value="9" v-model="p1" />
        <label for="two">Lácteos</label>
        <input type="radio"  value="10" v-model="p1" />
        <label for="two">Convenio software y servicios asociados</label>
        <input type="radio"  value="11" v-model="p1" />
        <label for="two">Servicios de salud</label>
        <input type="radio"  value="12" v-model="p1" />
        <label for="two">Financiero</label>
        <input type="radio"  value="13" v-model="p1" />
        <label for="two">Telecomunicaciones</label>
        <input type="radio"  value="14" v-model="p1" />
        <label for="two">Servicios</label>

        <p>Complemento</p>
        <input type="text" v-model="c1">
      </section>

      <section>
        <p>2.	Por favor indique el sector económico objetivo de su actividad principal</p>
    
        <input type="radio"  value="1" v-model="p2" />
        <label for="one">Ganadería</label>

        <input type="radio"  value="2" v-model="p2" />
        <label for="two">Minería de carbón</label>

        <input type="radio"  value="3" v-model="p2" />
        <label for="two">Comercio</label>

        <input type="radio"  value="4" v-model="p2" />
        <label for="two">Arcillas</label>

        <input type="radio"  value="5" v-model="p2" />
        <label for="two">Gravas</label>

        <input type="radio"  value="6" v-model="p2" />
        <label for="two">Cuero y/o calzado</label>

        <input type="radio"  value="7" v-model="p2" />
        <label for="two">Artefactos domésticos</label>

        <input type="radio"  value="8" v-model="p2" />
        <label for="two">Equipo y Maquinaria eléctrica y electrónica</label>

        <input type="radio"  value="9" v-model="p2" />
        <label for="two">Lácteos</label>
        <input type="radio"  value="10" v-model="p2" />
        <label for="two">Convenio software y servicios asociados</label>
        <input type="radio"  value="11" v-model="p2" />
        <label for="two">Servicios de salud</label>
        <input type="radio"  value="12" v-model="p2" />
        <label for="two">Financiero</label>
        <input type="radio"  value="13" v-model="p2" />
        <label for="two">Telecomunicaciones</label>
        <input type="radio"  value="14" v-model="p2" />
        <label for="two">Servicios</label>

        <p>Complemento</p>
        <input type="text" v-model="c2">
      </section>

      <section>
        <p>3.	Por favor indique de qué sector económico provienen los insumos para su actividad productiva o económica </p>
    
        <input type="radio"  value="1" v-model="p3" />
        <label for="one">Ganadería</label>

        <input type="radio"  value="2" v-model="p3" />
        <label for="two">Minería de carbón</label>

        <input type="radio"  value="3" v-model="p3" />
        <label for="two">Comercio</label>

        <input type="radio"  value="4" v-model="p3" />
        <label for="two">Arcillas</label>

        <input type="radio"  value="5" v-model="p3" />
        <label for="two">Gravas</label>

        <input type="radio"  value="6" v-model="p3" />
        <label for="two">Cuero y/o calzado</label>

        <input type="radio"  value="7" v-model="p3" />
        <label for="two">Artefactos domésticos</label>

        <input type="radio"  value="8" v-model="p3" />
        <label for="two">Equipo y Maquinaria eléctrica y electrónica</label>

        <input type="radio"  value="9" v-model="p3" />
        <label for="two">Lácteos</label>
        <input type="radio"  value="10" v-model="p3" />
        <label for="two">Convenio software y servicios asociados</label>
        <input type="radio"  value="11" v-model="p3" />
        <label for="two">Servicios de salud</label>
        <input type="radio"  value="12" v-model="p3" />
        <label for="two">Financiero</label>
        <input type="radio"  value="13" v-model="p3" />
        <label for="two">Telecomunicaciones</label>
        <input type="radio"  value="14" v-model="p3" />
        <label for="two">Servicios</label>

        <p>Complemento</p>
        <input type="text" v-model="c3">
      </section>



      <section>
        <p>4.	Indique el rango de ingresos anuales de su empresa a partir de la actividad productiva o económica</p>
    
        <input type="radio"  value="1" v-model="p4" />
        <label for="one">Inferiores a $500 millones de pesos anuales</label>

        <input type="radio"  value="2" v-model="p4" />
        <label for="two">Entre $501 y $1000 millones de pesos anuales</label>

        <input type="radio"  value="3" v-model="p4" />
        <label for="two">Entre $1001 y $5000 millones de pesos anuales</label>
        <input type="radio"  value="4" v-model="p4" />
        <label for="two">Entre $5001 y $10.000 millones de pesos anuales</label>
        <input type="radio"  value="5" v-model="p4" />
        <label for="two">Entre $10.001 y $20.000 millones de pesos anuales</label>
        <input type="radio"  value="6" v-model="p4" />
        <label for="two">Más de $20.001 millones de pesos anuales</label>

        <p>Complemento</p>
        <input type="text" v-model="c4">
        </section>
      <section>
        <p>5.	Cuál es el producto final de su empresa</p>
    
        <input type="radio"  value="1" v-model="p5" />
        <label for="one">Materia prima para otras empresas</label>

        <input type="radio"  value="2" v-model="p5" />
        <label for="two">Producto semi - terminado para otras empresas</label>

        <input type="radio"  value="3" v-model="p5" />
        <label for="two">Producto terminado para usuarios finales o canales de distribución</label>
        <input type="radio"  value="4" v-model="p5" />
        <label for="two">Servicios.</label>

        <p>Complemento</p>
        <input type="text" v-model="c5">
        </section>
      <section>
        <p>6.	La zona de influencia de su compañía es</p>
    
        <input type="radio"  value="1" v-model="p6" />
        <label for="one">Operación en un solo sitio, local</label>

        <input type="radio"  value="2" v-model="p6" />
        <label for="two">Operación en una región</label>

        <input type="radio"  value="3" v-model="p6" />
        <label for="two">Operamos nivel de todo el país</label>
        <input type="radio"  value="4" v-model="p6" />
        <label for="two">Operamos a nivel nacional e internacional</label>

        <p>Complemento</p>
        <input type="text" v-model="c6">
        </section>
      <section>
        <p>7.	Seleccione el nivel educativo de los empleados en el campo laboral directivo</p>
    
        <input type="radio"  value="1" v-model="p7" />
        <label for="one">Primaria</label>

        <input type="radio"  value="2" v-model="p7" />
        <label for="two">Bachillerato</label>

        <input type="radio"  value="3" v-model="p7" />
        <label for="two">Técnico</label>
        <input type="radio"  value="4" v-model="p7" />
        <label for="two">Tecnólogo</label>
        <input type="radio"  value="5" v-model="p7" />
        <label for="two">Universitario</label>
        <input type="radio"  value="6" v-model="p7" />
        <label for="two">Postgrado</label>
        <input type="radio"  value="7" v-model="p7" />
        <label for="two">Ninguno</label>

        <p>Complemento</p>
        <input type="text" v-model="c7">
        </section>

        <section>
        <p>8.	Seleccione el nivel educativo de los empleados en el campo laboral operativo</p>
    
        <input type="radio"  value="1" v-model="p8" />
        <label for="one">Primaria</label>

        <input type="radio"  value="2" v-model="p8" />
        <label for="two">Bachillerato</label>

        <input type="radio"  value="3" v-model="p8" />
        <label for="two">Técnico</label>
        <input type="radio"  value="4" v-model="p8" />
        <label for="two">Tecnólogo</label>
        <input type="radio"  value="5" v-model="p8" />
        <label for="two">Universitario</label>
        <input type="radio"  value="6" v-model="p8" />
        <label for="two">Postgrado</label>
        <input type="radio"  value="7" v-model="p8" />
        <label for="two">Ninguno</label>

        <p>Complemento</p>
        <input type="text" v-model="c8">
        </section>



      <section>
        <p>9.	¿Si su empresa cuenta con algún software, especifique cual y si conoce el costo cuál es?</p>
        <input type="text" v-model="p9">
        <p>9.1 ¿Recuerda cual es y el valor aproximado de la compra? </p>
        <input type="text" v-model="c9">
        </section>
      <section>
        <p>10.	¿Pagaría usted por un software o herramienta tecnológica que le permita mejorar sus procesos?</p>
    
        <input type="radio"  value="1" v-model="p10" />
        <label for="one">Si</label>

        <input type="radio"  value="2" v-model="p10" />
        <label for="two">No</label>

        <input type="radio"  value="3" v-model="p10" />
        <label for="two">No tengo información</label>

        <p>Complemento</p>
        <input type="text" v-model="c10">
        </section>
      <section>
        <p>11.	¿En la empresa tiene algún rubro presupuestal destinado a actualización en TI?</p>
    
        <input type="radio"  value="1" v-model="p11" />
        <label for="one">Si</label>

        <input type="radio"  value="2" v-model="p11" />
        <label for="two">No</label>

        <input type="radio"  value="3" v-model="p11" />
        <label for="two">No tengo información</label>

        <p>Complemento</p>
        <input type="text" v-model="c11">
        </section>
      <section>
        <p>12.	¿Qué grado de relevancia le da a la transformación digital empresarial?</p>
    
        <input type="radio"  value="1" v-model="p12" />
        <label for="one">Bajo o sin importancia</label>

        <input type="radio"  value="2" v-model="p12" />
        <label for="two">Medianamente importante</label>

        <input type="radio"  value="3" v-model="p12" />
        <label for="two">Muy importante</label>

        </section>
      <section>
        <p>13.	¿En el presupuesto de su empresa tiene algún monto destinado a la adquisición de soluciones de base tecnológica?</p>
    
        <input type="radio"  value="1" v-model="p13" />
        <label for="one">Si</label>

        <input type="radio"  value="2" v-model="p13" />
        <label for="two">No</label>

        <input type="radio"  value="3" v-model="p13" />
        <label for="two">No tengo información</label>
        </section>
      <section>
        <p>14.	¿Con cuántos computadores cuenta su compañía?</p>
    
        <input type="radio"  value="1" v-model="p14" />
        <label for="one">Un computador</label>

        <input type="radio"  value="2" v-model="p14" />
        <label for="two">De dos a cinco computadores</label>

        <input type="radio"  value="3" v-model="p14" />
        <label for="two">De cinco a 20 computadores</label>
        <input type="radio"  value="4" v-model="p14" />
        <label for="two">Más de 20 computadores</label>
        <input type="radio"  value="5" v-model="p14" />
        <label for="two">Mi empresa no tiene computadores</label>

        <p>Complemento</p>
        <input type="text" v-model="c14">
        </section>
      <section>
        <p>15.	¿Los computadores de su compañía esta interconectados en una red? Interna o externa (realizar en complemento según respuesta)</p>
    
        <input type="radio"  value="1" v-model="p15" />
        <label for="one">Si</label>

        <input type="radio"  value="2" v-model="p15" />
        <label for="two">No</label>

        <input type="radio"  value="3" v-model="p15" />
        <label for="two">No tengo información</label>

        <p>Complemento</p>
        <input type="text" v-model="c15">
        </section>
      <section>
        <p>16.	Su compañía cuenta con acceso a Internet</p>
    
        <input type="radio"  value="1" v-model="p16" />
        <label for="one">Tiene acceso a Internet solo para un solo computador y utiliza línea telefónica.</label>

        <input type="radio"  value="2" v-model="p16" />
        <label for="two">Varios computadores de mi empresa tienen acceso a Internet.</label>

        <input type="radio"  value="3" v-model="p16" />
        <label for="two">Todos los computadores de mi empresa tienen acceso a Internet.</label>
        <input type="radio"  value="4" v-model="p16" />
        <label for="two">Mi empresa no tiene acceso a Internet.</label>

        <p>Complemento</p>
        <input type="text" v-model="c16">
        </section>
      <section>
        <p>17.	Con que tipo de internet cuenta su compañía.</p>
    
        <input type="radio"  value="1" v-model="p17" />
        <label for="one">Conexión vía satélite</label>

        <input type="radio"  value="2" v-model="p17" />
        <label for="two">Inalámbrica (radioenlace)</label>

        <input type="radio"  value="3" v-model="p17" />
        <label for="two">Conexiones de datos móviles</label>
        <input type="radio"  value="4" v-model="p17" />
        <label for="two">Estándar WiMAX</label>
        <input type="radio"  value="5" v-model="p17" />
        <label for="two">Sistema LMDS (Local Multipoint Distribution System)</label>
        <input type="radio"  value="6" v-model="p17" />
        <label for="two">Fibra óptica</label>
        <input type="radio"  value="7" v-model="p17" />
        <label for="two">Conexión ADSL</label>
        <input type="radio"  value="8" v-model="p17" />
        <label for="two">Red digital RDSI</label>
        <input type="radio"  value="9" v-model="p17" />
        <label for="two">No tengo información</label>

        </section>
      <section>
        <p>18.	Su compañía cuenta con un dominio en internet</p>
        <input type="text" v-model="p18">

        <p>¿Sabe cuánto cuesta un dominio al año para su empresa?</p>
        <input type="text" v-model="c18">
        </section>
      <section>
        <p>19.	Su compañía cuenta con:</p>
    
        <input type="radio"  value="1" v-model="p19" />
        <label for="one">Una cuenta de correo electrónico para la compañía</label>

        <input type="radio"  value="2" v-model="p19" />
        <label for="two">Correo electrónico para algunos empleados de la compañía </label>

        <input type="radio"  value="3" v-model="p19" />
        <label for="two">Correo electrónico para cada uno de los empleados de la compañía</label>
        <input type="radio"  value="4" v-model="p19" />
        <label for="two">Otros</label>

        <p>Complemento</p>
        <input type="text" v-model="c19">
        </section>
      <section>
        <p>20.	¿Cuenta con página WEB?</p>
    
        <input type="radio"  value="1" v-model="p20" />
        <label for="one">Si</label>

        <input type="radio"  value="2" v-model="p20" />
        <label for="two">No</label>

        <input type="radio"  value="3" v-model="p20" />
        <label for="two">No tengo información</label>

        <p>Complemento</p>
        <input type="text" v-model="c20">
        </section>
      <section>
        <p>21.	¿Su compañía tiene algún tipo de interacción con Internet o con el comercio electrónico, publicidad en internet, televisión, radio?</p>
    
        <input type="radio"  value="1" v-model="p21" />
        <label for="one">Si</label>

        <input type="radio"  value="2" v-model="p21" />
        <label for="two">No</label>

        <input type="radio"  value="3" v-model="p21" />
        <label for="two">No tengo información</label>

        <p>Complemento</p>
        <input type="text" v-model="c21">
        </section>
      <section>
        <p>22.	Cuál de estas herramientas utiliza su empresa:</p>
    
        <input type="checkbox"  value="1" v-model="p22" />
        <label for="one">Hoja de calculo</label>

        <input type="checkbox"  value="2" v-model="p22" />
        <label for="two">Página web</label>

        <input type="checkbox"  value="3" v-model="p22" />
        <label for="two">Planeación de ventas</label>
        <input type="checkbox"  value="4" v-model="p22" />
        <label for="two">Herramientas de presentación multimedia</label>
        <input type="checkbox"  value="5" v-model="p22" />
        <label for="two">Base de datos</label>
        <input type="checkbox"  value="6" v-model="p22" />
        <label for="two">Manejo de inventario</label>
        <input type="checkbox"  value="7" v-model="p22" />
        <label for="two">Correo electrónico</label>
        <input type="checkbox"  value="8" v-model="p22" />
        <label for="two">Programa seguimientos de proyectos, agenda</label>
        <input type="checkbox"  value="9" v-model="p22" />
        <label for="two">Redes sociales</label>

        </section>
      <section>
        <p>23.	¿Su compañía cuenta con un Software en el que se realice la contabilidad, facturación, compras o gastos?</p>
    
        <input type="radio"  value="1" v-model="p23" />
        <label for="one">Si</label>

        <input type="radio"  value="2" v-model="p23" />
        <label for="two">No</label>

        <input type="radio"  value="3" v-model="p23" />
        <label for="two">No tengo información</label>

        <p>Complemento</p>
        <input type="text" v-model="c23">
        </section>
      <section>
        <p>24.  ¿Su compañía tiene un Software para los procesos de Dirección, análisis de datos y generación de reportes para la toma de decisiones gerenciales, Financieros, Comerciales y/o Administrativos?</p>
    
        <input type="radio"  value="1" v-model="p24" />
        <label for="one">Si</label>

        <input type="radio"  value="2" v-model="p24" />
        <label for="two">No</label>

        <input type="radio"  value="3" v-model="p24" />
        <label for="two">No tengo información</label>

        <p>Complemento</p>
        <input type="text" v-model="c24">
        </section>
      <section>
        <p>25.  ¿La empresa hace uso de alguna herramienta tecnológica? </p>
    
        <input type="radio"  value="1" v-model="p25" />
        <label for="one">Si</label>

        <input type="radio"  value="2" v-model="p25" />
        <label for="two">No</label>

        <input type="radio"  value="3" v-model="p25" />
        <label for="two">No tengo información</label>

        <p>Complemento</p>
        <input type="text" v-model="c25">
        </section>
      <section>
        <p>26.	¿Su empresa ha definido formatos y procedimientos estándares para los procesos administrativos y de operación? (seleccione la respuesta que mejor se aplique)</p>
    
        <input type="radio"  value="1" v-model="p26" />
        <label for="one">En mi empresa los procesos están estandarizados</label>

        <input type="radio"  value="2" v-model="p26" />
        <label for="two">Algunos procesos están estandarizados y otros no</label>

        <input type="radio"  value="3" v-model="p26" />
        <label for="two">Unos pocos procesos están estandarizados</label>
        <input type="radio"  value="4" v-model="p26" />
        <label for="two">Ningún proceso está estandarizado</label>

        <p>Complemento</p>
        <input type="text" v-model="c26">
        </section>
      <section>
        <p>27.	¿Con qué frecuencia utiliza los procedimientos y formatos definidos para los procesos administrativos y de operación de su empresa? </p>
    
        <input type="radio"  value="1" v-model="p27" />
        <label for="one">Siempre se utilizan</label>

        <input type="radio"  value="2" v-model="p27" />
        <label for="two">Algunas veces se utilizan</label>

        <input type="radio"  value="3" v-model="p27" />
        <label for="two">Están definidos, pero nunca se utilizan</label>

        <input type="radio"  value="4" v-model="p27" />
        <label for="two">No tenemos procesos internos estandarizados</label>
        </section>
      <section>
        <p>28.	Su compañía utiliza algún medio electrónico para mantener relaciones con sus clientes y proveedores </p>
    
        <input type="radio"  value="1" v-model="p28" />
        <label for="one">Utilizamos correo electrónico</label>

        <input type="radio"  value="2" v-model="p28" />
        <label for="two">Utilizamos correo electrónico y/o la página Web (Página en Internet) de nuestra compañía o de nuestros proveedores.</label>

        <input type="radio"  value="3" v-model="p28" />
        <label for="two">Utilizamos formatos pre -establecidos para intercambiar información.</label>
        <input type="radio"  value="4" v-model="p28" />
        <label for="two">Intercambio Electrónico de Documentos (EDI – Electronic Data Interchange) </label>
        <input type="radio"  value="5" v-model="p28" />
        <label for="two">No usamos ningún medio electrónico</label>
        <input type="radio"  value="6" v-model="p28" />
        <label for="two">Usamos otros medios como Fax.</label>

        <p>Complemento</p>
        <input type="text" v-model="c28">
        </section>
      <section>
        <p>29.	¿Su compañía tiene o ha tenido algún tipo de asesoría para el mejoramiento de los procesos internos?</p>
    
        <input type="radio"  value="1" v-model="p29" />
        <label for="one">Hemos tenido asesoría</label>

        <input type="radio"  value="2" v-model="p29" />
        <label for="two">Tenemos actualmente asesoría</label>

        <input type="radio"  value="3" v-model="p29" />
        <label for="two">Nunca hemos tenido asesoría</label>

        <p>Complemento</p>
        <input type="text" v-model="c29">
        </section>
      <section>
        <p>30.	¿Le gustaría que las personas que trabajan en su empresa o a usted le brindaran acompañamiento o capacitaciones en algún tema específico? ¿En cuál?</p>
    
        <input type="radio"  value="1" v-model="p30" />
        <label for="one">Si</label>

        <input type="radio"  value="2" v-model="p30" />
        <label for="two">No</label>

        <input type="radio"  value="3" v-model="p30" />
        <label for="two">No tengo información</label>

        <p>Complemento</p>
        <input type="text" v-model="c30">
        </section>
      <section>
        <p>31.	¿Cuántos clientes nacionales tiene su compañía?</p>
    
        <input type="radio"  value="1" v-model="p31" />
        <label for="one">Entre uno (1) y dos (2) clientes</label>

        <input type="radio"  value="2" v-model="p31" />
        <label for="two">Entre tres (3) y cinco (5) clientes</label>

        <input type="radio"  value="3" v-model="p31" />
        <label for="two">Entre seis (6)  (10) y diez clientes</label>
        <input type="radio"  value="4" v-model="p31" />
        <label for="two">Entre once (11) y cincuenta (50)</label>
        <input type="radio"  value="5" v-model="p31" />
        <label for="two">Entre cincuenta y uno (51) y cien (100)</label>
        <input type="radio"  value="6" v-model="p31" />
        <label for="two">Entre ciento uno (101) y doscientos (200)</label>
        <input type="radio"  value="7" v-model="p31" />
        <label for="two">Mas de doscientos (200)</label>
        <input type="radio"  value="8" v-model="p31" />
        <label for="two">Ningún cliente nacional</label>
        </section>
      <section>
        <p>32.	¿Cuántos clientes internacionales tiene su compañía? </p>
    
        <input type="radio"  value="1" v-model="p32" />
        <label for="one">Entre uno (1) y dos (2) clientes internacionales</label>

        <input type="radio"  value="2" v-model="p32" />
        <label for="two">Entre tres (3) y cinco (5) clientes internacionales</label>

        <input type="radio"  value="3" v-model="p32" />
        <label for="two">Entre seis (6)  y diez (10) clientes internacionales</label>
        <input type="radio"  value="4" v-model="p32" />
        <label for="two">Entre once (11) y cincuenta (50) clientes internacionales</label>
        <input type="radio"  value="5" v-model="p32" />
        <label for="two">Entre cincuenta y uno (51) y cien (100) clientes internacionales</label>
        <input type="radio"  value="6" v-model="p32" />
        <label for="two">Entre ciento uno (101) y doscientos (200) clientes internacionales</label>
        <input type="radio"  value="7" v-model="p32" />
        <label for="two">Mas de doscientos (200) clientes internacionales</label>
        <input type="radio"  value="8" v-model="p32" />
        <label for="two">Ningún cliente internacional</label>
        </section>
      <section>
        <p>33.	¿Con cuántos clientes su empresa logra el 70% de las ventas totales? </p>
    
        <input type="radio"  value="1" v-model="p33" />
        <label for="one">Menor a diez (10)</label>

        <input type="radio"  value="2" v-model="p33" />
        <label for="two">Entre once (11) y cincuenta (50)</label>

        <input type="radio"  value="3" v-model="p33" />
        <label for="two">Entre cincuenta y uno (51) y cien (100)</label>
        <input type="radio"  value="4" v-model="p33" />
        <label for="two">Entre ciento uno (101) y doscientos (200)</label>
        <input type="radio"  value="5" v-model="p33" />
        <label for="two">Entre doscientos (200) y mil (1.000)</label>
        <input type="radio"  value="6" v-model="p33" />
        <label for="two">Más de mil (1.000)</label>

        </section>
      <section>
        <p>34.	Las relaciones con estos clientes siguen un procedimiento definido y estándar en su compañía. </p>
    
        <input type="radio"  value="1" v-model="p34" />
        <label for="one">Tienen un procedimiento estándar definido de común acuerdo con los clientes</label>

        <input type="radio"  value="2" v-model="p34" />
        <label for="two">Tienen un procedimiento estándar definido por nuestra compañía</label>

        <input type="radio"  value="3" v-model="p34" />
        <label for="two">No tienen un procedimiento estándar, cada uno de los clientes usa sus propios formatos y mi compañía se adapta.</label>

        <p>Complemento</p>
        <input type="text" v-model="c34">
        </section>
      <section>
        <p>35.	Cómo califica las relaciones con sus clientes: </p>
    
        <input type="radio"  value="1" v-model="p35" />
        <label for="one">Son estables y permanentes</label>

        <input type="radio"  value="2" v-model="p35" />
        <label for="two">Son en algunos casos esporádicos, pero hay una base estable</label>

        <input type="radio"  value="3" v-model="p35" />
        <label for="two">Son completamente esporádicas</label>

        </section>
      <section>
        <p>36.	¿Cuántos proveedores de materias primas tiene su compañía? </p>
    
        <input type="radio"  value="1" v-model="p36" />
        <label for="one">Entre uno (1) y dos (2) proveedores</label>

        <input type="radio"  value="2" v-model="p36" />
        <label for="two">Entre tres (3) y cinco (5) proveedores</label>

        <input type="radio"  value="3" v-model="p36" />
        <label for="two">Entre seis (6) y diez (10) proveedores</label>
        <input type="radio"  value="4" v-model="p36" />
        <label for="two">Entre once (11) y cincuenta (50) proveedores</label>
        <input type="radio"  value="5" v-model="p36" />
        <label for="two">Entre cincuenta y uno (51) y cien (100) proveedores</label>
        <input type="radio"  value="6" v-model="p36" />
        <label for="two">Entre ciento uno (101) y doscientos (200) proveedores</label>
        <input type="radio"  value="7" v-model="p36" />
        <label for="two">Mas de doscientos (200) proveedores</label>
        <input type="radio"  value="8" v-model="p36" />
        <label for="two">No sabe / No recuerda</label>

        </section>
      <section>
        <p>37.	¿Cuántos proveedores de productos terminados tiene su compañía? </p>
    
        <input type="radio"  value="1" v-model="p37" />
        <label for="one">Entre uno (1) y dos (2) proveedores</label>

        <input type="radio"  value="2" v-model="p37" />
        <label for="two">Entre tres (3) y cinco (5) proveedores</label>

        <input type="radio"  value="3" v-model="p37" />
        <label for="two">Entre seis (6) y diez (10) proveedores</label>
        <input type="radio"  value="4" v-model="p37" />
        <label for="two">Entre once (11) y cincuenta (50) proveedores</label>
        <input type="radio"  value="5" v-model="p37" />
        <label for="two">Entre cincuenta y uno (51) y cien (100) proveedores</label>
        <input type="radio"  value="6" v-model="p37" />
        <label for="two">Entre ciento uno (101) y doscientos (200) proveedores</label>
        <input type="radio"  value="7" v-model="p37" />
        <label for="two">Mas de doscientos (200) proveedores</label>
        <input type="radio"  value="8" v-model="p37" />
        <label for="two">No sabe </label>
        </section>
      <section>
        <p>38.	¿Cuántos proveedores de servicios tiene su compañía? (responda una de las siguientes opciones)</p>
    
        <input type="radio"  value="1" v-model="p38" />
        <label for="one">Entre uno (1) y dos (2) proveedores</label>

        <input type="radio"  value="2" v-model="p38" />
        <label for="two">Entre tres (3) y cinco (5) proveedores</label>

        <input type="radio"  value="3" v-model="p38" />
        <label for="two">Entre seis (6) y diez (10) proveedores</label>
        <input type="radio"  value="4" v-model="p38" />
        <label for="two">Entre once (11) y cincuenta (50) proveedores</label>
        <input type="radio"  value="5" v-model="p38" />
        <label for="two">Más de cincuenta y un (51) proveedores</label>
        <input type="radio"  value="6" v-model="p38" />
        <label for="two">No sabe</label>

        </section>
      <section>
        <p>39.	Indique la periodicidad (frecuencia; diaria, semanal mensual) y el número de documentos que su empresa intercambia con sus proveedores</p>
        <section>
        <p>Órdenes de Compra</p>
        <input type="radio"  value="1" v-model="p39a" />
        <label for="one">diaria</label>

        <input type="radio"  value="2" v-model="p39a" />
        <label for="two">semanal</label>

        <input type="radio"  value="3" v-model="p39a" />
        <label for="two">mensual</label>



        <p>Número de documentos</p>
        <input type="number" v-model="c39a">
      </section>
      <section>
        <p>Facturas</p>
        <input type="radio"  value="1" v-model="p39b" />
        <label for="one">diaria</label>

        <input type="radio"  value="2" v-model="p39b" />
        <label for="two">semanal</label>

        <input type="radio"  value="3" v-model="p39b" />
        <label for="two">mensual</label>



        <p>Número de documentos</p>
        <input type="number" v-model="c39b">
      </section>
      <section>
        <p>Remisiones</p>
        <input type="radio"  value="1" v-model="p39c" />
        <label for="one">diaria</label>

        <input type="radio"  value="2" v-model="p39c" />
        <label for="two">semanal</label>

        <input type="radio"  value="3" v-model="p39c" />
        <label for="two">mensual</label>



        <p>Número de documentos</p>
        <input type="number" v-model="c39c">
      </section>
      <section>
        <p>Confirmaciones de despacho</p>
        <input type="radio"  value="1" v-model="p39d" />
        <label for="one">diaria</label>

        <input type="radio"  value="2" v-model="p39d" />
        <label for="two">semanal</label>

        <input type="radio"  value="3" v-model="p39d" />
        <label for="two">mensual</label>



        <p>Número de documentos</p>
        <input type="number" v-model="c39d">
      </section>
      <section>
        <p>Cotizaciones</p>
        <input type="radio"  value="1" v-model="p39e" />
        <label for="one">diaria</label>

        <input type="radio"  value="2" v-model="p39e" />
        <label for="two">semanal</label>

        <input type="radio"  value="3" v-model="pb39e" />
        <label for="two">mensual</label>



        <p>Número de documentos</p>
        <input type="number" v-model="c39e">
      </section>
      <section>
        <p>Catálogos de productos</p>
        <input type="radio"  value="1" v-model="p39f" />
        <label for="one">diaria</label>

        <input type="radio"  value="2" v-model="p39f" />
        <label for="two">semanal</label>

        <input type="radio"  value="3" v-model="p39f" />
        <label for="two">mensual</label>



        <p>Número de documentos</p>
        <input type="number" v-model="c39f">
      </section>
      <section>
        <p>Otros</p>
        <input type="radio"  value="1" v-model="p39g" />
        <label for="one">diaria</label>

        <input type="radio"  value="2" v-model="p39g" />
        <label for="two">semanal</label>

        <input type="radio"  value="3" v-model="p39g" />
        <label for="two">mensual</label>

        <p>Número de documentos</p>
        <input type="number" v-model="c39g">
      </section>
        </section>
      <section>
        <p>40.	Las relaciones con sus proveedores siguen un procedimiento estándar en su compañía. </p>
    
        <input type="radio"  value="1" v-model="p40" />
        <label for="one">Tienen un procedimiento estándar definido de común acuerdo con los proveedores</label>

        <input type="radio"  value="2" v-model="p40" />
        <label for="two">Tienen un procedimiento estándar definido por nuestra compañía</label>

        <input type="radio"  value="3" v-model="p40" />
        <label for="two">No tienen un procedimiento estándar, cada uno de los proveedores usa sus propios formatos y mi compañía se adapta.</label>
        <input type="radio"  value="4" v-model="p40" />
        <label for="two">Otra</label>

        <p>Complemento</p>
        <input type="text" v-model="c40">
        </section>
      <section>
        <p>41.	Cómo califica las relaciones con sus proveedores:</p>
    
        <input type="radio"  value="1" v-model="p41" />
        <label for="one">Son estables y permanentes</label>

        <input type="radio"  value="2" v-model="p41" />
        <label for="two">Son en algunos casos esporádicos, pero hay una base estable</label>

        <input type="radio"  value="3" v-model="p41" />
        <label for="two">Son completamente esporádicas</label>

        <p>Complemento</p>
        <input type="text" v-model="c41">
        </section>

        <section>
        <p>OBSERVACIONES (Indique Si desea realizar algún cambio de su negocio y Porque?: </p>
        <p>Complemento</p>
        <input type="text" v-model="c42">
        </section>
          
        <button type="button"  @click="registerForm()"> 
                Ingresar
            </button>
        <label for="mensaje">{{mensaje}}</label>
        
        
    </div>
</template>

<script>


import db from "../components/firebase/initFirebase";
import VueCookies from 'vue-cookies'
import { registerFirestore } from "@firebase/firestore";
import option from "@/components/option.vue"


export default {
  name: "formulario",
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
      nit: '123456'
    }
  },
  components:{
    option

  },
  methods: {
    verificar(){
    
    },
    registerForm(){
      db.collection("datos").doc(this.nit).set({
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
        comentarios: this.c42
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
    // methods can be called in lifecycle hooks, or other methods!
  }
}



</script>