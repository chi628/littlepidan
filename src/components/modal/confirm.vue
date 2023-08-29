<script setup lang="ts">
import { inject } from 'vue';
import Modal from './modal.vue';
import { CLOSE_MODAL } from '@/services/modal';

defineProps({
  content: String
});

const close = inject(CLOSE_MODAL);
</script>
<template>
  <Modal>
    <div
      class="w-[300px] h-[285px] rounded-[20px] bg-white border border-solid border-[#707070] flex flex-col justify-center items-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
    >
      <span class="icon-check before:!bg-[#e762a0] before:!w-[70px] before:!h-[70px]"></span>
      <p class="text-[#333] text-[38px] font-bold mt-2.5">{{ $props.content }}</p>
      <div
        class="w-[125px] h-[54px] leading-[54px] rounded-[27px] bg-gradient-to-r from-[#ef7ca4] to-[#f48b8b] text-center text-white mt-[30px] cursor-pointer"
        @click="close"
      >
        確認
      </div>
    </div>
  </Modal>
</template>
