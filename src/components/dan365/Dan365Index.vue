<script lang="ts">
const Image365 = import.meta.glob("/365/*.{jpg,jpeg}", {
  as: "url",
})
</script>
<script lang="ts" setup>
import { computed, onMounted, ref } from "vue"
import Desktop365 from "./Desktop365.vue"
import Mobile365 from "./Mobile365.vue"
import PolaroidImg from "./polaroidImg.vue"
import Title365 from "@/assets/title/tt-365.png"
import { GetImgList } from "@/services/album"
import { useLayout, Breakpoint } from "@/utils/layout"

console.log("image", Image365)

const { isMobile, componentObj } = useLayout({
  breakpoints: {
    [Breakpoint.DEAFULT]: Mobile365,
    [Breakpoint.TABLET]: Desktop365,
  },
})

const isFetching = ref(false)
const imgList = ref<{ id: string; url: string }[]>([])
const pageToken = ref()
const currentPage = ref(1)
const leftPage = ref()
const rightPage = ref()
const showNextSkeleton = ref(false)
const showPreSkeleton = ref(false)
const showFakeLeftPage = ref(false)
const staticImgList = Object.keys(Image365)

const component = computed(() => componentObj.value)

const showLimit = computed(() => (isMobile.value ? 4 : 8))
const totalpage = computed(() =>
  Math.ceil(staticImgList.length / showLimit.value)
)

const leftStart = computed(() => {
  if (currentPage.value === 1) {
    return 0
  }
  return (currentPage.value - 1) * showLimit.value
})

const rightEnd = computed(() => currentPage.value * showLimit.value)

const leftImgs = computed(() => {
  const start = isMobile.value ? leftStart.value - 4 : leftStart.value
  const end = isMobile.value ? leftStart.value : leftStart.value + 4

  // if (imgList.value) {
  //   if (isMobile.value && currentPage.value === 1) {
  //     return []
  //   }
  //   return imgList.value.slice(start, end)
  // }
  // return []
  return staticImgList.slice(start, end)
})

const rightImgs = computed(() => {
  // return (
  //   imgList.value && imgList.value.slice(rightEnd.value - 4, rightEnd.value)
  // )
  return staticImgList.slice(rightEnd.value - 4, rightEnd.value)
})

const canNextPage = computed(() => {
  return currentPage.value < totalpage.value || !!pageToken.value
})

const canPrePage = computed(() => currentPage.value > 1)

const componentProps = computed(() => {
  return {
    imgList: staticImgList,
    canNextPage: canNextPage.value,
    canPrePage: canPrePage.value,
  }
})

onMounted(() => {
  // fetchImgList()
})

const fetchImgList = async () => {
  if (isFetching.value) {
    return
  }
  isFetching.value = true

  const FETCH_LIMIT = isMobile.value ? 8 : 16
  GetImgList({
    limit: FETCH_LIMIT,
    nextToken: pageToken.value,
  }).then((res) => {
    pageToken.value = res.nextToken
    imgList.value = [...imgList.value, ...res.imgList]

    isFetching.value = !!!pageToken.value
  })
}

const nextPage = () => {
  if (canNextPage.value) {
    rightPage.value.style.transform = "rotateY(-180deg)"
    rightPage.value.style.backgroundColor = "white"
    rightPage.value.style.zIndex = "100"
    showNextSkeleton.value = true
    currentPage.value += 1
    setTimeout(() => {
      showNextSkeleton.value = false
      rightPage.value.style.borderColor = "transparent"
      rightPage.value.style.transform = ""
      rightPage.value.style.backgroundColor = ""
      rightPage.value.style.zIndex = "3"
    }, 500)
    fetchImgList()
  }
}

const prePage = () => {
  if (canPrePage.value) {
    leftPage.value.style.transform = "rotateY(-180deg)"
    leftPage.value.style.backgroundColor = "white"
    leftPage.value.style.zIndex = "100"
    showPreSkeleton.value = true
    showFakeLeftPage.value = true
    setTimeout(() => {
      currentPage.value -= 1
      showPreSkeleton.value = false
      leftPage.value.style.borderColor = "transparent"
      leftPage.value.style.transform = ""
      leftPage.value.style.backgroundColor = ""
      leftPage.value.style.zIndex = "3"
      showFakeLeftPage.value = false
    }, 500)
  }
}
</script>
<template>
  <div id="my365">
    <component
      :is="component"
      v-bind="componentProps"
      @nextPage="nextPage"
      @prePage="prePage"
    >
      <template #title>
        <div
          class="w-[140vw] -mx-[20vw] lg:w-[50vw] xl:w-[40vw] h-auto lg:mx-auto pt-[50px] lg:pt-0"
        >
          <img v-lazy="Title365" alt="" class="w-full h-auto" />
        </div>
      </template>
      <template #album>
        <div
          ref="album"
          class="w-full lg:w-[65.5%] h-full lg:h-[65.5%] absolute left-0 lg:left-[16.5%] top-0 lg:top-[16.5%]"
        >
          <div class="absolute w-full h-full top-0 left-0 perspective">
            <div
              class="absolute top-[1.5%] lg:top-0 left-[5%] lg:left-0 w-[45%] lg:w-1/2 h-[97%] lg:h-full bg-white backface-visibility"
            >
              <div
                ref="leftPage"
                class="absolute top-0 left-0 w-full h-full bg-transparent origin-right transition-transform duration-300 z-[3] shadow-md p-[5%] space-y-1"
              >
                <div class="w-full h-[5%]"></div>
                <div
                  class="w-full h-[90%] grid grid-cols-2 gap-2 items-center justify-items-center"
                >
                  <div
                    :class="{ 'w-full h-full skeleton': showPreSkeleton }"
                  ></div>
                  <div
                    :class="{ 'w-full h-full skeleton': showPreSkeleton }"
                  ></div>
                  <div
                    :class="{ 'w-full h-full skeleton': showPreSkeleton }"
                  ></div>
                  <div
                    :class="{ 'w-full h-full skeleton': showPreSkeleton }"
                  ></div>
                </div>

                <div class="w-full h-[5%]"></div>
              </div>
              <div
                v-if="showFakeLeftPage"
                class="absolute top-0 left-0 w-full h-full bg-white origin-right transition-transform duration-300 z-[10] shadow-md p-[5%] space-y-1"
              >
                <div class="w-full h-[5%]"></div>
                <div
                  class="w-full h-[90%] grid grid-cols-2 gap-2 items-center justify-items-center"
                >
                  <div class="w-full h-full skeleton"></div>
                  <div class="w-full h-full skeleton"></div>
                  <div class="w-full h-full skeleton"></div>
                  <div class="w-full h-full skeleton"></div>
                </div>

                <div class="w-full h-[5%]"></div>
              </div>
              <div class="w-full h-full p-[5%] relative space-y-1 z-[3]">
                <p
                  class="text-[#c15262] text-xs inline-flex justify-around items-center w-full h-[5%]"
                >
                  歐小蛋成長日記
                  <span
                    class="inline-block w-[50%] lg:w-[65%] border-[0.5px] border-dashed border-[#c15262] pl-4"
                  ></span>
                </p>
                <div
                  class="w-full h-[90%] grid grid-cols-2 gap-2 justify-items-center"
                >
                  <PolaroidImg
                    v-for="(url, index) in leftImgs"
                    :key="`left-${index}`"
                    :url="url"
                    class="min-h-[42vw] max-h-[42vw] lg:min-h-[15vw] lg:max-h-[15vw]"
                  />
                </div>
                <div class="w-full h-[5%]"></div>
              </div>
            </div>
            <div
              class="absolute w-[45%] h-[97%] lg:w-1/2 lg:h-full top-[1.5%] lg:top-0 right-[5%] lg:right-0 bg-white"
            >
              <div
                ref="rightPage"
                class="absolute top-0 right-0 w-full h-full bg-transparent origin-left transition-transform duration-300 border border-solid z-[3] p-[5%]"
              >
                <div class="w-full h-[5%]"></div>
                <div
                  class="w-full h-[90%] grid grid-cols-2 gap-2 items-center justify-items-center"
                >
                  <div
                    :class="{ 'w-full h-full skeleton': showNextSkeleton }"
                  ></div>
                  <div
                    :class="{ 'w-full h-full skeleton': showNextSkeleton }"
                  ></div>
                  <div
                    :class="{ 'w-full h-full skeleton': showNextSkeleton }"
                  ></div>
                  <div
                    :class="{ 'w-full h-full skeleton': showNextSkeleton }"
                  ></div>
                </div>

                <div class="w-full h-[5%]"></div>
              </div>
              <div class="w-full h-full p-[5%] space-y-1 relative z-[3]">
                <div class="w-full h-[5%]"></div>
                <div
                  class="w-full h-[90%] grid grid-cols-2 gap-2 justify-items-center"
                >
                  <PolaroidImg
                    v-for="(url, index) in rightImgs"
                    :key="`right-${index}`"
                    :url="url"
                    class="min-h-[42vw] max-h-[42vw] lg:min-h-[15vw] lg:max-h-[15vw]"
                  />
                </div>

                <p
                  class="text-[#c15262] text-xs inline-flex justify-around items-center w-full h-[5%]"
                >
                  <span
                    class="inline-block w-[50%] lg:w-[65%] border-[0.5px] border-dashed border-[#c15262] pl-4"
                  ></span>
                  @little_pidan_0906
                </p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </component>
  </div>
</template>
<style lang="scss">
.btn-disabled {
  @apply bg-[#8E8E8E] text-[#D0D0D0] cursor-not-allowed;
}
.btn-enabled {
  @apply bg-gradient-to-b from-[#f48d8b] via-[91%] to-[#d06a68] via-[8%] cursor-pointer text-[#fef6e9];
}

.perspective {
  perspective: 1500px;
}
.backface-visibility {
  backface-visibility: hidden;
}
</style>
