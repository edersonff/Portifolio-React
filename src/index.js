import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
 } from 'react-router-dom';
import Home from './Home/Home';
import Error from './Error/Error';
import Header from './Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='*' element={<Error />}/>
    </Routes>
  </Router>
);
