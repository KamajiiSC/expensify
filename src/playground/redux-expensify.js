import { createStore, combineReducers } from 'redux';

const demoState = {
  expense: [{
    id: 'poihasfj',
    description: 'January Rent',
    note: 'This was final payment for address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};