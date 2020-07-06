import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates'
import { sortByDate, sortByAmount, setTextFilter, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component { 
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  };
  onTextChange = (e) => {
    this.props.dispatch(setTextFilter(e.target.value))
  };
  onSortByChange = (e) => {
    if(e.target.value === 'date'){
      this.props.dispatch(sortByDate());
    }else if(e.target.value === 'amount'){
      this.props.dispatch(sortByAmount());
    }
  };

  render() {
    return (
    <div>
      <input type='text' value={this.props.filter.text} 
      onChange={this.onTextChange}
    />
      <select 
      value={this.props.filter.sortBy}
      onChange = {this.onSortByChange}>
        <option value='date'>Date</option>
        <option value='amount'>Amount</option>
      </select>
      <DateRangePicker 
        startDateId='DateSelector'
        startDate={this.props.filter.startDate}
        endDateId='EndDateSelector'
        endDate={this.props.filter.endDate}
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={() => false}
      />
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    filter: state.filter
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);