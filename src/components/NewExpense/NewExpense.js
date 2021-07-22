import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const formData = {
      ...enteredExpenseData,
      id: "e" + Math.random().toString(),
    };
    props.onAddExpense(formData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm
        //Custom trigger for when anything
        //in child element happens
        onSaveExpenseData={saveExpenseDataHandler}
      />
    </div>
  );
};

export default NewExpense;
