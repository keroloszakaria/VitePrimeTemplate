<template lang="">
  <div class="w-full">
    <div class="flex flex-col gap-1">
      <label :for="label" :class="required ? 'required' : ''">{{
        $t(label)
      }}</label>
      <ToggleButton
        v-model="innerValue"
        class="w-30"
        onLabel="On"
        offLabel="Off"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import ToggleButton from "primevue/togglebutton";

const checked = ref(false);
const props = defineProps({
  modelValue: Boolean,
  label: String,
  placeholder: String,
  icon: String,
  required: Boolean,
  rules: Array,
});

const emit = defineEmits(["update:modelValue"]);

const innerValue = ref(props.modelValue);

watch(innerValue, (newVal) => {
  console.log(newVal);
  emit("update:modelValue", newVal);
});
</script>
<style lang=""></style>
