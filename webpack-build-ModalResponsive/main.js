import React from 'react';
import ReactDOM from 'react-dom';
import App01 from './components/App01';

//include sass
require('./assets/sass/main.scss');

// const App = require('./components/App');

// Hello('Webpack', document.querySelector('h1'));

ReactDOM.render(<App01 />, document.getElementById('app'));