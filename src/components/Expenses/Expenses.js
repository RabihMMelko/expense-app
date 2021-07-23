import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const currentYear = new Date().getFullYear();
  const [filteredYear, setFilteredYear] = useState(currentYear);

  const changeFilterYearHandler = (enteredYear) => {
    setFilteredYear(enteredYear);
  };

  const dateSort = (date1, date2) => {
    return date2 - date1;
  };

  const filteredExpense = (expenses) => {
    return expenses.filter(
      (expense) =>
        expense.date.getFullYear().toString() === filteredYear.toString()
    );
  };

  const filteredExpenses = filteredExpense(props.expenses);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilterYear={changeFilterYearHandler}
          selected={filteredYear}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
