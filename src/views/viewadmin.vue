<template>
<navAdmin></navAdmin>
    <div>
      <div class="relative md:ml-64 bg-blueGray-100">
          <AdminL/>
          <header-stats />
        </div>
      <div class="flex flex-wrap">
        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <cardGraficos />
        </div>
        <div class="w-full xl:w-4/12 px-4">
          <cardBarras />
        </div>
      </div>
      <div class="flex flex-wrap">
       
        <div class="w-full xl:w-10/18 py-8">
          <cardSectores />
        </div>

      </div>
      
    </div>
  </template>
  <script>
    //layouts
  import AdminL from "@/layouts/Admin.vue";
  import cardGraficos from "@/components/cards/cardGraficos.vue";
  import cardBarras from "@/components/cards/cardBarras.vue";

  import cardSectores from "@/components/cards/cardSectores.vue";
  import navAdmin from "@/components/views/elementos/navbar3.vue";

  

  export default {
    name: "dashboard-page",
    components: {
      cardBarras,
      cardGraficos,
   
      cardSectores,
      navAdmin,
      AdminL,

     
    },

  };
  </script>