import { ref, computed } from "vue"
import { defineStore } from "pinia"

export const useUserStore = defineStore("user", () => {
  const name = ref("")

  const userName = computed(() => name.value)

  const setName = (_name: string) => {
    name.value = _name
  }

  return {
    userName,
    setName,
  }
})
