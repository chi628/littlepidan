<script lang="ts" setup>
import { computed } from 'vue'
import bgEgg from '@/assets/bgImg/egg-kv.png'
import DesktopBD from './DesktopBD.vue'
import MobileBD from './MobileBD.vue'
import CountDown from './CountDown.vue'
import { useLayout } from '@/utils/layout'

const { isMobile } = useLayout()

const component = computed(() => {
  return isMobile.value ? MobileBD : DesktopBD
})
</script>
<template>
  <div id="myBirthDay">
    <component :is="component">
      <template #countdown>
        <CountDown />
      </template>
      <template #bgEgg>
        <div data-aos="zoom-in" data-aos-delay="50" v-lazy:background-image="bgEgg" class="bg-egg"></div>
      </template>
    </component>
  </div>
</template>
<style lang="scss">
.bg-egg {
  @apply bg-center bg-no-repeat bg-contain;
  @apply w-[100vw] max-w-[502px] lg:w-[45vw] lg:max-w-[637px] h-[108vw] max-h-[584px] lg:h-[49vw] lg:max-h-[697px];
  @apply absolute -right-[80px] lg:right-0 lg:top-[50px] top-[390px]  z-[3];
}
</style>
