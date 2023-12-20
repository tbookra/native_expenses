import { Text, View, StyleSheet } from "react-native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expensesContext";
import { getDateMinudDays } from "../utils/date";

const DAYS = 7;
const RecentExpensesScreen = () => {
  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const startDate = getDateMinudDays(today, DAYS);

    return expense.date >= startDate;
  });
  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" />
  );
};
export default RecentExpensesScreen;

const styles = StyleSheet.create({});
