import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return{
        count: state.count + 1
      };
    case 'DECREMENT': 
      return{
        count: state.count - 1
      };
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

unsubscribe();

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'RESET'
});
