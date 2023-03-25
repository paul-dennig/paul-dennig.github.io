
// libs
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// context
import { ThemeContext } from './contexts/ThemeContext'

// pages
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/';
import AboutPage from './pages/AboutPage';
import Projects from './pages/projects';
import ContactPage from './pages/ContactPage';

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
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;

