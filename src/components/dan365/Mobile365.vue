<template>
  <div class="bg-cloud">
    <img src="@/assets/title/tt-365.svg" alt="" class="pt-[210px]" />
    <div class="w-full relative">
      <img src="@/assets/bg/365-egg-m.png" alt="" class="w-[70%] absolute -left-5" />
      <div class="absolute w-[75vw] h-[60vw] -right-[10vw] -top-[30px]">
        <img src="@/assets/images/365-frame-m.png" alt="" class="" />
        <p class="text-[#333333] font-light text-xs absolute left-[25%] top-[73px] rotate-[8deg]">
          各位哥哥 姊姊 叔叔 阿姨 <br />在我的照片上點一下 <br />可以留言或按愛心喔～
        </p>
      </div>
    </div>
    <div class="bg-album"></div>
    <div class="flex items-center justify-center space-x-5 w-full absolute -bottom-6 left-0 right-0">
      <div
        class="w-[40%] h-[48px] leading-[48px] text-center text-[#fef6e9] text-lg bg-gradient-to-r from-[#f48d8b] via-3% to-[#d06a68] via-96% rounded-[24px]"
      >
        上一頁
      </div>
      <div
        class="w-[40%] h-[48px] leading-[48px] text-center text-[#fef6e9] text-lg bg-gradient-to-r from-[#f48d8b] via-3% to-[#d06a68] via-96% rounded-[24px]"
      >
        下一頁
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.bg-cloud {
  background-image: url(@/assets/bg/cloud-m.png);

  @apply w-screen h-[245vw] bg-no-repeat bg-center bg-cover relative;
}
.bg-album {
  background-image: url(@/assets/images/album.png);
  @apply bg-no-repeat bg-center bg-contain;
  @apply absolute top-[650px] -left-[30vw]  w-[110vw] h-[79vw];
  // @apply shadow-[6px_11px_65px_0_rgba(0,0,0,0.35)];
}
</style>
