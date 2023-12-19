import { Text, View, StyleSheet } from "react-native"
import ExpensesSummery from "./ExpensesSummery"
import ExpensesList from "./ExpensesList"
import { GlobalStyles } from "../../constants/styles"

const DUMMY_EXPENSES = [
    {
        id:'e1',
        description: "A pair of shoes",
        amount: 59.99,
        date: new Date('2023-11-1')
    },
    {
        id:'e2',
        description: "A pair of boots",
        amount: 159.99,
        date: new Date('2023-12-1')
    },
    {
        id:'e3',
        description: "A shirt",
        amount: 39.99,
        date: new Date('2022-11-1')
    },
    {
        id:'e4',
        description: "banana",
        amount: 5.99,
        date: new Date('2023-11-6')
    },
    {
        id:'e5',
        description: "A book",
        amount: 19.99,
        date: new Date('2021-02-22')
    },
    {
        id:'e6',
        description: "A pair of shoes",
        amount: 59.99,
        date: new Date('2023-11-1')
    },
    {
        id:'e7',
        description: "A pair of boots",
        amount: 159.99,
        date: new Date('2023-12-1')
    },
    {
        id:'e8',
        description: "A shirt",
        amount: 39.99,
        date: new Date('2022-11-1')
    },
    {
        id:'e9',
        description: "banana",
        amount: 5.99,
        date: new Date('2023-11-6')
    },
    {
        id:'e10',
        description: "A book",
        amount: 19.99,
        date: new Date('2021-02-22')
    },
]

const ExpensesOutput = ({expenses, expensesPeriod}) =>{
    return <View style={styles.container}>
        <ExpensesSummery expenses={DUMMY_EXPENSES} expensesPeriod={expensesPeriod} />
        <ExpensesList expenses={DUMMY_EXPENSES}  />
    </View>
}
export default ExpensesOutput

const styles = StyleSheet.create({
    container:{
        // padding:24,
        paddingHorizontal:24,
        paddingBottom:4,
        paddingTop:24,
        backgroundColor: GlobalStyles.colors.primary700,
        flex:1
    }
})