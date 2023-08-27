<script setup lang="ts">
import { onMounted, inject } from "vue"
import Modal from "./modal.vue"
import Chart from "chart.js/auto"
import { CLOSE_MODAL } from "@/services/modal"

const close = inject(CLOSE_MODAL)

const items = [
  {
    icon: "gold",
    name: "金元寶",
    count: 0,
  },
  {
    icon: "stamp",
    name: "印章",
    count: 0,
  },
  {
    icon: "car",
    name: "車",
    count: 0,
  },
  {
    icon: "doctor",
    name: "聽診器",
    count: 0,
  },
  {
    icon: "hammer",
    name: "槌子",
    count: 0,
  },
  {
    icon: "math",
    name: "珠算",
    count: 10,
  },
  {
    icon: "book",
    name: "書",
    count: 20,
  },
  {
    icon: "spoon",
    name: "珠算",
    count: 50,
  },
  {
    icon: "pen",
    name: "筆",
    count: 0,
  },
  {
    icon: "telescope",
    name: "望遠鏡",
    count: 20,
  },
  {
    icon: "camera",
    name: "相機",
    count: 1000,
  },
  {
    icon: "music",
    name: "樂器",
    count: 0,
  },
]
onMounted(() => {
  const chartDOM = document.getElementById("scoreChart")
  if (chartDOM) {
    // @ts-ignore
    new Chart(chartDOM, {
      type: "bar",
      data: {
        labels: items.map((o) => o.name),
        datasets: [
          {
            // label: "Acquisitions by year",
            data: items.map((row) => row.count),
            backgroundColor: "#ef7ca4",
            borderRadius: {
              topLeft: 9999,
              topRight: 9999,
              bottomLeft: 18,
              bottomRight: 18,
            },
          },
        ],
      },
    })
  }
})
</script>
<template>
  <Modal>
    <div class="w-[980px] h-[670px] bg-white rounded-[20px] relative">
      <div
        class="modal-close-btn absolute top-0 right-0 cursor-pointer"
        @click="close"
      >
        <span class="icon-close"></span>
      </div>
      <canvas id="scoreChart"></canvas>
    </div>
  </Modal>
</template>
