import React, { Component } from 'react';
import TesteSass from './styled_components/styled-sass';

class App extends React.Component {
  render() {
    return (
      <div>        
        <TesteSass>
          Estou no component 02
        </TesteSass>
      </div>
    );
  }
}
export default App;