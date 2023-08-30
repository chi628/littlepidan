<script setup lang="ts">
import { ref, useAttrs } from "vue"
import bgDialog from "@/assets/images/365-frame.png"
import Egg365 from "@/assets/bgImg/365-egg.png"

const attrs = useAttrs()
const emit = defineEmits(["prePage", "nextPage"])

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
  <div class="w-full h-[962px] bg-cloud-pc relative lg:pt-[50px] xl:pt-[138px]">
    <div>
      <slot name="title"></slot>
      <div>
        <img
          v-lazy="Egg365"
          alt=""
          class="w-[70%] lg:w-[35vw] h-auto lg:absolute lg:-bottom-[8.4vw] lg:left-[5vw]"
        />
      </div>
      <div class="absolute bottom-[12vw] left-0">
        <div
          data-aos="fade-down-left"
          v-lazy:background-image="bgDialog"
          class="bg-dialog"
        >
          <p
            class="absolute top-[26%] left-[28%] -rotate-[5deg] text-[#333] font-light lg:text-base xl:text-lg w-[50%]"
          >
            各位哥哥 姊姊 叔叔 阿姨 <br />一起來欣賞<br />我這一年來的成長吧
            <br />
          </p>
        </div>
      </div>
    </div>
    <div class="bg-album-pc">
      <slot name="album"></slot>
      <div
        class="w-[66px] h-[66px] rounded-full absolute top-1/2 -translate-y-1/2 right-[8.5vw] shadow-[3px_3px_20px_0_rgba(0,0,0,0.25)]"
        :class="[$attrs.canNextPage ? 'btn-enabled ' : 'btn-disabled']"
        @click="nextPage"
      >
        <span
          class="inline-block w-4 h-4 bd-icon-right-arrow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        ></span>
      </div>
      <div
        class="w-[66px] h-[66px] rounded-full absolute top-1/2 left-[7.5vw] -translate-y-1/2 shadow-[3px_3px_20px_0_rgba(0,0,0,0.25)]"
        :class="[$attrs.canPrePage ? 'btn-enabled' : 'btn-disabled']"
        @click="prePage"
      >
        <span
          class="inline-block w-4 h-4 bd-icon-left-arrow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        ></span>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.bg-dialog {
  @apply bg-no-repeat bg-center bg-contain;
  @apply w-[35vw] min-w-[410px] min-h-[246px] h-[21vw] relative;
}
.bg-cloud-pc {
  background-image: url(@/assets/bgImg/cloud-pc.svg);
  @apply bg-center bg-no-repeat bg-contain w-[110vw] h-[73vw] -left-5;
}
.bg-album-pc {
  background-image: url(@/assets/images/album_shadow.png);
  @apply bg-center bg-no-repeat bg-cover w-[80vw] h-[62.4vw];
  @apply absolute right-[5vw] -bottom-[15vw];
}
.bd-icon-right-arrow {
  &::before {
    content: "";
    @apply inline-block bg-white w-4 h-4;

    mask: url("@/assets/icons/path-49.svg") no-repeat center center / contain;
  }
}
.bd-icon-left-arrow {
  &::before {
    content: "";
    @apply inline-block bg-[#fef6e9] w-4 h-4;

    mask: url("@/assets/icons/arrow-left.svg") no-repeat center center / contain;
  }
}
</style>
