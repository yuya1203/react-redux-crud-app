import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'; // storeに必要, reduxでmiddlewareを使用できるようにする
import { Provider } from 'react-redux'// 作成したstoreを全コンポーネントに渡すもの
import './index.css';
import reducer from './reducers';
import App from './components/events_index';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk' // reduxで非同期処理を実装できる(middleware)

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
