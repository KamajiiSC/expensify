import expensesReducer from '../../reducers/expenses';

test('should set defaulkt state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});