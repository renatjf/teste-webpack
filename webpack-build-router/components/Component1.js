import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TesteSass from './styled_components/styled-sass';


class App extends React.Component {
  render() {
    return (
      <div>
        <h4>Webpack build React Router</h4>
        <TesteSass>
          Component 01
        </TesteSass>
        <Link to={"/Component02"}>Component 02</Link>
      </div>
    );
  }
}
export default App;