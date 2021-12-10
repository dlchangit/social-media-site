import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Header';
import Home from './pages/Home';
import Friends from './pages/Friends';
import { setUserData } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '.';


function App() {
  const dispatch = useDispatch();
  // const userData = useSelector((state:RootState) => state.userData);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=200').then(response => response.json())
    .then((response) => {
     dispatch(setUserData(response.results));
    })
  }, [])

  
  return (
    <Router>
      <div>
        <Header />

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
