import { useState } from "react";
import Card from "../Ux/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpensesList";
import "./Expenses.css";
import ExpenseChart from "./ExpenseChart";
function Expenses({ expenses }) {
  const [filter, setFilter] = useState("2019");
  const changeFillter = (filter) => {
    setFilter(filter);
  };
  const filterExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filter
  );
  return (
    <Card className="card-wapper">
      <ExpenseChart expenses={filterExpenses} />
      <ExpensesFilter selected={filter} changeFillterHandeler={changeFillter} />
      <ExpenseList filterExpenses={filterExpenses} />
    </Card>
  );
}

export default Expenses;
