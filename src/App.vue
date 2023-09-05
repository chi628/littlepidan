<script setup lang="ts">
import dayjs from "dayjs"
import isSameOrAfter from "dayjs/plugin/isSameOrAfter"
import { Vue3Lottie } from "vue3-lottie"
import NavIndex from "@/components/nav/NavIndex.vue"
import MenuHamburger from "@/components/nav/MenuHamburger.vue"
import BirthdayIndex from "@/components/birthday/BirthdayIndex.vue"
import Dan365Index from "@/components/dan365/Dan365Index.vue"
import FirstIndex from "@/components/first/FIrstIndex.vue"
import PredictIndex from "@/components/predict/PredictIndex.vue"

import BlessIndex from "@/components/bless/BlessIndex.vue"
import TheFooter from "@/components/TheFooter.vue"
import { UserNameModal, celebrateModal } from "@/services/modal"
import { useLayout } from "@/utils/layout"
import { ref, onMounted } from "vue"
import { useUserStore } from "@/stores/user"
import fireworks from "@/assets/fireworks.json"

import { debounce } from "./utils/func"
dayjs.extend(isSameOrAfter)
const isBirthDay = dayjs().isSameOrAfter(dayjs("20230906"))
const { isMobile } = useLayout()

const showTop = ref(false)

onMounted(() => {
  if (isBirthDay) {
    celebrateModal()
  }
  const userName = localStorage.getItem("user")
  if (userName) {
    const store = useUserStore()
    store.setName(userName)
  }
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
})

window.addEventListener("scroll", () => {
  showTop.value = window.pageYOffset > window.screen.height
})

const toTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
}
</script>

<template>
  <MenuHamburger v-if="isMobile" />
  <NavIndex />

  <div v-if="isBirthDay" class="top-0 absolute left-0 right-0 h-[580px]">
    <div class="absolute -left-[40px] bottom-0">
      <Vue3Lottie :animationData="fireworks" :height="150" :width="150" />
    </div>
    <div class="absolute top-10 left-[30%]">
      <Vue3Lottie :animationData="fireworks" :height="150" :width="150" />
    </div>
    <div class="absolute -bottom-10 left-[30%]">
      <Vue3Lottie :animationData="fireworks" :height="100" :width="100" />
    </div>
    <div class="absolute top-[70%] left-[75%] lg:top-[40%] lg:left-1/2">
      <Vue3Lottie :animationData="fireworks" :height="180" :width="180" />
    </div>
    <div class="absolute top-20 -right-10">
      <Vue3Lottie :animationData="fireworks" :height="250" :width="250" />
    </div>
  </div>
  <BirthdayIndex />
  <Dan365Index />
  <FirstIndex />
  <PredictIndex />
  <BlessIndex />

  <div
    class="w-[60px] h-[60px] rounded-[24px] bg-gradient-to-b from-[#fff] via-9% to-[#ffe6ee] fixed right-5 bottom-5 z-[10] shadow-[3px_8px_15px_0_rgba(0,0,0,0.2)] flex flex-col justify-center items-center space-y-1 cursor-pointer"
    v-show="showTop"
    @click="toTop"
  >
    <span class="icon-top"></span>
    <div class="w-[35px] h-[1px] bg-[#ffe2ea]"></div>
    <span
      class="text-[#e762a0] font-ProximaNova text-base font-bold cursor-pointer"
      >TOP</span
    >
  </div>

  <TheFooter />
</template>
