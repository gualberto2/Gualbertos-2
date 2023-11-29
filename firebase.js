import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA03XEDvDeqQTZRAFY1-hiGMfXEvOxOmA8",
  authDomain: "gbertos-43036.firebaseapp.com",
  projectId: "gbertos-43036",
  storageBucket: "gbertos-43036.appspot.com",
  messagingSenderId: "603959134679",
  appId: "1:603959134679:web:c42b675f2ffaa20f9aa392",
};

export const app = initializeApp(firebaseConfig);
export const fDb = getFirestore(app);
