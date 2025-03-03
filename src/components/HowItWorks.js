import React, { useState, useEffect } from 'react';
import './HowItWorks.css';
import consultation from '../assets/consultation.jpg';
import home from '../assets/home.jpg';
import myImage from '../assets/Whats Makes a Construction Plan Successful_.jpg';
import eg from '../assets/Benefits Of Outsourcing Company Tax Return In Sydney (Posts by Evelyn Allen).jpg';

const steps = [
  {
    id: 1,
    title: 'Consultation',
    description: 'We begin by understanding your needs and requirements.',
    image: consultation, // Directly reference the imported image
  },
  {
    id: 2,
    title: 'Planning',
    description: 'Our experts create a detailed plan including design and budget.',
    image: eg, // Directly reference the imported image
  },
  {
    id: 3,
    title: 'Construction',
    description: 'We ensure quality construction and timely delivery.',
    image: myImage, // Directly reference the imported image
  },
  {
    id: 4,
    title: 'Completion',
    description: 'The final step involves project handover and satisfaction check.',
    image: home, // Directly reference the imported image
  },
];

function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
    }, 7000); // Auto-slide every 7 seconds

    return () => clearInterval(interval);
  }, []);

  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="roadmap">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div
              className={`roadmap-point ${currentStep === index ? 'active' : ''}`}
              onClick={() => handleStepClick(index)}
            >
              <div className="circle">{step.id}</div>
            </div>
            {index < steps.length - 1 && <div className="connector" />}
          </React.Fragment>
        ))}
      </div>
      <div className="step-display">
        <img
          src={steps[currentStep].image}
          alt={steps[currentStep].title}
          className="step-image"
        />
        <div className="step-info">
          <h3>{steps[currentStep].title}</h3>
          <p>{steps[currentStep].description}</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;