import React, { useRef, useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const trackRef = useRef(null);
  const [mouseDownAt, setMouseDownAt] = useState(null);
  const [prevPercentage, setPrevPercentage] = useState(0);

  const handleMouseDown = (e) => {
    setMouseDownAt(e.clientX);
  };

  const handleMouseUp = () => {
    setMouseDownAt(null);
    setPrevPercentage(trackRef.current.dataset.percentage);
  };

  const handleMouseMove = (e) => {
    if (mouseDownAt === null) return;
    const mouseDelta = parseFloat(mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentage = Math.max(Math.min(parseFloat(prevPercentage) + percentage, 0), -100);
    trackRef.current.dataset.percentage = nextPercentage;
    trackRef.current.style.transform = `translate(${nextPercentage}%, -50%)`;
    for (const image of trackRef.current.getElementsByClassName('image')) {
      image.style.objectPosition = `${100 + nextPercentage}% center`;
    }
  };

  return (
    <div
      id="image-track"
      ref={trackRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {images.map((src, i) => (
        <img key={i} src={src} alt={`image ${i}`} className="image" />
      ))}
    </div>
  );
};

export default ImageSlider;
