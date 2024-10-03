<template lang="">
  <div class="w-full">
    <div class="flex flex-col gap-1">
      <label :for="label" :class="required ? 'required' : ''">{{
        $t(label)
      }}</label>
      <Select
        :id="label"
        v-model="innerValue"
        :options="options"
        :optionLabel="optionLabel"
        :optionValue="optionValue"
        :placeholder="$t(placeholder)"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import Select from "primevue/select"; // Importing the Select component from PrimeVue

const props = defineProps({
  modelValue: [Number, String, Array],
  label: String,
  placeholder: String,
  options: {
    type: Array,
    required: true,
  },
  required: Boolean,
  optionLabel: {
    type: String,
    default: "label",
  },
  optionValue: {
    type: String,
    default: "value",
  },
  returnObject: {
    type: Boolean,
    default: false,
  },
  rules: Array,
});

const emit = defineEmits(["update:modelValue"]);

const innerValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newVal) => {
    innerValue.value = newVal;
  }
);

const handleChange = () => {
  // Find the selected object from options based on innerValue (which holds the selected optionValue)
  const selectedObject = props.options.find(
    (option) => option[props.optionValue] === innerValue.value
  );
  if (props.returnObject) emit("update:modelValue", selectedObject);
  else emit("update:modelValue", innerValue.value);
};
</script>

<style lang=""></style>
