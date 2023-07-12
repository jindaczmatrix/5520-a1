import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import InputCmp from "../components/InputCmp";
import Card from "../components/Card";
import Btn from "../components/Btn";
import PurpleText from "../components/PurpleText";
import { colors } from "../utils/colors";

const FinishScreen = ({ confirmed, phone, handleRestart }) => {
  return (
    <View style={styles.container}>
      {confirmed && (
        <Card>
			<PurpleText text={"Thank you for signing up, here is an image with a URL constructed based on the last digit of your phone number value as its source"}/>
          
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
		  <PurpleText text={"Sorry to See you Go"}/>
          <Image style={styles.image} source={require("../assets/sad.png")} />
        </Card>
      )}

      <Btn title="Start Again" onPress={handleRestart} color={colors.blue}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
  },
  card: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
    elevation: 5,
    shadowColor: colors.black,
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
	alignSelf: "center",
  },
});

export default FinishScreen;
