import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './comp/Main';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers, Store } from 'redux';
import thunk from 'redux-thunk';
import data from './store/Data';
import view from './store/View';
import Register from './comp/Register';
import Login from './comp/Login';
import Header from './module/Header';
import mc from './core/Mc';
import queryString from "query-string";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { store } from './store/Store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const rootReducer = combineReducers({
  data,
  view
})

export type RootState = ReturnType<typeof rootReducer>;


mc.init(store);

const isMobile = mc.getState('isMobile');

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
