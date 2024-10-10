import { ref } from 'vue';

const breadcrumbItems = ref([]);
export function useBreadcrumbs() {
  function setBreadcrumbs(newBreadcrumb) {
    breadcrumbItems.value = newBreadcrumb;
  }

  return {
    breadcrumbItems,
    setBreadcrumbs,
  };
}
