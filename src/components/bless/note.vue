<script setup lang="ts">
import { computed } from 'vue';

defineProps({
  userName: String,
  content: String
});

const colorList = [
  {
    bg1: '#F097B2',
    bg2: '#FFD0DE'
  },
  {
    bg1: '#EA768D',
    bg2: '#EF8DAA'
  },
  {
    bg1: '#FFC15F',
    bg2: '#FFDFAC'
  },
  {
    bg1: '#F48D8B',
    bg2: '#FAC7AC'
  },
  {
    bg1: '#D2A4DB',
    bg2: '#B087BF'
  }
];

const index = Math.floor(Math.random() * colorList.length);

const Bg1Style = computed(() => {
  return {
    backgroundColor: colorList[index].bg1
  };
});
const Bg2Style = computed(() => {
  return {
    backgroundColor: colorList[index].bg2
  };
});
</script>
<template>
  <div class="w-[160px] sm:w-[220px] h-[182px] relative">
    <div
      class="w-[140px] sm:w-[200px] h-[160px] absolute top-0 rotate-[4deg] translate-x-2 shadow-md"
      :style="Bg1Style"
    ></div>
    <div class="w-[140px] sm:w-[200px] h-[160px] -rotate-[6deg] shadow-md" :style="Bg2Style"></div>
    <div class="w-[140px] sm:w-[200px] h-[160px] bg-[#fff2dd] absolute top-0 shadow-md"></div>
    <div class="absolute -top-[30px] -right-[30px] w-[120px]">
      <img src="@/assets/images/tag.png" alt="w-full" />
      <p
        class="absolute top-5 left-1/2 -translate-x-1/2 -rotate-[12deg] w-[70px] h-[30px] text-center ellipsis-1 font-[100] text-[#333]"
      >
        {{ $props.userName }}
      </p>
    </div>
    <div
      class="absolute top-0 w-[140px] sm:w-[200px] h-[155px] px-2 pb-2 pt-[30px] ellipsis-5 text-[#333333] font-[100]"
    >
      {{ $props.content }}
    </div>
  </div>
</template>
<style lang="scss">
@mixin ellipsis {
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  word-break: break-all;
}

.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &-1 {
    @include ellipsis;
    -webkit-line-clamp: 1;
  }
  &-5 {
    @include ellipsis;
    -webkit-line-clamp: 5;
  }
}
</style>
