import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
});

test('should set an edit existing expense action object', () => {
  const action = editExpense('12555', {note: 'Hello'})
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '12555',
    updates:{
      note: 'Hello'
    }
  })
});

test('Should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'Last months rent'
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense:  {
      ...expenseData,
      id: expect.any(String)
    }
  })
});

test('Should setup add expense action object with default values', () => {

});