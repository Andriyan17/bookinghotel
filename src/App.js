import React from 'react';
import 'assets/scss/style.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from 'pages/landingPage';
import Example from 'pages/example';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/example" component={Example}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
