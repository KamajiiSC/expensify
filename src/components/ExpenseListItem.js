import React from 'react';
import { connect } from 'react-redux';

const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <h2>{description}</h2>
    <p>Amount: {amount}</p>
    <p>Created at: {createdAt}</p>
    <button>Remove</button>
  </div>
);

export default connect()(ExpenseListitem);