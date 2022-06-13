import React from "react";

import {
  View,
  Image,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

//import colors
import Colors from "../Utils/colors";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  //get width and height
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 180) {
    imageSize = 150;
  }
  if (height > 400) {
    imageSize = 125;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game over !</Title>
        <View style={[styles.imageContainer, imageStyle]}>
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
    </ScrollView>
  );
};

export default GameOverScreen;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 250,
    // height: deviceWidth < 380 ? 150 : 250,
    // borderRadius: deviceWidth < 380 ? 75 : 125,
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
