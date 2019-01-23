import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import MainContainer from './containers/Main/Main';
import './styleguide.scss'

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
