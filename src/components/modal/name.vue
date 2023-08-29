<script setup lang="ts">
import { computed, onMounted, ref, inject } from "vue"
import Modal from "./modal.vue"
import { useUserStore } from "@/stores/user"
import { CLOSE_MODAL } from "@/services/modal"

const close = inject(CLOSE_MODAL)

const name = ref("")
const nameRef = ref()

const hasName = computed(() => name.value !== "")

onMounted(() => {
  if (nameRef.value) {
    nameRef.value.focus()
  }
})

const setName = () => {
  if (name.value) {
    localStorage.setItem("user", name.value)
    const store = useUserStore()
    store.setName(name.value)
    // @ts-ignore
    close()
  }
}
</script>
<template>
  <Modal>
    <div
      class="w-[90%] lg:w-[422px] h-[260px] rounded-[20px] bg-white relative flex flex-col justify-center items-center"
    >
      <div class="modal-close-btn absolute top-0 right-0" @click="close">
        <span class="icon-close"></span>
      </div>
      <p class="text-[#333] text-2xl mb-[14px]">請輸入你的名字</p>
      <input
        ref="nameRef"
        type="text"
        class="w-[320px] h-[57px] leading-[57px] text-center rounded-md focus:outline-none active:outline-none hover:outline-none border border-solid border-[#707070] mb-[30px]"
        placeholder="你的名字"
        v-model="name"
      />
      <div
        class="w-[125px] h-[54px] leading-[54px] text-center rounded-[27px]"
        :class="[
          hasName
            ? 'bg-gradient-to-r from-[#ef7ca4] to-[#f48b8b] to-[103%] text-white cursor-pointer'
            : 'bg-[#8E8E8E] text-[#D0D0D0] cursor-not-allowed',
        ]"
        @click="setName"
      >
        確認
      </div>
    </div>
  </Modal>
</template>
