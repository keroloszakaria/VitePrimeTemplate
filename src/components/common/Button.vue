<template lang="">
  <Button
    :icon="icon"
    :type="action"
    :disabled="disabled"
    :severity="type"
    :label="$t(label)"
    :iconPos="iconPosition"
    :loading="loading"
    :to="to"
    @click="handleClick"
  />
</template>

<script setup>
import Button from "primevue/button";
import { useRouter } from "vue-router";

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
  type: {
    type: String,
    default: "primary",
    validator(value) {
      return ["primary", "close", "outline", "danger", "icon-only"].includes(
        value
      );
    },
  },
  action: {
    type: String,
    default: "button",
    validator(value) {
      return ["button", "reset", "submit"].includes(value);
    },
  },
  to: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
  },
});

const router = useRouter();
const emit = defineEmits(["click"]);
const handleClick = () => {
  if (props.to) {
    router.push(props.to);
  } else {
    emit("click");
  }
};
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
}
</style>
