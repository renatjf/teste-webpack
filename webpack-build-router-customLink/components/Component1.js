import React, { Component } from 'react';
import {Home} from './Home';
import TesteSass from './styled_components/styled-sass';


class App extends React.Component {
  render() {
    return (
      <div>
        <TesteSass>
          Isso é um Component 01 <br/>
          <a href="#" onClick={Home}>teste</a>
        </TesteSass>
      </div>
    );
  }
}
export default App;