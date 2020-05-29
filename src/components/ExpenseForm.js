import React from 'react';

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: ''
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({note}));
  };
  onAmountChange = (e) => {

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
            onChange={this.onDescriptionChange}
          />
          <input 
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onNoteChange}
          />
          <textarea
          placeholder="Add a nnote for your expense(optional"
          onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}