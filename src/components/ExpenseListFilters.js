import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input type='text' value={props.filter.text} onChange={(e) => (
      props.dispatch(setTextFilter(e.target.value))
    )}/>
    <select>
      <option>Date</option>
      <option>Amount</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return{
    filter: state.filter
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);