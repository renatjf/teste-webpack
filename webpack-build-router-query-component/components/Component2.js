import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TesteSass from './styled_components/styled-sass';


class App extends React.Component {
  render() {
    return (
      <div>
        <TesteSass>
        Isso é um Component 02
        </TesteSass>
        <Link to={"/"}>Home</Link>
      </div>
    );
  }
}
export default App;