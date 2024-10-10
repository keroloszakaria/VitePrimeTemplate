<template lang="">
  <div class="flex gap-4">
    <Button
      v-for="(action, index) in actions"
      :key="action.label"
      :class="action.classList"
      :type="action.type"
      :icon="action.icon"
      @click="action.callback(row)"
    />
  </div>
</template>
<script setup>
import Button from "@/components/common/Button.vue";

const props = defineProps({
  actions: Array,
  row: Object,
});
</script>
<style lang=""></style>
