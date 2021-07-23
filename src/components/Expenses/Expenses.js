import React, {useState} from "react";
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


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilterYear={changeFilterYearHandler}
         selected = {filteredYear}/>
        {props.expenses.map((expense) => (
          <ExpenseItem key={expense.id} {...expense} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
