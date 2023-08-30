<script setup lang="ts">
import { computed } from 'vue'
import { useOpenMenu } from '@/stores/menu'
import { FetchMaxZIndex } from '@/utils/findZIndex'

const store = useOpenMenu()
const style = computed(() => {
  return {
    zIndex: FetchMaxZIndex() + 1,
  }
})
</script>
<template>
  <div class="w-full h-[50px] sticky top-0 z-10" :style="style">
    <div
      class="w-[50px] h-[50px] rounded-full bg-white shadow-[2px_4px_12px_0_rgba(0,0,0,0.2)] cursor-pointer flex justify-center items-center absolute top-5 right-5"
      @click="store.OpenMenu"
    >
      <div class="space-y-[5px] flex flex-col items-center justify-center">
        <span class="inline-block w-[25px] h-[3px] bg-[#ef7ca4] rounded-[1.5px]"></span>
        <span class="inline-block w-[25px] h-[3px] bg-[#ef7ca4] rounded-[1.5px]"></span>
        <span class="inline-block w-[25px] h-[3px] bg-[#ef7ca4] rounded-[1.5px]"></span>
      </div>
    </div>
  </div>
</template>
