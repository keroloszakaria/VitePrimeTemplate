<template>
  <div class="contianer">
    <div class="row">
      <div class="col-8">
        <Image
          :src="loginBck"
          alt="Image"
          imageClass="w-full h-full max-h-screen object-contain"
        />
      </div>
      <div class="col-4">
        <div class="card h-full flex justify-start items-center">
          <div class="flex flex-col gap-[1.5rem]">
            <div class="flex flex-col gap-2">
              <h2 class="font-[600] text-[1.5rem] text-title">
                أهلاً بعودتك 👋
              </h2>
              <p class="text-[1rem] text-primary font-[500]">تسجيل الدخول</p>
            </div>
            <GenericForm :schema="schema" @submit="onSubmit">
              <template v-slot:submit>
                <Button
                  type="primary"
                  label="BUTTONS.LOGIN"
                  action="submit"
                  class="w-full"
                />
              </template>
            </GenericForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "@/components/common/Button.vue";
import Image from "primevue/image";
import loginBck from "../../../assets/images/login_bck.svg";
import GenericForm from "@/components/common/GenericForm/index.vue";
import { createTextField, createPasswordField } from "@/utils/fieldUtils";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const schema = ref([
  createTextField({
    t,
    key: "email",
    label: "EMAIL", // Refers to `FIELDS.EMAIL` in your i18n messages
    isEmail: true,
    cols: { md: 12, lg: 12 },
  }),
  createPasswordField({
    t, // Pass t function correctly here
    key: "password",
    label: "PASSWORD",
    cols: { md: 12, lg: 12 },
  }),
]);
</script>
