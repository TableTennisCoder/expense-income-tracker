import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";

import Input from "../components/ui/Input";
import PrimaryButton from "../components/ui/PrimaryButton";

import { handleUserSignUp } from "../firebase/firebaseFunctions";

const RegistrationScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // create user
  const createUser = async (email: any, password: any) => {
    handleUserSignUp(email, password);
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Username"
        autoCapitalize="none"
        value={username}
        icon="user"
        onChangeText={(text) => setUsername(text)}
      />
      <Input
        placeholder="Email"
        autoCapitalize="none"
        value={email}
        icon="mail"
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        icon="lock"
        onChangeText={(text) => setPassword(text)}
      />
      <Input
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        icon="lock"
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <PrimaryButton onPress={() => createUser(email, password)}>
        Register
      </PrimaryButton>
      <Button title="Go To Login" onPress={() => navigation.replace("login")} />
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
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
