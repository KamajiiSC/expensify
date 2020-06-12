import selectExpenses from '../../selectors/expenses';

const expenses = [{
  id: '1',
  description: 'gum',
  note: '', 
  amount: 195,
  createdAt: 0
}, {
  id: '2',
  description: 'rent',
  note: '', 
  amount: 19500,
  createdAt: -1000
}, {
  id: '3',
  description: 'Credit Card',
  note: '', 
  amount: 4500,
  createdAt: 1000
}]

test('should filter by test value', ()=> {
  const filters = {
    text: 'e'
  };
  const result = selectExpenses();
});