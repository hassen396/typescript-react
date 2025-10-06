import { useState } from "react";
import ExpenseList from "./expenseTracker/components/ExpenseList";
import FilterExpense from "./expenseTracker/components/FilterExpense";
import ExpenseForm from "./expenseTracker/components/ExpenseForm";
import categories from "./expenseTracker/categories";
function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "milk", amount: 3, category: "Groceries" },
    { id: 2, description: "bread", amount: 3, category: "Groceries" },
    { id: 3, description: "honey", amount: 3, category: "desert" },
    { id: 4, description: "cake", amount: 3, category: "abc" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  interface Expense {
    description: string;
    amount: number;
    category: string;
  }
  const filteredExpenses = selectedCategory ? expenses.filter((ex) => ex.category === selectedCategory) : expenses;

  const handleDelete = (id: number) => {
    const newEx = [...expenses];
    setExpenses(newEx.filter((ex) => ex.id !== id));
  };
  const handleChange = (value: string) => {
    setSelectedCategory(value);
  };
  const handleSave = (expense: Expense) => {
    setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
  };

  return (
    <div className="flex flex-col w-full min-h-screen items-center">
      <ExpenseForm onSave={handleSave} categories={categories} />
      <FilterExpense categories={categories} onChange={handleChange} />
      <ExpenseList expenses={filteredExpenses} onDelete={handleDelete} />
    </div>
  );
}

export default App;
