import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

const AddExpensePage = () => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
      onSubmit={(expense) => {
        console.log(expense);
      }}
    />
  </div>
);

export default connect()(AddExpensePage);