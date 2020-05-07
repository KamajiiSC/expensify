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

const EditExpense = () => (
  <div>
    Edit your expenses
  </div>
);

const HelpPage = () => (
  <div>
    need help?
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
     <Route path="/" component={ExpenseDashboard} exact={true} />
     <Route path="/create" component={AddExpense} exact={true} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));