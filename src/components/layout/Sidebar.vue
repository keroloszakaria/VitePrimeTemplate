<template>
  <div class="card flex justify-center">
    <Menu
      :model="sidebarLinks"
      class="w-full md:w-60 h-screen flex flex-col justify-between"
    >
      <template #start>
        <div class="flex items-center gap-[10px] h-[72px] p-[1rem]">
          <span v-html="icons.logo"></span>
          <span class="text-xl font-semibold">
            <span class="text-primary">واكب</span>
          </span>
        </div>
      </template>
      <template #submenulabel="{ item }">
        <span class="text-primary font-bold">{{ item.label }}</span>
      </template>
      <template #item="{ item, props }">
        <div
          v-if="item.children"
          class="flex flex-col w-full items-center p-menu-item-link"
        >
          <div
            class="flex items-center justify-between w-full gap-[.5rem] cursor-pointer"
            @click="toggleDropdown(item)"
          >
            <span v-if="item.customIcon" v-html="item.icon"></span>
            <i v-else :class="item.icon" />
            <span>{{ $t(item.label) }}</span>
            <i
              class="fa fa-fw ml-auto"
              :class="{
                'fa-angle-down': !isDropdownOpen(item),
                'fa-angle-up': isDropdownOpen(item),
              }"
            />
          </div>
          <transition
            name="fade-slide"
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
          >
            <!-- Render children as a dropdown when open -->
            <ul v-if="isDropdownOpen(item)" class="w-full">
              <li v-for="child in item.children" :key="child.label">
                <router-link
                  :to="child.to || '#'"
                  class="flex items-center gap-[.5rem] p-menu-item-link hover:text-primary transition-all"
                >
                  <i :class="child.icon" />
                  <span>{{ $t(child.label) }}</span>
                </router-link>
              </li>
            </ul>
          </transition>
        </div>

        <router-link
          v-if="!item.children"
          :to="item.to || '#'"
          v-ripple
          class="flex items-center"
          v-bind="props.action"
        >
          <span v-if="item.customIcon" v-html="item.icon"></span>
          <i v-else :class="item.icon" />
          <span>{{ $t(item.label) }}</span>
          <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
          <span
            v-if="item.shortcut"
            class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
            >{{ item.shortcut }}</span
          >
        </router-link>
      </template>

      <!-- End template (e.g., User Avatar) -->
      <template #end>
        <button
          v-ripple
          class="relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-none cursor-pointer transition-colors duration-200"
        >
          <Avatar
            image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
            class="mr-2"
            shape="circle"
          />
          <span class="inline-flex flex-col items-start">
            <span class="font-bold">Amy Elsner</span>
            <span class="text-sm">Admin</span>
          </span>
        </button>
      </template>
    </Menu>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Menu from "primevue/menu";
import Avatar from "primevue/avatar";
import Badge from "primevue/badge";
import { sidebarLinks } from "@/data/sidebarLinks";

const openDropdowns = ref([]);

const isDropdownOpen = (item) => {
  return openDropdowns.value.includes(item.label);
};

// Toggle dropdown visibility
const toggleDropdown = (item) => {
  const index = openDropdowns.value.indexOf(item.label);
  if (index === -1) {
    openDropdowns.value.push(item.label);
  } else {
    openDropdowns.value.splice(index, 1);
  }
};

const beforeEnter = (el) => {
  el.style.height = 0;
};
const enter = (el) => {
  el.style.height = `${el.scrollHeight}px`;
  el.style.transition = "height 300ms ease";
};
const leave = (el) => {
  el.style.height = `${el.scrollHeight}px`;
  requestAnimationFrame(() => {
    el.style.height = 0;
    el.style.transition = "height 300ms ease";
  });
};
</script>

<style lang="scss" scoped>
:deep(.p-menu-list) {
  flex: 1;
  overflow: auto;
  max-height: calc(100vh - 40px - 70px);
}

.router-link-exact-active {
  color: var(--primary);
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  overflow: hidden;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
