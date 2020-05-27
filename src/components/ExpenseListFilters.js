import React from 'react';
import { connect } from 'react-redux';

const ExpenseListFilters = (props) => (
  <div>
    <input type='text' value={props.filter.text}/>
  </div>
);

const mapStateToProps = (state) => {
  return{
    filter: state.filter
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);