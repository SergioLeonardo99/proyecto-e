<template>

    <div class="mx-auto ">
        <!--Estilo superior-->
        <nav id="navbar_top" class="bg-gray-50 flex justify-between lg:justify-start items-center" style="box-shadow: 5px 5px 10px #f5f5f4;">
            <div class="logo p-3 w-5/6 ">

                <!--Integracion de logo-->

                <img src="https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2Flogo1.webp?alt=media&token=b5f93def-5513-4e06-b47c-3599266bbb6f" height="250" width="250" alt="">

            </div>
            <!--opciones superiores para acceso a los diferentes modúlos-->
            <!--menu resposive para adaptar app movil y web-->

            <div class="links lg:block hidden w-1/6 md:w-4/6">
                <ul class="menu flex items-center justify-center gap-5">
                    <li><a @click="$router.push('/profileStudent')" class="botones-link">Perfil</a></li>
                    <li><a @click="$router.push('/viewCompanies')" class="botones-link">Empresas</a></li>
                    <li><a @click="$router.push('/requestStudent')" class="botones-link">Solicitudes</a></li>
                    <li><a @click="$router.push('/helpStudent')" class="botones-link">Ayuda</a></li>
                    <li><a @click="terminarSession()" class="botones-link">Salir</a></li>
                    <!-- <li><a href="#"
                            class="border-2 px-2 py-2 border-teal-700 text-black font-semibold rounded-full hover:bg-teal-100 hover:text-black transition duration-500">Comenzar</a>
                    </li> -->

                </ul>
            </div>
            <!--menu resposive para adaptar app movil y web-->
            <div class="block lg:hidden w-1/6 lg:w-4/6">
                <button class="link" id="mobile-menu" @click="menubar">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                <ul class="mobile-links w-full absolute z-50 left-0 text-center bg-stone-50"
                    :class="{ hidden: isActive }">
                    <li><a @click="$router.push('/profileStudent')" class="botones-link">Perfil</a></li>
                    <li><a @click="$router.push('/viewCompanies')" class="botones-link">Empresas</a></li>
                    <li><a @click="$router.push('/requestStudent')" class="botones-link">Solicitudes</a></li>
                    <li><a @click="$router.push('/helpStudent')" class="botones-link">Ayuda</a></li>
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
import Seguridad from "@/components/js/encrypt.js";
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
        compruebaSession(){
            var idEstudiante =$cookies.get(safe.cipher('estudiante'))

            if (idEstudiante === null){
                this.$router.push('/');
            }
        },
        terminarSession(){
            var admin =$cookies.get(safe.cipher('admin'))
            document.cookie = safe.cipher('estudiante')+"= a; max-age=1; SameSite=none; secure";
            if(admin === null){
                this.$router.push('/');
            }else{
                this.$router.push('/dashboard');
            }
            
        },
    },
    mounted() {
        this.compruebaSession()
  }
}
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        //navbar_height = document.querySelector('.navbar').offsetHeight;
        //document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
});
</script>
    
    
    
    <style lang="">
        
    </style>
    
        