import { useContext, useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import CustomButton from "../components/UI/CustomButton";
import { ExpensesContext } from "../store/expensesContext";
import ExpenseForm from "../components/manageExpense/ExpenseForm";

const ManageExpenseScreen = ({ route, navigation }) => {
  const expenseCtx = useContext(ExpensesContext);
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const deleteExpense = () => {
    expenseCtx.deleteExpense(expenseId);
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = () => {
    if(isEditing){
        expenseCtx.updateExpense(expenseId,{
            description:"test!!!",
            amount: 29.99,
            date: new Date('2023-12-18')
        })
    } else {
        expenseCtx.addExpense({
            description:"test!!!",
            amount: 29.99,
            date: new Date('2023-12-18')
        })
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
        <ExpenseForm  />
      <View style={styles.buttons}>
        <CustomButton
          mode="flat"
          onPress={cancelHandler}
          style={styles.buttonStyle}
        >
          Cancel
        </CustomButton>
        <CustomButton onPress={confirmHandler} style={styles.buttonStyle}>
          {isEditing ? "Update" : "Add"}
        </CustomButton>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpense}
          />
        </View>
      )}
    </View>
  );
};
export default ManageExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
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
