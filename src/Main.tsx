import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store: Store = createStore(
  //rootReducer,
  composeWithDevTools(applyMiddleware(thunk));
)

function Main() {
  return (
    <div className="App">
      sdad
    </div>
  );
}

export default Main;
