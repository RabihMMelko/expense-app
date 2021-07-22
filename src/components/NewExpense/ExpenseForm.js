import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
            <label>Title</label>
            <input type="text" placeholder = "Entrer le titre de la dépense"/>
        </div>
        <div className="new-expense__controls">
            <label>Amount</label>
            <input type="number" min = '250' step = '250'/>
        </div>
        <div className="new-expense__controls">
            <label>Date</label>
            <input type="date" min='2021-01-01'/>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
