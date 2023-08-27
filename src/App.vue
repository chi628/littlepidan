<script setup lang="ts">
import NavIndex from "@/components/nav/NavIndex.vue"
import MenuHamburger from "@/components/nav/MenuHamburger.vue"
import BirthdayIndex from "@/components/birthday/BirthdayIndex.vue"
import Dan365Index from "@/components/dan365/Dan365Index.vue"
import FirstIndex from "@/components/first/FIrstIndex.vue"
import PredictIndex from "@/components/predict/PredictIndex.vue"

import BlessIndex from "@/components/bless/BlessIndex.vue"
import TheFooter from "@/components/TheFooter.vue"
import { UserNameModal } from "@/services/modal"
import { useLayout } from "@/utils/layout"
import { ref, onMounted } from "vue"
import { useUserStore } from "@/stores/user"

const { isMobile } = useLayout()

const showTop = ref(false)

onMounted(() => {
  const userName = localStorage.getItem("user")
  if (userName) {
    const store = useUserStore()
    store.setName(userName)
  } else {
    // UserNameModal()
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
  console.log("top ")
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
  <BirthdayIndex />
  <Dan365Index />
  <FirstIndex />
  <PredictIndex />
  <BlessIndex />
  <div
    class="w-[60px] h-[60px] rounded-[24px] bg-gradient-to-b from-[#fff] via-9% to-[#ffe6ee] fixed right-[30px] bottom-[30px] z-[10] shadow-[3px_8px_15px_0_rgba(0,0,0,0.2)] flex flex-col justify-center items-center space-y-1 cursor-pointer"
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
