<template>
  <div class="w-full bg-[#ffc1ca]">
    <div class="xl:w-[40vw] h-auto mx-auto">
      <img src="@/assets/title/tt-ur-bless.svg" alt="" class="w-full h-auto" />
    </div>
    <div class="w-[70%] mx-auto flex items-center justify-center space-x-3">
      <div class="bg-birthday-cake"></div>
      <div class="flex flex-col justify-center items-center space-y-[30px]">
        <textarea
          class="w-full h-[180px] rounded-[20px] p-5 hover:outline-none active:outline-none"
          placeholder="撰寫祝福⋯⋯"
        />
        <div class="dan-button w-[342px]"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.bg-birthday-cake {
  background-image: url(@/assets/images/cake.png);
  @apply bg-no-repeat bg-center bg-contain;
  @apply w-[450px] h-[450px];
}
</style>
