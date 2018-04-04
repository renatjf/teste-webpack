import React from "react";
import TesteComponentHome from './HomeIndex';
import TesteComponent1 from './Component1';
import TesteComponent2 from './Component2';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import TesteSass from './styled_components/styled-sass';

const App = () => (

  <Router>
    <TesteSass>
      <div>
        <ul>
          <li>
            <Link to="/ComponentHome">Home (static)</Link>
          </li>
          <li>
            <Link to="/Component01">Component 01 (static)</Link>
          </li>
          <li>
            <Link to="/Component02">Component 02 (static)</Link>
          </li>
          <li>
            <Link to="/teste01">Teste 01 (dynamic)</Link>
          </li>
          <li>
            <Link to="/teste02">Teste 02 (dynamic)</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/ComponentHome" component={ComponentHome} />
          <Route path="/Component01" component={Component01} />
          <Route path="/Component02" component={Component02} />
          <Route path="/:load" component={LoadMenu} />
        </Switch>
      </div>
    </TesteSass>
  </Router>
);

const ComponentHome = () => <div className="novaclass"><TesteComponentHome /></div>;
const Component01 = () =>  <TesteComponent1 />;
const Component02 = () =>  <TesteComponent2 />;

const LoadMenu = ({ match }) => (
    <div className="testeclass">{match.params.load}</div>
);

export default App;
