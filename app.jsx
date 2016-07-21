import React from 'react';

var testeNome = "Renato Freitas";


class App03 extends React.Component{
	constructor(){
		super();
		this.state = {};
    this.nome = testeNome;
	}


	render(){
		return <div>
    { this.nome }
    </div>;
	}
}
export default App03;

