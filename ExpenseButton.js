import { useState } from "react";
import "./ExpenseButton.css";
const ExpenseButton = () => {
  return (
    <div className="expenseBtn__Main">
      <button className="expenseBtn">Add New Expense</button>
    </div>
  );
};

export default ExpenseButton;
