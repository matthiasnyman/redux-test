import React from 'react';
import './index.css';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './Components/App';
import tasks from './reducers';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  tasks,
  composeWithDevTools(applyMiddleware(thunk))
);


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)