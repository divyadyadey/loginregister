import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import Welcome from './components/wel';
import Registration from './components/register';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Registration/>} />
          <Route path="/wel" element={<Welcome/>} />
        </Routes>
    </div>
  );

}
export default App;