import { StyleSheet, Text, View } from "react-native";
import CustomInput from "./CustomInput";
import { useState } from "react";
import CustomButton from "../UI/CustomButton";

const ExpenseForm = ({onCancel,onSubmit,submitButtonHandler}) => {
    const [inputValues,setInputValues] = useState({
        amount:"",
        date:"",
        description:""
    })
  const inputChangeHandler = (inputIdentifier,enteredAmount) => {
    setInputValues((prev)=>({
        ...prev,
        [inputIdentifier]:enteredAmount
    }))
  };
  const submitHandler = () => {
    const expenseData = {
        amount:+inputValues.amount,
        date: new Date(inputValues.date),
        description: inputValues.description
    }
    onSubmit(expenseData)
  }
  return (
    <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <CustomInput
          label="Amount"
          style={styles.row}
          textInputConfig={{
              value:inputValues.amount,
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this,"amount"),
          }}
        />
        <CustomInput
          style={styles.row}
          label="Date"
          textInputConfig={{
            value:inputValues.date,
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this,"date"),
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
          }}
        />
      </View>
      <CustomInput
        label="Description"
        textInputConfig={{
            value:inputValues.description,
          onChangeText: inputChangeHandler.bind(this,"description"),
          multiline: true,
          autoCapitalize: "none",
          //   autoCorrect: "false"
        }}
      />
      <View style={styles.buttons}>
        <CustomButton
          mode="flat"
          onPress={onCancel}
          style={styles.buttonStyle}
        >
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
    form:{
        marginTop:50.
    },
    title:{
        fontSize:24,
        fontWeight:"bold",
        color:"white",
        marginVertical:24,
        textAlign:"center"
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
});
