import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

//include sass
require('./assets/sass/main.scss');

// const App = require('./components/App');

// Hello('Webpack', document.querySelector('h1'));

ReactDOM.render(<Home />, document.getElementById('app'));