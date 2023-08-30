<script setup lang="ts">
import { ref, useAttrs } from 'vue'
import bgDialogM from '@/assets/images/365-frame-m.png'
const emit = defineEmits(['prePage', 'nextPage'])

const attrs = useAttrs()
const leftPage = ref()
const rightPage = ref()
const showNextSkeleton = ref(false)
const showPreSkeleton = ref(false)

const nextPage = () => {
  if (attrs.canNextPage) {
    console.log('nextPage')
    rightPage.value.style.transform = 'rotateY(-180deg)'
    rightPage.value.style.backgroundColor = 'white'
    rightPage.value.style.borderColor = 'gray'
    showNextSkeleton.value = true
    setTimeout(() => {
      showNextSkeleton.value = false
      rightPage.value.style.borderColor = 'transparent'
      rightPage.value.style.transform = ''
      rightPage.value.style.backgroundColor = ''
    }, 500)
    emit('nextPage')
  }
}

const prePage = () => {
  if (attrs.canPrePage) {
    leftPage.value.style.transform = 'rotateY(-180deg)'
    leftPage.value.style.backgroundColor = 'white'
    leftPage.value.style.borderColor = 'gray'
    showPreSkeleton.value = true
    setTimeout(() => {
      showPreSkeleton.value = false
      leftPage.value.style.borderColor = 'transparent'
      leftPage.value.style.transform = ''
      leftPage.value.style.backgroundColor = ''
    }, 500)
    emit('prePage')
  }
}
</script>
<template>
  <div class="bg-cloud">
    <slot name="title"></slot>
    <div class="w-full relative">
      <slot name="egg365Img"></slot>
      <div class="absolute w-[75vw] h-[60vw] -right-[10vw] -top-[30px]">
        <div data-aos="fade-down-left" v-lazy:background-image="bgDialogM" class="bg-dialog-m">
          <p class="text-[#333333] font-light text-xs absolute left-[25%] top-[30%] rotate-[5deg]">
            各位哥哥 姊姊 叔叔 阿姨 <br />一起來欣賞<br />我這一年來的成長吧
          </p>
        </div>
      </div>
    </div>
    <div class="bg-album">
      <div ref="album" class="w-full h-full relative">
        <div class="absolute w-full h-full top-0 left-0 perspective">
          <div
            class="absolute top-[1.5%] left-[5%] w-[45%] h-[97%] bg-white origin-left transition-transform duration-500 backface-visibility"
          >
            <div
              ref="leftPage"
              class="absolute top-0 left-0 w-full h-full bg-transparent origin-right transform duration-200 border border-solid z-[2] shadow-md p-[5%]"
            >
              <div class="w-full h-[5%]"></div>
              <div class="w-full h-[90%] grid grid-cols-2 gap-2 justify-items-center">
                <div :class="{ 'w-full h-full skeleton': showPreSkeleton }"></div>
                <div :class="{ 'w-full h-full skeleton': showPreSkeleton }"></div>
                <div :class="{ 'w-full h-full skeleton': showPreSkeleton }"></div>
                <div :class="{ 'w-full h-full skeleton': showPreSkeleton }"></div>
              </div>

              <div class="w-full h-[5%]"></div>
            </div>
            <div class="w-full h-full p-[5%] z-[2] relative space-y-1">
              <p class="text-[#333333] text-xs inline-flex justify-around items-center w-full h-[5%]">
                歐小蛋成長日記
                <span class="inline-block w-[65%] border border-dashed border-[#333] pl-4"></span>
              </p>
              <div class="w-full h-[90%] grid grid-cols-2 gap-2 items-center justify-items-center">
                <slot name="leftImgs"></slot>
              </div>
              <div class="w-full h-[5%]"></div>
            </div>
          </div>
          <div class="absolute w-[45%] h-[97%] top-[1.5%] right-[5%] bg-white">
            <div
              ref="rightPage"
              class="absolute top-0 right-0 w-full h-full origin-left transition-transform duration-500 border border-solid z-[1] p-[5%] bg-transparent"
            >
              <div class="w-full h-[5%]"></div>
              <div class="w-full h-[90%] grid grid-cols-2 gap-2 items-center justify-items-center">
                <div :class="{ 'w-full h-full skeleton': showNextSkeleton }"></div>
                <div :class="{ 'w-full h-full skeleton': showNextSkeleton }"></div>
                <div :class="{ 'w-full h-full skeleton': showNextSkeleton }"></div>
                <div :class="{ 'w-full h-full skeleton': showNextSkeleton }"></div>
              </div>

              <div class="w-full h-[5%]"></div>
            </div>
            <div class="w-full h-full p-[5%] space-y-1 relative z-[3]">
              <div class="w-full h-[2%]"></div>
              <div class="w-full h-[90%] grid grid-cols-2 gap-2 justify-items-center">
                <slot name="rightImgs"></slot>
              </div>

              <p class="text-[#333333] text-xs inline-flex justify-around items-center w-full h-[5%]">
                <span class="inline-block w-[65%] border border-dashed border-[#333] pl-4"></span>
                @little_pidan_0906
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center space-x-5 w-full absolute -bottom-6 left-0 right-0">
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
  @apply absolute top-[158vw] sm:top-[129vw] -left-[30vw] sm:-left-[60vw] w-[110vw] sm:w-[150vw] h-[79vw] sm:h-[108vw];
}
.bg-dialog-m {
  @apply bg-no-repeat bg-center bg-contain;
  @apply w-full h-full;
}
</style>
