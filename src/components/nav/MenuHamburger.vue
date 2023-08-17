<script setup lang="ts">
import { useOpenMenu } from '@/stores/menu'

const store = useOpenMenu()
</script>
<template>
  <div
    class="w-[50px] h-[50px] rounded-full bg-white shadow-[2px_4px_12px_0_rgba(0,0,0,0.2)] absolute top-4 right-4 cursor-pointer"
    @click="store.OpenMenu"
  ></div>
</template>
