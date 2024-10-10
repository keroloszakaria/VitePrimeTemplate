import { defineStore } from "pinia";
import { ref } from "vue";
import { httpRequest } from "@/services/api";
import { showAlert } from "@/composables/useAlert";
import { useRouter } from "vue-router";
import { objectToQueryString } from "@/utils/formDataHandler";

export const useUsersStore = defineStore("user", () => {
  const isLoading = ref(false);
  const items = ref([]);
  const pagination = ref({});
  const error = ref(null);
  const router = useRouter();

  const getAll = async ({ params } = {}) => {
    let queryString = "";
    if (params != undefined) queryString = objectToQueryString(params);
    try {
      isLoading.value = true;
      const response = await httpRequest(`/users?${queryString}`);
      items.value = response.data.data || response.data;
      pagination.value["total"] = response.data.total || 0;
      pagination.value["itemsPerPage"] = response.data.per_page || 0;
    } catch (err) {
      error.value = err.response?.data?.message || "An error occurred.";
    } finally {
      isLoading.value = false;
    }
  };

  const createRow = async (data) => {
    try {
      isLoading.value = true;
      const response = await httpRequest("/users", {
        method: "POST",
        data: data,
      });
      items.value.push(response.data);
      showAlert(response.message, "success");
      router.push("/users");
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || "An error occurred.";
    } finally {
      isLoading.value = false;
    }
  };

  const updateRow = async (id, data) => {
    try {
      isLoading.value = true;
      const response = await httpRequest(`/users/${id}`, {
        method: "PUT",
        data: data,
      });
      const index = items.value.findIndex((item) => item.id === id);
      if (index !== -1) {
        items.value[index] = response.data;
      }
      showAlert(response.message, "success");
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || "An error occurred.";
    } finally {
      isLoading.value = false;
    }
  };

  const deleteRow = async (id) => {
    try {
      isLoading.value = true;
      const response = await httpRequest(`/users/${id}`, {
        method: "DELETE",
      });
      items.value = items.value.filter((item) => item.id != id);
      showAlert(response.message, "success");
    } catch (err) {
      error.value = err.response?.data?.message || "An error occurred.";
    } finally {
      isLoading.value = false;
    }
  };

  const forceDeleteRow = async (id) => {
    try {
      isLoading.value = true;
      const response = await httpRequest(`/users/${id}/force-delete`, {
        method: "DELETE",
      });
      items.value = items.value.filter((item) => item.id != id);
      showAlert(response.message, "success");
    } catch (err) {
      error.value = err.response?.data?.message || "An error occurred.";
    } finally {
      isLoading.value = false;
    }
  };

  const restoreRow = async (id) => {
    try {
      isLoading.value = true;
      const response = await httpRequest(`/users/${id}/restore`, {
        method: "POST",
      });
      showAlert(response.message, "success");
    } catch (err) {
      error.value = err.response?.data?.message || "An error occurred.";
    } finally {
      isLoading.value = false;
    }
  };

  const bulkDelete = async (ids) => {
    try {
      isLoading.value = true;
      const response = await httpRequest(`/users/delete-all`, {
        method: "POST",
        data: { ids: ids },
      });
      items.value = items.value.filter((item) => !ids.includes(item.id));
      showAlert(response.message, "success");
    } catch (err) {
      error.value = err.response?.data?.message || "An error occurred.";
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isLoading,
    items,
    pagination,
    error,
    getAll,
    createRow,
    updateRow,
    deleteRow,
    forceDeleteRow,
    restoreRow,
    bulkDelete,
  };
});
