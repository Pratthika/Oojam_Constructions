import React, { useState } from 'react';
import './CustomerReview.css';
import a from '../assets/aarthi.jpeg';
import e from '../assets/eliz.jpeg';
import m from '../assets/madh.png';
import s from '../assets/su.png';
import f from '../assets/f.png';
import k from '../assets/s.png';

function CustomerReview() {
  const reviews = [
    {
      id: 1,
      name: 'Aarthi',
      feedback: 'The team delivered exceptional work, on time and within budget. Highly recommended!',
      image: a, // Replace with real image URLs
    },
    {
      id: 2,
      name: 'Suriya',
      feedback: 'Professional, efficient, and committed to excellence. Will definitely work with them again.',
      image: k, // Replace with real image URLs
    },
    {
      id: 3,
      name: 'Madhimaaran',
      feedback: 'Their attention to detail is unmatched. The finished product exceeded our expectations.',
      image: m, // Replace with real image URLs
    },
    {
      id: 4,
      name: 'Elizabeth',
      feedback: 'Outstanding experience from start to finish. They truly care about their clients.',
      image: e, // Replace with real image URLs
    },
    {
      id: 5,
      name: 'Suresh',
      feedback: 'The quality of their work speaks for itself. A fantastic team to work with!',
      image: s, // Replace with real image URLs
    },
    {
      id: 6,
      name: 'Faizal',
      feedback: 'Great communication and flawless execution. Highly recommend their services!',
      image: f, // Replace with real image URLs
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  // Compute visible reviews dynamically
  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length],
  ];

  return (
    <section className="customer-review">
      <h2>What Our Clients Say</h2>
      <div className="reviews-wrapper">
        <button className="arrow left-arrow" onClick={handlePrev}>
          &#8249;
        </button>
        <div className="reviews-container">
          {visibleReviews.map((review) => (
            <div key={review.id} className="review">
              <img src={review.image} alt={review.name} className="review-img" />
              <div className="review-info">
                <h3>{review.name}</h3>
                <p>{review.feedback}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="arrow right-arrow" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </section>
  );
}

export default CustomerReview;
