import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Topbar from './components/Topbar/Topbar';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <Router>
      <div>
        <Topbar />
        <main>
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
};

export default App;
