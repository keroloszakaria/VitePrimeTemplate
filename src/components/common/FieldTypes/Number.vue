<template lang="">
  <div class="w-full">
    <div class="flex flex-col gap-1">
      <label :for="label" :class="required ? 'required' : ''">{{
        $t(label)
      }}</label>
      <InputNumber
        :id="label"
        :inputId="label"
        :min="min"
        :max="max"
        :mode="mode"
        :currency="currency"
        :suffix="suffix"
        :prefix="prefix"
        v-model="innerValue"
        :placeholder="$t(placeholder)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import InputNumber from "primevue/inputnumber";

const props = defineProps({
  modelValue: Number,
  label: String,
  placeholder: String,
  icon: String,
  required: Boolean,
  rules: Array,
  min: Number,
  max: Number,
  mode: String,
  currency: String,
  suffix: String,
  prefix: String,
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
