import { StyleSheet, Text, View, ImageBackground } from "react-native";

//import linear gradient
// ovo ne radi

//import screens
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
        style={styles.rootScreen}
      >
        <StartGameScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#ddb52f",
  },

  backgroundImage: {
    opacity: 0.25,
  },
});
