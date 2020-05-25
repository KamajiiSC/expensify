import React from 'react';

const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <h2>{description}</h2>
    <p>Amount: {amount}</p>
    <p>Created at: {createdAt}</p>
  </div>
);

export default ExpenseListItem;