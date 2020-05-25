import React from 'react';

const ExpenseListItem = (props) => (
  <div>
    <h2>{props.expenses.description}</h2>
    <p>Amount: {props.expenses.amount}</p>
  </div>
);