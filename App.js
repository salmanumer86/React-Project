import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenese = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Track My Expenses!</h2>
      <ExpenseItem
        title={expenese[0].title}
        amount={expenese[0].amount}
        date={expenese[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenese[1].title}
        amount={expenese[1].amount}
        date={expenese[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenese[2].title}
        amount={expenese[2].amount}
        date={expenese[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenese[3].title}
        amount={expenese[3].amount}
        date={expenese[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
