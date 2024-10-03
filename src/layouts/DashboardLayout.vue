<template>
  <main class="flex">
    <Sidebar />
    <div class="flex flex-col flex-1">
      <Navbar />
      <router-view />
    </div>
  </main>
</template>
<script setup>
import Navbar from "@/components/layout/Navbar.vue";
import Sidebar from "@/components/layout/Sidebar.vue";
</script>
<style lang=""></style>
