<script setup lang="ts">
import { ref, inject, onMounted } from 'vue'
import Modal from './modal.vue'
import { MakeComment, GetComment } from '@/services/comment'
import { CLOSE_MODAL } from '@/services/modal'

const props = defineProps({
  id: String,
  url: String
})

const close = inject(CLOSE_MODAL)

const value = ref()

onMounted(() => {
  if (props.id) {
    GetComment(props.id).then((res) => {
      console.log('a res', res)
    })
  }
})

const comment = () => {
  if (value.value) {
    MakeComment({
      user: 'Miko',
      comment: value.value
    })
  }
}
</script>
<template>
  <Modal>
    <div class="w-[95vw] md:w-[900px] h-[600px] rounded-[20px] bg-white flex items-center justify-center relative">
      <div class="modal-close-btn absolute top-0 right-0" @click="close">
        <span class="icon-close"></span>
      </div>
      <div
        class="w-full h-full rounded-tl-[20px] rounded-bl-[20px] overflow-hidden flex flex-col items-center justify-center bg-white"
      >
        <img :src="$props.url" alt="" class="w-full h-auto" />
      </div>
      <div class="w-full h-full">
        <div class="flex items-center space-x-3 h-[95px] border-b border-solid border-[#e6e6e6] mx-[25px]">
          <p class="text-[55px] font-[100] font-ProximaNova">
            DAY.<span class="font-bold text-[#e762a0] text-[60px]">{{ $props.id }}</span>
          </p>
          <div class="w-[100px] h-[42px] leading-[42px] text-center text-white bg-[#e6e6e6] rounded-[20px]">喜歡</div>
        </div>
        <div
          class="h-[50px] bg-white border-b border-solid border-[#e6e6e6] mx-[25px] flex justify-center items-center"
        >
          <div class="flex items-center justify-center space-x-1.5 w-1/2 cursor-pointer">
            <span class="icon--like"></span>
            <span class="font-light text-[#333]">25</span>
          </div>
          <div class="flex items-center justify-center space-x-1.5 w-1/2 cursor-pointer">
            <span class="icon--comment"></span>
            <span class="font-light text-[#333]">5</span>
          </div>
        </div>
        <div class="w-full h-[370px] bg-white"></div>
        <div
          class="w-full h-[90px] bg-white shadow-[-10px_-2px_100px_0px_rgba(0,0,0,0.2)] rounded-br-[24px] flex items-center justify-center space-x-2 px-6 py-3"
        >
          <input
            type="text"
            class="w-full h-[57px] border border-solid border-[#707070] hover:outline-none active:outline-none focus:outline-none rounded-[6px] px-[25px]"
            placeholder="撰寫留言⋯⋯"
            v-model="value"
          />
          <div
            class="w-[102px] h-[57px] bg-gradient-to-b from-[#ffdd80] to-[#ffca39] rounded-[6px] cursor-pointer text-[#333] leading-[57px] text-center"
            @click="comment"
          >
            確認
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>
<style lang="scss">
.icon-social {
  @apply inline-block w-[25px] h-[25px] bg-[#ef7ca4] rounded-[6px];
}
.icon--like {
  @apply inline-block w-[25px] h-[25px] bg-[#ef7ca4] rounded-[6px];
}
.icon--comment {
  @apply inline-block w-[25px] h-[25px] bg-[#ef7ca4] rounded-[6px];
}
</style>
