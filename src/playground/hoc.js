// Higher Order Components - component that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const info = (props) => {
  <div>
    <h1>info</h1>
    <p>The info is: {props.info}</p>
  </div>
}

