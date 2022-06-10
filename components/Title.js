// RN components
import { StyleSheet, Text, View } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#72063c",
    textAlign: "center",
    padding: 12,
    borderWidth: 2,
    borderColor: "#72063c",
  },
});

// Opponent's guess
