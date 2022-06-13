import React from "react";

import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

//import colors
import Colors from "../Utils/colors";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
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
        <Text style={styles.summaryText}>
          Your phone needed{" "}
          <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to
          guess <Text style={styles.highlightText}>{userNumber}</Text>
        </Text>
      </View>
      <PrimaryButton onPress={onStartNewGame}>start new game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 250,
    height: deviceWidth < 380 ? 150 : 250,
    borderRadius: deviceWidth < 380 ? 75 : 125,
    borderWidth: 4,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 48,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 8,
  },
  highlightText: {
    color: Colors.primary500,
  },
});
