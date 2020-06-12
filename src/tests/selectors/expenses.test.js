import selectExpenses from '../../selectors/expenses';

const expenses = [{
  id: '1',
  description: 'gum',
  note: '', 
  amount: 195,
  createdAt: 0
}]

test('should filter by test value', ()=> {
  const result = selectExpenses();
});