import { addExpense, editEpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
});

test('should set an edit existing expense action object', () => {
  const action = editExpense({ id: '12555'}, { note: 'Hello' })
});