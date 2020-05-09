import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
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
    404! - <Link to='/'>Go home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <Link to='/'>Dashboard</Link>
    <Link to='/create'>Create Expense</Link>
    <Link to='/edit'>Edit Expense</Link>
    <Link to='/help'>Help</Link>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboard} exact={true} />
        <Route path="/create" component={AddExpense} exact={true} />
        <Route path="/edit" component={EditExpense} exact={true}/>
        <Route path="/help" component={HelpPage} exact={true}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
 
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));