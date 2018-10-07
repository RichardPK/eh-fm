import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import MainContainer from './containers/MainContainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>

        <Router>

          <div className="App">
            <MainContainer />
          </div>

        </Router>

      </React.Fragment>
    );
  }
}

export default App;
