<template>
  <div
    class="w-full h-[110px] lg:h-[90px] bg-[#e762a0] flex flex-col lg:flex-row justify-center items-center lg:space-x-2 text-base text-white text-center font-light font-ProximaNova"
  >
    <p class="pipe">HAPPY BIRTHDAY TO PIDAN</p>
    <p>Designed by ©Hung</p>
    <img src="@/assets/icons/hung-icon.svg" alt="" />
  </div>
</template>
<style lang="scss">
.pipe {
  &::after {
    content: '|';
    padding-left: 8px;
  }
}
</style>
