import React from 'react';
import 'assets/scss/style.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from 'pages/landingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
