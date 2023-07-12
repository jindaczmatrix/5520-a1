import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import InputCmp from "../components/InputCmp";
import Btn from "../components/Btn";
import PurpleText from "../components/PurpleText";
import { colors } from "../utils/colors";

const StartingScreen = ({ email, setEmail, phone, setPhone, setScreen }) => {
  let [emailError, setEmailError] = useState(" ");
  let [phoneError, setPhoneError] = useState(" ");

  useEffect(() => {
    if (emailError === "" && phoneError === "") {
      setScreen("confirm");
    }
  }, [emailError, phoneError]);

  // WHY NEED TO CLICK TWICE?
  // BECAUSE STATE UPDATE IS ASYNCHRONOUS
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
    } else if (phone.length !== 10 || isNaN(phone)) {
      setPhoneError("Phone number must be 10 digits");
    }
  };

 
  let handleReset = () => {
    setEmail("");
    setPhone("");
    setEmailError(" ");
    setPhoneError(" ");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      
      <Card>
        <InputCmp
          label="Email Address"
          value={email}
          onChangeText={setEmail}
        />
        {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

        <InputCmp
          label="Phone Number"
          value={phone}
          onChangeText={setPhone}
        />
        {phoneError ? <Text style={styles.error}>{phoneError}</Text> : null}

        <View style={styles.buttonContainer}>
          <Btn title="Reset" onPress={handleReset} color={colors.red} />
          <Btn title="Sign up" onPress={handleSignUp} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
