import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //State per Value
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //One State Approach (More frequent)
  // const [userInput, setUserInput] = useState({
  //   eneteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    //always latest state
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event
    //   };
    // });
    // };
    /*
     The below is not best practice because
      state updates are scheduled.
     This means I might be using an outdated
       state
    */
    /*setUserInput({
      ...userInput,
      \*Spread: 
      Fetching previous state array to 
      preserve all values for new state
      Not a good practice because:
        I depend on previous state
      Whenever we update a state
        depending on previous state
        we should not do like this.*\
      
      enteredTitle: event.target.value
      \*If I do this only, 
      other values will be lost
      => it should come after spread*\
    })*/
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    /*Disabling default browser behaviour
      of reloading page on Submit
    */
    event.preventDefault();

    //fetching data from state
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    //Executing a function from parent
    // to pass data to parent
    props.onSaveExpenseData(expenseData);
    
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            placeholder="Entrer le titre de la dépense"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            placeholder="Valeur dans la devise"
            value={enteredAmount}
            min="250"
            step="250"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
