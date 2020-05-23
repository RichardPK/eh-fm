import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router';

import { render } from 'react-dom';

import { Provider } from 'react-redux';

import { CookiesProvider } from 'react-cookie';

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/RootReducer';
import thunk from 'redux-thunk';

import Main from './containers/main/Main';
import './index.scss';
import 'swiper/swiper.scss';
import * as serviceWorker from './registerServiceWorker';
import history from './history';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(applyMiddleware(routerMiddleware(history), thunk))
);

render(
  <CookiesProvider>
    <Router>
      <Provider store={store}>
        <div className="App">
          <Main />
        </div>
      </Provider>
    </Router>
  </CookiesProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
