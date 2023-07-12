import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import InputCmp from "../components/InputCmp";
import Card from "../components/Card";
import Btn from "../components/Btn";

const FinishScreen = ({ confirmed, phone, handleRestart }) => {
  return (
    <View style={styles.container}>
      {confirmed && (
        <Card>
          <Text>
            Thank you for signing up, here is an image with a URL constructed
            based on the last digit of your phone number value as its source{" "}
          </Text>
          <Image
            style={styles.image}
            source={{
              uri: `https://picsum.photos/id/${phone.slice(-1)}/100/100`,
            }}
          />
        </Card>
      )}

      {!confirmed && (
        <Card>
          <Text>Sorry to See you Go</Text>
          <Image style={styles.image} source={require("../assets/sad.png")} />
        </Card>
      )}

      <Btn title="Start Again" onPress={handleRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  card: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    elevation: 5,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default FinishScreen;
