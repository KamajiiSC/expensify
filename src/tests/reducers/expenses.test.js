import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('should set defaulkt state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});