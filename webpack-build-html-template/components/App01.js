import React, { Component } from 'react';
import App02 from './App02';

class App extends Component {

  componentDidMount() {
    $('h4').addClass('teste');
  }
  render() {
    return (
      <div>
        <h4>Webpack build Html Template</h4>
        <h1>Componente App 01</h1>
        <App02 />
      </div>
    );
  }
}
export default App;