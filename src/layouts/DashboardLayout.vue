<template>
  <div class="flex">
    <Sidebar />
    <main class="flex flex-col flex-1 px-[1.5rem]">
      <Navbar />
      <!-- Main content -->
      <router-view />
    </main>
  </div>
</template>
<script setup>
import Navbar from "@/components/layout/Navbar.vue";
import Sidebar from "@/components/layout/Sidebar.vue";
</script>
