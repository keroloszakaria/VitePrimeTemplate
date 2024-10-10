<template>
  <Breadcrumb :items="breadcrumbItems" />
</template>

<script setup>
import Breadcrumb from "@/components/common/Breadcrumb.vue";

const breadcrumbItems = [
  { label: "الصفحة الرئيسية", route: "/" },
  { label: "المناسبات" },
];
</script>

<style lang="scss" scoped></style>
