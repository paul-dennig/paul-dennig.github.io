import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import moonIcon from '../assets/moon.png';
import sunIcon from '../assets/sun.png'

const ToggleButton = () => {
    // load in data
    const { theme, toggleTheme } = useContext(ThemeContext);
    const sun = <img src={sunIcon} alt="sun" className='tog-icon inverted-icon'/>;
    const moon = <img src={moonIcon} alt="moon" className='tog-icon'/>;

    // create display variables
    const icon = theme === 'light' ? moon : sun;
    const label = theme === 'light' ? 'Dark Mode' : 'Light Mode';
    
    return (
        <button className='toggle' onClick={toggleTheme}>
            {icon}{label}
        </button>
    );
}
    
export default ToggleButton;