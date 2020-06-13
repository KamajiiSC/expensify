import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

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
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[1]])
});

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  }
});