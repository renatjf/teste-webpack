import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TesteSass from './styled_components/styled-sass';


class App extends React.Component {
  render() {
    return (
      <div>
        Webpack Build navigation Router
        <TesteSass>
          Home
        </TesteSass>
        <Link to={"/Component01"}>Component 01</Link>
      </div>
    );
  }
}
export default App;