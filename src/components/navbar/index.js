import React from "react";
import { useState } from 'react';
import ReactSwitch from 'react-switch';
import { Nav, NavLink, NavMenu }
	from "./navbarElements";



const Navbar = () => {
	const [theme, setTheme] = useState("");
	const toggleTheme = () => {
		setTheme((curr) => (curr === "light" ? "dark" : "light"));
	}
	return (
		<>
		<Nav>
			<NavMenu>
			<NavLink to="/" activeStyle>
				Home
			</NavLink>
			<NavLink to="/about" activeStyle>
				About
			</NavLink>
			<NavLink to="/projects" activeStyle>
				Projects
			</NavLink>
			<NavLink to="/contact" activeStyle>
				Contact
			</NavLink>
			<div className='switch'>
				<ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
			</div>
			</NavMenu>
		</Nav>
		</>
	);
};

export default Navbar;
