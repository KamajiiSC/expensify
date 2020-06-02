import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
     <h2>{description}</h2>
    </Link>
    <p>Amount: {amount}</p>
    <p>Created at: {createdAt}</p>
    <button onClick={() => (
      dispatch(removeExpense({id}))
    )}>
    Remove</button>
  </div>
);

export default connect()(ExpenseListItem);