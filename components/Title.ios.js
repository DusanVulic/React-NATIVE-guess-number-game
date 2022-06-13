// RN components
import { StyleSheet, Text, Platform } from "react-native";

//import colors from helper file

import Colors from "../Utils/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary500,
    textAlign: "center",
    padding: 12,
    //Writing Platform-specific Code with the Platform API
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    //borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: Colors.primary500,
    maxWidth: "80%",
    width: 300,
  },
});

// Opponent's guess
