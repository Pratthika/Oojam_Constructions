import React, { useState } from 'react';
import './Projects.css';

// Importing video files
import project1Video from '../assets/p1.mp4';
import project2Video from '../assets/p2.mp4';
import project3Video from '../assets/p3.mp4';
import project4Video from '../assets/p4.mp4';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project A',
      description: 'Build up area : 800sqft, Budget :17 Lakhs.',
      video: project1Video,
    },
    {
      id: 2,
      title: 'Project B',
      description: 'A luxury individual villa with modern facilities.',
      video: project2Video,
    },
    {
      id: 3,
      title: 'Project C',
      description: 'A luxury individual home with state-of-the-art amenities.',
      video: project3Video,
    },
    {
      id: 4,
      title: 'Project D',
      description: 'Build up area: 1800sqft at Kamadenu Nagar, Avadi..',
      video: project4Video,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle swiping left
  const handleSwipeLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % projects.length); // Show the next 2 projects
  };

  // Function to handle swiping right
  const handleSwipeRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + projects.length) % projects.length); // Show the previous 2 projects
  };

  // Calculate which 2 projects to display based on currentIndex
  const displayedProjects = [
    projects[(currentIndex + 0) % projects.length],
    projects[(currentIndex + 1) % projects.length],
  ];

  return (
    <section className="projects">
      <h2>Our Projects</h2>
      <div className="projects-container">
        <button className="swipe-button left" onClick={handleSwipeRight}>←</button>
        
        <div className="projects-slider">
          {displayedProjects.map((project) => (
            <div key={project.id} className="project">
              <div className="project-video">
                <video src={project.video} controls />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="swipe-button right" onClick={handleSwipeLeft}>→</button>
      </div>
    </section>
  );
}

export default Projects;
