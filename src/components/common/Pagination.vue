<template>
  <Paginator
    :style="`direction: ltr`"
    :rows="10"
    :totalRecords="120"
    :rowsPerPageOptions="[10, 20, 30]"
    template="PrevPageLink PageLinks NextPageLink"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
  >
    <template #start="slotProps">
      totalRecords:
      {{ slotProps.state.totalRecords }}
    </template>
  </Paginator>
</template>

<script setup>
import Paginator from "primevue/paginator";

defineProps({
  pagination: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
:deep(.p-paginator) {
  background-color: transparent;
  .p-paginator-page,
  .p-paginator-next,
  .p-paginator-prev {
    border-radius: 6px;
    max-width: 34px !important;
    max-height: 34px !important;
    background: #4b465c14;

    color: #4b465c;
    border: none;
    font-size: 1rem;
    padding: 0.5rem;

    &-selected {
      color: #fff;
      background-color: #26aae6;
      box-shadow: 0px 2px 4px 0px #a5a3ae4d;
    }
  }
}
</style>
