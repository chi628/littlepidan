<script setup lang="ts">
defineProps({
  target: String,
  value: String
});
</script>
<template>
  <div class="font-[futura]">
    <p class="text-xs xl:text-base text-[#eb9191] font-light uppercase">
      {{ $props.target }}
    </p>
    <p class="text-[61px] xl:text-[118px] text-[#c15262] font-medium min-w-[80px] leading-[70px] xl:leading-[130px]">
      {{ $props.value }}
    </p>
  </div>
</template>
