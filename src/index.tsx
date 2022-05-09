import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import { createStore, applyMiddleware, combineReducers, Store } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './store/Data';
import viewReducer from './store/View';
import Register from './comp/Register';
import mc from './core/Mc';
import { parseCommandLine } from 'typescript';
import queryString from "query-string";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const rootReducer = combineReducers({
  dataReducer,
  viewReducer
})

export type RootState = ReturnType<typeof rootReducer>;

const store: Store = createStore(
  rootReducer,
  // composeWithDevTools(applyMiddleware(thunk))
)

const parsed = queryString.parse(window.location.search);
mc.init(store, { firstPage: parsed.firstPage as string});
debugger
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
      <Register />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
