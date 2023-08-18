<template>
  <div id="my365">
    <div class="w-full h-[962px] bg-cloud-pc relative pt-[138px]">
      <div class="w-[40vw] h-auto mx-auto">
        <img src="@/assets/title/tt-365.svg" alt="" class="w-full h-auto" />
      </div>
      <div>
        <img src="@/assets/bgImg/365-egg.png" alt="" class="w-[35vw] h-auto absolute -bottom-[122px]" />
      </div>
      <div class="bg-album-pc"></div>
    </div>
  </div>
</template>
<style lang="scss">
.bg-cloud-pc {
  background-image: url(@/assets/bgImg/cloud-pc.svg);
  @apply bg-center bg-no-repeat bg-cover;
}
.bg-album-pc {
  background-image: url(@/assets/images/album.png);
  @apply bg-center bg-no-repeat bg-cover w-[850px] h-[611px];
  @apply absolute right-[100px] -bottom-[30px];
}
</style>
