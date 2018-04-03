import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TesteSass from './styled_components/styled-sass';


class App extends React.Component {
  render() {
    return (
      <div>
        <h4>Webpack build React Router</h4>
        <TesteSass>
          App 02 <br/>
          <Link to="/">App01</Link>
        </TesteSass>
      </div>
    );
  }
}
export default App;