import { useState } from "react";

// RN components
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";

//import linear gradient
// this doesn't work for me

//import colors from helper file
import Colors from "./Utils/colors";

//import screens
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  //game over checker function

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  //create logic for programmaticaly render screens

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <View style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
        style={styles.rootScreen}
      >
        {/* here I pass variable  to render screen programmatically */}
        {/* adding safeareaview mush have flex 1 to take all space in flexbox */}
        <SafeAreaView style={styles.safeView}>{screen}</SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.accent500,
  },
  safeView: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
