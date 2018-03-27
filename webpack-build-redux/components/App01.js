import React, { Component } from 'react';
import TesteSass from './styled_components/styled-sass';

class App extends React.Component {
  render() {
    return (
      <div>
        <h4>Webpack build Styled component</h4>
        <TesteSass>
          styled sass
          <div className="lalala">
          lalalalalalal
          </div>
        </TesteSass>
      </div>
    );
  }
}
export default App;