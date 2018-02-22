import React, { Component } from 'react';
import App02 from './App02';

const rem = (number) => {
  let tmp = number;
  tmp = (typeof (number) === 'string' && number.indexOf('px')) ? number.replace('px', '') : number;
  tmp = parseFloat(tmp) / 16;
  return `${tmp}rem`;
};

const teste = {
  color: "black",
  fontSize: rem(50)
}

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
        <div style={teste}>aqui rola o style component</div>
      </div>
    );
  }
}
export default App;