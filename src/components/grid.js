import React from "react"
import '../styles/grid.css'

function Grid() {
  return (
    <div className="grid-container">
        <div className="grid-item">
            <div className="item-content">
                <h2 style={{color:'white'}}>Legged Robotic Locomotion</h2>
                <p style={{color:'white'}}>
					My master's degree capstone project was about developing model predictive control schemes for bipedal and 
					quadrupedal robots to balance, and walk. My team and I worked with Agility Robotics' Digit robot and Unitree's 
					A1 robot. We used the physics engines Pybullet and MuJoCo to perform simulations and evaluate the performance 
					of our code. In the future, our optimized code will be used in physical tests, then be used as a basis to develop 
					control schemes for more complex tasks, and finally be released as open source.
					<br/>My team worked under the supervision of Professor Koushil Sreenath and graduate student Ayush Agrawal.
					<br/>More information can be found at <a href="https://hybrid-robotics.berkeley.edu/">the lab website.</a>
				</p>
            </div>
        </div>
        <div className="grid-item">
            <div className="item-content">
                <h2 style={{color:'white'}}>Heart Motion Analysis</h2>
                <p style={{color:'white'}}>
					As an undergraduate research assistant, I worked with a graduate student whose project aimed at improving the 
					diagnosis of cardiovascular pathologies relating to the heart. The project involved developing a pipeline which 
					took cardiac magnetic resonance images from the patient and ultimately made a diagnosis on the patient's health. 
					To convert the images into relevant measurements, we did manual segmentation to determine the boundaries of the 
					epicardium and endocardium, and used a finite element method to obtain a strain field. These strain measurements 
					will be analyzed systematically to determine potential pathology. 
					<br/>I assisted this project in Shadden Lab, a biomechanics lab at UC Berkeley. Professor Shawn Shadden is the 
					director of the lab and Miguel A. Rodriguez was the graduate student researcher leading this project.
				</p>
            </div>
        </div>
        <div className="grid-item">
            <div className="item-content">
                <h2 style={{color:'white'}}>Finite Element Solvers</h2>
                <p style={{color:'white'}}>
					As a senior undergraduate, I took a course on linear static and dynamic finite element analysis. The result of 
					this course was the creation of finite element solvers implemented from scratch in Matlab and Python. Based on 
					provided/generated initial and/or boundary conditions, I solved Laplace's equation in 1D with higher order elements, 
					as well as variations like Poisson's equation and the wave equation in higher dimensions. In addition, I used FEniCS 
					to solve the consistent pressure Poisson's equation, which is a simplified form of the Navier-Stokes equations. My favorite
					animation I generated is of my solution of the wave equation in Matlab, representing the famous light double-slit experiment. 
					My solution uses the Crank-Nicolson time stepping method, with a time constant of 0.001 seconds and a total time of 
					5 seconds.
				</p>
            </div>
        </div>
        <div className="grid-item">
            <div className="item-content">
                <h2 style={{color:'white'}}>Java Based SQL Database</h2>
                <p style={{color:'white'}}>
					I used Java to write a simple relational database management system (DBMS), which stored tables of data. The system 
					included a simple query language to access stored data. The DBMS worked with smaller tables and therefore optimizations 
					were not implemented to improve the efficiency for large tables. The DBMS was implemented in Java and the query language 
					was based on SQL.
				</p>
            </div>
        </div>
        <div className="grid-item">
            <div className="item-content">
                <h2 style={{color:'black'}}>Git Implementation</h2>
                <p style={{color:'black'}}>
					I used Java to implement a version control system based on some of the core functionalities of Git. The Git commands 
					implemented in this project were commit, checking out, log, maintaining branches, and merging branches.
				</p>
            </div>
        </div>
        <div className="grid-item">
            <div className="item-content">
                <h2 style={{color:'black'}}>Zigbee Indoor Positioning System</h2>
                <p style={{color:'black'}}>
					GPS is a very developed and relatively precise outdoor positioning technology. Indoor positioning, on the other hand, 
					is a much more difficult task. In this project, I aimed to implement an indoor navigation system using a wireless mesh 
					network and taking radio strength measurements as a way to measure distance. I then applied a traditional trilateration 
					method to obtain position with accuracy. Trilateration can be applied even with an overdetermined system, allowing for 
					many radio beacons. One goal was to help Alzheimer's and dementia patients by adding vocal instructions to develop a 
					guidance system though a house. I hope to use this technology for specific future applications.
				</p>
            </div>
        </div>
        <div className="grid-item">
            <div className="item-content">
                <h2 style={{color:'white'}}>Raspberry Pi Based LED Music Visualizer</h2>
                <p style={{color:'white'}}>
					I created a simple music visualizer in Python which simply found the amplitudes of different frequency ranges in a given 
					input sound sample in real time. I used NumPy's fast Fourier transform implementation, a Raspberry Pi, and an LED matrix.
				</p>
            </div>
        </div>
        <div className="grid-item">
            <div className="item-content">
                <h2 style={{color:'black'}}>Longboard Passive Stabilizer</h2>
                <p style={{color:'black'}}>
					There are too many fun projects that I could do with a longboard. Solutions to the last 10 miles are critical and we wanted 
					to make riding a longboard more accessible to everyone. For my senior capstone mechatronics project, my project group and I 
					decided to work on an independent stabilization system for all 4 wheels. We designed a passive control system which was 
					reflected in our CAD model. Though we were unable to fabricate due to COVID impacting shop access, we were still able to 
					verify that our design would improve stability for a rider.
					<br/>I was the team lead and my project group was Jason Luke, Cameron Stearn, Robin Chang, Richard Brutski, and Xander White. Our 
					instructor for the course, Prof. Homayoon Kazerooni, gave us great guidance throughout the entire semester.
				</p>
            </div>
        </div>
    </div>
  );
}

export default Grid;

/*

*/