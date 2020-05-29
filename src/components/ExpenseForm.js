import React from 'react';

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: ''
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onTextAreaChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({note}));
  };
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
            type="number"
            placeholder="Amount"
          />
          <textarea
          placeholder="Add a nnote for your expense(optional"
          onChange={this.onTextAreaChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}