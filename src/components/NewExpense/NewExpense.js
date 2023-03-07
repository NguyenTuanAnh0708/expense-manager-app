import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense({ addExpense }) {
  const onSaveExpense = (eteredExpense) => {
    const expenseData = {
      ...eteredExpense,
      id: Math.random().toString(),
    };
    addExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={onSaveExpense} />
    </div>
  );
}

export default NewExpense;
