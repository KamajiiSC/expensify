import moment from 'moment';
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
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit Card',
  note: '', 
  amount: 4500,
  createdAt: moment(0).add(4, 'days').valueOf()
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
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]])
});

// should filter by endDate
test('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0)
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0]]);
});
// should sort by date

// should sort by amount