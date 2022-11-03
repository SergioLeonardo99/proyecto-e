<template>
    <navBar2></navBar2>
<!-- Lacteo -->
    <div v-if="sector=='Lácteos'">
        <section class="bg-white">
        <div class="bg-white justify-center gap-4  p-3 alinearT">
        

            <br>
            <h3 class="font-semibold letra text-teal-900 text-3xl">

                Recomendaciones de maquinaria para el sector lácteo

            </h3>
        </div>
    </section>
    <section class="bg-white border-b py-8">
        <div class="bg-white justify-center gap-4  p-3 alinearT">
            <h1 class="font-semibold letra text-teal-900 text-3xl">
                Equipos de ordeño
            </h1>
            <div class="w-full mb-4">
                <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <div class="flex flex-wrap">
                <div class="w-5/6 sm:w-1/2 p-6">
                    <h3 class="text-2xl text-teal-900 font-bold leading-none mb-3 alinearT">
                        Equipo One Car
                    </h3>
                    <p class="text-gray-600 mb-8">
                        Es un equipo que cuenta con una bomba lubricada con consumo de gasolina 1/2 L x Hora, es
                        ideal para los pequeños
                        productores. Además, tiene una capacidad Colector de 1 x 150cc y permite recolectar el
                        producto lácteo de 10 vacas en
                        una hora, Fácil de transportar en los potreros.
                        <br />
                        <br />
                    </p>
                    <!-- <a href="#">

                        <img class=" justify-end w-1/2 p-3
                        bg-[url('https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2FimgMineria.webp?alt=media&token=598055f3-fc2a-4ae9-b757-9449c8af360a')]
                        rounded-md shadow-lg" />
                    </a>  -->
                </div>
            </div>
        </div>

        <div class="bg-white justify-center gap-4  p-3 alinearT">
            <div class="w-full mb-4">
                <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div class="flex flex-wrap justify-end">
                <div class="w-5/6 sm:w-1/2 p-6">
                    <h3 class="text-2xl text-teal-900 font-bold leading-none mb-3 alinearT">
                        Equipo Zan Car

                    </h3>
                    <p class="text-gray-600 mb-8">
                        Es un equipo que cuenta con una bomba lubricada con consumo de gasolina 1/2 L x Hora, es
                        ideal
                        para los pequeños
                        productores. Además, tiene una capacidad Colector de 1 x 150cc y permite recolectar el
                        producto
                        lácteo de 10 a 15 vacas
                        en una hora. Es más compacto de 1 puesto con 2 motores (eléctrico y gasolina).
                        <br />
                        <br />
                    </p>
                    <!-- <div
                        class="w-1/2 p-3 bg-[url('https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2FimgMineria.webp?alt=media&token=598055f3-fc2a-4ae9-b757-9449c8af360a')] rounded-md shadow-lg object-right-top">
                        <h1 class=" w-50 p5 letra text-2xl p-6 text-white">Minero</h1>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="bg-white justify-center gap-4  p-3 alinearT">
            <div class="w-full mb-4">
                <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div class="flex flex-wrap">
                <div class="w-5/6 sm:w-1/2 p-6">
                    <h3 class="text-2xl text-teal-900 font-bold leading-none mb-3 alinearT">
                        Equipo Twin Car
                    </h3>
                    <p class="text-gray-600 mb-8">
                        Es un equipo que cuenta con una bomba lubricada con consumo de gasolina 1L x Hora, Además,
                        tiene
                        una capacidad Colector
                        de 2 x 150cc y permite recolectar el producto lácteo de 20 a 25 vacas en una hora. Cuenta
                        con 2
                        motores, eléctrico de
                        1.0 HP y gasolina de 6.5 HP.
                        <br />
                        <br />
                    </p>
                    <!-- <div
                        class="w-1/2 p-3 bg-[url('https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2FimgMineria.webp?alt=media&token=598055f3-fc2a-4ae9-b757-9449c8af360a')] rounded-md shadow-lg object-right-top">
                        <h1 class=" w-50 p5 letra text-2xl p-6 text-white">Minero</h1>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="bg-white justify-center gap-4  p-3 alinearT">
            <div class="w-full mb-4">
                <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div class="flex flex-wrap justify-end">
                <div class="w-5/6 sm:w-1/2 p-6">
                    <h3 class="text-2xl text-teal-900 font-bold leading-none mb-3 alinearT">
                        Tanques de refrigeración

                    </h3>
                    <p class="text-gray-600 mb-8">
                        La leche es un producto delicado, que necesita condiciones específicas, para no perder
                        calidad,
                        un tanque adecuado
                        permitirá mantener sus propiedades y calidad del producto.
                        <br />
                        <br />
                    </p>
                    <!-- <div
                        class="w-1/2 p-3 bg-[url('https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2FimgMineria.webp?alt=media&token=598055f3-fc2a-4ae9-b757-9449c8af360a')] rounded-md shadow-lg object-right-top">
                        <h1 class=" w-50 p5 letra text-2xl p-6 text-white">Minero</h1>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="bg-white justify-center gap-4  p-3 alinearT">
            <div class="w-full mb-4">
                <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div class="flex flex-wrap">
                <div class="w-5/6 sm:w-1/2 p-6">
                    <h3 class="text-2xl text-teal-900 font-bold leading-none mb-3 alinearT">
                        Prensa para queso
                    </h3>
                    <p class="text-gray-600 mb-8">
                        Este equipo permite aumentar la fuerza ejercida a la masa de queso, es adaptable al tipo de
                        fuerza requerida según la
                        masa, optimizando tiempos de procesamiento.
                        <br />
                        <br />
                    </p>
                    <!-- <div
                        class="w-1/2 p-3 bg-[url('https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2FimgMineria.webp?alt=media&token=598055f3-fc2a-4ae9-b757-9449c8af360a')] rounded-md shadow-lg object-right-top">
                        <h1 class=" w-50 p5 letra text-2xl p-6 text-white">Minero</h1>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="bg-white justify-center gap-4  p-3 alinearT">
            <div class="w-full mb-4">
                <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div class="flex flex-wrap justify-end">
                <div class="w-5/6 sm:w-1/2 p-6">
                    <h3 class="text-2xl text-teal-900 font-bold leading-none mb-3 alinearT">
                        Envasadora al vacio
                    </h3>
                    <p class="text-gray-600 mb-8">
                        El objetivo de dicha máquina es ayudar a conservar durante mayor tiempo, en la mejores
                        condiciones, el alimento queda
                        sellado de manera hermética, sin aire hasta quedar totalmente sellado.
                        <br />
                        <br />
                    </p>
                    <!-- <div
                        class="w-1/2 p-3 bg-[url('https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2FimgMineria.webp?alt=media&token=598055f3-fc2a-4ae9-b757-9449c8af360a')] rounded-md shadow-lg object-right-top">
                        <h1 class=" w-50 p5 letra text-2xl p-6 text-white">Minero</h1>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="bg-white justify-center gap-4  p-3 alinearT">
            <div class="w-full mb-4">
                <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div class="flex flex-wrap">
                <div class="w-5/6 sm:w-1/2 p-6">
                    <h3 class="text-2xl text-teal-900 font-bold leading-none mb-3 alinearT">
                        Control Ganadero
                    </h3>
                    <p class="text-gray-600 mb-8">
                        Es un software que permite llevar una administración ganadera, para que se pueda llevar un
                        control, monitoreo de la
                        finca y el ganado. Este software incluye monitoreo al ganado en general, contacto directo
                        con
                        sus trabajadores, contacto
                        directo con los veterinarios y registro de partos e inseminaciones. Para poder acceder a
                        todo el
                        sistema web sin
                        restricciones es necesario adquirir una membresía..
                        <br />
                        <br />
                    </p>
                    <!-- <div
                        class="w-1/2 p-3 bg-[url('https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2FimgMineria.webp?alt=media&token=598055f3-fc2a-4ae9-b757-9449c8af360a')] rounded-md shadow-lg object-right-top">
                        <h1 class=" w-50 p5 letra text-2xl p-6 text-white">Minero</h1>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="bg-white justify-center gap-4  p-3 alinearT">
            <div class="w-full mb-4">
                <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div class="flex flex-wrap justify-end">
                <div class="w-5/6 sm:w-1/2 p-6">
                    <h3 class="text-2xl text-teal-900 font-bold leading-none mb-3 alinearT">
                        BovControl
                    </h3>
                    <p class="text-gray-600 mb-8">
                        Es una plataforma de tecnologías que permiten interacciones digitales, reorganizando la
                        cadena
                        de valor del ganado para
                        erradicar el hambre e impulsar la neutralidad climática, alimentando a 1.000 millones de
                        personas/día y compensación de
                        50 millones de toneladas de carbono por año hasta 2025. Cuenta con tres secciones que son:
                        bovControl, bovImpact,
                        bovCrypto. Además, busca soluciones sostenibles para la agricultura del futuro, registrarse
                        es
                        gratis.
                        <br />
                        <br />
                    </p>
                    <!-- <div
                        class="w-1/2 p-3 bg-[url('https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2FimgMineria.webp?alt=media&token=598055f3-fc2a-4ae9-b757-9449c8af360a')] rounded-md shadow-lg object-right-top">
                        <h1 class=" w-50 p5 letra text-2xl p-6 text-white">Minero</h1>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="bg-white justify-center gap-4  p-3 alinearT">
            <div class="w-full mb-4">
                <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div class="flex flex-wrap">
                <div class="w-5/6 sm:w-1/2 p-6">
                    <h3 class="text-2xl text-teal-900 font-bold leading-none mb-3 alinearT">
                        VacApp
                    </h3>
                    <p class="text-gray-600 mb-8">
                        Es una aplicación diseñada por ganaderos para gestionar vacas, toros y rebaños. Permite
                        tener un
                        control exhaustivo de
                        terneros, destetes, saneamientos, enfermedades y diversos eventos que le pueden pasar a tu
                        rebaño. Además contiene:
                        Alojamiento en la nube, Modo Offline,Simplifica los saneamientos,Gestiona de rebaños,
                        Historial
                        de terneros,Importa y
                        exporta documentos.

                        <br />
                        <br />
                    </p>
                    <!-- <div
                        class="w-1/2 p-3 bg-[url('https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2FimgMineria.webp?alt=media&token=598055f3-fc2a-4ae9-b757-9449c8af360a')] rounded-md shadow-lg object-right-top">
                        <h1 class=" w-50 p5 letra text-2xl p-6 text-white">Minero</h1>
                    </div> -->
                </div>
            </div>
        </div>

    </section>
    <button type="button" @click="descargarRecomendacion('https://drive.google.com/file/d/1C8cj3zoOPX80IhS31D63eOGkTAiW7uGV/view?usp=share_link','archivo.pdf')" class=" letra w-full block bg-teal-700 hover:bg-teal-500 focus:bg-teal-500 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Abrir documento recomendaciones</button>

    </div>
<!-- Minero -->
    <div v-if="sector=='Minería de carbón'">
        <section class="bg-white">
        <div class="bg-white justify-center gap-4  p-3 alinearT">
        

            <br>
            <h3 class="font-semibold letra text-teal-900 text-3xl">

                Recomendaciones de maquinaria para el sector minero

            </h3>
        </div>
    </section>
    <section class="bg-white border-b py-8">
        <div class="bg-white justify-center gap-4  p-3 alinearT">
            <h1 class="font-semibold letra text-teal-900 text-3xl">
                Equipos de minería subterránea
            </h1>
            <div class="w-full mb-4">
                <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <div class="flex flex-wrap">
                <div class="w-5/6 sm:w-1/2 p-6">
                    <h3 class="text-2xl text-teal-900 font-bold leading-none mb-3 alinearT">
                        Ascensores de grúa
                    </h3>
                    <p class="text-gray-600 mb-8">
                        Los elevadores de grúa son versátiles en la minería subterránea. 
                        Estas máquinas de minería se pueden utilizar para cargar explosivos
                         y transportar otras cargas pesadas y equipos de minería.
                        <br />
                        <br />
                    </p>
                    <!-- <a href="#">

                        <img class=" justify-end w-1/2 p-3
                        bg-[url('https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2FimgMineria.webp?alt=media&token=598055f3-fc2a-4ae9-b757-9449c8af360a')]
                        rounded-md shadow-lg" />
                    </a>  -->
                </div>
            </div>
        </div>

        <div class="bg-white justify-center gap-4  p-3 alinearT">
            <div class="w-full mb-4">
                <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div class="flex flex-wrap justify-end">
                <div class="w-5/6 sm:w-1/2 p-6">
                    <h3 class="text-2xl text-teal-900 font-bold leading-none mb-3 alinearT">
                        Mineros Continuos

                    </h3>
                    <p class="text-gray-600 mb-8">
                        Los mineros continuos son un tipo de equipo minero está equipado con 
                         un gran tambor giratorio con dientes de carburo para raspar el carbón
                          de las vetas. Estas herramientas mineras pueden extraer hasta cinco
                           toneladas de carbón por minuto y representan aproximadamente el 45 % 
                           de la producción subterránea de carbón. También cuentan con cintas
                            transportadoras que transportan el carbón, haciendo de este un proceso automatizado 
                            que se controla de forma remota.
                        <br />
                        <br />
                    </p>
                    <!-- <div
                        class="w-1/2 p-3 bg-[url('https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2FimgMineria.webp?alt=media&token=598055f3-fc2a-4ae9-b757-9449c8af360a')] rounded-md shadow-lg object-right-top">
                        <h1 class=" w-50 p5 letra text-2xl p-6 text-white">Minero</h1>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="bg-white justify-center gap-4  p-3 alinearT">
            <div class="w-full mb-4">
                <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div class="flex flex-wrap">
                <div class="w-5/6 sm:w-1/2 p-6">
                    <h3 class="text-2xl text-teal-900 font-bold leading-none mb-3 alinearT">
                        Drones
                    </h3>
                    <p class="text-gray-600 mb-8">
                        Los drones de minería subterránea, como Elios 3 de Flyability ,
                         se utilizan para inspecciones visuales en tramos de pasos del mineral
                         , pozos de ventilación, cintas transportadoras en áreas de una mina subterránea. 
                         Esta tecnología ha permitido que se lleven a cabo inspecciones en zonas que no son 
                         seguras para el ingreso de humano, es una herramienta vital en condiciones peligrosas
                          como lo es un socavón.
                        <br />
                        <br />
                    </p>
                    <!-- <div
                        class="w-1/2 p-3 bg-[url('https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2FimgMineria.webp?alt=media&token=598055f3-fc2a-4ae9-b757-9449c8af360a')] rounded-md shadow-lg object-right-top">
                        <h1 class=" w-50 p5 letra text-2xl p-6 text-white">Minero</h1>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="bg-white justify-center gap-4  p-3 alinearT">
            <div class="w-full mb-4">
                <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div class="flex flex-wrap justify-end">
                <div class="w-5/6 sm:w-1/2 p-6">
                    <h3 class="text-2xl text-teal-900 font-bold leading-none mb-3 alinearT">
                            Plumeros

                    </h3>
                    <p class="text-gray-600 mb-8">
                        Los pulverizadores de roca son cruciales para evitar la combustión de los socavones de la mina.
                         Los plumeros aplican polvo inerte o polvo con una pequeña cantidad de materiales combustibles 
                         para contrarrestar el polvo de carbón. Este proceso es especialmente importante cuando se están 
                         produciendo explosiones planificadas.
                        <br />
                        <br />
                    </p>
                    <!-- <div
                        class="w-1/2 p-3 bg-[url('https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2FimgMineria.webp?alt=media&token=598055f3-fc2a-4ae9-b757-9449c8af360a')] rounded-md shadow-lg object-right-top">
                        <h1 class=" w-50 p5 letra text-2xl p-6 text-white">Minero</h1>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="bg-white justify-center gap-4  p-3 alinearT">
            <div class="w-full mb-4">
                <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div class="flex flex-wrap">
                <div class="w-5/6 sm:w-1/2 p-6">
                    <h3 class="text-2xl text-teal-900 font-bold leading-none mb-3 alinearT">
                        Empernadores de techo
                    </h3>
                    <p class="text-gray-600 mb-8">
                        Los pernos de techo aseguran el techo de la mina con gatos de seguridad para ayudar a prevenir derrumbes.
                        <br />
                        <br />
                    </p>
                    <!-- <div
                        class="w-1/2 p-3 bg-[url('https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2FimgMineria.webp?alt=media&token=598055f3-fc2a-4ae9-b757-9449c8af360a')] rounded-md shadow-lg object-right-top">
                        <h1 class=" w-50 p5 letra text-2xl p-6 text-white">Minero</h1>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="bg-white justify-center gap-4  p-3 alinearT">
            <div class="w-full mb-4">
                <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div class="flex flex-wrap justify-end">
                <div class="w-5/6 sm:w-1/2 p-6">
                    <h3 class="text-2xl text-teal-900 font-bold leading-none mb-3 alinearT">
                        Sistemas de ventilación
                    </h3>
                    <p class="text-gray-600 mb-8">
                        Los sistemas de ventilación son cruciales para que los trabajadores estén presentes
                         en las minas debido a la naturaleza nociva del carbón y, específicamente, del polvo 
                         de carbón. Estos sistemas se utilizan para proporcionar aire limpio a los trabajadores 
                         y regular las temperaturas bajo tierra.
                        <br />
                        <br />
                    </p>
                    <!-- <div
                        class="w-1/2 p-3 bg-[url('https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2FimgMineria.webp?alt=media&token=598055f3-fc2a-4ae9-b757-9449c8af360a')] rounded-md shadow-lg object-right-top">
                        <h1 class=" w-50 p5 letra text-2xl p-6 text-white">Minero</h1>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="bg-white justify-center gap-4  p-3 alinearT">
            <div class="w-full mb-4">
                <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div class="flex flex-wrap">
                <div class="w-5/6 sm:w-1/2 p-6">
                    <h3 class="text-2xl text-teal-900 font-bold leading-none mb-3 alinearT">
                        Cámaras de refugio
                    </h3>
                    <p class="text-gray-600 mb-8">
                        Las cámaras de refugio son cámaras de seguridad independientes para mineros que están equipadas con oxígeno,
                         alimentos, agua y necesidades sanitarias en caso de emergencia. Estas cámaras pueden albergar mineros de
                          forma segura durante 96 horas a ocho días.
                        <br />
                        <br />
                    </p>
                    <!-- <div
                        class="w-1/2 p-3 bg-[url('https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2FimgMineria.webp?alt=media&token=598055f3-fc2a-4ae9-b757-9449c8af360a')] rounded-md shadow-lg object-right-top">
                        <h1 class=" w-50 p5 letra text-2xl p-6 text-white">Minero</h1>
                    </div> -->
                </div>
            </div>
        </div>
   

    </section>
    <button type="button" @click="descargarRecomendacion('https://drive.google.com/file/d/1xcRLNqJBs4HbfFYpG8FZ-WWrKbp_RR9j/view?usp=sharing','archivo.pdf')" class=" letra w-full block bg-teal-700 hover:bg-teal-500 focus:bg-teal-500 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Abrir documento recomendaciones</button>


    </div>

    <!--Creacion del formulario para las solicitudes-->
   
    







</template>

<script>
import "firebase/firestore";
import navBar2 from './elementos/navbar2.vue'
import firebase from "../../components/firebase/initFirebase";
const db = firebase.firestore();
import Seguridad from "../js/encrypt.js";
const safe = new Seguridad();


export default {
    data() {
        return {
            texto: '',
            sector: ''
            

        }
    },

    name: 'solicitudes',
    components: {
        navBar2
    },
    methods: {
        descargarRecomendacion(ruta, nombre){
            const downloadIInstance = document.createElement('a')
            downloadIInstance.href = ruta
            downloadIInstance.target = '_blank'
            downloadIInstance.download = nombre
            document.body.appendChild(downloadIInstance)
            downloadIInstance.click()
            document.body.removeChild(downloadIInstance)

        },
        descargarFirestore(){
            storageRef.child('recomendaciones/re.pdf').getDownloadURL()
            .then((url) => {
                // `url` is the download URL for 'images/stars.jpg'

                // This can be downloaded directly:
                var xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = (event) => {
                var blob = xhr.response;
                };
                xhr.open('GET', url);
                xhr.send();

               
            })
            .catch((error) => {
                // Handle any errors
            });
        },
        cargarEmpresa() {

        this.nitEmpresa =safe.decrypt($cookies.get(safe.cipher('nit')))

        var docRef = db.collection("usuario").doc(this.nitEmpresa.toString());


        var getOptions = {
            //source: 'cache'
        };
        docRef.get(getOptions).then((doc) => {

            // Document was found in the cache. If no cached document exists,
            // an error will be returned to the 'catch' block below.
            this.sector = doc.data().sector;
            

        }).catch((error) => {
            
        });
        },
        


    },
    mounted() {
        this.cargarEmpresa()
        

    },
}

</script>


<style lang="css">
.letra {
    font-family: sans-serif;
}
</style>