<template lang="">
  <div class="w-full">
    <div class="flex flex-col gap-1">
      <label :for="label" :class="required ? 'required' : ''">{{
        $t(label)
      }}</label>
      <InputText
        :id="label"
        v-model="innerValue"
        @keyup="emit('update:modelValue', innerValue)"
        :placeholder="$t(placeholder)"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import InputText from "primevue/inputtext";

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

watch(
  () => props.modelValue,
  (newVal) => {
    innerValue.value = newVal;
  }
);
</script>
<style lang=""></style>
