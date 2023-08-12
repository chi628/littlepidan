<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import CountDown from '@/components/CountDown.vue'
</script>

<template>
  <div>
    <NavBar />
    <CountDown />
    <div class="relative">
      <div class="w-full">
        <img src="@/assets/icon/cloud-pc.svg" alt="" />
      </div>
      <div class="absolute -bottom-[120px] left-[50px]">
        <img src="@/assets/icon/365-egg.png" alt="" class="w-[490px]" />
      </div>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
