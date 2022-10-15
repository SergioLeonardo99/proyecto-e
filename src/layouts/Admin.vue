<template>
    <div>
    
 
      <div class="relative bg-blueGray-100">
        <admin-navbar /> 
        <HeaderStatus/>
        <div class="px-4 md:px-10 mx-auto w-full -m-24">
         <!--  <router-view />
          <footer-admin /> -->
        </div>
      </div>
    </div>
  </template>
  <script>
  import AdminNavbar from "@/components/navarbs/adminNavar.vue";
  import Sidebar from "@/components/sidebar/sidebar.vue";

  import HeaderStatus from "@/components/headers/HeaderStatus.vue";

  //import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
  export default {
    name: "admin-layout",
    components: {
    AdminNavbar,
    Sidebar,
    HeaderStatus,
   
},
  };
  </script>
  