import React, { useState } from 'react';
import './ReadMore.scss'; // Create a CSS file for styling

const ReadMoreButton = ({ paragraphs }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="read-more-container">
      <div className={`text ${showFullText ? 'show-full-text' : ''}`}>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <button className="read-more-button" onClick={toggleText}>
        {showFullText ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

export default ReadMoreButton;
