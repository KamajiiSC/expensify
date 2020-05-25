import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {
      props.expenses.map((expense) => (
        <ExpenseListItem 
        expense={expense}
        />
      ))
    }
  </div>
);

const mapStateToProps = (state) => {
  return{
    expenses: state.expenses
  }
}

export default connect(mapStateToProps)(ExpenseList);