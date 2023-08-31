import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDsj0KDqd7e5g2u9vEXeT9Avky-llG3TAQ",
  authDomain: "danbd-71417.firebaseapp.com",
  projectId: "danbd-71417",
  storageBucket: "danbd-71417.appspot.com",
  messagingSenderId: "746162621702",
  appId: "1:746162621702:web:72f1c6726b765ae841a287",
  measurementId: "G-CHHF0QLX6E",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage()
export const analytics = getAnalytics(app);
