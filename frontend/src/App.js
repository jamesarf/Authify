import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    
      <div className="App">
        <Router>
        <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login-registration" element={<Home/>} />  // For github pages landing page
              <Route path="/login" element={ <ProtectedRoute redirectTo="/" requiresAuth={false}><Login/></ProtectedRoute> }/>
              <Route path="/register" element={<ProtectedRoute redirectTo="/" requiresAuth={false}><Register/></ProtectedRoute>} />
              <Route path="/about" element={<ProtectedRoute redirectTo="/" requiresAuth={true}><About/></ProtectedRoute>} />
              <Route path="/contact" element={<ProtectedRoute redirectTo="/" requiresAuth={true}><Contact/></ProtectedRoute>} />
          </Routes>
        </Router>
      </div>
    
  );
}

export default App;
