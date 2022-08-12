<template>
<!-- color de la barra superior, texto y crear scroll sea responsive y los items busquen el centro  -->
    <div class="bg-blue-400 text-black py-3.5 px-6 shadow md:flex justify-between items-center">

        <div class="flex items-center">
            <span class="text-black text-xl mr-1">
                <img src="@/assets/logom.png" height="50" width="50" alt="">
            
            </span>
            <h1 class="text-xl"> M&S</h1>

        </div>
        <span @click="AbrirMenu()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
            <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
        </span>

        <ul class="md:flex md:items-center md:px-0 px-1 md:pb-0 pb-10 md:static absolute bg-blue-400 md:w-auto w-full top-14 duration-700 ease-in"
        :class="[open ? 'left-0' : 'left-[-100%]']">

            <li class="md:mx-4 md:my-0 my-6" v-for="link in links" v-bind:key= "link">
                <a :href="link.links" class="text-xl hover:text-black">{{link.nombre}}</a>
            </li>

            <BtnLogin>Iniciar Sesion</BtnLogin>
        </ul>

    </div>
</template>

<script>
import BtnLogin from './BtnLogin.vue'
 import { ref } from 'vue'; 
export default {
    components:{
        BtnLogin
    },

    setup(){

        let open = ref(false)
        let links = [
            {nombre: "Inicio", link: "#" },
            {nombre: "Servicios", link: "#" },
            {nombre: "Solicitudes", link: "#" },
            {nombre: "Contacto", link: "#" },

        ]
        function AbrirMenu(){
            open.value = !open.value
        }
        return {links, open, AbrirMenu}
    }
    
}

</script>
