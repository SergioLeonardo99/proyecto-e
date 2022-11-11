<template>

    <div class="mx-auto ">
        <!--Estilo superior-->
        <nav class="bg-white-50 flex justify-between lg:justify-start items-center"
            style="box-shadow: 5px 5px 10px #f5f5f4;">
            <div class="logo p-3 w-5/6 ">

                <!--Integracion de logo-->

                <img src="https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2FLogofinishim.webp?alt=media&token=959234d1-a437-48ae-b868-4dafc92ef490"
                    height="250" width="250" alt="">

            </div>
            <!--opciones superiores para acceso a los diferentes modúlos-->
            <!--menu resposive para adaptar app movil y web-->

            <div class="links lg:block hidden w-1/6 md:w-4/6">
                <ul class="menu flex items-center justify-center gap-5">
                    <li><a @click="$router.push('/admin')" class="botones-link">Tablero</a></li>
                    <li><a @click="$router.push('/solicitudesadmin')" class="botones-link">Solicitudes</a></li>
                    <li><a @click="$router.push('/generarcsv')" class="botones-link">Generar CSV</a></li>
                    <li><a @click="terminarSession()" class="botones-link">Salir</a></li>
                    <!-- <li><a href="#"
                            class="border-2 px-2 py-2 border-teal-700 text-black font-semibold rounded-full hover:bg-teal-100 hover:text-black transition duration-500">Comenzar</a>
                    </li> -->

                </ul>
            </div>
            <!--menu resposive para adaptar app movil y web-->
            <div class="block lg:hidden w-1/6 lg:w-4/6">
                <button class="link" id="mobile-menu" @click="menubar">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                <ul class="mobile-links w-full absolute z-50 left-0 text-center bg-stone-50"
                    :class="{ hidden: isActive }">
                    <li><a @click="$router.push('/admin')" class="botones-link">Tablero</a></li>
                    <li><a @click="$router.push('/solicitudesadmin')" class="botones-link">Solicitudes</a></li>
                    <li><a @click="$router.push('/generarcsv')" class="botones-link">Generar CSV</a></li>
                    <li><a @click="terminarSession()" class="botones-link">Salir</a></li>
                    <!-- <li><a href="#"
                            class="my-4 inline-block border-2 px-2 py-2 border-teal-700 text-black font-semibold rounded-full hover:bg-teal-100 hover:text-black transition duration-500">Comenzar</a>
                    </li> -->

                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import Seguridad from "../../js/encrypt.js";
const safe = new Seguridad();
export default {
    name: 'navBar2',
    components: {

    },
    data() {
        return {
            isActive: true,

        }
    },
    methods: {
        menubar() {
            this.isActive = !this.isActive
        },
        compruebaSession() {
            var admin = $cookies.get(safe.cipher('admin'))

            if (admin === null) {
                this.$router.push('/');
            }
        },
        terminarSession() {
            document.cookie = safe.cipher('admin') + "= a; max-age=1; SameSite=none; secure";
            this.$router.push('/');
        },
    },
    mounted() {
        this.compruebaSession()


    }
}
</script>
    
    
    
<style lang="">
        
    </style>
    
        