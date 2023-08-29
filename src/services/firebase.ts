import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAgtsvt_YKJwCVUXvXVVz9FX_vtYO-68hc",
  authDomain: "dandan-e6bb5.firebaseapp.com",
  projectId: "dandan-e6bb5",
  storageBucket: "dandan-e6bb5.appspot.com",
  messagingSenderId: "742573490319",
  appId: "1:742573490319:web:56f8235e551f43630770fa",
  measurementId: "G-GGKBL2LPGJ",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage()
