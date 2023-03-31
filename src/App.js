import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'

import Bmi from "./pages/Bmi";
import Home from "./pages/Home";
//import Library from "./pages/Library";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
        
      <Router basename="">
        <div>
          <Navbar />
            {/* Wrap Route elements in a Routes component */}
            <Routes>
              {/* Define routes using the Route component to render different page components at different paths */}
              {/* Define a default route that will render the Home component */}
              <Route path="/" element={<Home />} />
              <Route path="/bmi" element={<Bmi />} />
              {/*<Route path="/library" element={<Library />} />  */}
              {/* 404 page for incorrect link
              <Route path="*" element={<NoPage />} />  */}
            </Routes>
            <Footer />
        </div>
      </Router>
    </div>
  
    );
}

export default App;
