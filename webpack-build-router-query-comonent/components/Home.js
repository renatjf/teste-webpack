import React from "react";
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
            <Link to="/Home">Home (static)</Link>
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
          <Route path="/Home" component={Home} />
          <Route path="/Component1" component={Component01} />
          <Route path="/Component2" component={Component01} />
          <Route path="/:load" component={LoadMenu} />
        </Switch>
      </div>
    </TesteSass>
  </Router>
);

const Home = () => <h2>Home</h2>;
const Component01 = () =>  <TesteComponent1 />;
const Component02 = () =>  <TesteComponent2 />;
;
const LoadMenu = ({ match }) => (
  <div>
    <div class="teste">{match.params.load}</div>
  </div>
);

export default App;
