import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../utils/colors";

const Btn = ({ title, onPress, color }) => {
  return (
    <TouchableOpacity style={[styles.button]} onPress={onPress}>
      <Text style={[styles.buttonText, {color:color}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  buttonText: {
	color: colors.blue,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Btn;