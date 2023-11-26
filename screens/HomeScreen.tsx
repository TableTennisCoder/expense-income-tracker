import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebase/firebaseConfig";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const HomeScreen = ({ navigation: RouterProps }) => {
  const handleUserSignOut = () => {
    signOut(FIREBASE_AUTH);
  };

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Sign Out" onPress={handleUserSignOut} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
