<script setup lang="ts">
import { computed, onMounted, ref, inject } from "vue"
import Modal from "./modal.vue"
import { CLOSE_MODAL } from "@/services/modal"

const close = inject(CLOSE_MODAL)

onMounted(() => {})
</script>
<template>
  <Modal>
    <div
      class="w-[422px] h-[260px] rounded-[20px] bg-white relative flex flex-col justify-center items-center"
    >
      <div
        class="modal-close-btn absolute top-0 right-0 cursor-pointer"
        @click="close"
      >
        <span class="icon-close"></span>
      </div>
    </div>
  </Modal>
</template>
