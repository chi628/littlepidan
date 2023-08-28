<script setup lang="ts">
defineProps({
  url: String
});
</script>
<template>
  <div
    class="w-full h-full border border-solid border-[#e6e6e6] flex flex-col justify-center items-center cursor-pointer"
  >
    <img :src="$props.url" alt="" />
  </div>
</template>
