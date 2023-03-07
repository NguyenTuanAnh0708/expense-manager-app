import { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm({ onSaveExpense }) {
  const [show, setShow] = useState(false);
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const handelerTitle = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: e.target.value,
      };
    });
  };
  const handelerAmount = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: +e.target.value,
      };
    });
  };
  const handelerDate = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        date: e.target.value,
      };
    });
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      ...userInput,
      date: new Date(userInput.date),
    };
    onSaveExpense(expenseData);
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };
  const handelShow = () => {
    setShow(true);
  };
  const { title, amount, date } = userInput;
  let button = (
    <div className="new-expense__actions">
      <button type="submit" onClick={handelShow}>
        Add Expense
      </button>
    </div>
  );
  let form = (
    <form onSubmit={handlerSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" value={title} onChange={handelerTitle} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={handelerAmount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date </label>
          <input
            type="date"
            value={date}
            min="2019-01-01"
            onChange={handelerDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
  return <div>{show ? form : button}</div>;
}

export default ExpenseForm;
