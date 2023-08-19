<script setup lang="ts">
import { useLayout } from '@/utils/layout'
import { useOpenMenu } from '@/stores/menu'
defineProps({
  title: String,
  tag: String,
})
const store = useOpenMenu()
const { isMobile } = useLayout()
const closeMenu = () => {
  if (isMobile.value) {
    store.CloseMenu()
  }
}
</script>
<template>
  <a
    :href="`#${$props.tag}`"
    class="w-full xl:w-auto inline-flex justify-center items-center space-x-10 lg:space-x-[10px] cursor-pointer"
    @click="closeMenu"
  >
    <p
      class="w-[130px] text-left lg:w-auto text-[#333333] lg:text-[#f097b2] lg:hover:text-[#e762a0] lg:active:text-[#e762a0]"
    >
      {{ $props.title }}
    </p>
    <span class="icon--arrow w-4 h-4"></span>
  </a>
</template>
<style lang="scss">
.icon--arrow::before {
  content: '';
  @apply w-4 h-4 inline-block;
  @apply bg-[#333333] lg:bg-[#ffd0de] lg:hover:bg-[#e762a0] lg:active:bg-[#e762a0];
  mask: url('@/assets/icons/menu-go-m.svg') no-repeat center center / contain;
}
</style>
