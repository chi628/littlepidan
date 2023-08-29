import { getDocs, collection, addDoc } from "firebase/firestore"
import { db } from "./firebase"
import type { Bless } from "@/type/bless"
import { useBlessStore } from "@/stores/bless"

const BLESS_COLLECTION = "bless"

export const GetBlessList = async () => {
  const collectionRef = collection(db, BLESS_COLLECTION)
  const res = await getDocs(collectionRef)
  const list: Bless[] = []

  res.forEach((doc) => {
    list.push({
      name: doc.data().name,
      comment: doc.data().comment,
    })
  })
  const store = useBlessStore()

  store.setBlessList(list)
}

export const MakeBless = async (payload: Bless) => {
  await addDoc(collection(db, BLESS_COLLECTION), payload)

  const store = useBlessStore()
  store.setBlessList([payload])
}
