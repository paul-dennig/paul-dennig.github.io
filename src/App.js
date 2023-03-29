
// libs
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// context
import { ThemeContext } from './contexts/ThemeContext'

// pages
import NavigationBar from './components/NavigationBar';
import Home from './pages/';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;

