import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2] ]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense:{
      id: '4',
      description: 'Netflix',
      note: '', 
      amount: 20,
      createdAt: 0
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2], {   
    id: '4',
    description: 'Netflix',
    note: '', 
    amount: 20,
    createdAt: 0
  }])
});

test('should edit an exisiting expense',() => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      amount: 900
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ {
    id: '1',
    description: 'gum',
    note: '', 
    amount: 900,
    createdAt: 0
  }, expenses[1], expenses[2] ])
});

test('should not edit an expense if it expense not found',() => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: -3,
    updates: {
      amount: 900
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[1], expenses[2] ])
});