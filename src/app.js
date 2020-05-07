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

const routes = (
  <BrowserRouter>
    <Route path="/" component={ExpenseDashboard}/>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));