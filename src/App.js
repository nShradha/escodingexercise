import './App.css';
import React ,{ Fragment } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { CodingExcercise01 } from './components/coding-ex-01';
import { CodingExcercise02 } from './components/coding-ex-02';
import { Navbar } from './components/navbar';
function App() {
  return (

    
    <Fragment>
      <div className="App"> 
        <Router>
        <Navbar />      
        <div className="container">
          <Routes>
            <Route exact path="/" element={<CodingExcercise01/>}  />
            <Route path="/dogs" element={<CodingExcercise02/>}  />
          </Routes>  
        </div>
        </Router>   
      </div>
    </Fragment>
    
  );
}

export default App;
