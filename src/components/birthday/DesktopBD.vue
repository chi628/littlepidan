<template>
  <div class="w-full min-h-[460px] h-[32vw] relative pl-[60px] pt-[75px]">
    <div class="w-[475px] h-[150px] relative">
      <div class="w-[111px] h-[111px] rounded-full bg-[#ffefad]"></div>
      <div class="font-futura absolute left-[38px] top-2">
        <p class="text-[35px] leading-[40px]">My</p>
        <p class="text-[70px] leading-[75px] inline-flex justify-center items-end">
          First Birthday
          <span class="inline-block w-4 h-4 rounded-full bg-[#ffb62c]"></span>
        </p>
      </div>
      <p class="font-light text-[#333333] ml-[44px] font-noto-sans-TC relative top-2">我是歐小蛋，我要滿一歲了！</p>
    </div>
    <div class="ml-[40px] mt-[55px]">
      <slot name="countdown"></slot>
    </div>
    <slot name="bgEgg"></slot>
    <div class="w-[45vw] h-[50vw] absolute top-0 right-0 -z-[1]">
      <div class="w-full h-full bg-gradient-to-b from-[#ffd9e5] to-[#ffcb79] blur-[50px] opacity-30"></div>
      <div class="w-[200px] h-[200px] rounded-full bg-white absolute -top-[50px] -right-[50px]">
        <div class="w-6 h-6 rounded-full bg-[#ffd0de] absolute bottom-4 left-4"></div>
      </div>
      <div class="w-7 h-7 rounded-full bg-[#a5ceff] absolute right-[2vw] top-[25vw]"></div>
    </div>
  </div>
</template>
