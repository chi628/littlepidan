import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Bless } from '@/type/bless'

export const useBlessStore = defineStore('bless', () => {
  const list = ref<Bless[]>([])

  const blessList = computed(() => list.value)

  const setBlessList = (_list: Bless[]) => {
    list.value = [...list.value, ..._list]
  }

  return {
    blessList,
    setBlessList,
  }
})
