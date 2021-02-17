import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import * as serviceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/RootReducer";
import thunk from "redux-thunk";

import App from "./App";
import "./index.scss";
import "swiper/swiper.scss";
import ChatangoPage from "./containers/chatango-page/ChatangoPage";
import history from "./history";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(applyMiddleware(routerMiddleware(history), thunk))
);

render(
  <CookiesProvider>
    <Router>
      <Provider store={store}>
        <div className="App" id="app">
          <Switch>
            <Route path="/chat" exact>
              <ChatangoPage />
            </Route>
            <Route render={() => <App />} />
          </Switch>
        </div>
      </Provider>
    </Router>
  </CookiesProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
