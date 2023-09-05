<script setup lang="ts">
import { onMounted, ref } from "vue"
import { imageModal } from "@/services/modal"
const props = defineProps({
  url: String,
})

const openImg = () => {
  if (props.url) {
    imageModal(props.url)
  }
}
</script>
<template>
  <div
    class="w-full h-full border border-solid border-[#e6e6e6] flex flex-col justify-center items-center cursor-pointer overflow-hidden"
    @click="openImg"
  >
    <img :src="$props.url" alt="" />
  </div>
</template>
