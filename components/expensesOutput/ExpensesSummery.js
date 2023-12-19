import { Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const ExpensesSummery = ({ expensesPeriod, expenses }) => {
  const expensesSum = expenses
    ? expenses.reduce((sum, expense) => {
        return sum + expense.amount;
      }, 0)
    : 0;
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{expensesPeriod}</Text>
      <Text style={styles.sum}>{expensesSum.toFixed(2)}$</Text>
    </View>
  );
};
export default ExpensesSummery;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
