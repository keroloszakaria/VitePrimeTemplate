<template lang="">
  <Image
    :src="src"
    :alt="alt"
    :class="rounded ? 'rounded-full overflow-hidden' : ''"
    :width="width"
    :preview="preview"
  />
</template>
<script setup>
import Image from "primevue/image";

defineProps({
  src: String,
  alt: String,
  width: String,
  preview: Boolean,
  rounded: Boolean,
});
</script>
<style lang=""></style>
