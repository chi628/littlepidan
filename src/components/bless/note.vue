<script setup lang="ts">
import { computed } from 'vue'

defineProps({
  userName: String,
  content: String,
})

const colorList = [
  {
    bg1: '#F097B2',
    bg2: '#FFD0DE',
  },
  {
    bg1: '#EA768D',
    bg2: '#EF8DAA',
  },
  {
    bg1: '#FFC15F',
    bg2: '#FFDFAC',
  },
  {
    bg1: '#F48D8B',
    bg2: '#FAC7AC',
  },
  {
    bg1: '#D2A4DB',
    bg2: '#B087BF',
  },
]

const index = Math.floor(Math.random() * colorList.length)

const Bg1Style = computed(() => {
  return {
    backgroundColor: colorList[index].bg1,
  }
})
const Bg2Style = computed(() => {
  return {
    backgroundColor: colorList[index].bg2,
  }
})
</script>
<template>
  <!-- sm:w-[220px] sm:h-[182px] w-[80%] h-[66vw]-->
  <div class="w-[300px] h-[250px] sm:w-[330px] sm:h-[290px] relative flex flex-col justify-center items-center">
    <!-- sm:w-[200px] sm:h-[160px] w-[80%] h-[66vw] -->
    <div class="w-[270px] h-[225px] sm:w-[300px] sm:h-[261px] absolute top-0 rotate-[4deg] translate-x-2 shadow-md" :style="Bg1Style"></div>
    <!-- sm:w-[200px] sm:h-[160px] -->
    <div class="w-[270px] h-[225px] sm:w-[300px] sm:h-[261px]] -rotate-[6deg] shadow-md" :style="Bg2Style"></div>
    <!-- sm:w-[200px] sm:h-[160px] -->
    <div class="w-[270px] h-[225px] sm:w-[300px] sm:h-[261px] bg-[#fff2dd] absolute top-0 shadow-md"></div>
    <div class="absolute -top-[30px] -right-[30px] w-[120px]">
      <img src="@/assets/images/tag.png" alt="w-full" />
      <p
        class="absolute top-3 left-1/2 -translate-x-1/2 -rotate-[12deg] w-[70px] h-[30px] text-center ellipsis-1 font-[100] text-[#333] font-chen text-[24px]"
      >
        {{ $props.userName }}
      </p>
    </div>
    <!-- sm:w-[200px] sm:h-[155px] -->
    <div
      class="absolute top-0 w-[270px] h-[225px] sm:w-[300px] sm:h-[261px] px-2 pb-2 pt-[30px] text-[#333333] font-[100] font-chen text-[24px] text-center ellipsis-6"
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
  &-6 {
    @include ellipsis;
    -webkit-line-clamp: 6;
  }
}
.test-text {
  font-family: 'chen';
}
</style>
