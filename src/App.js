import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './pages/HomeView/HomeView';

function App() {
  return (
    <div className="App">
        <Router>
            <div className="">
                <Route exact path="/" component={Home} />
            </div>
        </Router>
    </div>
  );
}

export default App;
