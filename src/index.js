import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'; // storeに必要, reduxでmiddlewareを使用できるようにする
import { Provider } from 'react-redux'// 作成したstoreを全コンポーネントに渡すもの
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './index.css';
import reducer from './reducers';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk' // reduxで非同期処理を実装できる(middleware)
// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension' // reduxでデバッグしやすくするツール

const enhancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer, enhancer)

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/events/new" component={EventsNew} />
            <Route path="/events/:id" component={EventsShow} />
            <Route exact path="/" component={EventsIndex} />
            <Route exact path="/events" component={EventsIndex} />
          </Switch>
        </BrowserRouter>
        {/* <EventsIndex /> */}
        </Provider>
      </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
