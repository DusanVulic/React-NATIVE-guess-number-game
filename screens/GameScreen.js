import { useState, useEffect } from "react";

// RN components
import { StyleSheet, Text, View, Alert } from "react-native";
import Title from "../components/Title";

//number container component
import NumberContainer from "../components/game/NumberContainer";
//import primaty button
import PrimaryButton from "./../components/PrimaryButton";

//import colors
import Colors from "../Utils/colors";

//import card component -just for layout component
import Card from "../components/Card";

//importing icons library
import { Ionicons } from "@expo/vector-icons";

/// importing code for guess number
const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  );

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  //using use effect in order to check if user number is same to the computer number
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("don't lie", "you know that this is wrong hint", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRndNumber);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      {/* GUESS  */}
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Text style={styles.instructions}>Higher or lover</Text>
        {/* + - */}
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={nextGuessHandler.bind(this, "higher")}
              style={styles.buttonContainer}
            >
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructions: {
    color: Colors.accent500,
    fontSize: 24,
    marginBottom: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 1,
  },
});
