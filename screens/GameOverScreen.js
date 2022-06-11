import React from "react";

import { View, Image, Text, StyleSheet } from "react-native";
import Title from "../components/Title";

//import colors
import Colors from "../Utils/colors";

const GameOverScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game over !</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <View>
        <Text> Your phone needed X rounds to guess Y</Text>
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 4,
    borderColor: Colors.accent500,
    overflow: "hidden",
    margin: 48,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
