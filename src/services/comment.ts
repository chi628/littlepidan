import {
  doc,
  setDoc,
  collection,
  getDoc,
  addDoc,
  getDocs,
} from "firebase/firestore"
import { db } from "./firebase"
import { useUserStore } from "@/stores/user"

export const MakeComment = async (payload: {
  user: string
  comment: string
}) => {
  await setDoc(doc(db, "comment", "Day290"), payload)

  // const store = usePredicateStore()
  // store.setItemList(items)
}

export const GetComment = async (id: string) => {
  const docRef = doc(db, "comment", id)
  const docSnap = await getDoc(docRef)
  // = await getDocs(collection(db, "cities", "SF", "landmarks"));
  if (docSnap.exists()) {
    const res = await getDocs(collection(db, "comment", id))
    const msgList: string[] = []
    let likeCount: number = 0
    res.forEach((doc) => {
      console.log("doc", doc.data())
      msgList.push(doc.data().msg)
      likeCount += doc.data().likeCount
    })
    return {
      msgList,
      likeCount,
    }
  } else {
    const store = useUserStore()
    // const commentRef = collection(db, "comment")
    // const msgRef = collection(doc(commentRef, id), "msg")
    // const likeRef = collection(doc(commentRef, id), "likeCount")
    // setDoc(doc(msgRef, "miko"), {})
    // setDoc(doc(likeRef, "miko"), {})
    await setDoc(doc(db, "comment", id), {
      user: "miko",
      comment: "",
      likeCount: 0,
    })
    // return {
    //   noData: true,
    // }
  }
}
