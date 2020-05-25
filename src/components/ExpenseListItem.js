import React from 'react';

const ExpenseListItem = (props) => (
  <div>
    <h2>{props.expenses.description}</h2>
    <p>Amount: {props.expenses.amount}</p>
    <p>Created at: {props.expenses.createdAt}</p>
  </div>
);

export default ExpenseListItem;