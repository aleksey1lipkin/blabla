import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Main from './components/Main';
import About from './components/About';
import Home from './components/Home';


const App = () => (
    <Router>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/report">go to report page</Link>
          </li>
          <li>
            <Link to="/about/123123">go to about page</Link>
          </li>
        </ul>
        <Route path="/" component={Home} exact />
        <Route path="/report" component={Main} exact />
        <Route path="/about/:id" component={About} exact />
      </div>
    </Router>
)

export default App;