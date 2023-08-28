<script setup lang="ts">
import { ref } from "vue"
defineProps({
  url: String,
})

const isLoaded = ref(false)
</script>
<template>
  <div
    class="w-full h-full border border-solid border-[#e6e6e6] flex flex-col justify-center items-center cursor-pointer overflow-hidden"
    :class="{ skeleton: !isLoaded }"
  >
    <img :src="$props.url" alt="" @load="isLoaded = true" />
  </div>
</template>
