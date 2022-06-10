import { useState } from "react";

// RN components
import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

//number container component
import NumberContainer from "../components/game/NumberContainer";

/// importing code for guess number
const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      {/* GUESS  */}
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lover</Text>
        {/* + - */}
      </View>
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
});
