<template>
  <DataTable
    class="shadow-[0px_4px_18px_0px_#4B465C1A] bg-white rounded-[6px]"
    tableStyle="min-width: 50rem"
    ref="dt"
    :value="items"
    :loading="!loading"
  >
    <template #loading>
      <h2>{{ $t("LOADING") }}</h2>
    </template>
    <template #empty> No customers found. </template>
    <template v-for="(col, index) in columns" :key="index">
      <slot :name="col.field" :column="col">
        <Column v-if="col.field == 'id'" :header="$t(col.header)">
          <template #body="slotProps">
            <span>{{
              locale === "ar"
                ? useArabicConverter(slotProps.data.id)
                : slotProps.data.id
            }}</span>
          </template>
        </Column>
        <Column v-else :field="col.field" :header="$t(col.header)" />
      </slot>
    </template>
  </DataTable>
  <Pagination :pagination="pagination" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import Button from "@/components/common/Button.vue";
import Pagination from "@/components/common/Pagination.vue";
import Skeleton from "primevue/skeleton";
import { useArabicConverter } from "@/composables/useArabicConverter";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Image from "@/components/common/Image.vue";
import storage from "@/composables/useStorage";
const locale = storage.get("locale") || import.meta.env.VITE_LOCALE;

defineProps({
  pagination: {
    type: Object,
    default: () => {},
  },
  items: {
    type: Array,
    required: true,
  },
  columns: {
    type: Array,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  tableTitle: {
    type: String,
    default: "",
  },
});

const dt = ref();

const exportCSV = () => {
  if (dt.value) {
    dt.value.exportCSV();
  } else {
    console.error("DataTable reference is not properly initialized.");
  }
};
</script>

<style lang="scss" scoped>
:deep(.p-datatable-table-container) {
  border-radius: 5px;
  overflow: hidden;
}
:lang(ar) {
  :deep(.p-datatable-tbody) {
    > tr > td {
      text-align: right;
    }
    .p-datatable-empty-message {
      td {
        height: 100px;
        text-align: center;
      }
    }
  }
}
</style>
