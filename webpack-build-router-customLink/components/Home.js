import React from "react";
import HomeIndex from './HomeIndex';
import TesteComponent1 from './Component1';
import { BrowserRouter as Router, Route, Link, HashRouter} from "react-router-dom";




const App = () => (
  <HashRouter>
    <div>
      <ActiveMenuLink activeExact={true} to="/" label="Home" />
      <ActiveMenuLink to="/component1" label="Component1" />
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/component1" component={Component1} />
    </div>
  </HashRouter>
);

const ActiveMenuLink = ({ label, to, activeExact }) => (
  <Route
    path={to}
    exact={activeExact}
    children={({ match }) => (
      <div className={match ? "active" : ""}>
        {match ? "> " : ""}
        <Link to={to}>{label}</Link>
      </div>
    )}
  />
);

const Home = () => (
  <div className="testeClass">
    <HomeIndex />
  </div>
);

const Component1 = () => (
  <div>
    <TesteComponent1 />
  </div>
);

export default App;
