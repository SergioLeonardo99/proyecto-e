
<template>
    <!--Inicio de desarrollo, cuerpo de desarrollo-->
    <div class="mx-auto ">
        <!--Estilo superior-->
        <nav id="navbar_top" class=" bg-gray-50 flex justify-between lg:justify-start items-center">
            <div class="logo p-3 w-5/6 ">

                <!--Integracion de logo-->

                <img src="https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2FLogofinishim.webp?alt=media&token=959234d1-a437-48ae-b868-4dafc92ef490" height="250" width="250" alt="">
            </div>
            <!--opciones superiores para acceso a los diferentes modúlos-->
            <div class="links lg:block hidden w-1/6 md:w-4/6">
                <ul class="menu flex items-center justify-center gap-5">
                    <li><a @click="$router.push('/')" class="botones-link">
                            <div class="flex justify-center items-center"><i class="gg-home"></i>
                                <br>
                            </div>Inicio
                        </a></li>
                    <li><a @click="$router.push('/about')" class="botones-link">
                            <div class="flex justify-center items-center"><i class="gg-browse"></i></div>Acerca de
                        </a></li>
                    <li><a @click="$router.push('/helpGuest')" class="botones-link">
                            <div class="flex justify-center items-center"><i class="gg-search-found"></i>
                                <br>
                            </div>
                            Ayuda
                        </a></li>
                    <li><a @click="$router.push('/login')"
                            class="border-2 px-2 py-2 border-teal-700 text-black font-semibold rounded-full hover:bg-teal-100 hover:text-black transition duration-500">Comenzar</a>
                    </li>

                </ul>
            </div>
            <!--menu resposive para adaptar app movil y web-->
            <div class="block lg:hidden w-1/6 lg:w-4/6">
                <button class="link" id="mobile-menu" @click="menubar">
                    <i class="bi bi-list"></i>
                </button>
                <ul class="mobile-links w-full absolute z-50 left-0 text-center bg-stone-50"
                    :class="{ hidden: isActive }">
                    <li><a @click="$router.push('/')" class="botones-link ">Inicio</a></li>
                    <li><a @click="$router.push('/about')" class="botones-link ">Acerca de </a></li>
                    <li><a @click="$router.push('/helpGuest')" class="botones-link ">Ayuda </a></li>
                    <li><a @click="$router.push('/login')"
                            class="my-4 inline-block border-2 px-2 py-2 border-teal-700 text-black font-semibold rounded-full hover:bg-teal-100 hover:text-black transition duration-500">Comenzar</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>

export default {
    name: 'navBar',
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
        }
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

<style lang="css">
@import url('https://css.gg/browse.css');
@import url('https://css.gg/home.css');
@import url('https://css.gg/menu.css');
@import url('https://css.gg/search-found.css');
</style>

    