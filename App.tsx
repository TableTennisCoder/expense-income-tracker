import {ActivityIndicator} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import AuthStack from "./stacks/AuthStack";
import AppStack from "./stacks/AppStack";
import useAutoLogin from "./hooks/useAutoLogin";

export default function App() {
  // import our custom fonts
  // const [fontsLoaded] = useFonts({
  //   "Heebo-Bold": require("./assets/fonts/Heebo-Bold.ttf"),
  //   "Heebo-Light": require("./assets/fonts/Heebo-Light.ttf"),
  //   "Heebo-Medium": require("./assets/fonts/Heebo-Medium.ttf"),
  //   "Heebo-Regular": require("./assets/fonts/Heebo-Regular.ttf"),
  //   "Heebo-SemiBold": require("./assets/fonts/Heebo-SemiBold.ttf"),
  // });

  const { user, loading } = useAutoLogin();

  // Hide splash screen when loading is complete
    if (loading) {
      return <ActivityIndicator />;
    }

  // otherwise show one of the stacks
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
