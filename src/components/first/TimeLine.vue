<script setup lang="ts">
defineProps({
  title: String,
  describe: String,
  isRightSide: Boolean
});
</script>
<template>
  <div class="w-full relative flex justify-center items-center">
    <div class="w-3 h-3 bg-[#e762a0] rounded-full"></div>
    <div class="w-[40%] h-[1px] bg-[#ffd0de] absolute top-1.5" :class="[$props.isRightSide ? 'right-0' : 'left-0']">
      <p
        class="text-[#e762a0] font-bold text-xl absolute -top-[30px]"
        :class="[$props.isRightSide ? 'left-0' : 'right-0']"
      >
        {{ $props.title }}
      </p>
      <p class="text-[#333] text-sm absolute top-1" :class="[$props.isRightSide ? 'left-0' : 'right-0']">
        {{ $props.describe }}
      </p>
    </div>
  </div>
</template>
