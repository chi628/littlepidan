<script setup lang="ts">
import { onMounted, ref, computed } from "vue"
import TitleBless from "@/assets/title/tt-ur-bless.png"
import BirthdayCakeImg from "@/assets/images/cake.png"
import Note from "./note.vue"
import TheLoading from "@/components/TheLoading.vue"
import { GetBlessList, MakeBless } from "@/services/bless"
import { ConfirmModal, UserNameModal } from "@/services/modal"
import { useBlessStore } from "@/stores/bless"
import { userName } from "@/repo/user"
import { useLayout } from "@/utils/layout"

const store = useBlessStore()
const { isMobile } = useLayout()

const blessContent = ref("")
const isFetching = ref(false)
const isLoading = ref(false)

const blessList = computed(() => store.blessList)

const noData = computed(() => blessList.value.length === 0)

onMounted(() => {
  fetchBlessList()
})

const fetchBlessList = async () => {
  if (isFetching.value) {
    return
  }
  isFetching.value = true
  await GetBlessList()
  isFetching.value = false
}

const sendBless = () => {
  if (blessContent.value) {
    isLoading.value = true

    MakeBless({
      name: userName(),
      comment: blessContent.value,
    }).then(() => {
      isLoading.value = false
      blessContent.value = ""
      ConfirmModal("蛋蛋收到嚕")
    })
  }
}
</script>
<template>
  <div id="bless" class="w-full bg-[#ffc1ca] pb-20 relative">
    <div
      data-aos="fade-up"
      class="w-[120vw] -mx-[10vw] lg:w-[40vw] pt-[20vw] lg:pt-0 h-auto lg:mx-auto"
    >
      <img v-lazy="TitleBless" alt="" class="w-full h-auto" />
    </div>
    <div
      class="sm:w-[70%] mx-auto flex items-center justify-center lg:space-x-3 mb-[50px] lg:mb-0"
    >
      <div
        data-aos="zoom-in-left"
        v-lazy:background-image="BirthdayCakeImg"
        :class="[isMobile ? 'bg-birthday-cake-m' : 'bg-birthday-cake']"
      ></div>
      <div
        class="w-[342px] sm:w-full lg:w-auto flex flex-col justify-center items-center relative"
      >
        <div
          v-if="!userName()"
          class="w-full h-[180px] bg-transparent absolute top-0"
          @click="UserNameModal()"
        ></div>
        <textarea
          class="w-full lg:w-[553px] h-[180px] rounded-[20px] p-5 hover:outline-none active:outline-none focus:outline-none resize-none"
          placeholder="撰寫祝福⋯⋯"
          v-model="blessContent"
        />
        <div
          class="w-[342px] sm:w-full lg:w-[342px] h-[62px] leading-[62px] text-lg text-center rounded-[31px] mt-[30px]"
          :class="[
            blessContent
              ? 'text-white bg-gradient-to-r from-[#ef7ca4] to-[#f48b8b] cursor-pointer'
              : 'bg-[#8E8E8E] text-[#D0D0D0] cursor-not-allowed',
          ]"
          @click="sendBless"
        >
          <TheLoading v-if="isLoading" />
          <p v-else class="inline-flex justify-center items-center">
            <span class="icon-send-heart inline-flex w-6 h-6 pr-2"></span
            >傳送祝福
          </p>
        </div>
      </div>
    </div>
    <div
      v-if="noData"
      class="w-[85%] mx-auto min-h-[250px] leading-[250px] text-[#333] font-bold text-[24px] lg:text-[32px] text-center"
    >
      一起來祝小蛋生日快樂吧 ❤️
    </div>
    <div
      v-else
      data-aos="zoom-in"
      class="w-full lg:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-[50px] relative justify-items-center p-2"
      :class="{ 'min-h-[250px] skeleton': isFetching }"
    >
      <Note
        v-for="(bless, index) in blessList"
        :key="`bless-${index}`"
        :userName="bless.name"
        :content="bless.comment"
      />
    </div>
  </div>
</template>
<style lang="scss">
.bg-birthday-cake-m {
  @apply bg-no-repeat bg-center bg-contain;
  @apply w-[60vw] max-w-[450px] h-[54vw] absolute -top-[15vw] -right-[5vw];
}
.bg-birthday-cake {
  @apply bg-no-repeat bg-center bg-contain;
  @apply w-[450px] h-[450px];
}
</style>
