<script setup lang="ts">
import PickItem from './PickItem.vue'
const list = [
  {
    icon: 'gold',
    name: '金元寶',
  },
  {
    icon: 'stamp',
    name: '印章',
  },
  {
    icon: 'car',
    name: '車',
  },
  {
    icon: 'doctor',
    name: '聽診器',
  },
  {
    icon: 'hammer',
    name: '槌子',
  },
  {
    icon: 'math',
    name: '珠算',
  },
  {
    icon: 'book',
    name: '書',
  },
  {
    icon: 'spoon',
    name: '珠算',
  },
  {
    icon: 'pen',
    name: '筆',
  },
  {
    icon: 'telescope',
    name: '望遠鏡',
  },
  {
    icon: 'camera',
    name: '相機',
  },
  {
    icon: 'music',
    name: '樂器',
  },
]
</script>
<template>
  <div class="w-full h-[979px] bg-[#fef8e9]">
    <img src="@/assets/title/tt-predict.svg" alt="" class="pt-[75px]" />
    <div class="grid grid-cols-4 px-5 gap-4">
      <PickItem
        v-for="(item, index) in list"
        :key="`predict-${index}`"
        :icon="item.icon"
        :name="item.name"
      />
    </div>
    <div class="w-[80%] mx-auto space-y-4 pt-10">
      <div
        class="w-full h-[62px] leading-[61px] text-white text-lg text-center rounded-[31px] bg-gradient-to-r from-[#ef7ca4] to-[#f48b8b]"
      >
        <p><span class="icon-check pr-2"></span>確定選擇</p>
      </div>
      <div
        class="w-full h-[62px] leading-[61px] text-white text-lg text-center rounded-[31px] bg-gradient-to-r from-[#ef7ca4] to-[#f48b8b]"
      >
        <p><span class="icon-eye pr-2"></span>查看目前比數</p>
      </div>
    </div>
  </div>
</template>
