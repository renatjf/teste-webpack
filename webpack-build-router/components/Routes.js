import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import App01 from './App01';
import App02 from './App02';

export default () => (
		<HashRouter>
			<div>
				<Route path="/" exact component={App01} />
				<Route path="/App02" exact component={App02} />
			</div>
		</HashRouter>
	);