import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = () => (
  <div>
    <h1>Expense List</h1>
  </div>
);

const ConnectedExpenseList = connect((state) => {
  return{
    expenses: state.expenses
  }
})(ExpenseList);

export default ConnectedExpenseList;