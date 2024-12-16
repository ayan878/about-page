import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Example award data (like ISI, ISO, etc.)
const awards = [
  { src: "/assets/images/trusted.png", alt: "ISI Mark" },
  { src: "/assets/images/superbrand.png", alt: "CE Mark" },
  { src: "/assets/images/gold.png", alt: "ISO 9001" },
  { src: "/assets/images/trusted.png", alt: "ISI Mark" },
  { src: "/assets/images/superbrand.png", alt: "CE Mark" },
  { src: "/assets/images/gold.png", alt: "ISO 9001" },
];

export const AwardsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Calculate the total number of slides (3 items per slide)
  const totalSlides = Math.ceil(awards.length / 3);

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
            transform: `translateX(-${currentSlide * (100 / 3)}%)`, // Shift 3 images at a time
          }}
        >
          {awards.map((award, index) => (
            <div key={index} className="flex-shrink-0 w-1/3 px-2">
              {/* Show each award in 1/3 width */}
              <div className="flex justify-center items-center rounded-md p-4">
                <img
                  src={award.src}
                  alt={award.alt}
                  className="mx-auto w-full h-full object-cover" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-96 left-24 w-8 h-8 transform -translate-y-1/2 bg-gray-800 text-white px-2 rounded-full shadow-lg"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-96 right-24 w-8 h-8 transform -translate-y-1/2 bg-gray-800 text-white px-2 rounded-full shadow-lg"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};
