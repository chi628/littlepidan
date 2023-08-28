<script setup lang="ts">
import { ref, onMounted, inject, computed, reactive } from "vue"
import polaroidImg from "./polaroidImg.vue"
import { GetImgList } from "@/services/album"
import { commentModal } from "@/services/modal"

const album = ref()
const leftPage = ref()
const rightPage = ref()
// const leftImgs = ref<{ id: string; url: string }[]>()
// const rightImgs = ref<{ id: string; url: string }[]>()
const isFetching = ref(false)
const currentPage = ref(1)
const totalPage = ref()

const imgList = ref<{ id: string; url: string }[]>([])

onMounted(async () => {
  fetchImgs()
})

const leftStart = computed(() => {
  if (currentPage.value === 1) {
    return 0
  }
  return (currentPage.value - 1) * 8
})
const rightEnd = computed(() => currentPage.value * 8)

const leftImgs = computed(() => {
  return (
    imgList.value && imgList.value.slice(leftStart.value, leftStart.value + 4)
  )
})

const rightImgs = computed(() => {
  return imgList.value.slice(rightEnd.value - 4, rightEnd.value)
})

const fetchImgs = async () => {
  if (isFetching.value) {
    return
  }

  isFetching.value = true
  const res = await GetImgList()
  imgList.value = res.imgList
  totalPage.value = Math.ceil(res.total / 8)

  console.log("i", imgList.value, res.imgList)

  // leftImgs.value = res.imgList.splice(leftStart.value, leftStart.value + 4)
  // rightImgs.value = res.imgList.splice(rightEnd.value - 4, rightEnd.value)
  isFetching.value = false
}

const nextPage = () => {
  if (currentPage.value < totalPage.value) {
    console.log("nextPage")
    rightPage.value.style.transform = "rotateY(-180deg)"
    rightPage.value.style.backgroundColor = "white"
    rightPage.value.style.borderColor = "gray"
    setTimeout(() => {
      rightPage.value.style.borderColor = "transparent"
      rightPage.value.style.transform = ""
      rightPage.value.style.backgroundColor = ""
    }, 500)
    currentPage.value += 1
  }
}

const prePage = () => {
  if (currentPage.value > 1) {
    leftPage.value.style.transform = "rotateY(-180deg)"
    leftPage.value.style.backgroundColor = "white"
    leftPage.value.style.borderColor = "red"
    setTimeout(() => {
      // currentPage.value -= 1
      leftPage.value.style.borderColor = "transparent"
      leftPage.value.style.transform = ""
      leftPage.value.style.backgroundColor = ""
    }, 500)
    currentPage.value -= 1
  }
}
</script>
<template>
  <div class="bg-cloud">
    <img src="@/assets/title/tt-365.png" alt="" class="pt-[210px]" />
    <!-- relative -->
    <div class="w-full absolute">
      <img
        src="@/assets/bg/365-egg-m.png"
        alt=""
        class="w-[70%] absolute -left-5"
      />
      <div class="absolute w-[75vw] h-[60vw] -right-[10vw] -top-[30px]">
        <img src="@/assets/images/365-frame-m.png" alt="" class="" />
        <p
          class="text-[#333333] font-light text-xs absolute left-[25%] top-[73px] rotate-[8deg]"
        >
          各位哥哥 姊姊 叔叔 阿姨 <br />在我的照片上點一下
          <br />可以留言或按愛心喔～
        </p>
      </div>
    </div>
    <div class="bg-album">
      <div ref="album" class="w-full h-full relative">
        <div class="absolute w-full h-full top-0 left-0 perspective">
          <div
            class="w-1/2 h-full p-[5%] grid grid-cols-2 gap-x-2 gap-y-8 absolute left-0"
          >
            <polaroidImg
              v-for="(item, index) in leftImgs"
              :key="item.id"
              :url="item.url"
            />
            <!-- <div class="w-full h-[100%] bg-red-400"></div>
          <div class="w-full h-[100%] bg-red-400"></div>
          <div class="w-full h-[100%] bg-red-400"></div>
          <div class="w-full h-[100%] bg-red-400"></div> -->
          </div>
          <div
            class="w-1/2 h-full p-[5%] grid grid-cols-2 gap-x-2 gap-y-8 absolute right-0"
          >
            <polaroidImg
              v-for="(item, index) in rightImgs"
              :key="item.id"
              :url="item.url"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex items-center justify-center space-x-5 w-full absolute -bottom-6 left-0 right-0"
    >
      <div
        class="w-[40%] h-[48px] leading-[48px] text-center text-[#fef6e9] text-lg bg-gradient-to-r from-[#f48d8b] via-3% to-[#d06a68] via-96% rounded-[24px]"
        @click="prePage"
      >
        上一頁
      </div>

      <div
        class="w-[40%] h-[48px] leading-[48px] text-center text-[#fef6e9] text-lg bg-gradient-to-r from-[#f48d8b] via-3% to-[#d06a68] via-96% rounded-[24px]"
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
  // @apply shadow-[6px_11px_65px_0_rgba(0,0,0,0.35)];
}
</style>

<!-- top-[650px] -->
