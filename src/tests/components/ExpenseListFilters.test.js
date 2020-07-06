import React from 'react';
import { shallow } from 'enzyme';;
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount,setStartDate, setEndDate;