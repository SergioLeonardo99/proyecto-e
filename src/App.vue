<template>
<!-- cambiar color de fondo -->
  <div class="bg-white-400 h-screen">
    <MenuResponsive>

    </MenuResponsive>
  </div>
</template>

<script>

//Importar los estilos del tailwind 

import MenuResponsive from "./components/views/MenuResponsive.vue"


export default {
  name: 'App',
  components: {
    // agregar a la compilacion 
    MenuResponsive,
    
},
};
</script>


