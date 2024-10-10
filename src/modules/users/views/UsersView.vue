<template>
  <Breadcrumb :items="breadcrumbItems" />
  <section>
    <div class="flex flex-col gap-[1.5rem]">
      <div class="flex items-start gap-[1.5rem] flex-wrap">
        <HeaderCard
          title="ADD_USER"
          description="CAN_ADD_USER"
          :image="addUserImage"
        >
          <Button
            type="primary"
            label="BUTTONS.ADD_NEW_USERS"
            action="submit"
            class="!w-full"
            to="/users/add"
            :icon="true"
          />
        </HeaderCard>
        <HeaderCard
          title="TOTAL_USERS"
          :description="$t('USER_NUMBER', { number: usersStore.items.length })"
          :image="userImage"
        >
          <UsersImages :users="usersStore.items" />
        </HeaderCard>
        <HeaderCard
          title="NEW_USERS"
          :description="$t('USER_NUMBER', { number: usersStore.items.length })"
          :image="newUsersImage"
        >
          <UsersImages :users="usersStore.items" />
        </HeaderCard>
      </div>
      <Table
        :columns="columns"
        :items="usersStore.items"
        :loading="!usersStore.isLoading"
      >
        <template #action="{ column }">
          <Column :field="column.field" :header="$t(column.header)">
            <template #body="{ data }">
              <TableActions :actions="actions" :row="data" />
            </template>
          </Column>
        </template>
      </Table>
    </div>
  </section>
</template>

<script setup>
import Breadcrumb from "@/components/common/Breadcrumb.vue";
import HeaderCard from "@/components/common/HeaderCard.vue";
import addUserImage from "@/assets/images/png/add-user.png";
import newUsersImage from "@/assets/images/png/new-users.png";
import userImage from "@/assets/images/png/user.png";
import UsersImages from "@/components/common/UsersImages.vue";
import Button from "@/components/common/Button.vue";
import Table from "@/components/common/Table/index.vue";
import TableActions from "@/components/common/Table/TableActions.vue";
import Column from "primevue/column";
import { confirmDelete } from "@/composables/useAlert";
import { useUsersStore } from "../store/users";
import { onMounted, ref } from "vue";

const usersStore = useUsersStore();

const breadcrumbItems = [
  { label: t("SIDEBAR.DASHBOARD"), route: "/dashboard" },
  { label: t("SIDEBAR.USERS") },
];
const columns = ref([
  { field: "id", header: "FIELDS.ID" },
  { field: "name", header: t("FIELDS.NAME") },
  { field: "email", header: t("FIELDS.EMAIL") },
  { field: "phone", header: t("FIELDS.PHONE") },
  { field: "action", header: t("FIELDS.ACTIONS") },
]);

const actions = ref([
  {
    label: "EDIT",
    icon: "far fa-fw fa-pen-to-square",
    classList: "!w-fit !text-label",
    type: "icon-only",
    callback: (row) => {},
  },
  {
    label: "DELETE",
    icon: "far fa-fw fa-times",
    classList: "!w-fit !text-title",
    type: "icon-only",
    callback: (row) => {
      confirmDelete().then((result) => {
        if (result) usersStore.deleteRow(row.id);
      });
    },
  },
]);

onMounted(async () => {
  try {
    await Promise.all([usersStore.getAll()]);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>
