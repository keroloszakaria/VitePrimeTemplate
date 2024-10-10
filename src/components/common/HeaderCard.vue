<template>
  <div
    class="card px-[10px] max-w-[400px] py-[14px] flex items-center gap-[1.5rem] flex-1 bg-white rounded-[6px] shadow-[0px_4px_18px_0px_#A5A3AE4D]"
  >
    <div class="max-w-[134px]">
      <img class="w-full object-contain" :src="image" alt="" />
    </div>

    <div class="flex flex-col gap-2">
      <h3 class="text-title text-[1.1rem] font-[600]">{{ $t(title) }}</h3>
      <p class="text-desc text-[.9rem] font-[500] mb-2">
        {{ $t(description) }}
      </p>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
});
</script>

<style lang="scss" scoped></style>
