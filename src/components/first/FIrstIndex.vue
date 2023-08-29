<script setup lang="ts">
import timeline from './TimeLine.vue';
import TitleFirst from '@/assets/title/tt-first.png';
import FirstOne from '@/assets/first/f-1.png';
import FirstTwo from '@/assets/first/f-2.png';
import FirstThree from '@/assets/first/f-3.png';
import FirstFour from '@/assets/first/f-4.png';
import FirstFive from '@/assets/first/f-5.png';
import { useLayout } from '@/utils/layout';
const { isMobile } = useLayout();
const list = [
  {
    title: '111.09.06',
    describe: '出生'
  },
  {
    title: '111.10.17',
    describe: '第一次睡過夜'
  },
  {
    title: '111.11.01',
    describe: '第一天送托'
  },
  {
    title: '111.11.12',
    describe: '第一次發燒'
  },
  {
    title: '112.02.06',
    describe: '第一次自己翻身'
  },
  {
    title: '112.04.17',
    describe: '發現下排長了兩顆牙齒'
  },
  {
    title: '112.06.29',
    describe: '跟爸爸媽媽去環島'
  },
  {
    title: '112.07.14',
    describe: '第一次腸胃炎'
  },
  {
    title: '112.09.06',
    describe: '第一次生日'
  }
];
</script>
<template>
  <div id="myFirstTime" class="w-full bg-white py-[90px] lg:py-[110px]">
    <div class="xl:w-[40vw] h-auto mx-auto">
      <img v-lazy="TitleFirst" alt="" class="w-full h-auto" />
    </div>
    <div class="w-[70%] lg:w-[440px] mx-auto relative">
      <div class="w-full timeline space-y-[120px]">
        <timeline
          :title="item.title"
          :describe="item.describe"
          :isRightSide="index % 2 !== 0"
          v-for="(item, index) in list"
          :key="`first-${index}`"
        />
      </div>
      <div class="absolute -top-[30px] right-0 left-0 bottom-0">
        <img
          v-lazy="FirstOne"
          alt=""
          class="w-[33vw] max-w-[275px] h-auto absolute -right-[35%] top-20 lg:-right-[220px] lg;-top-[12vw] lg:top-0"
        />
        <img
          v-lazy="FirstTwo"
          alt=""
          class="w-[33vw] max-w-[250px] lg:max-w-[300px] h-auto absolute top-[280px] lg:top-[160px] -left-[30%] lg:-left-[280px]"
        />
        <img
          v-lazy="FirstThree"
          alt=""
          class="w-[40vw] max-w-[300px] lg:max-w-[450px] h-auto absolute top-[420px] lg:top-[200px] -right-[25%] lg:-right-[450px]"
        />
        <img
          v-lazy="FirstFour"
          alt=""
          class="w-[33vw] max-w-[200px] lg:max-w-[280px] h-auto absolute top-[720px] lg:top-[550px] -right-[30%] lg:-right-[280px]"
        />
        <img
          v-lazy="FirstFive"
          alt=""
          class="w-[50vw] max-w-[250px] lg:max-w-[478px] h-auto absolute top-[860px] lg:top-[450px] -left-1/4 lg:-left-[400px]"
        />
        <div v-show="!isMobile">
          <img src="@/assets/first/path-1.png" alt="" class="w-[130px] h-[130px] absolute top-[800px] -left-[300px]" />
          <img src="@/assets/first/path-2.png" alt="" class="w-[130px] h-[130px] absolute top-[770px] -right-[380px]" />
          <div class="absolute -bottom-5 -right-[100px]">
            <div class="w-20 h-20 bg-[#ffebf1] rounded-full relative opacity-70">
              <div class="w-3 h-3 rounded-full bg-[#ffd0de] absolute bottom-0 left-3"></div>
            </div>
          </div>
          <div class="w-5 h-5 rounded-full bg-[#ffdd80] absolute top-[480px] -left-[300px] opacity-70"></div>
          <div class="w-5 h-5 rounded-full bg-[#ffdd80] absolute top-[420px] -right-[450px] opacity-70"></div>
          <div class="w-10 h-10 rounded-full bg-[#ffebf1] absolute -right-[350px] top-[120px]"></div>
          <div class="w-7 h-7 rounded-full bg-[#ffebf1] absolute -left-[220px] top-[120px]"></div>
        </div>
      </div>
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
