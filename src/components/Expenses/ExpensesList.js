import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

function ExpenseList({ filterExpenses }) {
  let expesesContent = (
    <p className="expenses-list__fallback ">Not Expenses Found</p>
  );
  if (filterExpenses.length > 0) {
    expesesContent = filterExpenses.map((expense, index) => (
      <ExpenseItem key={expense.id} {...expense} />
    ));
  }
  return <div className="expenses-list">{expesesContent}</div>;
}

export default ExpenseList;
