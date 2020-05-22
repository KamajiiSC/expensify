import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 250, createdAt: 5}));
store.dispatch(addExpense({description: 'Gas bill', amount: 100, createdAt: 10}));

console.log(store.getState());

setTextFilter('water');

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
console.log(visibleExpenses);


ReactDOM.render(<AppRouter />, document.getElementById('app'));