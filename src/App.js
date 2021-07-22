import Expenses from "./components/Expenses/Expenses";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Groceries",
      date: new Date(2021, 6, 21),
      amount: 29000,
    },
    { id: "e2", title: "Gym", date: new Date(2021, 6, 1), amount: 1800000 },
    {
      id: "e3",
      title: "Steam (ACC+DLCs)",
      date: new Date(2021, 6, 6),
      amount: 2000000,
    },
    {
      id: "e4",
      title: "Tacos and Broasted",
      date: new Date(2021, 5, 29),
      amount: 130000,
    }
  ];

  return (
    <div>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
