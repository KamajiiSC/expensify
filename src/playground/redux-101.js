import { createStore } from 'redux';

const store = createStore((state = { count: 0 }) => {
  return state;
});

console.log(store.getState());

store.dispatch({
  type: 'INCREMENT'
});

console.log(store.getState());