<template>
  <div class="w-full h-[962px] bg-cloud-pc relative lg:pt-[50px] xl:pt-[138px]">
    <div class="lg:w-[50vw] xl:w-[40vw] h-auto mx-auto">
      <img src="@/assets/title/tt-365.png" alt="" class="w-full h-auto" />
    </div>
    <div class="">
      <img
        src="@/assets/bgImg/365-egg.png"
        alt=""
        class="w-[35vw] h-auto absolute -bottom-[8.4vw] left-[5vw]"
      />
      <div class="absolute bottom-[12vw] left-0">
        <img
          src="@/assets/images/365-frame.png"
          alt=""
          class="w-[35vw] h-auto"
        />
        <p
          class="absolute top-[30%] left-[30%] -rotate-[5deg] text-[#333] font-light text-lg"
        >
          各位哥哥 姊姊 叔叔 阿姨 <br />在我的照片上點一下
          <br />可以留言或按愛心喔～
        </p>
      </div>
    </div>
    <div class="bg-album-pc">
      <div
        class="w-[66px] h-[66px] rounded-full bg-gradient-to-b from-[#f48d8b] via-91% to-[#d06a68] via-8% absolute top-1/2 -translate-y-1/2 right-[8.5vw] shadow-[3px_3px_20px_0_rgba(0,0,0,0.25)] cursor-pointer"
      ></div>
      <div class="w-[65.5%] h-[65.5%] absolute left-[16.5%] top-[16.5%]">
        <div
          class="w-1/2 h-full p-[5%] grid grid-cols-2 gap-x-2 gap-y-8 absolute left-0"
        >
          <div class="w-full h-[100%] bg-red-400"></div>
          <div class="w-full h-[100%] bg-red-400"></div>
          <div class="w-full h-[100%] bg-red-400"></div>
          <div class="w-full h-[100%] bg-red-400"></div>
        </div>
        <div
          class="w-1/2 h-full p-[5%] grid grid-cols-2 gap-x-2 gap-y-8 absolute right-0"
        >
          <div class="w-full h-[100%] bg-red-400"></div>
          <div class="w-full h-[100%] bg-red-400"></div>
          <div class="w-full h-[100%] bg-red-400"></div>
          <div class="w-full h-[100%] bg-red-400"></div>
        </div>
      </div>
      <div
        class="w-[66px] h-[66px] rounded-full bg-gradient-to-b from-[#f48d8b] via-91% to-[#d06a68] via-8% absolute top-1/2 left-[7.5vw] -translate-y-1/2 shadow-[3px_3px_20px_0_rgba(0,0,0,0.25)] cursor-pointer"
      ></div>
    </div>
  </div>
</template>
<style lang="scss">
.bg-cloud-pc {
  background-image: url(@/assets/bgImg/cloud-pc.svg);
  @apply bg-center bg-no-repeat bg-contain w-[110vw] h-[73vw] -left-5;
}
.bg-album-pc {
  background-image: url(@/assets/images/album_shadow.png);
  @apply bg-center bg-no-repeat bg-cover w-[80vw] h-[62.4vw];
  @apply absolute right-[5vw] -bottom-[15vw];
}
.test {
  background-image: linear-gradient(208deg, #f48d8b 91%, #d06a68 8%);
}
</style>
