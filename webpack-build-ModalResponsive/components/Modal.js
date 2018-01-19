import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

class App extends Component {
  state = {
    open: false,
  };
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal}>Clique para abrir o Modal</button>
        <Modal open={open} onClose={this.onCloseModal} little>
          <h2>Olá eu sou o Modal aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h2>
        </Modal>
      </div>
    );
  }
}
export default App;