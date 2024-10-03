<template>
  <div>
    <DataTable
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
          <Column :field="col.field" :header="$t(col.header)"> </Column>
        </slot>
      </template>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Button from "@/components/common/Button.vue";
import Skeleton from "primevue/skeleton";

import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Image from "@/components/common/Image.vue";
defineProps({
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
