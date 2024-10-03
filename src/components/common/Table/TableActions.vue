<template lang="">
  <div class="flex gap-4">
    <Button
      v-if="actions.includes('view')"
      icon="far fa-fw fa-eye"
      class="!w-fit !text-label"
      type="icon-only"
      @click="emit('view')"
    />
    <Button
      v-if="actions.includes('edit')"
      icon="far fa-fw fa-pen"
      class="!w-fit !text-label"
      type="icon-only"
      @click="emit('edit')"
    />
    <Button
      v-if="actions.includes('delete')"
      icon="far fa-fw fa-trash"
      class="!w-fit !text-[#D92D20]"
      type="icon-only"
      @click="emit('delete')"
    />
  </div>
</template>
<script setup>
import Button from "@/components/common/Button.vue";

const props = defineProps({
  actions: Array,
});

const emit = defineEmits(["view", "edit", "delete"]);
</script>
<style lang=""></style>
