<template>
  <IconField>
    <InputIcon class="fal fa-search" />
    <AutoComplete
      v-model="value"
      :suggestions="filteredRoutes"
      @complete="onComplete"
    />
  </IconField>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import AutoComplete from "primevue/autocomplete";

const value = ref("");
const router = useRouter();
const routes = router.getRoutes(); // Get all routes

const filteredRoutes = computed(() => {
  if (!value.value) return [];
  return routes
    .map((route) => route.name)
    .filter(
      (name) => name && name.toLowerCase().includes(value.value.toLowerCase())
    );
});

const onComplete = (selectedItem) => {
  const route = routes.find((route) => route.name === selectedItem);
  if (route) {
    router.push({ name: route.name });
  }
};
</script>
