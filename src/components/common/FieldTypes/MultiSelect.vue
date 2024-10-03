<template lang="">
  <div class="w-full">
    <div class="flex flex-col gap-1">
      <label :for="label" :class="required ? 'required' : ''">{{
        $t(label)
      }}</label>
      <MultiSelect
        :id="label"
        v-model="innerValue"
        :options="options"
        :optionLabel="optionLabel"
        :optionValue="optionValue"
        :placeholder="$t(placeholder)"
        editable
        :display="display"
        :maxSelectedLabels="max"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import MultiSelect from "primevue/multiselect";

const props = defineProps({
  modelValue: Array,
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
  max: {
    type: Number,
    default: null,
  },
  returnObject: {
    type: Boolean,
    default: false,
  },
  display: String,
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
