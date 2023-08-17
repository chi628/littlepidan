<script setup lang="ts">
defineProps({
  target: String,
  value: String,
})
</script>
<template>
  <div class="font-[futura]">
    <p class="text-xs text-[#eb9191] font-light uppercase">
      {{ $props.target }}
    </p>
    <p
      class="text-[61px] text-[#c15262] font-medium min-w-[80px] leading-[70px]"
    >
      {{ $props.value }}
    </p>
  </div>
</template>
