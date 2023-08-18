<script setup lang="ts">
defineProps({
  icon: String,
  name: String
});
</script>
<template>
  <div class="space-y-1">
    <div class="w-20 h-20 bg-[#ffd857] rounded-[24px] flex justify-center items-center cursor-pointer">
      <span :class="`icon-${$props.icon}`"></span>
    </div>
    <p class="text-[#333333] text-base text-center">{{ $props.name }}</p>
  </div>
</template>
