<script setup lang="ts">
import dayjs from "dayjs"
import { ref, onMounted, onBeforeUnmount } from "vue"
import TimeItem from "./TimeItem.vue"
import { isBirthDay } from "@/utils/time"

const currentYear = dayjs().year()
const targetTime = dayjs(`${currentYear}0906`).unix() * 1000
let timerIntervel: any = null
const objArr = ref<
  {
    target: string
    value: string
  }[]
>([])

onMounted(() => {
  timerIntervel = setInterval(() => {
    const t = targetTime - dayjs().unix()
    if (t < 0) {
      clearInterval(timerIntervel)
    } else {
      countDown()
    }
  }, 1000)
  if (isBirthDay) {
    clearInterval(timerIntervel)
    objArr.value[3] = {
      target: "sec",
      value: revertToString(0),
    }
    objArr.value[2] = {
      target: "min",
      value: revertToString(0),
    }
    objArr.value[1] = {
      target: "hour",
      value: revertToString(0),
    }
    objArr.value[0] = {
      target: "day",
      value: revertToString(0),
    }
  }
})

onBeforeUnmount(() => {
  clearInterval(timerIntervel)
})

const countDown = () => {
  const _now = dayjs().unix() * 1000
  const remain = targetTime - _now

  const sec = Math.floor(remain / 1000) % 60
  const min = Math.floor(remain / 1000 / 60) % 60
  const hour = Math.floor(remain / 1000 / 60 / 60) % 24
  const day = Math.floor(remain / 1000 / 60 / 60 / 24)

  objArr.value[3] = {
    target: "sec",
    value: revertToString(sec),
  }
  objArr.value[2] = {
    target: "min",
    value: revertToString(min),
  }
  objArr.value[1] = {
    target: "hour",
    value: revertToString(hour),
  }
  objArr.value[0] = {
    target: "day",
    value: revertToString(day),
  }
}

const revertToString = (val: number) => {
  return val > 9 ? val.toString() : `0${val}`
}
</script>
<template>
  <div class="flex items-center format">
    <TimeItem
      v-for="item in objArr"
      :key="item.target"
      :target="item.target"
      :value="item.value"
    />
  </div>
</template>
<style lang="scss">
.format > :not(:last-child) > :nth-child(2)::after {
  content: ":";
}
</style>
