// RN components
import { StyleSheet, Text, View } from "react-native";

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
    borderWidth: 2,
    borderColor: Colors.primary500,
  },
});

// Opponent's guess
