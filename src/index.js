import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import App from './App';
const store = configureStore()
// console.log(store.getState())
store.subscribe(() => {
  console.log(store.getState())
})
const ele = (<Provider store={store}>
  <App />
</Provider>)

ReactDOM.render(

  ele
  ,
  document.getElementById('root')
);

