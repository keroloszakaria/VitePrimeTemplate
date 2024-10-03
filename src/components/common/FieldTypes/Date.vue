<template lang="">
  <div class="w-full">
    <div class="flex flex-col gap-1">
      <label :for="label" :class="required ? 'required' : ''">{{
        $t(label)
      }}</label>
      <DatePicker
        :id="label"
        v-model="innerValue"
        :dateFormat="format"
        :placeholder="$t(placeholder)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import DatePicker from "primevue/datepicker";

const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  icon: String,
  required: Boolean,
  rules: Array,
  format: String,
});

const emit = defineEmits(["update:modelValue"]);

const innerValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newVal) => {
    innerValue.value = newVal;
  }
);

watch(innerValue, (newVal) => {
  emit("update:modelValue", newVal);
});
</script>
