import React from 'react';
import './AboutSection.css';

// Import video files explicitly
import expertTeamVideo from '../assets/expert-team.mp4';
import sustDesVideo from '../assets/sust-des.mp4';
import qualityAssuranceVideo from '../assets/qual.mp4';
import timelyDeliveryVideo from '../assets/timely.mp4';

const aboutPoints = [
  {
    id: 1,
    title: 'Expert Team',
    description: 'Highly skilled professionals with years of experience.',
    video: expertTeamVideo, // Use imported video
  },
  {
    id: 2,
    title: 'Sustainable Designs',
    description: 'Eco-friendly and innovative construction techniques.',
    video: sustDesVideo, // Use imported video
  },
  {
    id: 3,
    title: 'Quality Assurance',
    description: 'Commitment to excellence in every project.',
    video: qualityAssuranceVideo, // Use imported video
  },
  {
    id: 4,
    title: 'Timely Delivery',
    description: 'Projects delivered on time with utmost precision.',
    video: timelyDeliveryVideo, // Use imported video
  },
];

const AboutSection = () => {
  return (
    <section className="about-section">
      <h2>Why OOJAM?</h2>
      <p>OOJAM Constructions is a leading construction company dedicated to delivering high-quality, sustainable, and innovative building solutions. With years of experience in the industry, our expert team is committed to providing exceptional service to our clients, ensuring every project is completed on time, within budget, and to the highest standards. From residential to commercial developments, OOJAM Constructions specializes in creating spaces that blend functionality with design excellence.</p>
      <div className="about-box-container">
        {aboutPoints.map((point) => (
          <div key={point.id} className="about-box">
            <video
              src={point.video}
              className="about-box-video"
              autoPlay
              loop
              muted
              playsInline
            />
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
