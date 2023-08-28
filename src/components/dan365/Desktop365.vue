<script setup lang="ts">
import { ref, onMounted, inject } from 'vue';
import polaroidImg from './polaroidImg.vue';
import { GetImgList } from '@/services/album';
import { commentModal } from '@/services/modal';

const album = ref();
const leftPage = ref();
const rightPage = ref();
const leftImgs = ref<{ id: string; url: string }[]>();
const rightImgs = ref<{ id: string; url: string }[]>();
const pageToken = ref();
const isFetching = ref(false);
const currentPage = ref(1);
const totalPage = ref();

onMounted(async () => {
  fetchImgs();
  // const res =
  // // console.log("res", res)
  // // @ts-ignore
  // leftImgs.value = res
});

const fetchImgs = async () => {
  if (isFetching.value) {
    return;
  }

  isFetching.value = true;
  const res = await GetImgList();
  console.log('res', res);
  totalPage.value = Math.ceil(res.total / 8);
  const leftStart = currentPage.value === 1 ? 0 : (currentPage.value - 1) * 8;
  const rightEnd = currentPage.value * 8;
  const rightStart = rightEnd - 4;
  // console.log("res", res, res.imgList, res.total)
  leftImgs.value = res.imgList.splice(leftStart, leftStart + 4);
  rightImgs.value = res.imgList.splice(rightStart, rightEnd);

  isFetching.value = false;
};

const nextPage = () => {
  console.log('nextPage');
  rightPage.value.style.transform = 'rotateY(-180deg)';
  rightPage.value.style.backgroundColor = 'white';
  rightPage.value.style.borderColor = 'purple';
  setTimeout(() => {
    rightPage.value.style.borderColor = 'transparent';
    rightPage.value.style.transform = '';
    rightPage.value.style.backgroundColor = '';
  }, 500);
};

const prePage = () => {
  leftPage.value.style.transform = 'rotateY(-180deg)';
  leftPage.value.style.backgroundColor = 'white';
  leftPage.value.style.borderColor = 'red';
  setTimeout(() => {
    // currentPage.value -= 1
    leftPage.value.style.borderColor = 'transparent';
    leftPage.value.style.transform = '';
    leftPage.value.style.backgroundColor = '';
  }, 500);
};
</script>
<template>
  <div class="w-full h-[962px] bg-cloud-pc relative lg:pt-[50px] xl:pt-[138px]">
    <div class="">
      <slot name="title"></slot>
      <img src="@/assets/bgImg/365-egg.png" alt="" class="w-[35vw] h-auto absolute -bottom-[8.4vw] left-[5vw]" />
      <div class="absolute bottom-[12vw] left-0">
        <img src="@/assets/images/365-frame.png" alt="" class="w-[35vw] h-auto" />
        <p class="absolute top-[30%] left-[30%] -rotate-[5deg] text-[#333] font-light text-lg">
          各位哥哥 姊姊 叔叔 阿姨 <br />一起來欣賞<br />我這一年來的成長吧 <br />
        </p>
      </div>
    </div>
    <!-- <slot name="album"></slot> -->
    <div class="bg-album-pc">
      <div
        class="w-[66px] h-[66px] rounded-full bg-gradient-to-b from-[#f48d8b] via-91% to-[#d06a68] via-8% absolute top-1/2 -translate-y-1/2 right-[8.5vw] shadow-[3px_3px_20px_0_rgba(0,0,0,0.25)] cursor-pointer"
        @click="nextPage"
      ></div>
      <div ref="album" class="w-[65.5%] h-[65.5%] absolute left-[16.5%] top-[16.5%]">
        <div class="absolute w-full h-full top-0 left-0 perspective">
          <div
            class="absolute top-0 left-0 w-1/2 h-full bg-white origin-left transition-transform duration-500 backface-visibility"
          >
            <div
              ref="leftPage"
              class="absolute top-0 left-0 w-full h-full bg-transparent origin-right transition-transform duration-500 border border-solid z-[1] shadow-md"
            ></div>
            <div class="w-full h-full py-[2.5%] px-[5%] z-[2] relative">
              <p class="text-[#333333] text-xs inline-flex justify-around items-center w-full">
                歐小蛋成長日記
                <span class="inline-block w-[65%] border border-dashed border-[#333] pl-4"></span>
              </p>
              <div class="w-full h-[90%] grid grid-cols-2 gap-2 items-center justify-items-center">
                <!-- @click="commentModal(item)" -->
                <polaroidImg
                  v-for="(item, index) in leftImgs"
                  :key="item.id"
                  :url="item.url"
                  class="w-[20vw] h-[14vw]"
                />
              </div>
            </div>
          </div>
          <div class="absolute top-0 right-0 w-1/2 h-full bg-white">
            <div
              ref="rightPage"
              class="absolute top-0 right-0 w-full h-full bg-transparent origin-left transition-transform duration-500 border border-solid z-[1] shadow-md"
            ></div>
            <div class="w-full h-full py-[2.5%] px-[5%] absolute right-0">
              <div class="w-full h-[5%]"></div>
              <div class="w-full h-[90%] grid grid-cols-2 gap-2 items-center justify-items-center">
                <!-- right -->
                <polaroidImg
                  v-for="(item, index) in leftImgs"
                  :key="item.id"
                  :url="item.url"
                  class="w-[20vw] h-[14vw]"
                />
                <!-- <div class="w-full h-[100%] bg-red-400"></div>
                <div class="w-full h-[100%] bg-red-400"></div>
                <div class="w-full h-[100%] bg-red-400"></div>
                <div class="w-full h-[100%] bg-red-400"></div> -->
              </div>

              <p class="text-[#333333] text-xs inline-flex justify-around items-center w-full">
                <span class="inline-block w-[65%] border border-dashed border-[#333] pl-4"></span>
                @little_pidan_0906
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-[66px] h-[66px] rounded-full bg-gradient-to-b from-[#f48d8b] via-91% to-[#d06a68] via-8% absolute top-1/2 left-[7.5vw] -translate-y-1/2 shadow-[3px_3px_20px_0_rgba(0,0,0,0.25)] cursor-pointer"
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
</style>
