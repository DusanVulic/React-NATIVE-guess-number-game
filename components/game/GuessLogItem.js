import { View, Text, StyleSheet } from "react-native";

//import colors
import Colors from "../../Utils/colors";

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text>#{roundNumber}</Text>
      <Text> Opponent's gess : {guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary500,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    //android shadow
    elevation: 4,
    //IOS shadow
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});
