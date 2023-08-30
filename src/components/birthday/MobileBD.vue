<template>
  <div class="w-full h-[625px]">
    <div class="absolute top-[90px] left-1/2 -translate-x-1/2">
      <slot name="countdown"></slot>
    </div>

    <div class="w-[90vw] absolute top-[150px]">
      <div class="bg-ellipse"></div>
      <div class="w-[20vw] h-[20vw] rounded-full bg-white absolute top-[80px] left-2"></div>
      <div data-aos="zoom-in-right" class="font-[futura] absolute top-[90px] left-7 leading-[64px] text-[#333333]">
        <p class="text-[32px] leading-[35px]">My</p>
        <p class="text-[64px]">First</p>
        <p class="text-[64px] inline-flex justify-center items-end">
          Birthday
          <span class="inline-block w-4 h-4 rounded-full bg-[#ffb62d]"></span>
        </p>
      </div>
      <p data-aos="zoom-in-right" class="text-sm font-normal font-noto-sans-TC absolute top-[265px] left-7">
        我是歐小蛋 我要滿一歲了！
      </p>
    </div>
    <slot name="bgEgg">
      <div class="w-[10px] h-[10px] rounded-full bg-white absolute top-[104px] left-2"></div>
      <div class="w-6 h-6 rounded-full bg-[#ffd0de] absolute top-10 right-8"></div>
    </slot>
  </div>
</template>
<style lang="scss">
.bg-ellipse {
  @apply w-[2/3] h-[80vw];
  background-image: linear-gradient(to bottom, #ffbad0, #ffe7a7);
  filter: blur(50px);
  transform: translate3d(0, 0, 0);
  opacity: 0.5;
}
</style>
