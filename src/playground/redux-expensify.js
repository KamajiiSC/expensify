import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

// ADD_EXPENSE
const addExpense = (
  { 
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0 
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense:{ 
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt
  }
});

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
    case 'ADD_EXPENSE':
      return state.concat(action.expense)
    default:
      return state;
  }

}

// Filters Reducer

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

//Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filter: filterReducer
  })
);

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addExpense({description: 'Rent', amount: 100}));

console.log(store.getState());

const demoState = {
  expenses: [{
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