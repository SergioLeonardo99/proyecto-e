<template>
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
      <div class="flex flex-wrap mt-4">
        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <cardInformation />
        </div>
        <div class="w-full xl:w-4/12 px-4">
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
  import cardInformation from "@/components/cards/cardInformation.vue";
  import cardSectores from "@/components/cards/cardSectores.vue";
  

  export default {
    name: "dashboard-page",
    components: {
    cardBarras,
    cardGraficos,
    cardInformation,
    AdminL,
    cardSectores,
    
},
  };
  </script>