import React from "react";

import { StyleSheet, Text, View, Dimensions } from "react-native";

//import colors from helper file
import Colors from "../../Utils/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primary500,
    padding: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontWeight: "bold",
    color: Colors.primary500,
  },
});
