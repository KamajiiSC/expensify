import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import React from 'react';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import ExpenseDashboard from '../components/ExpenseDashboard';
import Header from '../components/Header.js';
import HelpPage from '../components/HelpPage';

const NotFound = () => (
  <div>
    404! - <Link to='/'>Go home</Link>
  </div>
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
