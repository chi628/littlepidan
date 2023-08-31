<script setup lang="ts">
import { inject } from "vue"
import Modal from "./modal.vue"
import { CLOSE_MODAL } from "@/services/modal"

const close = inject(CLOSE_MODAL)
defineProps({
  url: String,
})
</script>
<template>
  <Modal>
    <div class="w-[90vw] lg:w-[720px] h-[130vw] lg:min-h-[85dvh] lg:max-h-[85dvh] bg-white rounded-[20px] relative">
      <div class="modal-close-btn absolute top-0 right-0" @click="close">
        <span class="icon-close"></span>
      </div>
      <div
        class="w-full h-full overflow-hidden rounded-[20px] flex flex-col justify-center items-center"
      >
        <img :src="$props.url" />
      </div>
    </div>
  </Modal>
</template>
