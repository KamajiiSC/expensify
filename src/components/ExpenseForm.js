import React from 'react';

export default class ExpenseForm extends React.Component {
  state = {
    description: ''
  }
  render() {
    return (
      <div>
        <form>
          <input 
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
          />
          <input 
            type="number"
            placeholder="Amount"
          />
          <textarea
          placeholder="Add a nnote for your expense(optional"
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}