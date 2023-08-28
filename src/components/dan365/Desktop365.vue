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
  <div class="w-full h-[962px] bg-cloud-pc relative lg:pt-[50px] xl:pt-[138px]">
    <div class="">
      <slot name="title"></slot>
      <img
        src="@/assets/bgImg/365-egg.png"
        alt=""
        class="w-[35vw] h-auto absolute -bottom-[8.4vw] left-[5vw]"
      />

      <div class="absolute bottom-[12vw] left-0">
        <img
          src="@/assets/images/365-frame.png"
          alt=""
          class="w-[35vw] h-auto"
        />
        <p
          class="absolute top-[30%] left-[30%] -rotate-[5deg] text-[#333] font-light text-lg"
        >
          各位哥哥 姊姊 叔叔 阿姨 <br />一起來欣賞<br />我這一年來的成長吧
          <br />

      <div>t:{{ totalPage }} |{{ currentPage }} |{{ currentPage <= totalPage }}</div>
        </p>
      </div>
    </div>
    <div class="bg-album-pc">
      <div
        class="w-[66px] h-[66px] rounded-full absolute top-1/2 -translate-y-1/2 right-[8.5vw] shadow-[3px_3px_20px_0_rgba(0,0,0,0.25)]  "
        :class="[currentPage < totalPage ? 'btn-enabled ' : 'btn-disabled']"
        @click="nextPage"
      ></div>
      <div
        ref="album"
        class="w-[65.5%] h-[65.5%] absolute left-[16.5%] top-[16.5%]"
      >
        <div class="absolute w-full h-full top-0 left-0 perspective">
          <div
            class="absolute top-0 left-0 w-1/2 h-full bg-white origin-left transition-transform duration-500 backface-visibility"
          >
            <div
              ref="leftPage"
              class="absolute top-0 left-0 w-full h-full bg-transparent origin-right transition-transform duration-500 border border-solid z-[1] shadow-md"
            ></div>
            <div class="w-full h-full p-[5%] z-[2] relative space-y-1">
              <!-- py-[2.5%] px-[5%] -->
              <p
                class="text-[#333333] text-xs inline-flex justify-around items-center w-full h-[5%]"
              >
                歐小蛋成長日記
                <span
                  class="inline-block w-[65%] border border-dashed border-[#333] pl-4"
                ></span>
              </p>
              <div
                class="w-full h-[90%] grid grid-cols-2 gap-2 items-center justify-items-center"
              >
                <!-- @click="commentModal(item)" -->
                <polaroidImg
                  v-for="(item, index) in leftImgs"
                  :key="item.id"
                  :url="item.url"
                  class="w-[20vw] min-h-[15vw] max-h-[15vw]"
                />
              </div>
              <div class="w-full h-[5%]"></div>
            </div>
          </div>
          <div class="absolute w-1/2 h-full top-0 right-0 bg-white">
            <div
              ref="rightPage"
              class="absolute top-0 right-0 w-full h-full bg-transparent origin-left transition-transform duration-500 border border-solid z-[2]"
            ></div>
            <div class="w-full h-full p-[5%] space-y-1">
              <div class="w-full h-[5%]"></div>
              <div
                class="w-full h-[90%] grid grid-cols-2 gap-2 items-center justify-items-center"
              >
                <!-- right -->
                <polaroidImg
                  v-for="(item, index) in rightImgs"
                  :key="item.id"
                  :url="item.url"
                  class="w-[20vw] min-h-[15vw] max-h-[15vw]"
                />
              </div>

              <p
                class="text-[#333333] text-xs inline-flex justify-around items-center w-full h-[5%]"
              >
                <span
                  class="inline-block w-[65%] border border-dashed border-[#333] pl-4"
                ></span>
                @little_pidan_0906
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-[66px] h-[66px] rounded-full absolute top-1/2 left-[7.5vw] -translate-y-1/2 shadow-[3px_3px_20px_0_rgba(0,0,0,0.25)] "
        :class="[currentPage === 1 ? 'btn-disabled' : 'btn-enabled']"
        @click="prePage"
      ></div>
    </div>
  </div>
</template>
<style lang="scss">
.bg-cloud-pc {
  background-image: url(@/assets/bgImg/cloud-pc.svg);
  @apply bg-center bg-no-repeat bg-contain w-[110vw] h-[73vw] -left-5;
}
.bg-album-pc {
  background-image: url(@/assets/images/album_shadow.png);
  @apply bg-center bg-no-repeat bg-cover w-[80vw] h-[62.4vw];
  @apply absolute right-[5vw] -bottom-[15vw];
}
.test {
  background-image: linear-gradient(208deg, #f48d8b 91%, #d06a68 8%);
}

.perspective {
  perspective: 1500px;
}
.backface-visibility {
  backface-visibility: hidden;
}
.btn-disabled {
  @apply bg-[#8E8E8E] text-[#D0D0D0] cursor-not-allowed;
}
.btn-enabled {
  @apply bg-gradient-to-b from-[#f48d8b] via-[91%] to-[#d06a68] via-[8%] cursor-pointer;
}
</style>
