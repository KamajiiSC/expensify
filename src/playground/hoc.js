// Higher Order Components - component that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => {

  }
};

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<Info info='These are deatils'/>, document.getElementById('app'));