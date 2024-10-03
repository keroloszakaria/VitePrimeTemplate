<template lang="">
  <div class="w-full">
    <div class="flex flex-col gap-1">
      <label :for="label" :class="required ? 'required' : ''">{{
        $t(label)
      }}</label>
      <Password
        :id="label"
        v-model="innerValue"
        @keyup="emit('update:modelValue', innerValue)"
        :placeholder="$t(placeholder)"
        toggleMask
        :feedback="true"
        autocomplete="new-password"
        :weakLabel="$t('FIELDS.WEAK')"
        :mediumLabel="$t('FIELDS.MEDIUM')"
        :strongLabel="$t('FIELDS.STRONG')"
        :promptLabel="$t('FIELDS.PROMPT')"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import Password from "primevue/password";

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
