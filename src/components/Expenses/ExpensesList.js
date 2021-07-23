import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const dateSort = (date1, date2) => {
    return date2 - date1;
  };
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        Sweet! No expenses this year (yet)
      </h2>
    );
  } else {
    const itemList = props.items
      .map((expense) => <ExpenseItem key={expense.id} {...expense} />)
      .sort((el1, el2) => dateSort(el1.props.date, el2.props.date));

    return <ul className="expenses-list">{itemList}</ul>;
  }
};

export default ExpensesList;
