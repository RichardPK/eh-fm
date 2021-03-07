import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { render } from "react-dom";
import { CookiesProvider } from "react-cookie";
import * as serviceWorker from "./registerServiceWorker";
import App from "./App";
import "./index.scss";
import "swiper/swiper.scss";
import ChatangoPage from "./containers/chatango-page/ChatangoPage";

render(
  <CookiesProvider>
    <Router>
      <div className="App" id="app">
        <Switch>
          <Route path="/chat" exact>
            <ChatangoPage />
          </Route>
          <Route render={() => <App />} />
        </Switch>
      </div>
    </Router>
  </CookiesProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
