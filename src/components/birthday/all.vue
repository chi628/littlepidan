<script setup lang="ts">
import dayjs from 'dayjs';
import { ref, onMounted, onBeforeUnmount } from 'vue';
const currentYear = dayjs().year();
const targetTime = dayjs(`${currentYear}0906`).unix() * 1000;

const sec = ref();
const min = ref();
const hour = ref();
const day = ref();
let timerIntervel: any = null;

onMounted(() => {
  timerIntervel = setInterval(() => {
    const t = targetTime - dayjs().unix();
    if (t < 0) {
      clearInterval(timerIntervel);
    } else {
      countDown();
    }
  }, 1000);
});

onBeforeUnmount(() => {
  clearInterval(timerIntervel);
});

const countDown = () => {
  const _now = dayjs().unix() * 1000;
  const remain = targetTime - _now;

  sec.value =
    Math.floor(remain / 1000) % 60 >= 10 ? Math.floor(remain / 1000) % 60 : `0${Math.floor(remain / 1000) % 60}`;
  min.value =
    Math.floor(remain / 1000 / 60) % 60 >= 10
      ? Math.floor(remain / 1000 / 60) % 60
      : `0${Math.floor(remain / 1000 / 60) % 60}`;
  hour.value =
    Math.floor(remain / 1000 / 60 / 60) % 24 >= 10
      ? Math.floor(remain / 1000 / 60 / 60) % 24
      : `0${Math.floor(remain / 1000 / 60 / 60) % 24}`;
  day.value =
    Math.floor(remain / 1000 / 60 / 60 / 24) >= 10
      ? Math.floor(remain / 1000 / 60 / 60 / 24)
      : `0${Math.floor(remain / 1000 / 60 / 60 / 24)}`;
};
</script>
<template>
  <div class="relative w-full h-[460px] pt-[75px] pl-[4vw]">
    <!-- <div class="absolute -top-[600px] -right-[600px] -z-[1]">
      <img src="@/assets/icon/bg-ellipse.svg" alt="" />
    </div> -->
    <div class="absolute top-0 right-[6vw] z-[1]">
      <img src="@/assets/bgImg/egg-kv.png" alt="" class="w-[33vw] h-auto" />
    </div>
    <div class="w-[7vw] h-[7vw] rounded-full bg-[#ffefad] relative">
      <div class="text-[#333333] font-medium absolute left-1/2 top-0 w-[30vw]">
        <p class="text-[32px] leading-[52px]">
          My<br />
          <span class="text-[fira-sans] text-[70px]">First Birthday</span>
          <span class="w-4 h-4 rounded-full bg-[#ffb62c] inline-block"></span>
        </p>
        <p class="text-[noto-sans-TC] font-[300] text-base">我是歐又禎，也可以叫我歐小蛋，我要滿一歲了！</p>
      </div>
    </div>
    <div class="flex items-center space-x-3 absolute bottom-0 left-[50px] test">
      <div>
        <p class="text-[#eb9191] font-medium">DAY</p>
        <p class="text-[#c15262] text-[120px]">{{ day }}</p>
      </div>
      <div>
        <p class="text-[#eb9191] font-medium">HOUR</p>
        <p class="text-[#c15262] text-[120px]">{{ hour }}</p>
      </div>
      <div>
        <p class="text-[#eb9191] font-medium">MIN</p>
        <p class="text-[#c15262] text-[120px]">{{ min }}</p>
      </div>
      <div>
        <p class="text-[#eb9191] font-medium">SEC</p>
        <p class="text-[#c15262] text-[120px]">{{ sec }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.test > :not(:last-child) > :nth-child(2) {
  &::after {
    content: ':';
  }
}
.test2 {
  font-family: futur;
}
</style>
