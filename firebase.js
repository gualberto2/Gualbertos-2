import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAubH54vMQYgA65L8x_uxCwIYXxcc51cFc",
  authDomain: "gualbertos-2.firebaseapp.com",
  projectId: "gualbertos-2",
  storageBucket: "gualbertos-2.appspot.com",
  messagingSenderId: "646231085080",
  appId: "1:646231085080:web:0fa1523d6e7e9ddc1df36d",
  measurementId: "G-0BCE0C1TC7",
};

export const app = initializeApp(firebaseConfig);
export const fDb = getFirestore(app);
