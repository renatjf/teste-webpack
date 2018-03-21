import React, { Component } from 'react';
import styled from 'styled-components';
import App02 from './App02';

const rem = (number) => {
  let tmp = number;
  tmp = (typeof (number) === 'string' && number.indexOf('px')) ? number.replace('px', '') : number;
  tmp = parseFloat(tmp) / 16;
  return `${tmp}rem`;
};

const teste = {
  color: "#cccccc",
  fontSize: rem(50)
}

const Title = styled.div`
  font-size: 1.5em;
  color: purple;
  
  &.primary{
  color: blue;
}

.lala {
  color: black;
  font-size: 30px;
}
li {
  display: block;
}
`

const descricao = [
  'Funcao map 1',
  'Funcao map 2',
  'Funcao map 3'
]



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
        <div style={teste}>
          aqui rola o style component
          <Title className="primary">Titulo
          <div className="lala">
              teste
          </div>
          </Title>
        </div>
        <ul>
          {descricao.map(
            function (list) {
              return <li>{list}</li>
            }
          )}</ul>
      </div>
    );
  }
}
export default App;