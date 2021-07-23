import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const changeFilterYearHandler = (enteredYear) => {
    console.log(enteredYear);
  };

  return (
    <div>
      <ExpensesFilter onChangeFilterYear={changeFilterYearHandler} />
      <Card className="expenses">
        {props.expenses.map((expense) => (
          <ExpenseItem key={expense.id} {...expense} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
