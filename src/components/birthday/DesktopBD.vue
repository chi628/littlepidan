<script lang="ts" setup>
import CountDown from './CountDown.vue';
</script>
<template>
  <div id="myBirthDay">
    <div class="w-full h-[460px] relative">
      <div class="w-[475px] h-[150px] relative ml-[60px] mt-[75px]">
        <div class="w-[111px] h-[111px] rounded-full bg-[#ffefad]"></div>
        <div class="font-futura absolute left-[38px] top-2">
          <p class="text-[35px] leading-[35px]">My</p>
          <p class="text-[70px] leading-[70px]">First Birthday</p>
        </div>
        <p class="font-light text-[#333333] ml-[44px] font-noto-sans-TC">
          我是歐又禎，也可以叫我歐小蛋，我要滿一歲了！
        </p>
      </div>
      <CountDown class="ml-[100px] mt-[55px]" />
      <div class="bg-egg-pc"></div>
    </div>
  </div>
</template>
<style lang="scss">
.bg-egg-pc {
  background-image: url(@/assets/bgImg/egg-kv.png);
  @apply w-[33vw] h-[38vw];
  @apply bg-center bg-no-repeat bg-contain;
  @apply absolute right-0 top-[50px] z-[3];
}
</style>
