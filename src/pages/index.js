import React from 'react';
import '../styles/homePage.css'
import profilePhoto from '../assets/prof-original.png'

const Home = () => {
	return (
		<div className='Home'>
			<div className='Profile'>
				<div className='Photo'>
					<img src={profilePhoto} alt=""></img>
				</div>
				<div className='Description'>
					<h1>Paul Dennig</h1>
					<h3>Full Stack Software Engineer</h3>
					<h3>M.Eng. in Mechanical Engineering @ UC Berkeley</h3>
					<p>
						Please take a look at my projects and feel free to contact me!
						<br/><br/>
					</p>
					
					<h2>About Me</h2>
					<p>
						The ability to make the world a better place with a mix of technical excellence and creativity is what makes engineering 
						one of the most rewarding disciplines.<br/><br/>I've worked on science and engineering projects for most of my life, from 
						elementary school with my dad's help, through my years at UC Berkeley studying mechanical engineering. I've worked on a wide 
						variety of projects, some of which are included on the projects page of this site. Going forward, I hope to work professionally 
						on full stack software engineering, machine learning, and even robotics/controls, improving lives one line of code 
						at a time. In my free time, I love playing basketball, although I practiced and taught martial arts growing up, eventually
						reaching 4th degree black belt. I also love playing the guitar (though I have a lot of room to improve), and spending
						time with my two dogs.
					</p>
				</div>
				
			</div>
		</div>
	);
};

export default Home;
