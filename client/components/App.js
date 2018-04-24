import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import '../css/App.css';
import TopNav from './TopNav.jsx';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={TopNav} />
    </div>
  </Router>
);

export default App;
