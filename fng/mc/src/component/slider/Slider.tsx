import React, { useState, useRef } from "react";
import "./Slider.css";

const images = [
  "https://avatar.iran.liara.run/public/avatars/0.jpg",
  "https://avatar.iran.liara.run/public/avatars/1.jpg",
  "https://avatar.iran.liara.run/public/avatars/2.jpg",
  "https://unsplash.com/photos/a-close-up-of-a-planet-with-a-black-background-bw9V1lyxuKo/download?force=true&w=640",
  "https://plus.unsplash.com/premium_photo-1717279908053-e0e8618eca45?q=80&w=2957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <div className="slider" ref={sliderRef}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? "active" : "hidden"}
          />
        ))}
      </div>
      <div className="slider-controls">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  );
};

export default Slider;
