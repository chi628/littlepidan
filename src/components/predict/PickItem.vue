<script setup lang="ts">
defineProps({
  icon: String,
  name: String,
  canSelected: Boolean,
  hasSelected: Boolean
});
</script>
<template>
  <div class="space-y-1 w-20">
    <div
      class="w-20 h-20 rounded-[24px] flex justify-center items-center"
      :class="[
        $props.hasSelected ? 'bg-[#ef7ca4]' : 'bg-[#ffd857]',
        $props.canSelected ? 'cursor-pointer' : 'cursor-not-allowed'
      ]"
    >
      <span :class="`icon-${$props.icon}`"></span>
    </div>
    <p class="text-[#333333] text-base text-center">{{ $props.name }}</p>
  </div>
</template>
