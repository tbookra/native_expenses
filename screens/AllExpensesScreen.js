import { Text, View, StyleSheet } from "react-native"
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput"
import { useContext } from "react"
import { ExpensesContext } from "../store/expensesContext"

const AllExpensesScreen = () =>{
    const expensesCtx = useContext(ExpensesContext)
    return <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total" />
}
export default AllExpensesScreen

const styles = StyleSheet.create({

})