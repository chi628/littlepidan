<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import NavIndex from '@/components/nav/NavIndex.vue'
import MenuHamburger from '@/components/nav/MenuHamburger.vue'
import MobileBD from './components/birthday/MobileBD.vue'
</script>

<template>
  <div class="w-full h-auto relative">
    <NavIndex />
    <MenuHamburger />
    <MobileBD />
    <div class="bg-cloud"></div>
    <!-- <CountDown id="myBirthDay" />
    <div id="my365" class="relative w-full h-[870px]">
      <div class="w-[full] -mx-5">
        <img src="@/assets/icon/cloud-pc.svg" alt="" />
      </div>
      <div class="absolute top-[100px] left-1/2 -translate-x-1/2">
        <img src="@/assets/icon/tt-365.svg" alt="" class="w-[560px]" />
      </div>
      <div class="absolute -bottom-[210px] left-[50px]">
        <img src="@/assets/icon/365-egg.png" alt="" class="w-[490px]" />
      </div>
      <div></div>
    </div>
    <div id="myFirstTime" class="w-full h-[1840px] relative">
      <div class="absolute top-[120px] left-1/2 -translate-x-1/2">
        <img src="@/assets/icon/tt-first.svg" alt="" />
      </div>
      <div class="w-full border border-solid border-red-400">
        <div class="w-4 h-4 rounded-full bg-[#e762a0] relative">
          <div
            class="w-[200px] h-[1px] bg-[#ffd0de] absolute top-1/2 -translate-y-1/2 right-0"
          ></div>
        </div>
      </div>
    </div>
    <div id="predict" class="w-full h-[900px] bg-[#fef8e9]"></div>
    <div id="bless" class="w-full h-[1480px] bg-[#ffc1ca]"></div>
    <div class="w-full h-[90px] bg-[#e762a0]"></div> -->
  </div>
</template>
<style lang="scss">
.bg-cloud {
  background-image: url(@/assets/images/cloud-m.png);

  @apply w-screen h-[245vw] bg-no-repeat bg-center bg-cover;
}
</style>
