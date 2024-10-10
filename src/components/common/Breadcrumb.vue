<template>
  <section class="card my-[1.5rem] flex justify-start">
    <Breadcrumb class="!p-0" :home="home" :model="items">
      <template #item="{ item, props }">
        <router-link
          v-if="item.route"
          v-slot="{ href, navigate }"
          :to="item.route"
          custom
        >
          <a :href="href" v-bind="props.action" @click="navigate">
            <span :class="[item.icon, 'text-color']" />
            <span class="text-surface-700">{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
          <span class="text-primary dark:text-surface-0">{{ item.label }}</span>
        </a>
      </template>
      <template #separator> / </template>
    </Breadcrumb>
  </section>
</template>

<script setup>
import { ref } from "vue";
import storage from "@/composables/useStorage";
import Breadcrumb from "primevue/breadcrumb";

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  home: {
    type: Object,
    default: () => {},
  },
});

let locale = storage.get("direction");
</script>

<style lang="scss" scoped>
// :deep(.p-breadcrumb-item) {
//   .p-breadcrumb-item-link {
//     color: #4b465c !important;
//   }
// }
</style>
