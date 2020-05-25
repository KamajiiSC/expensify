import React from 'react';

const ExpenseListItem = (props) => (
  <div>
    <h2>{props.expense.description}</h2>
    <p>Amount: {props.expense.amount}</p>
    <p>Created at: {props.expense.createdAt}</p>
  </div>
);

export default ExpenseListItem;