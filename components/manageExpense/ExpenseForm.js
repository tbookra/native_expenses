import { Alert, StyleSheet, Text, View } from "react-native";
import CustomInput from "./CustomInput";
import { useState } from "react";
import CustomButton from "../UI/CustomButton";
import { getFormatedDate } from "../../utils/date";
import { GlobalStyles } from "../../constants/styles";

const ExpenseForm = ({
  onCancel,
  onSubmit,
  submitButtonHandler,
  defaultValues,
}) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormatedDate(defaultValues.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });
  const inputChangeHandler = (inputIdentifier, enteredAmount) => {
    setInputs((prev) => ({
      ...prev,
      [inputIdentifier]: { value: enteredAmount, isValid: true },
    }));
  };
  const submitHandler = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      Alert.alert("Invalid input", "Please check your input values");
      setInputs((prev) => {
        return {
          amount: { value: prev.amount.value, isValid: amountIsValid },
          date: { value: prev.date.value, isValid: dateIsValid },
          description: {
            value: prev.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  };

  const formIsValid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <CustomInput
          label="Amount"
          invalid={!inputs.amount.isValid}
          style={styles.row}
          textInputConfig={{
            value: inputs.amount.value,
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
          }}
        />
        <CustomInput
          style={styles.row}
          invalid={!inputs.date.isValid}
          label="Date"
          textInputConfig={{
            value: inputs.date.value,
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "date"),
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
          }}
        />
      </View>
      <CustomInput
        label="Description"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          value: inputs.description.value,
          onChangeText: inputChangeHandler.bind(this, "description"),
          multiline: true,
          autoCapitalize: "none",
          //   autoCorrect: "false"
        }}
      />
      {formIsValid && <Text style={styles.errorText}>Some of your inputs are invalid</Text>}
      <View style={styles.buttons}>
        <CustomButton mode="flat" onPress={onCancel} style={styles.buttonStyle}>
          Cancel
        </CustomButton>
        <CustomButton onPress={submitHandler} style={styles.buttonStyle}>
          {submitButtonHandler}
        </CustomButton>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  errorText:{
    textAlign:"center",
    color: GlobalStyles.colors.error500,
    margin:8
  },
});
