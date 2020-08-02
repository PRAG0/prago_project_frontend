import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { BrowserRouter } from "react-router-dom";
import rootReducer, { rootSaga } from "./redux/modules";
import { tempSetAuth } from './redux/modules/auth';
import {token} from  './lib/api/client'
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware) // allows redux devtools to watch sagas
);

function loadUser() {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("USER: "+ localStorage.getItem("user"));
    if (!user) return; // 로그인 상태가 아니라면 아무것도 안함

    store.dispatch(tempSetAuth(user));
    console.log(user.token);
    token(user.token);
  } catch (e) {
    console.log("localStorage is not working");
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
