import React, { Component } from 'react';
import App01 from './App01';
import App02 from './App02';

class Component01 extends React.Component {
  render() {
    return (
      <div {...this.props}>
        <App01 />
      </div>
    );
  }
}
class Component02 extends React.Component {
  render() {
    return (
      <div {...this.props}>
        <App02 />
      </div>
    );
  }
}


class Button extends React.Component {
  render() {
    return (
      <button {...this.props}>
        Component01
      </button>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      clicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true
    });
  }

  render() {
    return (
      <div>
        <Button  onClick={this.handleClick} />
        {this.state.clicked ? <Component01 /> : null}
      </div>
      
    );
  }
};

export default App;