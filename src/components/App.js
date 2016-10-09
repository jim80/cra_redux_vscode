import React, { Component } from 'react';
import '../css/App.css';
import DefaultContainer  from '../containers/DefaultContainer'

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Jim's default create-react-app application with redux</h2>
        </div>
        <p className="App-intro">
          It's just a rearrangement of the default C-R-A files, with the addition of a very simple redux setup
        </p>
        <DefaultContainer title="Default comp title" />
      </div>
    );
  }
}

export default App;
