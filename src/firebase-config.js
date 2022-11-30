import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDhC2iIKlcaYMmdNoE7oiBOxZ8pqKTNYNg",
  authDomain: "todo-list-f633f.firebaseapp.com",
  projectId: "todo-list-f633f",
  storageBucket: "todo-list-f633f.appspot.com",
  messagingSenderId: "858001385173",
  appId: "1:858001385173:web:1e01274904bd968072645c"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
