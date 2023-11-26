import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";

import { handleUserLogin } from "../firebase/firebaseFunctions";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [isLoading, setLoading] = useState(false);

  // User SignIn
  const userLogin = async (email: any, password: any) => {
    handleUserLogin(email, password);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />
      <Button title="Login" onPress={() => userLogin(email, password)} />
      <Button
        title="Go to Registration"
        onPress={() => navigation.replace("registration")}
      />
      <ActivityIndicator animating={isLoading} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
    gap: 10,
  },
  input: {
    width: "70%",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
});
