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
import Projects from './Projects/Projects';
import Project from './Projects/Project/Project';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/projetos' element={<Projects />}/>
      <Route path='/projetos/:id' element={<Project />}/>
      <Route path='*' element={<Error />}/>
    </Routes>
  </Router>
);
