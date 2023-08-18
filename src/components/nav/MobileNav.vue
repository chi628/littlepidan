<script setup lang="ts">
import NavItem from './NavItem.vue';
import { menu } from './item';
import { useOpenMenu } from '@/stores/menu';
import { FetchMaxZIndex } from '@/utils/findZIndex';
import { computed } from 'vue';

const style = computed(() => {
  const zindex = FetchMaxZIndex() + 1;
  return {
    zIndex: FetchMaxZIndex() + 1
  };
});
const store = useOpenMenu();
</script>
<template>
  <Transition name="mobile-menu">
    <div
      v-if="store.isOpenMenu"
      class="fixed top-0 bottom-0 left-0 right-0 bg-[#f097b2] z-[2] flex flex-col items-center pt-8 pb-5"
      :style="style"
    >
      <div class="text-[#fef6e9] text-center">
        <span>my</span><br />
        <span class="text-[38px]">First Birthday</span>
      </div>
      <div
        class="w-[50px] h-[50px] rounded-full bg-[#ffb4ca] shadow-[2px_4px_12px_0_rgba(0,0,0,0.2)] cursor-pointer absolute top-4 right-4"
        @click="store.CloseMenu"
      ></div>
      <div class="item-list">
        <NavItem
          v-for="(item, index) in menu"
          :key="`${item}_${index}`"
          :title="item.title"
          :tag="item.tag"
          class="px-[60px] py-[30px] text-center"
        ></NavItem>
      </div>
      <div class="absolute bottom-0">
        <img src="@/assets/images/menu-cloud-m.png" alt="" />
        <div class="text-[#ffe2ea] text-center text-base font-light absolute w-full left-1/2 -translate-x-1/2 bottom-4">
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
</style>
