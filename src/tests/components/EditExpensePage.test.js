import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage editExpense={editExpense} history={history}/>);
});

//should render EditExpensePage
test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});
//should handle editExpense
test('should handle editExpense', () => {

});
//should handle removeExpense