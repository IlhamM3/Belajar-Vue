<template>
  <div>
    <sidebar />
    <div class="relative md:ml-52 w-full bg-blueGray-100">
      <CardTable color="dark"/>
      <div class="px-4 md:px-10 mx-auto w-full">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import CardTable from "@/components/Cards/CardTable.vue";
export default {
  name: "admin-layout",
  components: {
    Sidebar,
    CardTable,
  },
};
</script>
