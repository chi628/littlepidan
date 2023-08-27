import { ref, computed } from "vue"
import { defineStore } from "pinia"
import type { Predicate } from "@/type/predicate"

export const usePredicateStore = defineStore("predicate", () => {
  const items = ref<Predicate[]>([])

  // const itemsList = computed(() => items.value)

  const setItemInfo = (item: Predicate) => {
    const index = items.value.findIndex((o) => o.id === item.id)

    if (index === -1) {
      items.value.push(item)
    }
  }

  // const updateItem = (item: Predicate) => {
  //   const index = items.value.findIndex((o) => o.id === item.id)
  //   items.value[index] = item
  // }

  // return {
  //   itemsList,
  //   setItemList,
  // }
})
