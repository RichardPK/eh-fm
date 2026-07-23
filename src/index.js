import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { render } from "react-dom";
import { CookiesProvider } from "react-cookie";
import * as serviceWorker from "./registerServiceWorker";
import App from "./App";
import "./index.scss";
import "swiper/swiper.scss";
import ChatangoPage from "./containers/chatango-page/ChatangoPage";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";

render(
  <ErrorBoundary>
    <CookiesProvider>
      <Router>
        <div className="App" id="app">
          <Switch>
            <Route path="/chat" exact>
              <ChatangoPage />
            </Route>
            <Route>
              <App />
            </Route>
          </Switch>
        </div>
      </Router>
    </CookiesProvider>
  </ErrorBoundary>,
  document.getElementById("root")
);

serviceWorker.unregister();
