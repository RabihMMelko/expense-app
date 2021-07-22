<<<<<<< HEAD
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">LBP {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
=======
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">LBP {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
>>>>>>> 36b5f7c838ae3663c10674066f47c3eed1f11b11
