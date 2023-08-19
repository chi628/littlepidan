<template>
  <div
    class="fixed top-0 right-0 left-0 bottom-0 z-20 flex flex-col justify-center items-center"
  >
    <div class="w-full h-full bg-black opacity-70"></div>
    <!-- opacity-70 -->
    <div
      class="w-[300px] h-[285px] rounded-[20px] bg-white border border-solid border-[#707070] flex flex-col justify-center items-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
    >
      <span
        class="icon-check before:!bg-[#e762a0] before:!w-[70px] before:!h-[70px]"
      ></span>
      <p class="text-[#333] text-[38px] font-bold mt-2.5">投票成功</p>
      <div
        class="w-[125px] h-[54px] leading-[54px] rounded-[27px] bg-gradient-to-r from-[#ef7ca4] to-[#f48b8b] text-center text-white mt-[30px]"
      >
        確認
      </div>
    </div>
  </div>
</template>
