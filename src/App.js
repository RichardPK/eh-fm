import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainContainer from './containers/MainContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="App">
            <Route exact path="/" component={ MainContainer }/>

          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
