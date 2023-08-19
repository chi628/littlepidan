<template>
  <div id="bless" class="w-full bg-[#ffc1ca]">
    <div class="lg:w-[40vw] h-auto mx-auto">
      <img src="@/assets/title/tt-ur-bless.png" alt="" class="w-full h-auto" />
    </div>
    <div class="w-[70%] mx-auto flex items-center justify-center space-x-3">
      <div class="bg-birthday-cake"></div>
      <div class="flex flex-col justify-center items-center space-y-[30px]">
        <textarea
          class="w-full lg:w-[553px] h-[180px] rounded-[20px] p-5 hover:outline-none active:outline-none focus:outline-none resize-none"
          placeholder="撰寫祝福⋯⋯"
        />
        <div class="dan-button w-[342px]">
          <p class="inline-flex justify-center items-center">
            <span class="icon-send-heart inline-flex w-6 h-6 pr-2"></span
            >傳送祝福
          </p>
        </div>
      </div>
    </div>
    <div
      class="w-full lg:w-[85%] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 relative -left-4 lg:left-0"
    >
      <div class="bg-memo">
        <p
          class="text-[#333333] font-light w-[150px] absolute top-10 left-[42px] ellipsis-5 p-1"
        >
          祝小蛋平安健康
          越來越漂亮祝小蛋平安健康越來越漂亮祝小蛋平安健康越來越漂亮
          越來越漂亮祝小蛋平安健康越來越漂亮祝小蛋平安健康越來越漂亮
        </p>
      </div>
      <div class="bg-memo">
        <p
          class="text-[#333333] font-light w-[150px] absolute top-10 left-[42px] ellipsis-5 p-1"
          v-html="`祝小蛋平安健康<br/> 越來越漂亮`"
        ></p>
      </div>
      <div class="bg-memo"></div>
      <div class="bg-memo"></div>
      <div class="bg-memo"></div>
      <div class="bg-memo"></div>
      <div class="bg-memo"></div>
      <div class="bg-memo"></div>
      <div class="bg-memo"></div>
    </div>
  </div>
</template>
<style lang="scss">
.bg-birthday-cake {
  background-image: url(@/assets/images/cake.png);
  @apply bg-no-repeat bg-center bg-contain;
  @apply w-[450px] h-[450px];
}
.bg-memo {
  background-image: url(@/assets/bless/memo-1.png);
  @apply bg-no-repeat bg-center bg-contain;
  // @apply w-[180px] h-[150px] lg:w-[250px] lg:h-[210px];
  @apply w-[250px] h-[210px] relative;
}
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
