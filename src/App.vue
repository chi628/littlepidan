<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import NavIndex from '@/components/nav/NavIndex.vue'
import MenuHamburger from '@/components/nav/MenuHamburger.vue'
import MobileBD from './components/birthday/MobileBD.vue'
import Mobile365 from '@/components/dan365/Mobile365.vue'
import MobileFirst from '@/components/first/MobileFirst.vue'
import MobilePredict from '@/components/predict/MobilePredict.vue'
import MobileBless from '@/components/bless/MobileBless.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="w-full h-auto relative">
    <NavIndex />
    <MenuHamburger />
    <MobileBD />
    <Mobile365 />
    <MobileFirst />
    <MobilePredict />
    <MobileBless />
    <TheFooter />
  </div>
</template>
<style lang="scss">
.bg-cloud {
  background-image: url(@/assets/images/cloud-m.png);

  @apply w-screen h-[245vw] bg-no-repeat bg-center bg-cover;
}
</style>
