import React from "react";
import "./ExpenseItem.css";
import Card from "../Ux/Card";
import PropTypes from "prop-types";
import ExpenseDate from "./ExpenseDate";
ExpenseItem.propTypes = {};

function ExpenseItem({ date, title, amount }) {
  return (
    <Card className="expense-item card-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
