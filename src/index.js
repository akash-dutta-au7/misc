import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
// import store from './redux/store';
import { createStore } from 'redux';
import { incrementNumber } from './redux/actions';
import rootReducer from './redux/reducers';

const store = createStore(rootReducer);

// store.subscribe(() => console.log('Store', store.getState()));

// store.dispatch(incrementNumber(store.getState));
// store.dispatch(incrementNumber());
// store.dispatch(incrementNumber());
// store.dispatch(incrementNumber());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
