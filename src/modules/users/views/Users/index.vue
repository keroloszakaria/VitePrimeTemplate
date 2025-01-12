<template>
  <Breadcrumb :items="breadcrumbItems" />
  <section>
    <div class="flex flex-col gap-[1.5rem]">
      <div class="flex items-start gap-[1.5rem] flex-wrap">
        <HeaderCard
          title="USERS.ADD_USER"
          description="USERS.CAN_ADD_USER"
          :image="addUserImage"
        >
          <Button
            type="primary"
            label="USERS.BUTTONS.ADD_NEW_USERS"
            action="submit"
            class="!w-full"
            to="/users/add"
            :icon="true"
          />
        </HeaderCard>
        <HeaderCard
          title="USERS.TOTAL_USERS"
          :description="
            $t('USERS.USER_NUMBER', { number: usersStore.items.length })
          "
          :image="userImage"
        >
          <UsersImages :users="usersStore.items" />
        </HeaderCard>
        <HeaderCard
          title="USERS.NEW_USERS"
          :description="
            $t('USERS.USER_NUMBER', { number: usersStore.items.length })
          "
          :image="newUsersImage"
        >
          <UsersImages :users="usersStore.items" />
        </HeaderCard>
      </div>

      <div class="flex flex-col gap-6">
        <h3>{{ $t("USERS.ALL_USERS") }}</h3>
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
import { useUsersStore } from "../../store/users";
import { onMounted, ref } from "vue";

const usersStore = useUsersStore();

const breadcrumbItems = [
  { label: t("SIDEBAR.DASHBOARD"), route: "/dashboard" },
  { label: t("SIDEBAR.USERS") },
];
const columns = ref([
  { field: "id", header: "TABLE.ID" },
  { field: "name", header: t("TABLE.NAME") },
  { field: "email", header: t("TABLE.EMAIL") },
  { field: "phone", header: t("TABLE.PHONE") },
  { field: "action", header: t("TABLE.ACTIONS") },
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
