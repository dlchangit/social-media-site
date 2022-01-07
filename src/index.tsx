import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
import GlobalStyle from "./assets/styles/globalStyle";

export const store = createStore(
  reducer
);

export type RootState = ReturnType<typeof store.getState>

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
