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
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please do not share!</p>}
      <WrappedComponent {...props}/>
    </div>
  )
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info='These are deatils'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info='These are deatils'/>, document.getElementById('app'));