import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEdit, setEdit] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const formData = {
      ...enteredExpenseData,
      id: "e" + Math.random().toString(),
    };
    props.onAddExpense(formData);
    setEdit(false);
  };

  const editHandler = () => {
    setEdit(true);
  };

  const hideFormHandler = () => {
    setEdit(false)
  }

  console.log(isEdit)

  return (
    <div className="new-expense">
      {!isEdit && <button onClick={editHandler}>Add New Expense</button>}
      {isEdit && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
      onCancel = {hideFormHandler}/>}
    </div>
  );
};

export default NewExpense;
