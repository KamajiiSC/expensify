import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage editExpense={editExpense} history={history}/>);
});

//should render EditExpensePage
test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});
//should handle editExpense
test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenCalledWith(expenses[1]);
});
//should handle removeExpense