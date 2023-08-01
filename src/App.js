import React from 'react';
import 'assets/scss/style.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from 'pages/landingPage';
import DetailPage from 'pages/DetailPage';
import Example from 'pages/example';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" component={<LandingPage />}></Route>
          <Route path="/properties/:id" component={<DetailPage />}></Route>
          <Route path="/example" component={Example}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
