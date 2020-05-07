import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboard = () => (
  <div>
    Something to show
  </div>
);

const AddExpense = () => (
  <div>
    for AddExpense
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
     <Route path="/" component={ExpenseDashboard}/>
     <Route path="/create" component={AddExpense} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));