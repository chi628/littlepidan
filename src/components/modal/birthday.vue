<script setup lang="ts">
import { inject } from "vue"
import { Vue3Lottie } from "vue3-lottie"
import base from "@/assets/base.json"
import Modal from "./modal.vue"
import { CLOSE_MODAL } from "@/services/modal"

const close = inject(CLOSE_MODAL)
</script>
<template>
  <Modal>
    <div
      class="w-[90%] lg:w-[500px] h-[500px] rounded-[20px] bg-white relative flex flex-col justify-center items-center space-y-[30px]"
    >
      <div class="modal-close-btn absolute top-0 right-0" @click="close">
        <span class="icon-close"></span>
      </div>
      <img src="@/assets/images/one.webp" alt="" class="w-[131px] h-[320px]" />
      <div class="text-center">
        <p class="text-[#333] text-base lg:text-xl font-noto-sans-TC">
          嗨,<span class="text-[#ef7ca4]">我是歐小蛋</span>
        </p>
        <p
          class="text-[24px] lg:text-[32px] font-light font-noto-sans-TC text-[#333]"
        >
          今天我生日，我滿一歲囉！
        </p>
      </div>
      <div class="absolute">
        <Vue3Lottie :animationData="base" :height="240" :width="350" />
      </div>
    </div>
  </Modal>
</template>
