import React from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import Card from "../components/Card";
import Btn from "../components/Btn";
import PurpleText from "../components/PurpleText";

const ConfirmScreen = ({
  email,
  phone,
  handleConfirm,
  handleFinishLater,
  setScreen,
}) => {
  let handleGoStart = () => {
    setScreen("start");
  };
  return (
    <Modal>
      <View style={styles.container}>
        <Card>
          <PurpleText text={"You've entered"} />
          <PurpleText text={`Email Address: ${email}`} />
          <PurpleText text={`Phone Number: ${phone}`} />
          <PurpleText text={"Please Confirm They are correct"} />

          <Btn title="Go Back" onPress={handleGoStart} />
          <Btn title="Confirm" onPress={handleConfirm} />
          <Btn title="Finish Later" onPress={handleFinishLater} />
        </Card>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});

export default ConfirmScreen;
