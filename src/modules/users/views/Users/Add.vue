<template>
  <section>
    <GenericForm :schema="schema" @submit="onSubmit">
      <template #remember-me> </template>
      <template v-slot:submit>
        <Button
          :loading="isLoading"
          type="primary"
          label="AUTH.BUTTONS.LOGIN"
          action="submit"
          class="w-full"
        />
      </template>
    </GenericForm>
  </section>
</template>

<script setup>
import { ref } from "vue";
import GenericForm from "@/components/common/GenericForm/index.vue";
import {
  createCheckBoxField,
  createTextField,
  createPasswordField,
} from "@/utils/fieldUtils";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const schema = ref([
  createTextField({
    t,
    key: "name",
    label: "NAME",
    module: "USERS",
  }),
  createTextField({
    t,
    key: "email",
    label: "EMAIL",
    isEmail: true,
    module: "USERS",
  }),
  createPhoneField({
    t,
    key: "phone",
    label: "PHONE",
    module: "USERS",
  }),
  createSelectField({
    t,
    key,
  }),
]);
</script>

<style lang="scss" scoped></style>
