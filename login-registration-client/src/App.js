import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import Login from './components/Login';
// import Registration from './components/Registration';
// import Contact from './components/Contact';
// import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* <Route path="/login" component={Login} />
          <Route path="/register" component={Registration} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/havnar" component={Havnar} /> */}
          <Route path="/" component={Home} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
