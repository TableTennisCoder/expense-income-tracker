// ***** Custom Hook for Auto Login Logic
import { useState, useEffect } from "react";

import { onAuthStateChanged, User } from "firebase/auth";
import { handleUserLogin } from "../firebase/firebaseFunctions";
import { FIREBASE_AUTH } from "../firebase/firebaseConfig";

import * as SecureStore from "expo-secure-store";

const useAutoLogin = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const checkAutoLogin = async () => {
    try {
      // retrieve credentials from local storage
      const email = await SecureStore.getItemAsync("email");
      const password = await SecureStore.getItemAsync("password");

      // if there are credentials, log the user in
      if (email && password) {
        await handleUserLogin(email, password);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const setup = async () => {
      // wait until auto login process is completed
      await checkAutoLogin();

      // firebase login functionality
      const onAuthStateChangedListener = onAuthStateChanged(
        FIREBASE_AUTH,
        (user) => {
          setUser(user);
          setLoading(false);
        }
      );

      return () => {
        // Clean up the auth state change listener when the component unmounts
        onAuthStateChangedListener();
      };
    };

    setup();
  }, []);

  return { user, loading };
};

export default useAutoLogin;
