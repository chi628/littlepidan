<script setup lang="ts">
import { onMounted, inject, ref, computed } from 'vue';
import Modal from './modal.vue';
import Chart from 'chart.js/auto';
import { CLOSE_MODAL } from '@/services/modal';
import type { ScriptableContext, ChartArea } from 'chart.js';
import { GetAllPredicate } from '@/services/predicate';

import { usePredicateStore } from '@/stores/predicate';

const close = inject(CLOSE_MODAL);

const items = ref([
  {
    icon: 'gold',
    name: '金元寶',
    count: 0
  },
  {
    icon: 'stamp',
    name: '印章',
    count: 0
  },
  {
    icon: 'car',
    name: '車',
    count: 0
  },
  {
    icon: 'doctor',
    name: '聽診器',
    count: 0
  },
  {
    icon: 'hammer',
    name: '槌子',
    count: 0
  },
  {
    icon: 'math',
    name: '珠算',
    count: 0
  },
  {
    icon: 'book',
    name: '書',
    count: 0
  },
  {
    icon: 'spoon',
    name: '湯匙',
    count: 0
  },
  {
    icon: 'pen',
    name: '筆',
    count: 0
  },
  {
    icon: 'telescope',
    name: '望遠鏡',
    count: 0
  },
  {
    icon: 'camera',
    name: '相機',
    count: 0
  },
  {
    icon: 'music',
    name: '樂器',
    count: 0
  }
]);

const ids = ['gold', 'stamp'];

const test = computed(() => {
  const store = usePredicateStore();
  if (store.itemsList.length) {
    store.itemsList.forEach((o) => {
      const index = items.value.findIndex((item) => item.icon === o.id);

      if (index > -1) {
        items.value[index].count = o.count;
      }
    });
  }
  return items.value;
  // items.value.
});

onMounted(() => {
  const store = usePredicateStore();
  console.log('st', store.itemsList);
  console.log('test', test.value);
  const chartDOM = document.getElementById('scoreChart');

  if (chartDOM) {
    // @ts-ignore
    new Chart(chartDOM, {
      type: 'bar',
      data: {
        labels: items.value.map((o) => o.name),
        datasets: [
          {
            // label: "Acquisitions by year",
            data: items.value.map((row) => row.count),
            backgroundColor: function (context: ScriptableContext<'bar'>) {
              const chart = context.chart;
              const { ctx, chartArea } = chart;
              if (!chartArea) {
                return;
              }

              return getGradient(ctx, chartArea);
            },
            borderRadius: {
              topLeft: 9999,
              topRight: 9999,
              bottomLeft: 18,
              bottomRight: 18
            }
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            border: {
              display: true,
              color: '#ffd0de'
            },
            grid: {
              display: false,
              drawOnChartArea: false,
              drawTicks: false
            }
          },
          y: {
            border: {
              display: true,
              color: '#ffd0de'
            },
            grid: {
              display: false,
              drawOnChartArea: false,
              drawTicks: false
            }
          }
        }
      }
    });
  }
});
const getGradient = (ctx: CanvasRenderingContext2D, chartArea: ChartArea) => {
  let width, height, gradient;
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  width = chartWidth;
  height = chartHeight;
  gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
  gradient.addColorStop(1, '#ef7ca4');
  gradient.addColorStop(0, '#f48d8b');

  return gradient;
};
</script>
<template>
  <Modal>
    <div class="w-[980px] h-[670px] bg-white rounded-[20px] relative flex flex-col justify-center items-center">
      <div class="modal-close-btn absolute top-0 right-0 cursor-pointer" @click="close">
        <span class="icon-close"></span>
      </div>
      <div class="w-[850px] h-[520px]">
        <canvas id="scoreChart"></canvas>
      </div>
    </div>
  </Modal>
</template>
