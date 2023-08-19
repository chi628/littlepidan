<script setup lang="ts">
import CountDown from './CountDown.vue'
</script>
<template>
  <div class="w-full h-[625px]">
    <CountDown class="absolute top-[90px] left-1/2 -translate-x-1/2" />
    <div class="w-[90vw] absolute top-[150px]">
      <div class="bg-ellipse"></div>
      <div
        class="w-[20vw] h-[20vw] rounded-full bg-white absolute top-[80px] left-2"
      ></div>
      <div
        class="font-[futura] absolute top-[90px] left-7 leading-[64px] text-[#333333]"
      >
        <p class="text-[32px] leading-[35px]">My</p>
        <p class="text-[64px]">First</p>
        <p class="text-[64px] inline-flex justify-center items-end">
          Birthday
          <span class="inline-block w-4 h-4 rounded-full bg-[#ffb62d]"></span>
        </p>
      </div>
      <p
        class="text-sm font-normal font-noto-sans-TC absolute top-[265px] left-7"
      >
        我是歐又禎，也可以叫我歐小蛋<br />我要滿一歲了！
      </p>
    </div>
    <div class="bg2">
      <div
        class="w-[10px] h-[10px] rounded-full bg-white absolute top-[104px] left-2"
      ></div>
      <div
        class="w-6 h-6 rounded-full bg-[#ffd0de] absolute top-10 right-8"
      ></div>
    </div>
  </div>
</template>
<style lang="scss">
.bg-ellipse {
  @apply w-[2/3] h-[80vw];
  background-image: linear-gradient(to bottom, #ffbad0, #ffe7a7);
  filter: blur(50px);
  opacity: 0.5;
}
.bg2 {
  background-image: url(@/assets/bgImg/egg-kv.png);
  @apply bg-center bg-no-repeat bg-cover w-[100vw] max-w-[502px] h-[108vw] max-h-[584px] absolute top-[390px] -right-[80px] z-[3];
}
</style>
