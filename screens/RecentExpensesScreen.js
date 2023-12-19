import { Text, View, StyleSheet } from "react-native"
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput"

const RecentExpensesScreen = () =>{
    return <ExpensesOutput expensesPeriod="Last 7 Days" />
}
export default RecentExpensesScreen

const styles = StyleSheet.create({
    
})