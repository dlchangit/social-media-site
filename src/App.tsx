import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './Header';
import Home from './pages/Home';
import Friends from './pages/Friends';

function App() {
  return (
    <Router>
      <div>
        <Header />


        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/friends" element={<Friends/>} />
          <Route path="/random">
            {/* <Dashboard /> */}
            Dash
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
