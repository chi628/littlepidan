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
  // const store = usePredicateStore()
  // store.setItemList(items)
}

export const GetPredicateAmount = () => {}

export const GetTest = async () => {
  const querySnapshot = await getDocs(collection(db, "predicate"))
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log("docdocdocdoc", doc.id, " => ", doc.data())
  })
}
