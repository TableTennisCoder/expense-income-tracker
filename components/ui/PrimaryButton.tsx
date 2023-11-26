import { StyleSheet, Pressable, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLOR, BORDERRADIUS, SPACING, FONTSIZE } from "../../theme/theme";

const PrimaryButton = ({ onPress, children }) => {
  return (
    <LinearGradient
      colors={[COLOR.Green200, COLOR.Green600]}
      style={styles.buttonContainer}
    >
      <Pressable onPress={onPress}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </LinearGradient>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "80%",
    borderRadius: BORDERRADIUS.radius_10,
    borderColor: "transparent",
    borderWidth: 2,
    paddingHorizontal: SPACING.space_20,
    paddingVertical: SPACING.space_15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: COLOR.White500,
    fontSize: FONTSIZE.size_18
  }
});
