<template>
  <div class="loading">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
<style lang="scss">
.loading {
  @apply inline-flex justify-center items-center relative w-20 h-[62px];

  div {
    @apply absolute w-3 h-3 rounded-full;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-child(1) {
      background: #e762a0;
      left: 8px;
      animation: lds-ellipsis1 0.6s infinite;
    }
    &:nth-child(2) {
      background: #e762a0;
      left: 8px;
      animation: lds-ellipsis2 0.6s infinite;
    }
    &:nth-child(3) {
      background: #e762a0;
      left: 32px;
      animation: lds-ellipsis2 0.6s infinite;
    }
    &:nth-child(4) {
      background: #e762a0;
      left: 56px;
      animation: lds-ellipsis3 0.6s infinite;
    }
  }
}

@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
