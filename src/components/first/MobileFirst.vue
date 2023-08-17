<script setup lang="ts">
import timeline from './TimeLine.vue'
const list = [
  {
    title: '111.09.06',
    describe: '出生',
  },
  {
    title: '111.10.17',
    describe: '第一次睡過夜',
  },
  {
    title: '111.11.01',
    describe: '第一天送托',
  },
  {
    title: '111.11.12',
    describe: '第一次發燒',
  },
  {
    title: '112.02.06',
    describe: '第一次自己翻身',
  },
  {
    title: '112.04.17',
    describe: '發現下排長了兩顆牙齒',
  },
  {
    title: '112.06.29',
    describe: '跟爸爸媽媽去環島',
  },
  {
    title: '112.07.14',
    describe: '第一次腸胃炎',
  },
  {
    title: '112.09.06',
    describe: '第一次生日',
  },
]
</script>
<template>
  <div class="w-full h-[1540px] bg-white">
    <img src="@/assets/title/tt-first.svg" alt="" class="pt-[150px]" />
    <div class="w-[70%] h-auto mx-auto space-y-[120px] timeline">
      <timeline
        :title="item.title"
        :describe="item.describe"
        :isRightSide="index % 2 !== 0"
        v-for="(item, index) in list"
        :key="`first-${index}`"
      />
    </div>
  </div>
</template>
<style lang="scss">
.timeline > :not(:last-child)::after {
  content: '';
  width: 1px;
  height: 100px;
  background: #e762a0;
  @apply absolute top-5;
}
</style>
