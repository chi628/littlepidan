<script setup lang="ts">
import { ref, useAttrs } from 'vue'
import bgDialog from '@/assets/images/365-frame.png'

const album = ref()
const leftPage = ref()
const rightPage = ref()
const showNextSkeleton = ref(false)
const showPreSkeleton = ref(false)

const attrs = useAttrs()
const emit = defineEmits(['prePage', 'nextPage'])

const nextPage = () => {
  if (attrs.canNextPage) {
    // rightPage.value.style.transform = 'rotateY(-180deg)'
    // rightPage.value.style.backgroundColor = 'white'
    // rightPage.value.style.zIndex = '100'
    // showNextSkeleton.value = true
    // setTimeout(() => {
    //   showNextSkeleton.value = false
    //   rightPage.value.style.borderColor = 'transparent'
    //   rightPage.value.style.transform = ''
    //   rightPage.value.style.backgroundColor = ''
    //   rightPage.value.style.zIndex = '3'
    // }, 500)
    emit('nextPage')
  }
}

const prePage = () => {
  if (attrs.canPrePage) {
    // showPreSkeleton.value = true
    // leftPage.value.style.transform = 'rotateY(-180deg)'
    // leftPage.value.style.backgroundColor = 'white'
    // leftPage.value.style.zIndex = '100'
    // setTimeout(() => {
    //   showPreSkeleton.value = false
    //   leftPage.value.style.borderColor = 'transparent'
    //   leftPage.value.style.transform = ''
    //   leftPage.value.style.backgroundColor = ''
    //   leftPage.value.style.zIndex = '3'
    // }, 500)
    emit('prePage')
  }
}
</script>
<template>
  <div class="w-full h-[962px] bg-cloud-pc relative lg:pt-[50px] xl:pt-[138px]">
    <div>
      <slot name="title"></slot>
      <slot name="egg365Img"></slot>
      <div class="absolute bottom-[12vw] left-0">
        <div data-aos="fade-down-left" v-lazy:background-image="bgDialog" class="bg-dialog">
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
      <!-- <div ref="album" class="w-[65.5%] h-[65.5%] absolute left-[16.5%] top-[16.5%]">
        <div class="absolute w-full h-full top-0 left-0 perspective">
          <div
            class="absolute top-0 left-0 w-1/2 h-full bg-white origin-left transition-transform duration-500 backface-visibility"
          >
            <div
              ref="leftPage"
              class="absolute top-0 left-0 w-full h-full bg-transparent origin-right transition-transform duration-500 border border-solid z-[3] shadow-md p-[5%] space-y-1"
            >
              <div class="w-full h-[5%]"></div>
              <div class="w-full h-[90%] grid grid-cols-2 gap-2 items-center justify-items-center">
                <div :class="{ 'w-full h-full skeleton': showPreSkeleton }"></div>
                <div :class="{ 'w-full h-full skeleton': showPreSkeleton }"></div>
                <div :class="{ 'w-full h-full skeleton': showPreSkeleton }"></div>
                <div :class="{ 'w-full h-full skeleton': showPreSkeleton }"></div>
              </div>

              <div class="w-full h-[5%]"></div>
            </div>
            <div class="w-full h-full p-[5%] relative space-y-1">
              <p class="text-[#333333] text-xs inline-flex justify-around items-center w-full h-[5%]">
                歐小蛋成長日記
                <span class="inline-block w-[65%] border border-dashed border-[#333] pl-4"></span>
              </p>
              <div class="w-full h-[90%] grid grid-cols-2 gap-2 justify-items-center">
                <slot name="leftImgs"></slot>
              </div>
              <div class="w-full h-[5%]"></div>
            </div>
          </div>
          <div class="absolute w-1/2 h-full top-0 right-0 bg-white">
            <div
              ref="rightPage"
              class="absolute top-0 right-0 w-full h-full bg-transparent origin-left transition-transform duration-500 border border-solid z-[2] p-[5%]"
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
            <div class="w-full h-full p-[5%] space-y-1">
              <div class="w-full h-[5%]"></div>
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
      </div> -->
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
    content: '';
    @apply inline-block bg-white w-4 h-4;

    mask: url('@/assets/icons/path-49.svg') no-repeat center center / contain;
  }
}
.bd-icon-left-arrow {
  &::before {
    content: '';
    @apply inline-block bg-[#fef6e9] w-4 h-4;

    mask: url('@/assets/icons/arrow-left.svg') no-repeat center center / contain;
  }
}
</style>
