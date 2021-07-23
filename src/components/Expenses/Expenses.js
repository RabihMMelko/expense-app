import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

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

  let expensesContent = <p>You don't have any expenses for the year</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses
      .map((expense) => <ExpenseItem key={expense.id} {...expense} />)
      .sort((el1, el2) => dateSort(el1.props.date, el2.props.date));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilterYear={changeFilterYearHandler}
          selected={filteredYear}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
