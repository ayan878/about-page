import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Example Quality data (like ISI, ISO, etc.)
const qualities = [
  { src: "/assets/images/ISI.png", alt: "ISI Mark" },
  { src: "/assets/images/ce.png", alt: "CE Mark" },
  { src: "/assets/images/ISO.png", alt: "ISO 9001" },
  { src: "/assets/images/ISI.png", alt: "ISI Mark" },
  { src: "/assets/images/ce.png", alt: "CE Mark" },
  { src: "/assets/images/ISO.png", alt: "ISO 9001" },
];

export const QualityCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Calculate the number of slides needed to show 3 images at a time
  const totalSlides = Math.ceil(qualities.length / 3);

  // Function to go to the next slide (3 images at a time)
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // Function to go to the previous slide (3 images at a time)
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mt-8">
      {/* Carousel Container */}
      <div className="flex overflow-hidden w-full">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * (100 / 3)}%)`, // Move by 3 items at once
          }}
        >
          {qualities.concat(qualities).map((quality, index) => (
            <div key={index} className="flex-shrink-0 sm:w-full lg:w-1/3">
              {/* Responsive width */}
              <img
                src={quality.src}
                alt={quality.alt}
                className="mx-auto max-w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-[28rem] left-[28rem] w-8 h-8 transform -translate-y-1/2 bg-gray-800 text-white px-2 rounded-full shadow-lg"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-[28rem] right-[28rem] w-8 h-8 transform -translate-y-1/2 bg-gray-800 text-white px-2 rounded-full shadow-lg"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};
