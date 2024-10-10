<template>
  <ul class="flex items-center">
    <li
      class="bg-title m-[-4px] flex justify-center items-center border-[2px] border-white rounded-full overflow-hidden w-[38px] h-[38px]"
      v-for="user in displayedUsers"
      :key="user.id"
    >
      <img class="w-full h-full object-cover rounded-full" :src="user.image" />
    </li>
    <!-- If there are more users than max, show the number of additional users -->
    <li
      v-if="hiddenUsersCount > 0"
      class="bg-gray-300 text-title font-[600] flex justify-center items-center border border-white rounded-full w-[38px] h-[38px]"
    >
      +{{ hiddenUsersCount }}
    </li>
  </ul>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  users: {
    type: Array,
    required: true,
    default: () => [],
  },
  max: {
    type: Number,
    default: 3,
  },
});

// Computed users to display based on max prop
const displayedUsers = computed(() => props.users.slice(0, props.max));

// Calculate the number of hidden users
const hiddenUsersCount = computed(() => props.users.length - props.max);
</script>

<style lang="scss" scoped></style>
