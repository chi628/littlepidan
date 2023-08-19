<script setup lang="ts">
import NavItem from './NavItem.vue'
import { menu } from './item'
</script>
<template>
  <div class="w-full top-0 z-20 sticky">
    <div
      class="absolute left-0 right-0 top-0 h-[107px] bg-gradient-to-b from-[#585449] via-[rgba(20, 19, 16, 0.1)] via-64% to-[rgba(0,0,0,0)] to-96% -z-[1]"
    ></div>
    <div
      class="w-full h-[85px] flex justify-center items-center space-x-[4vw] bg-white"
    >
      <NavItem
        v-for="(item, index) in menu"
        :key="`${item}_${index}`"
        :title="item.title"
        :tag="item.tag"
      />
    </div>
  </div>
</template>
