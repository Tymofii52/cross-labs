import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDr-cwpyMzYAO4fTIBI6qUjZDcNlw7MmP4",
  authDomain: "expo-task-manager-be668.firebaseapp.com",
  projectId: "expo-task-manager-be668",
  storageBucket: "expo-task-manager-be668.firebasestorage.app",
  messagingSenderId: "686688676479",
  appId: "1:686688676479:web:364cd69b7d635e2d892d4a",
  measurementId: "G-PH087RZGQ8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);