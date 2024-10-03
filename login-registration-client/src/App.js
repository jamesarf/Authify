import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';

function App() {
  return (
    
      <div className="App">
        <Router>
        <Header/>
          <Routes>
              <Route path="/login" element={ <Login/> }/>
              <Route path="/register" element={<Register/>} />
              <Route path="/" element={<Home/>} />
          </Routes>
        </Router>
      </div>
    
  );
}

export default App;
