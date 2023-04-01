import React from 'react';
//import '../../styles/Projects.css'

const Projects = () => {
	return (
		<div className='Projects'>
			<h1>Check out my projects!</h1>
			<div className='Project-List'>
				<h3>Legged Robotic Locomotion</h3>
				<p>
					My master's degree capstone project was about developing model predictive control schemes for bipedal and 
					quadrupedal robots to balance, and walk. My team and I worked with Agility Robotics' Digit robot and Unitree's 
					A1 robot. We used the physics engines Pybullet and MuJoCo to perform simulations and evaluate the performance 
					of our code. In the future, our optimized code will be used in physical tests, then be used as a basis to develop 
					control schemes for more complex tasks, and finally be released as open source.
					<br/>My team worked under the supervision of Professor Koushil Sreenath and graduate student Ayush Agrawal.
					<br/>More information can be found at: https://hybrid-robotics.berkeley.edu/
					<br/>Image source: https://www.theverge.com/2020/1/6/21050322/bipedal-robot-digit-agility-robotics-on-sale-delivery-inspection-ces-2020
				</p>
				<h3>Heart Motion Analysis</h3>
				<p>
					As an undergraduate research assistant, I worked with a graduate student whose project aimed at improving the 
					diagnosis of cardiovascular pathologies relating to the heart. The project involved developing a pipeline which 
					took cardiac magnetic resonance images from the patient and ultimately made a diagnosis on the patient's health. 
					To convert the images into relevant measurements, we did manual segmentation to determine the boundaries of the 
					epicardium and endocardium, and used a finite element method to obtain a strain field. These strain measurements 
					will be analyzed systematically to determine potential pathology. 
					<br/>I assisted this project in Shadden Lab, a biomechanics lab at UC Berkeley. Professor Shawn Shadden is the 
					director of the lab and Miguel A. Rodriguez was the graduate student researcher leading this project.
					<br/>Image source: https://twitter.com/medviso/status/1281566728976302080
				</p>
				<h3>Finite Element Solvers</h3>
				<p>
					As a senior undergraduate, I took a course on linear static and dynamic finite element analysis. The result of 
					this course was the creation of finite element solvers implemented from scratch in Matlab and Python. Based on 
					provided/generated initial and/or boundary conditions, I solved Laplace's equation in 1D with higher order elements, 
					as well as variations like Poisson's equation and the wave equation in higher dimensions. In addition, I used FEniCS 
					to solve the consistent pressure Poisson's equation, which is a simplified form of the Navier-Stokes equations. The 
					animation shown is my solution of the wave equation in Matlab, representing the famous light double-slit experiment. 
					My solution uses the Crank-Nicolson time stepping method, with a time constant of 0.001 seconds and a total time of 
					5 seconds.
					<br/>Video source: self-generated from Matlab
				</p>
				<h3>Java Based SQL Database</h3>
				<p>
					I used Java to write a simple relational database management system (DBMS), which stored tables of data. The system 
					included a simple query language to access stored data. The DBMS worked with smaller tables and therefore optimizations 
					were not implemented to improve the efficiency for large tables. The DBMS was implemented in Java and the query language 
					was based on SQL.
					<br/>Image source: https://www.bloggersinsights.com/images/embed_image/hr7v9dbms.jpg
				</p>
				<h3>Git Implementation</h3>
				<p>
					I used Java to implement a version control system based on some of the core functionalities of Git. The Git commands 
					implemented in this project were commit, checking out, log, maintaining branches, and merging branches.
					<br/>Image source: https://mechomotive.com/wp-content/uploads/2021/08/vcs.png
				</p>
				<h3>Zigbee Indoor Positioning System</h3>
				<p>
					GPS is a very developed and relatively precise outdoor positioning technology. Indoor positioning, on the other hand, 
					is a much more difficult task. In this project, I aimed to implement an indoor navigation system using a wireless mesh 
					network and taking radio strength measurements as a way to measure distance. I then applied a traditional trilateration 
					method to obtain position with accuracy. Trilateration can be applied even with an overdetermined system, allowing for 
					many radio beacons. One goal was to help Alzheimer's and dementia patients by adding vocal instructions to develop a 
					guidance system though a house. I hope to use this technology for specific future applications.
					<br/>Image source: https://www.researchgate.net/profile/Alwin-Poulose/publication/344188953/figure/fig5/AS:941780560261125@1601549391810/UWB-localization-using-trilateration-approach.ppm
				</p>
				<h3>Raspberry Pi Based LED Music Visualizer</h3>
				<p>
					I created a simple music visualizer in Python which simply found the amplitudes of different frequency ranges in a given 
					input sound sample in real time. I used NumPy's fast Fourier transform implementation, a Raspberry Pi, and an LED matrix.
					<br/>Image source: https://windowsreport.com/audio-spectrum-visualizer/
				</p>
				<h3>Longboard Passive Stabilizer</h3>
				<p>
					There are too many fun projects that I could do with a longboard. Solutions to the last 10 miles are critical and we wanted 
					to make riding a longboard more accessible to everyone. For my senior capstone mechatronics project, my project group and I 
					decided to work on an independent stabilization system for all 4 wheels. We designed a passive control system which was 
					reflected in our CAD model. Though we were unable to fabricate due to COVID impacting shop access, we were still able to 
					verify that our design would improve stability for a rider.
					<br/>I was the team lead and my project group was Jason Luke, Cameron Stearn, Robin Chang, Richard Brutski, and Xander White. Our 
					instructor for the course, Prof. Homayoon Kazerooni, gave us great guidance throughout the entire semester.
					<br/>Image source: self-generated
				</p>
				<h3>Axial Flux Machine</h3>
				<p>
					I designed and machined an axial flux permanent magnet machine from scratch. I used metal plates, enameled copper coils, 
					strong permanent magnets, skateboard bearings, and other materials. I laser cut a test setup and used a hall sensor and 
					Arduino to measure the RPM. Since I used this as a generator as opposed to a motor, I didn't use a speed controller; rather, 
					I measured the power output for various RPM. I built this to have a greater understanding of these machines. If I were to 
					continue this project, my goals were to use it in a pumped hydro energy storage system.
					<br/>Image source: self-generated
				</p>
			</div>
		</div>
	);
};

export default Projects;
