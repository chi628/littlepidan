<script setup lang="ts">
import { ref, useAttrs } from "vue"
import bgDialogM from "@/assets/images/365-frame-m.png"
import Egg365M from "@/assets/bg/365-egg-m.png"
const emit = defineEmits(["prePage", "nextPage"])

const attrs = useAttrs()

const nextPage = () => {
  if (attrs.canNextPage) {
    emit("nextPage")
  }
}

const prePage = () => {
  if (attrs.canPrePage) {
    emit("prePage")
  }
}
</script>
<template>
  <div class="bg-cloud">
    <slot name="title"></slot>
    <div class="w-full absolute bottom-[114vw]">
      <div data-aos="fade-up-right">
        <img
          v-lazy="Egg365M"
          alt=""
          class="w-[70%] lg:w-[35vw] h-auto lg:absolute lg:-bottom-[8.4vw] lg:left-[5vw]"
        />
      </div>
      <div class="absolute w-[75vw] h-[60vw] -right-[10vw] -top-[30px]">
        <div
          data-aos="fade-down-left"
          v-lazy:background-image="bgDialogM"
          class="bg-dialog-m"
        >
          <p
            class="text-[#333333] font-light text-xs absolute left-[25%] top-[30%] rotate-[5deg]"
          >
            各位哥哥 姊姊 叔叔 阿姨 <br />一起來欣賞<br />我這一年來的成長吧
          </p>
        </div>
      </div>
    </div>
    <div class="bg-album">
      <slot name="album"></slot>
    </div>
    <div
      class="flex items-center justify-center space-x-5 w-full absolute -bottom-6 left-0 right-0"
    >
      <div
        class="w-[40%] h-[48px] leading-[48px] text-center text-lg rounded-[24px]"
        :class="[$attrs.canPrePage ? 'btn-enabled' : 'btn-disabled']"
        @click="prePage"
      >
        上一頁
      </div>

      <div
        class="w-[40%] h-[48px] leading-[48px] text-center text-lg rounded-[24px]"
        :class="[$attrs.canNextPage ? 'btn-enabled' : 'btn-disabled']"
        @click="nextPage"
      >
        下一頁
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.bg-cloud {
  background-image: url(@/assets/bg/cloud-m.png);

  @apply w-screen h-[245vw]  bg-no-repeat bg-center bg-cover relative;
}
.bg-album {
  background-image: url(@/assets/images/album.png);
  @apply bg-no-repeat bg-center bg-contain;
  // @apply absolute top-[158vw] sm:top-[129vw] -left-[30vw] sm:-left-[60vw] w-[110vw] sm:w-[150vw] h-[79vw] sm:h-[108vw];
  @apply w-[150vw] h-[107vw] absolute -left-[50vw] bottom-[8vw];
}
.bg-dialog-m {
  @apply bg-no-repeat bg-center bg-contain;
  @apply w-full h-full;
}
</style>
