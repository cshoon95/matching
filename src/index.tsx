import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './comp/Main';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import { createStore, applyMiddleware, combineReducers, Store } from 'redux';
import thunk from 'redux-thunk';
import data from './store/Data';
import view from './store/View';
import Register from './comp/Register';
import Login from './comp/Login';
import Header from './comp/Header';
import Footer from './comp/Footer';
import mc from './core/Mc';
import { parseCommandLine } from 'typescript';
import queryString from "query-string";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const rootReducer = combineReducers({
  data,
  view
})

export type RootState = ReturnType<typeof rootReducer>;

const store: Store = createStore(
  rootReducer,
  // composeWithDevTools(applyMiddleware(thunk))
)

const parsed = queryString.parse(window.location.search);
mc.init(store, { firstPage: parsed.firstPage as string});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <Router>
        <Routes>
          <Route path="/Main" element={<Main/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
      </Router>
      <Footer/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
