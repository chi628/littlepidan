import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useOpenMenu = defineStore('menu', () => {
  const isOpen = ref(false)

  const isOpenMenu = computed(() => isOpen.value)

  function OpenMenu() {
    isOpen.value = true
  }

  function CloseMenu() {
    isOpen.value = false
  }

  return { isOpen, isOpenMenu, OpenMenu, CloseMenu }
})
