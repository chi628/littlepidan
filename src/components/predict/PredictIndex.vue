<script setup lang="ts">
import { ref, computed } from "vue"
import PickItem from "./PickItem.vue"
import { MakePredicate, GetTest } from "@/services/predicate"
import { NotyModal, scoreModal } from "@/services/modal"

const list = [
  {
    icon: "gold",
    name: "金元寶",
  },
  {
    icon: "stamp",
    name: "印章",
  },
  {
    icon: "car",
    name: "車",
  },
  {
    icon: "doctor",
    name: "聽診器",
  },
  {
    icon: "hammer",
    name: "槌子",
  },
  {
    icon: "math",
    name: "珠算",
  },
  {
    icon: "book",
    name: "書",
  },
  {
    icon: "spoon",
    name: "珠算",
  },
  {
    icon: "pen",
    name: "筆",
  },
  {
    icon: "telescope",
    name: "望遠鏡",
  },
  {
    icon: "camera",
    name: "相機",
  },
  {
    icon: "music",
    name: "樂器",
  },
]
const count = ref(0)
const selectedItem = ref<string[]>([])

const canSelect = computed(() => count.value < 3)

const select = (item: string) => {
  selectedItem.value.push(item)
  count.value += 1
}
const cancel = (item: string) => {
  const index = selectedItem.value.findIndex((o) => o === item)

  if (index > -1) {
    count.value -= 1
    selectedItem.value.splice(index, 1)
  }
}
const sendPredicate = () => {
  MakePredicate(selectedItem.value)
  NotyModal()
}
</script>
<template>
  <div id="predict" class="w-full h-[896px] bg-[#fef8e9]">
    <div class="lg:w-[40vw] h-auto mx-auto">
      <img src="@/assets/title/tt-predict.png" alt="" class="w-full h-auto" />
    </div>
    <div
      class="w-[90%] lg:w-[60vw] mx-auto h-auto grid grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-[60px]"
    >
      <PickItem
        v-for="(item, index) in list"
        :key="`predict-${index}`"
        :icon="item.icon"
        :name="item.name"
        :can-selected="canSelect"
        @select="select"
        @cancel="cancel"
      />
    </div>
    <div
      class="space-y-4 lg:space-y-[25px] flex flex-col justify-center items-center pt-10 lg:pt-[60px]"
    >
      <div
        class="w-[342px] h-[62px] leading-[62px] text-lg text-center rounded-[31px]"
        :class="[
          count === 3
            ? 'bg-gradient-to-r from-[#ef7ca4] to-[#f48b8b] text-white cursor-pointer'
            : 'bg-[#8E8E8E] text-[#D0D0D0] cursor-not-allowed',
        ]"
        @click="sendPredicate"
      >
        <p>
          <span class="icon-check pr-2"></span>確定選擇
          <span>({{ count }} / 3)</span>
        </p>
      </div>
      <div
        class="w-[342px] h-[62px] leading-[62px] text-white text-lg text-center rounded-[31px] bg-gradient-to-r from-[#ef7ca4] to-[#f48b8b] cursor-pointer"
        @click="scoreModal"
      >
        <p><span class="icon-eye pr-2"></span>查看目前比數</p>
      </div>
    </div>
  </div>
</template>
