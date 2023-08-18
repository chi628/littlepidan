<script setup lang="ts">
import PickItem from './PickItem.vue';
import { list } from './list';
</script>
<template>
  <div class="w-full h-[979px] bg-[#fef8e9]">
    <img src="@/assets/title/tt-predict.svg" alt="" class="pt-[75px]" />
    <div class="grid grid-cols-4 px-5 gap-4">
      <PickItem v-for="(item, index) in list" :key="`predict-${index}`" :icon="item.icon" :name="item.name" />
    </div>
  </div>
</template>
