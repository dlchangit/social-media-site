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
import User from './pages/User';
import { setUserData } from './actions';
import { useDispatch } from 'react-redux';


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
        <Route path="/user/*" element={<User/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
