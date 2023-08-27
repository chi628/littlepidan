import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  list,
} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCePBaGg7oGFc2cTHRd5zv8nX6vDKwPjw0",
  authDomain: "practice-5f9a8.firebaseapp.com",
  databaseURL: "https://practice-5f9a8-default-rtdb.firebaseio.com",
  projectId: "practice-5f9a8",
  storageBucket: "practice-5f9a8.appspot.com",
  messagingSenderId: "1095302927263",
  appId: "1:1095302927263:web:123fabf1903d949e28e3aa",
  measurementId: "G-XNK3XPLT85",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage()

// const listRef = ref(storage, "images")

// export const getImage = async (pageToken?: string) => {
//   const listRef = ref(storage, "images")
//   // const imgList: string[] = []

//   const res = await listAll(ref(storage, "images"))

//   const page = await list(listRef, {
//     maxResults: 50,
//     pageToken,
//   })

//   const imgList = await Promise.all(
//     page.items.map((item) => getDownloadURL(item))
//   )

//   return {
//     pageToken: page.nextPageToken,
//     imgList,
//     total: res.items.length,
//   }
// }

// export const GetImgUrl = async (name: string) => {
//   const list: string[] = []
//   await getDownloadURL(ref(storage, `images/${name}`)).then((url) => {
//     list.push(url)
//   })

//   return list
// }

// export const MakeBless = async () => {
//   await setDoc(doc(db, "bless"), {
//     user: "Miko",
//     comment: "test",
//   })

//   // const store = useBlessStore()
//   // store.setBlessList([payload])
// }

// const collectionRef = collection(db, 'bless')

// export const GetBlessList = async () => {
//   const res = await getDocs(collectionRef)
//   res.forEach((doc) => {
//     console.log('doc', doc.data())
//   })
// }
