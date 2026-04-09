import React, { useState } from 'react';
import './App.css';

const App = () => {
  const images = [
    "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=2000&q=80"
  ];

  const [currentIndex, setCurrentIndex] = useState(() => 
    Math.floor(Math.random() * images.length) // random start
  );

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const next = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const randomImage = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * images.length);
    } while (newIndex === currentIndex && images.length > 1);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <img 
        src={images[currentIndex]} 
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
      />
      <div className="carousel-controls">
        <button className="carousel-btn prev-btn" onClick={prev}>◀ Prev</button>
        <span className="carousel-index"> {currentIndex + 1} / {images.length}</span>
        <button className="carousel-btn next-btn" onClick={next}>Next ▶</button>
      </div>
    </div>
  );
};

export default App;