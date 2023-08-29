<script setup lang="ts">
import { computed } from "vue"
import { FetchMaxZIndex } from "@/utils/findZIndex"

const style = computed(() => {
  const zIndex = FetchMaxZIndex() + 1

  return {
    zIndex,
  }
})
</script>
<template>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center"
    :style="style"
  >
    <div
      class="absolute w-full h-full top-0 left-0 bg-black opacity-75 -z-[1]"
    ></div>
    <slot />
  </div>
</template>
<style>
.modal-close-btn {
  @apply w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-bl-[33px] rounded-tr-[20px] flex justify-center items-center cursor-pointer;

  box-shadow: inset 2px -2px 4px 0 rgba(141, 91, 90, 0.15);
  background-color: #ffd0de;
}
.icon-close {
  &::before {
    content: "";
    mask: url("@/assets/icons/close-m.svg") no-repeat center center / contain;
    @apply bg-white w-6 h-6 inline-block;
  }
}
.modal-button {
  background-image: linear-gradient(117deg, #ef7ca4, #f48b8b 103%);
}
</style>
