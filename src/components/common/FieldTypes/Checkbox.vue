<template lang="">
  <div class="flex gap-2">
    <Checkbox
      :inputId="label"
      v-model="innerValue"
      :value="checkedValue"
      :name="name"
      binary
      variant="filled"
    />
    <label :for="label" :class="required ? 'required' : ''">{{
      $t(label)
    }}</label>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import Checkbox from "primevue/checkbox";

const checked = ref(false);
const props = defineProps({
  modelValue: Boolean,
  label: String,
  placeholder: String,
  icon: String,
  required: Boolean,
  rules: Array,
  name: String,
  checkedValue: [Boolean, Number, String],
});

const emit = defineEmits(["update:modelValue"]);

const innerValue = ref(props.modelValue);

watch(innerValue, (newVal) => {
  emit("update:modelValue", newVal);
});
</script>
<style lang=""></style>
