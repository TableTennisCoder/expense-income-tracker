import { FIREBASE_AUTH } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import * as SecureStore from "expo-secure-store";

// function to create a new user and save it in local storage
export async function handleUserSignUp(email: any, password: any) {
  try {
    // save in firebase
    const resp = await createUserWithEmailAndPassword(
      FIREBASE_AUTH,
      email,
      password
    );
    console.log(resp);

    // store credentials locally
    await SecureStore.setItemAsync("email", email);
    await SecureStore.setItemAsync("password", password);
  } catch (error) {
    console.log(error);
  }
}

// function to do the user login 
export async function handleUserLogin(email: any, password: any) {
  try {
    await signInWithEmailAndPassword(
      FIREBASE_AUTH,
      email,
      password
    );
  } catch (error) {
    console.log(error);
  }
}
