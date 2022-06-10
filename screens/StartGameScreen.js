import { useState } from "react";

// import components from RN
import { StyleSheet, TextInput, View, Alert } from "react-native";
//import custom created buttons
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState("");

  //function to set entered number

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  // function to reset number

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  //function to confirm input

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber < 99) {
      //show alert
      Alert.alert(
        "invalid number !",
        "Number has to be number between 1 and 99",
        [{ text: "okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    console.log("number is valid");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#4e0329",
    // box shaddow for android
    elevation: 6,
    //box shaddow for IOS
    shadowColor: "black",
    shadowOffset: { width: 2, height: 6 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 1,
  },
});
