import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import React from 'react';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import ExpenseDashboard from '../components/ExpenseDashboard';

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
    <NavLink to='/' activeClassName='is-active' exact={true}>Dashboard</NavLink>
    <NavLink to='/create' activeClassName='is-active'>Create Expense</NavLink>
    <NavLink to='/edit' activeClassName='is-active'>Edit Expense</NavLink>
    <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
  </header>
);

const AppRouter = () => (
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

export default AppRouter;
