import { createContext, useReducer } from "react";
export const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-11-1"),
  },
  {
    id: "e2",
    description: "A pair of boots",
    amount: 159.99,
    date: new Date("2023-12-20"),
  },
  {
    id: "e3",
    description: "A shirt",
    amount: 39.99,
    date: new Date("2022-11-1"),
  },
  {
    id: "e4",
    description: "banana",
    amount: 5.99,
    date: new Date("2023-11-6"),
  },
  {
    id: "e5",
    description: "A book",
    amount: 19.99,
    date: new Date("2021-02-22"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-11-1"),
  },
  {
    id: "e7",
    description: "A pair of boots",
    amount: 159.99,
    date: new Date("2023-12-19"),
  },
  {
    id: "e8",
    description: "A shirt",
    amount: 39.99,
    date: new Date("2022-11-1"),
  },
  {
    id: "e9",
    description: "banana",
    amount: 5.99,
    date: new Date("2023-11-6"),
  },
  {
    id: "e10",
    description: "A book",
    amount: 19.99,
    date: new Date("2021-02-22"),
  },
];
export const ExpensesContext = createContext({
  expenses: [],
  addExpenses: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id }, ...state];
    case "UPDATE":
      const updatedExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatedExpense = state[updatedExpenseIndex];
      const updatedItem = { ...updatedExpense, ...action.payload.data };
      let updatedExpenses = [...state];
      updatedExpenses[updatedExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
        console.log("here");
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

const ExpenseContextProvider = ({ children }) => {
  const [expenseState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);
  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };
  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id, data: expenseData } });
  };

  const value = {
    expenses: expenseState,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpenseContextProvider;
