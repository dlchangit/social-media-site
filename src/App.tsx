import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route path="/">
            {/* <Home /> */}Home
          </Route>
          <Route path="/about">
            {/* <About /> */}
            About
          </Route>
          <Route path="/dashboard">
            {/* <Dashboard /> */}
            Dash
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;