import Expenses from "./Expenses.js";
import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";
import "./Expenses.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description"></div>
      <h2>{props.title}</h2>
      <div className="expense-item__price">
        <Expenses amount={props.amount} />
      </div>
    </div>
  );
}

export default ExpenseItem;
