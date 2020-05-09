import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

const NotFound = () => (
  <div>
    404! - <a href='/'>Go home</a>
  </div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboard} exact={true} />
      <Route path="/create" component={AddExpense} exact={true} />
      <Route path="/edit" component={EditExpense} exact={true}/>
      <Route path="/help" component={HelpPage} exact={true}/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));