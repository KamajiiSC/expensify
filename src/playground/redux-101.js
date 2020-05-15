import { createStore } from 'redux';

const incrementCount = ({ incrementBy } = {}) => ({
  type: 'INCREMENT',
  incrementBy: typeof incrementBy === "number" ? incrementBy : 1
});

const store = createStore((state = { count: 0 }, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return{
        count: state.count + action.incrementBy
      };
    case 'DECREMENT': 
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return{
        count: state.count - decrementBy
      };
    case 'SET':
      return {
        count: action.count
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

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 5
});
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
