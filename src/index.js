import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { TodoList } from './containers';
import './index.scss';

ReactDOM.render(
  <React.Fragment>
      <Provider store={store}>
          <TodoList />
      </Provider>
  </React.Fragment>,
  document.getElementById('root')
);