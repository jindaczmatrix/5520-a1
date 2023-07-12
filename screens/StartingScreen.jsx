import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Card from "../components/Card";
import InputCmp from "../components/InputCmp";
import Btn from "../components/Btn";
import PurpleText from "../components/PurpleText";

const StartingScreen = ({ email, setEmail, phone, setPhone, setScreen }) => {
  let [emailError, setEmailError] = useState("");
  let [phoneError, setPhoneError] = useState("");

  let handleSignUp = () => {
    setEmailError("");
    setPhoneError("");

    if (email === "") {
      setEmailError("Email is required");
    } else if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Email must be a valid email address");
    }

    if (phone === "") {
      setPhoneError("Phone number is required");
    } else if (phone.length !== 10) {
      setPhoneError("Phone number must be 10 digits");
    }

    if (!emailError && !phoneError) {
      setScreen("confirm");
    }
  };

  let handleReset = () => {
    setEmail("");
    setPhone("");
    setEmailError("");
    setPhoneError("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      
      <Card>
        <InputCmp
          label="Email Address"
          value={email}
          onChangeText={setEmail}
          errorType={emailError}
        />

        <InputCmp
          label="Phone Number"
          value={phone}
          onChangeText={setPhone}
          errorType={phoneError}
        />

        <View style={styles.buttonContainer}>
          <Btn title="Reset" onPress={handleReset} />
          <Btn title="Sign up" onPress={handleSignUp} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },

  image: {
    height: 100,
    width: 100,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 60,
    marginBottom: 30,
  },
});

export default StartingScreen;
