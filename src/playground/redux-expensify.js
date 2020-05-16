import { createStore, combineReducers } from 'redux';

// ADD_EXPENSE
//REMOVE_EXPENSE
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) =>  {
  switch(action.type) {
    default:
      return state;
  }

}

//Store Creation
const store = createStore(expensesReducer);

console.log(store.getState());

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