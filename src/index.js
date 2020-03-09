import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './Components/App';
import tasks from './reducers';
import './index.css';



const store = createStore(
  tasks,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)