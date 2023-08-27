<script setup lang="ts">
import { useLayout } from "@/utils/layout"
import { useOpenMenu } from "@/stores/menu"
import { computed } from "vue"
const props = defineProps({
  title: String,
  tag: String,
})
const store = useOpenMenu()
const { isMobile } = useLayout()

const isActive = computed(() => location.hash.replace(/\#/, "") === props.tag)

const closeMenu = () => {
  if (isMobile.value) {
    store.CloseMenu()
  }
}
</script>
<template>
  <a
    :href="`#${$props.tag}`"
    class="w-full lg:w-auto inline-flex justify-center items-center space-x-10 lg:space-x-[10px] cursor-pointer nav-item"
    :class="{ active: isActive }"
    @click="closeMenu"
  >
    <p class="w-[130px] text-left lg:w-auto text-[#333333] lg:text-[#f097b2]">
      {{ $props.title }}
    </p>
    <span class="icon--arrow w-4 h-4"></span>
  </a>
</template>
<style lang="scss" scoped>
.icon--arrow::before {
  content: "";
  @apply w-4 h-4 inline-block;
  @apply bg-[#333333] lg:bg-[#ffd0de];
  mask: url("@/assets/icons/menu-go-m.svg") no-repeat center center / contain;
}
.nav-item:hover,
.active {
  > :nth-child(1) {
    @apply lg:text-[#e762a0];
  }
  > :nth-child(2) {
    &::before {
      @apply lg:bg-[#e762a0];
    }
  }
}
</style>
