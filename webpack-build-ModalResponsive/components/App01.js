import React, { Component } from 'react';
import App02 from './App02';
import ModalResponsive from './Modal';
import Modal from './Modal';

class App extends Component {

  componentDidMount() {
    $('h4').addClass('teste');
  }
  render() {
    return (
      <div>
        <h4>Webpack build Modal Responsive</h4>
        <h1>Componente App 01</h1>
        <App02 />
        <Modal />
      </div>
    );
  }
}
export default App;