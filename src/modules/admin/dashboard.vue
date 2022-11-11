<template>
<navAdmin></navAdmin>
    <div>
      <div class="relative md:ml-100 bg-blueGray-100">
          <AdminL/>
          <header-stats />
        </div>
        <div><cardBarras /></div>
      
      </div>
      <div class="flex flex-wrap">
       
        <div class="w-full xl:w-10/18 py-8">
          <cardSectores />
        </div>

     
      
    </div>
  </template>
  <script>
    //layouts
  import AdminL from "@/components/cards/cardAdmin.vue";
  import cardGraphics from "@/components/cards/cardGraphics.vue";
  import cardBarras from "@/components/cards/cardBars.vue";

  import cardSectores from "@/components/cards/cardUsers.vue";
  import navbarAdmin from '@/components/navbars/navbarAdmin.vue'

  

  export default {
    name: "dashboard-page",
    components: {
      cardBarras,
      cardGraficos: cardGraphics,
      cardSectores,
      navAdmin: navbarAdmin,
      AdminL,


     
    },

  };
  </script>