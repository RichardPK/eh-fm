import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from './containers/HomeContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="App">
            <Route exact path="/" component={ HomeContainer }/>
            
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
