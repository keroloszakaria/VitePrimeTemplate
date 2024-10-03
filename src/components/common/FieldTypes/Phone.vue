<template lang="">
  <div class="w-full">
    <div class="flex flex-col gap-1">
      <label :for="label" :class="required ? 'required' : ''">{{
        $t(label)
      }}</label>
      <InputMask
        :id="label"
        v-model="innerValue"
        mask="+299999999999"
        placeholder="+201234567890"
        fluid
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import InputMask from "primevue/inputmask"; // Importing the InputMask component from PrimeVue

const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  icon: String,
  required: Boolean,
  rules: Array,
});

const emit = defineEmits(["update:modelValue"]);

const innerValue = ref(props.modelValue);

watch(innerValue, (newVal) => {
  emit("update:modelValue", newVal);
});

watch(
  () => props.modelValue,
  (newVal) => {
    innerValue.value = newVal;
  }
);
</script>
