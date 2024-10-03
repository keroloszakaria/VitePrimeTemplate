<template lang="">
  <Button
    :class="buttonClasses + ' ' + classList"
    :icon="icon"
    :type="action"
    :disabled="disabled"
    :label="$t(label)"
    :iconPos="iconPosition"
    :loading="loading"
    @click="click"
  />
</template>

<script setup>
import { computed } from "vue";

import Button from "primevue/button";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  iconPosition: {
    type: String,
    default: "left",
    validator(value) {
      return ["left", "right", "bottom", "top"].includes(value);
    },
  },
  classList: {
    type: String,
  },
  severity: {
    type: [String, Array],
    default: "primary",
    validator(value) {
      const allowedValues = [
        "primary",
        "close",
        "outline",
        "danger",
        "icon-only",
      ];
      if (Array.isArray(value)) {
        return value.every((item) => allowedValues.includes(item));
      }
      return allowedValues.includes(value);
    },
  },
  action: {
    type: String,
    default: "button",
    validator(value) {
      return ["button", "reset", "submit"].includes(value);
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
  },
  click: {
    type: Function,
  },
});

const buttonClasses = computed(() => {
  if (Array.isArray(props.severity)) {
    return props.severity.map((cls) => `p-button-${cls}`).join(" ");
  }
  return `p-button-${props.severity}`;
});
</script>

<style lang="scss" scoped>
.p-button {
  &-icon-only {
    background-color: transparent !important;
    border: none !important;
  }
  &-primary {
    background-color: var(--primary) !important;
    border-color: var(--primary) !important;
    &:hover {
      background-color: var(--primary_light) !important;
      border-color: var(--primary_light) !important;
      color: var(--primary) !important;
    }
  }
  &-danger {
    background-color: var(--error) !important;
    border-color: var(--error) !important;
    &:hover {
      background-color: var(--error_light) !important;
      border-color: var(--error_light) !important;
      color: var(--error) !important;
    }
  }
}
</style>
