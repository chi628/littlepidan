<script setup lang="ts">
import { ref, onMounted, inject, computed, reactive, useAttrs } from 'vue';
import bgDialogM from '@/assets/images/365-frame-m.png';
import polaroidImg from './polaroidImg.vue';
import { GetImgList } from '@/services/album';
import { commentModal } from '@/services/modal';

// const props = defineProps({
//   imgList: Array,
//   canNextPage: Boolean,
//   canPrePage: Boolean
// });

const emit = defineEmits(['prePage', 'nextPage']);

// const album = ref();
const attrs = useAttrs();
const leftPage = ref();
const rightPage = ref();
// const isFetching = ref(false);
// const currentPage = ref(1);
// const totalPage = ref();

// const imgList = ref<{ id: string; url: string }[]>([]);

onMounted(async () => {
  // fetchImgs();
  console.log('attrs', attrs);
});

// const leftStart = computed(() => {
//   if (currentPage.value === 1) {
//     return 0;
//   }
//   return (currentPage.value - 1) * 8;
// });
// const rightEnd = computed(() => currentPage.value * 8);

// const leftImgs = computed(() => {
//   return imgList.value && imgList.value.slice(leftStart.value, leftStart.value + 4);
// });

// const rightImgs = computed(() => {
//   return imgList.value.slice(rightEnd.value - 4, rightEnd.value);
// });

// const fetchImgs = async () => {
//   if (isFetching.value) {
//     return;
//   }

//   isFetching.value = true;
//   // const res = await GetImgList();
//   // imgList.value = res.imgList;
//   // totalPage.value = Math.ceil(res.total / 8);

//   // leftImgs.value = res.imgList.splice(leftStart.value, leftStart.value + 4)
//   // rightImgs.value = res.imgList.splice(rightEnd.value - 4, rightEnd.value)
//   isFetching.value = false;
// };

const nextPage = () => {
  // if (currentPage.value < totalPage.value) {
  //   console.log('nextPage');
  //   rightPage.value.style.transform = 'rotateY(-180deg)';
  //   rightPage.value.style.backgroundColor = 'white';
  //   rightPage.value.style.borderColor = 'gray';
  //   setTimeout(() => {
  //     rightPage.value.style.borderColor = 'transparent';
  //     rightPage.value.style.transform = '';
  //     rightPage.value.style.backgroundColor = '';
  //   }, 500);
  //   currentPage.value += 1;
  // }
};

const prePage = () => {
  // if (currentPage.value > 1) {
  //   leftPage.value.style.transform = 'rotateY(-180deg)';
  //   leftPage.value.style.backgroundColor = 'white';
  //   leftPage.value.style.borderColor = 'red';
  //   setTimeout(() => {
  //     // currentPage.value -= 1
  //     leftPage.value.style.borderColor = 'transparent';
  //     leftPage.value.style.transform = '';
  //     leftPage.value.style.backgroundColor = '';
  //   }, 500);
  //   currentPage.value -= 1;
  // }
};
</script>
<template>
  <div class="bg-cloud">
    <slot name="title"></slot>
    <div class="w-full relative">
      <slot name="egg365Img"></slot>
      <div class="absolute w-[75vw] h-[60vw] -right-[10vw] -top-[30px]">
        <div v-lazy:background-image="bgDialogM" class="bg-dialog-m">
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
            class="absolute top-[1.5%] left-0 w-1/2 h-[97%] bg-white origin-left transition-transform duration-500 backface-visibility"
          >
            <div
              ref="leftPage"
              class="absolute top-0 left-0 w-full h-full bg-transparent origin-right transform duration-500 border border-solid z-[1] shadow-md"
            ></div>
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
          <div class="absolute w-1/2 h-[97%] top-[1.5%] right-0 bg-white">
            <div
              ref="rightPage"
              class="absolute top-0 right-0 w-full h-full bg-transparent origin-left transition-transform duration-500 border border-solid z-[2]"
            ></div>
            <div class="w-full h-full p-[5%] space-y-1">
              <div class="w-full h-[2%]"></div>
              <div class="w-full h-[90%] grid grid-cols-2 gap-2 items-center justify-items-center">
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
}
.bg-dialog-m {
  @apply bg-no-repeat bg-center bg-contain;
  @apply w-full h-full;
}
</style>
