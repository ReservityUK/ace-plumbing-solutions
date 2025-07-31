'use client'

import { useEffect, useState } from "react";

  let images = [
    "https://res.cloudinary.com/duezzgkri/image/upload/v1751821737/IMG_3296_twidcm.jpg",
    "https://res.cloudinary.com/duezzgkri/image/upload/v1751821707/IMG_8970_nrj5z7.jpg",
    "https://res.cloudinary.com/duezzgkri/image/upload/v1752089838/IMG_6813_ck2zb0.jpg",
    "https://res.cloudinary.com/duezzgkri/image/upload/v1751821690/IMG_4545_rflmof.jpg"
  ];

  export default function AutoSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="lg:relative w-full h-[75%] overflow-hidden z-10 rounded-2xl">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );

  }