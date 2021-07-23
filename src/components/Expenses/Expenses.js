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
      (expense) => expense.date.getFullYear() == filteredYear
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
        {filteredExpenses
          .map((expense) => <ExpenseItem key={expense.id} {...expense} />)
          .sort((el1, el2) => dateSort(el1.props.date, el2.props.date))}
      </Card>
    </div>
  );
};

export default Expenses;
