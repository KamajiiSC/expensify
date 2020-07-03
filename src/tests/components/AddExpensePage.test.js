import React from 'react';
import {shallow } from 'enzyme';
import { AddExpensePage} from '../../components/AddExpensePage';
import expenses from '../actions/expenses.test'

let onSubmit, history, wrapper;

beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>);
});

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');  
  expect(onSubmit).toHaveBeenCalledWith(expenses[1]);
})

