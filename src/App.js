
// libs
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// help
import './App.css';
import { ThemeContext } from './contexts/ThemeContext'

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
          </Routes>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;

