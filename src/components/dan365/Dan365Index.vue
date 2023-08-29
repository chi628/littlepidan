<script lang="ts" setup>
import { computed, onMounted, ref } from "vue"
import Desktop365 from "./Desktop365.vue"
import Mobile365 from "./Mobile365.vue"
import PolaroidImg from "./polaroidImg.vue"
import Title365 from "@/assets/title/tt-365.png"
import Egg365M from "@/assets/bg/365-egg-m.png"
import Egg365 from "@/assets/bgImg/365-egg.png"
import { GetImgList } from "@/services/album"
import { useLayout, Breakpoint } from "@/utils/layout"

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

const egg365Img = computed(() => {
  return isMobile.value ? Egg365M : Egg365
})

const component = computed(() => componentObj.value)

const showLimit = computed(() => (isMobile.value ? 4 : 8))
const totalpage = computed(() =>
  Math.ceil(imgList.value.length / showLimit.value)
)

const leftStart = computed(() => {
  if (currentPage.value === 1) {
    return 0
  }
  return (currentPage.value - 1) * showLimit.value
})

const rightEnd = computed(() => currentPage.value * showLimit.value)

const leftImgs = computed(() => {
  if (isMobile.value) {
    if (currentPage.value === 1) {
      return []
    } else {
      return (
        imgList.value &&
        imgList.value.slice(leftStart.value - 4, leftStart.value)
      )
    }
  } else {
    return (
      imgList.value && imgList.value.slice(leftStart.value, leftStart.value + 4)
    )
  }
})

const rightImgs = computed(() => {
  if (isMobile.value) {
    return (
      imgList.value && imgList.value.slice(rightEnd.value - 4, rightEnd.value)
    )
  } else {
    return (
      imgList.value && imgList.value.slice(rightEnd.value - 4, rightEnd.value)
    )
  }
})

const canNextPage = computed(() => {
  console.log("totalPage", currentPage.value, totalpage.value)
  return currentPage.value < totalpage.value || !!pageToken.value
})

const canPrePage = computed(() => currentPage.value > 1)

const componentProps = computed(() => {
  return {
    imgList: imgList.value,
    canNextPage: canNextPage.value,
    canPrePage: canPrePage.value,
  }
})

onMounted(() => {
  fetchImgList()
})

const fetchImgList = async () => {
  if (isFetching.value) {
    return
  }
  isFetching.value = true

  const FETCH_LIMIT = isMobile.value ? 8 : 16

  const res = await GetImgList({
    limit: 8,
    nextToken: pageToken.value,
  })

  pageToken.value = res.nextToken
  imgList.value = [...imgList.value, ...res.imgList]

  console.log("1", !!pageToken.value)
  isFetching.value = !!!pageToken.value
}

const nextPage = () => {
  currentPage.value += 1
  fetchImgList()
}

const prePage = () => {
  currentPage.value -= 1
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
        <div class="lg:w-[50vw] xl:w-[40vw] h-auto mx-auto pt-[210px] lg:pt-0">
          <img v-lazy="Title365" alt="" class="w-full h-auto" />
        </div>
      </template>
      <template #egg365Img>
        <img
          v-lazy="egg365Img"
          alt=""
          class="w-[70%] lg:w-[35vw] h-auto absolute lg:-bottom-[8.4vw] -left-5 lg:left-[5vw]"
        />
      </template>
      <template #leftImgs>
        <PolaroidImg
          v-for="img in leftImgs"
          :key="img.id"
          :url="img.url"
          class="min-h-[30vw] max-h-[30vw] lg:min-h-[15vw] lg:max-h-[15vw]"
        />
      </template>
      <template #rightImgs>
        <PolaroidImg
          v-for="img in rightImgs"
          :key="img.id"
          :url="img.url"
          class="min-h-[30vw] max-h-[30vw] lg:min-h-[15vw] lg:max-h-[15vw]"
        />
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
