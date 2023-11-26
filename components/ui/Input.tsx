import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { COLOR, BORDERRADIUS, SPACING, FONTSIZE } from "../../theme/theme";
import { Feather } from "@expo/vector-icons";

type InputProps = {
  placeholder: string;
  autoCapitalize?: "none";
  secureTextEntry?: boolean;
  value: string;
  icon: any;
  onChangeText: (text: string) => void;
};

const Input = (props: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={[styles.inputContainer, isFocused && styles.focusedContainer]}>
      <Feather
        name={props.icon}
        size={20}
        color={COLOR.Green200}
        style={styles.icon}
      />
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={COLOR.Green200}
        autoCapitalize="none"
        secureTextEntry={props.secureTextEntry}
        value={props.value}
        onChangeText={props.onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={[styles.input, isFocused && styles.focusedInput]}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    backgroundColor: COLOR.Grey,
    borderRadius: BORDERRADIUS.radius_10,
    borderColor: COLOR.Grey,
    borderWidth: 2,
    paddingHorizontal: SPACING.space_20,
    paddingVertical: SPACING.space_15,
  },
  icon: {
    marginRight: SPACING.space_10,
  },
  input: {
    flex: 1,
    color: COLOR.Green200,
    fontSize: FONTSIZE.size_16,
  },
  focusedContainer: {
    borderColor: COLOR.Green400,
  },
  focusedInput: {
    borderColor: "transparent",
  },
});
