import { useState } from "react";

//import Colors

import Colors from "../Utils/colors";

// import components from RN - *** Keyboard -is to close keyboard
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Alert,
  Keyboard,
} from "react-native";
//import custom created buttons
import PrimaryButton from "../components/PrimaryButton";
//import title component
import Title from "../components/Title";

//import card component -just for layout component
import Card from "../components/Card";

const StartGameScreen = ({ onPickNumber }) => {
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
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //show alert
      Alert.alert(
        "invalid number !",
        "Number has to be number between 1 and 99",
        [{ text: "okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
    console.log("number is valid", chosenNumber);
    setEnteredNumber("");
    //calling keyboard dismiss function in order to close keyboard
    Keyboard.dismiss();
  };

  return (
    <View style={styles.rootContainer}>
      <Title>guess my number</Title>

      <Card>
        <Text style={styles.instructionText}>enter number </Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
          //
          returnKeyType="done"
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
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
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
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
