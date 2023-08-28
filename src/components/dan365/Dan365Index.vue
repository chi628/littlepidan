<script lang="ts" setup>
import Desktop365 from './Desktop365.vue';
import Mobile365 from './Mobile365.vue';
import { useLayout, Breakpoint } from '@/utils/layout';
import { computed } from 'vue';

const { componentObj } = useLayout({
  breakpoints: {
    [Breakpoint.DEAFULT]: Mobile365,
    [Breakpoint.TABLET]: Desktop365
  }
});

const component = computed(() => componentObj.value);
</script>
<template>
  <div id="my365">
    <component :is="component">
      <template #title>
        <div class="lg:w-[50vw] xl:w-[40vw] h-auto mx-auto">
          <img src="@/assets/title/tt-365.png" alt="" class="w-full h-auto" />
        </div>
      </template>
      <template #dialog>
        <div class="dialog-365"></div>
      </template>
    </component>
  </div>
</template>
<style lang="scss">
.dialog-365 {
}

.bg-album-pc {
  background-image: url(@/assets/images/album_shadow.png);
  @apply bg-center bg-no-repeat bg-cover w-[80vw] h-[62.4vw];
  @apply absolute right-[5vw] -bottom-[15vw];
}
</style>
