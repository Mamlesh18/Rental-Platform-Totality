import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Property from './Components/Property/property-listing';

function App() {
  
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Property />} />3

      </Routes>
    </Router>
  );
}

export default App;
