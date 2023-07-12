import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import StartingScreen from "./screens/StartingScreen";
import ConfirmScreen from "./screens/ConfirmScreen";
import FinishScreen from "./screens/FinishScreen";

export default function App() {
  const [screen, setScreen] = useState('start');

  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [confirmed, setConfirmed] = useState(false);

  let handleConfirm = () => {
    setConfirmed(true);
    setScreen('finish');
  }

  let handleFinishLater = () => {
    setConfirmed(false);
    setScreen('finish');
  }

  let handleRestart = () => {
    setConfirmed(false);
    setScreen('start');
    setEmail("");
    setPhone("");
  }
  

  return (
    <View style={styles.container}>
      {screen === 'start' && <StartingScreen
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        setScreen={setScreen}
      />}

      {screen === 'confirm' && <ConfirmScreen
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        setScreen={setScreen}
        handleConfirm={handleConfirm}
        handleFinishLater={handleFinishLater}
      />}

      {screen === 'finish' && <FinishScreen
        phone={phone}
        confirmed={confirmed}
        handleRestart={handleRestart}  
      />}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
