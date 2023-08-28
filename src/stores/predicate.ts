import { ref, computed } from "vue"
import { defineStore } from "pinia"
import type { Predicate } from "@/type/predicate"
import { userName } from '@/repo/user'

export const usePredicateStore = defineStore("predicate", () => {
  const items = ref<Predicate[]>([])

  const itemsList = computed(() => items.value)

  const myPredicate = computed(() => {
    return itemsList.value.filter(o => o.users.includes(userName()))
  })

  const setItemInfo = (list: Predicate[]) => {
    items.value = list
  }
  
  return {
    itemsList,
    myPredicate,
    setItemInfo
  }
})
