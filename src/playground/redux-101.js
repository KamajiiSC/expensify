import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ setTo } = {}) =>({
  type: 'SET',
  setTo 
});
 
const store = createStore((state = { count: 0 }, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return{
        count: state.count + action.incrementBy
      };
    case 'DECREMENT': 
      return{
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.setTo
      }
    case 'RESET':
      return {
        count: state.count = 0
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10}));
store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 5}));

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'SET',
  count: 101
});
