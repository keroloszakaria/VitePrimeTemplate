<template>
  <div class="flex justify-between items-center mb-4">
    <h2 class="text-xl text-title font-secondary uppercase font-bold">
      {{ header }}
    </h2>
    <div class="flex items-center gap-2">
      <ToggleButton
        v-model="isTrashed"
        onLabel="Trashed"
        onIcon="fal fa-trash"
        offLabel="Trashed"
        offIcon="fal fa-trash"
      />

      <Button
        v-if="isLink"
        :label="buttonLabel"
        type="primary"
        icon="fa fa-plus"
        :to="to"
      />
      <Button
        v-else
        :label="buttonLabel"
        type="primary"
        icon="fa fa-plus"
        @click="handleClick"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

import Button from "@/components/common/Button.vue";
import ToggleButton from "primevue/togglebutton";
const isTrashed = ref(false);

defineProps({
  header: String,
  buttonLabel: String,
  isLink: {
    type: Boolean,
    default: true,
  },
  to: String,
});

const emit = defineEmits(["click", "isTrashed"]);

const handleClick = () => {
  emit("click");
};

watch(isTrashed, (newIsTrashed) => {
  emit("isTrashed", newIsTrashed);
});
</script>

<style lang="scss" scopped></style>
