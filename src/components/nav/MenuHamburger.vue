<script setup lang="ts">
import { useOpenMenu } from '@/stores/menu';
const store = useOpenMenu();
</script>
<template>
  <div
    class="w-[50px] h-[50px] rounded-full bg-white shadow-[2px_4px_12px_0_rgba(0,0,0,0.2)] absolute top-4 right-4 cursor-pointer flex justify-center items-center"
    @click="store.OpenMenu"
  >
    <div class="space-y-[5px] flex flex-col items-center justify-center">
      <span class="inline-block w-[25px] h-[3px] bg-[#ef7ca4] rounded-[1.5px]"></span>
      <span class="inline-block w-[25px] h-[3px] bg-[#ef7ca4] rounded-[1.5px]"></span>
      <span class="inline-block w-[25px] h-[3px] bg-[#ef7ca4] rounded-[1.5px]"></span>
    </div>
  </div>
</template>
