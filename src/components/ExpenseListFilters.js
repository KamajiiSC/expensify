import React from 'react';
import { connect } from 'react-redux';

const ExpenseListFilters = () => (
  <div>
    <input type='text' />
  </div>
);

const mapStateToPage = (state) => {
  return{
    filters: state.filters
  };
};

export default connect()(ExpenseListFilters);