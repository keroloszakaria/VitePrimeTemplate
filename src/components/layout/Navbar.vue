<template lang="">
  <div class="card">
    <Menubar :model="items" />
  </div>
</template>
<script setup>
import Menubar from "primevue/menubar";
import { ref } from "vue";
</script>
