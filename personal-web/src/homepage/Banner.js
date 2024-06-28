import React, { useEffect, useState } from 'react';
import './Banner.css';

function Banner() {
  const [typedText, setTypedText] = useState(''); // Initialize with an empty string
  const [showPeriod, setShowPeriod] = useState(true);
  const targetText = 'Online Excellence';

  useEffect(() => {
    let currentCharIndex = 0;
    const typingInterval = 100; // Adjust the typing speed as needed

    const typingTimer = setInterval(() => {
      if (currentCharIndex < targetText.length) {
        setTypedText(targetText.slice(0, currentCharIndex + 1));
        currentCharIndex += 1;
      } else {
        clearInterval(typingTimer); // Stop the typing animation
        // Start the period flashing
        const periodInterval = 900; // Adjust the flashing speed as needed
        setInterval(() => {
          setShowPeriod((prevShowPeriod) => !prevShowPeriod);
        }, periodInterval);
      }
    }, typingInterval);

    return () => {
      clearInterval(typingTimer); // Cleanup when the component unmounts
    };
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <div>
      <div className="banner">
        <div className="text">
          <h1>
            Designing,<br></br> Developing,<br></br> and Delivering {typedText}
            {showPeriod && '.'} {/* Display the period based on showPeriod state */}
          </h1>
          <div className="my-name">
            <h1>Full-Stack<br></br>Web Developer</h1>
          </div>
        </div>
        <div>
          <p>
          Welcome! Ready to launch your stunning new website? I'm here to craft a beautiful and high-performing site just for you. Let’s get started on your digital journey!
          </p>
          <a href="/consultation" title="Consultation" className="btn-primary">
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
