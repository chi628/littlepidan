<script setup lang="ts">
import NavItem from "./NavItem.vue"
import { menu } from "./item"
import { useOpenMenu } from "@/stores/menu"
import { FetchMaxZIndex } from "@/utils/findZIndex"
import { computed } from "vue"

const style = computed(() => {
  return {
    zIndex: FetchMaxZIndex() + 1,
  }
})
const store = useOpenMenu()
</script>
<template>
  <Transition name="mobile-menu">
    <div
      v-if="store.isOpenMenu"
      class="fixed top-0 bottom-0 left-0 right-0 bg-[#f097b2] z-[2] flex flex-col items-center pt-8"
      :style="style"
    >
      <div class="text-[#fef6e9] text-center font-futura">
        <p class="text-xl">my</p>
        <p class="text-[38px]">
          First Birthday
          <span class="inline-block w-2 h-2 rounded-full bg-[#ffdd80]"></span>
        </p>
      </div>
      <div
        class="w-[50px] h-[50px] rounded-full bg-[#ffb4ca] shadow-[2px_4px_12px_0_rgba(0,0,0,0.2)] cursor-pointer absolute top-4 right-4"
        @click="store.CloseMenu"
      >
        <span
          class="inline-block w-6 h-6 icon-close absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
        ></span>
      </div>
      <div class="item-list">
        <NavItem
          v-for="(item, index) in menu"
          :key="`${item}_${index}`"
          :title="item.title"
          :tag="item.tag"
          class="px-[60px] py-[30px] text-center"
        ></NavItem>
      </div>
      <div class="mobile-menu-footBg">
        <div
          class="font-ProximaNova text-[#ffe2ea] text-center text-base font-light absolute bottom-5 left-1/2 -translate-x-1/2 foot-text w-[300px]"
        >
          <p>HAPPY BIRTHDAY TO PIDAN</p>
          <p>Designed by ©Hung</p>
        </div>
      </div>
    </div>
  </Transition>
</template>
<style lang="scss">
.item-list {
  @apply w-3/4 mx-auto;

  > :not(:last-child) {
    border-bottom: 1px dashed #ffd0de;
  }
}
@keyframes open_menu {
  0% {
    transform: translateX(100vw);
  }
  100% {
    transform: translateX(0);
  }
}
.mobile-menu-enter-active {
  animation: open_menu 0.5s ease-in-out;
}

.mobile-menu-leave-active {
  animation: open_menu 0.5s ease-in-out reverse;
}
.mobile-menu-footBg {
  @apply w-full h-[37vw] absolute bottom-0;
  background-image: url(@/assets/bgImg/menu-cloud-m.png);
  @apply bg-center bg-no-repeat bg-cover;
}
.foot-text > :not(:last-child) {
  position: relative;
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #ffd0de;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
