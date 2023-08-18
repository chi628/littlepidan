<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import NavIndex from '@/components/nav/NavIndex.vue';
import MenuHamburger from '@/components/nav/MenuHamburger.vue';
import MobileBD from './components/birthday/MobileBD.vue';
import Mobile365 from '@/components/dan365/Mobile365.vue';
import MobileFirst from '@/components/first/MobileFirst.vue';
import MobilePredict from '@/components/predict/MobilePredict.vue';
import MobileBless from '@/components/bless/MobileBless.vue';
import BirthdayIndex from '@/components/birthday/BirthdayIndex.vue';
import Dan365Index from '@/components/dan365/Dan365Index.vue';
import FirstIndex from '@/components/first/FIrstIndex.vue';
import PredictIndex from '@/components/predict/PredictIndex.vue';
import BlessIndex from '@/components/bless/BlessIndex.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<template>
  <div class="w-full h-auto relative">
    <NavIndex />
    <BirthdayIndex />
    <Dan365Index />
    <FirstIndex />
    <PredictIndex />
    <BlessIndex />
    <!-- <MenuHamburger />
    <MobileBD />
    <Mobile365 />
    <MobileFirst />
    <MobilePredict />
    <MobileBless /> -->
    <TheFooter />
  </div>
</template>
<style lang="scss">
.bg-cloud {
  background-image: url(@/assets/bgImg/cloud-m.png);

  @apply w-screen h-[245vw] bg-no-repeat bg-center bg-cover relative;
}
.album {
  background-image: url(@/assets/images/album.png);
  @apply bg-no-repeat bg-center bg-contain;
  @apply absolute top-[530px] -left-[30vw]  w-[120vw] h-[86vw];
  @apply shadow-[6px_11px_65px_0_rgba(0,0,0,0.35)];
}
.dialog-bg {
  background-image: url(@/assets/images/365-frame-M.png);
  @apply w-full h-[65vw];
  @apply bg-no-repeat bg-center bg-contain;
}
</style>
