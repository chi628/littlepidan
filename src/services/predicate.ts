import {
  doc,
  increment,
  setDoc,
  arrayUnion,
  getDocs,
  collection,
} from "firebase/firestore"
import { db } from "./firebase"
import { usePredicateStore } from "@/stores/predicate"
import { useUserStore } from "@/stores/user"
import type { Predicate } from "@/type/predicate"
import { computed } from "vue"
import { userName } from '@/repo/user'

export const MakePredicate = async (items: string[]) => {
  const store = useUserStore()
  items.forEach(async (item) => {
    const _ref = doc(db, "predicate", item)
    await setDoc(
      _ref,
      {
        user: arrayUnion(store.userName),
        count: increment(1),
      },
      { merge: true }
    )
  })
  // GetAllPredicate()
}

export const GetPredicateAmount = () => {}

export const GetAllPredicate = async () => {
  const querySnapshot = await getDocs(collection(db, "predicate"))
  const list: Predicate[] = []
  const store = usePredicateStore()
  querySnapshot.forEach((doc) => {
    list.push({
      id: doc.id,
      count: doc.data().count,
      users: doc.data().user
    })
  })

  store.setItemInfo(list)
}

export const GetMyPredicate = () => {
  const store = usePredicateStore()
  return store.myPredicate
}
