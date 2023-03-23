import React from 'react';
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar';
import Home from './pages';
import About from './pages/about';
import Projects from "./pages/projects";
import Contact from './pages/contact';

export const ThemeContext = createContext(null);

function App() {
  const [theme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme }}>
      <div className="App" id={theme}>
        <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/projects' element={<Projects/>} />
        </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
