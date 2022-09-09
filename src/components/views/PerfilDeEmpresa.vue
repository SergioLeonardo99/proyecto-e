<template>
    <!--llamado del navBar2 a la clase-->
    <navBar2></navBar2>
    <!--Intregacion de la imagen principal de la empresa-->
    <div class="p-16">
        <div class="p-8 bg-white shadow mt-24">
            <div class="grid grid-cols-1 md:grid-cols-3">
                <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0 p-10">
                </div>
                <div class="relative">
                    <div
                        class="animate__animated animate__fadeInDown w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>

                <!-- <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                    <button
                        class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                        Connect
                    </button>
                    <button
                        class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                        Message
                    </button>
                </div> -->
            </div>
                    <!--Nombre de la empresa-->
            <div class="animate__animated animate__fadeInDown mt-20 text-center border-b pb-12">
                <h1 class="text-4xl font-medium text-black">Nombre de la empresa
                    </h1>
                    <!--Descripcion de la empresa-->
                <p class="font-light text-black mt-3">NIT de la empresa</p>

                <p class="mt-8 text-black">Número de contacto la empresa</p>
                <p class="mt-2 text-black">Dirección de la empresa</p>
            </div>

            <div class="animate__animated animate__fadeInDown mt-12 flex flex-col justify-center">
                <p class="mt-2 text-black text-center">Acerca de la empresa</p>
                <br>
                <p class="text-black text-center font-light lg:px-16">An artist of considerable range, Ryan — the
                    name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his
                    own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable
                    range.</p>
                <button class="text-teal-700 py-2 px-4 font-medium mt-4">
                    Más información
                </button>
            </div>

        </div>
    </div>
</template>
<script>
    //LLamado del navbar2 a la clase

import navBar2 from './elementos/navbar2.vue'

export default {

    name: 'PerfilDeEmpresa',
    components: {
        navBar2
    },
    methods: {

    }
}

</script>
    <style lang="css">
     @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");
    .imagen-carousel {
        height: 470px;
    }
    
    .alinearT {
        text-align: center;
    }
    
    .letra {
        font-family: sans-serif;
    }
    </style>
    
        























