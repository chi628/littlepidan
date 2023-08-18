<script setup lang="ts">
defineProps({
  title: String,
  tag: String
});
</script>
<template>
  <a
    :href="`#${$props.tag}`"
    class="inline-flex justify-center items-center space-x-10 xl:space-x-[10px] cursor-pointer"
  >
    <p class="w-[130px] text-left xl:w-auto xl:text-[#f097b2] xl:hover:text-[#e762a0] xl:active:text-[#e762a0]">
      {{ $props.title }}
    </p>
    <span class="icon--arrow w-4 h-4"></span>
  </a>
</template>
<style lang="scss">
.icon--arrow::before {
  content: '';
  @apply w-4 h-4 inline-block;
  @apply bg-[#333333] xl:bg-[#ffd0de] xl:hover:bg-[#e762a0] xl:active:bg-[#e762a0];
  mask: url('@/assets/icons/menu-go-m.svg') no-repeat center center / contain;
}
</style>
