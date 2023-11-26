import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaEFn20WLya61m0uYxeSjjTy58oc5U9XU",
  authDomain: "expense-income-tracker-c7f33.firebaseapp.com",
  projectId: "expense-income-tracker-c7f33",
  storageBucket: "expense-income-tracker-c7f33.appspot.com",
  messagingSenderId: "357963451462",
  appId: "1:357963451462:web:aab5ae143811f790ba8e47",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
