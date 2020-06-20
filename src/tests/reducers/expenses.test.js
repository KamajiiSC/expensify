import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('should set defaulkt state', () => {
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
    id: '4',
    description: 'Netflix',
    note: '', 
    amount: 20,
    createdAt: 0
  }
  const state = expensesReducer(expenses, action);
});
// should edit expense

// should not edit if expense not found