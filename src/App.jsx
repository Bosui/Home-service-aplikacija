import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Topbar from './components/Topbar/Topbar';
import About from './pages/About/About';
import Home from './pages/home/Home';
import Login from './pages/Login/Login';
import Services from './pages/services/Services';
import SignUp from './pages/SignUp/SignUp';

const App = () => {
  return (
    <Router>
      <div>
        <Topbar />
        <main >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
      </div>
      <div>
        {/* Papildomas turinys, jei reikia */}
      </div>
    </Router>
  );
};

export default App;
