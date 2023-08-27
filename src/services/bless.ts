import {
  getFirestore,
  doc,
  getDocs,
  collection,
  addDoc,
} from "firebase/firestore"
import { db } from "./firebase"
import type { Bless } from "@/type/bless"
import { useBlessStore } from "@/stores/bless"

export const GetBlessList = async () => {
  const collectionRef = collection(db, "bless")
  const res = await getDocs(collectionRef)
  const list: Bless[] = []

  res.forEach((doc) => {
    console.log("doc", doc.data())
    list.push({
      name: doc.data().user,
      comment: doc.data().comment,
    })
  })

  console.log("list", list)

  const store = useBlessStore()

  store.setBlessList(list)
}

export const MakeBless = async (payload: Bless) => {
  await addDoc(collection(db, "bless"), payload)

  const store = useBlessStore()
  store.setBlessList([payload])
}
