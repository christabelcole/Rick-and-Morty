// src/components/StarsBackground.tsx
import React, { useEffect } from 'react'; // Import useEffect from React
import '../styles/Background.scss'; // Import the SCSS file for styling

const StarsBackground: React.FC = () => {
  useEffect(() => {
    const starContainer = document.querySelector('.stars');
    const starCount = 200;

    if (starContainer) {
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        // Random positioning and animation duration
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 1}s`;

        // Append the star to the star container
        starContainer.appendChild(star);
      }
    }
  }, []);

  return <div className="stars"></div>;
};

export default StarsBackground;
