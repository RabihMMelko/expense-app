import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { id: "e1", title: "Groceries", amount: 29000, date: new Date() },
    {
      id: "e2",
      title: "Steam (ACC + DLCs)",
      amount: 1800000,
      date: new Date(2021, 5, 26),
    },
    { id: "e3", title: "Gym", amount: 1800000, date: new Date(2021, 6, 1) },
    {
      id: "e4",
      title: "Broasted and Tacos",
      amount: 130000,
      date: new Date(2021, 5, 1),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
    //This is our desired target state
    //This is JSX
  );
}

export default App;
