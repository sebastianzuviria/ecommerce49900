import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAM92wCT6QejIIIqQyTN7mui2ZWWVxiQtA",
  authDomain: "ecommerce49900-f100f.firebaseapp.com",
  projectId: "ecommerce49900-f100f",
  storageBucket: "ecommerce49900-f100f.appspot.com",
  messagingSenderId: "447634390936",
  appId: "1:447634390936:web:4238ad1a3225ef03a5b5ed"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)