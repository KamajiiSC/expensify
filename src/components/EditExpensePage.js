import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm'
import { removeExpense, addExpense } from '../actions/expenses';
import { editExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
  render() {
    return(
      <div>
        <ExpenseForm 
          expense={props.expense}
          onSubmit={(expense) => {
            props.dispatch(editExpense(props.expense.id, expense));
            props.history.push('/');
          }}
        />
        <button 
          onClick={() => {
            props.dispatch(removeExpense({ id: props.expense.id }));
            props.history.push('/');
          }}
          >Remove
        </button>
      </div>
    );
  }
};


const mapStateToProps = (state, props) => {
  return{ 
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch) => ({
  editExpense: () => dispatch(editExpense(expense)),
  removeExpense: () => dispatch(removeExpense(expense))
});

export default connect(mapStateToProps)(EditExpensePage);