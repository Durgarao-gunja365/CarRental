import React, { useState, useEffect } from 'react';
import { FaCar, FaGasPump, FaUsers, FaSnowflake, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CarCardCarousel = ({ carData, handleBooking }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === Math.ceil(carData.length / slidesToShow) - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.ceil(carData.length / slidesToShow) - 1 : prevIndex - 1
    );
  };

  const visibleCars = carData.slice(currentIndex * slidesToShow, currentIndex * slidesToShow + slidesToShow);

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {carData.length > slidesToShow && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              >
                <FaChevronLeft className="text-gray-700" />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              >
                <FaChevronRight className="text-gray-700" />
              </button>
            </>
          )}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {visibleCars.map((car, index) => (
              <CarCard 
                key={`${car.name}-${index}`} 
                car={car} 
                handleBooking={handleBooking} 
              />
            ))}
          </div>
        </div>

        {carData.length > slidesToShow && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(carData.length / slidesToShow) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const CarCard = ({ car, handleBooking }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (isHovered && car.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % car.images.length);
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isHovered, car.images.length]);

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          className={`w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-90'}`}
          src={car.images[currentImage]}
          alt={car.name}
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center shadow-sm">
          <FaStar className="text-yellow-400 mr-1" />
          <span className="font-medium text-gray-800">4.8</span>
        </div>
        {car.images.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {car.images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImage(index);
                }}
                className={`w-2 h-2 rounded-full ${currentImage === index ? 'bg-white' : 'bg-white/50'}`}
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {car.name.includes('SUV') ? 'SUV' : car.name.includes('Convertible') ? 'Convertible' : 'Sedan'}
          </span>
        </div>

        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <FaGasPump className="mr-1" />
            <span>Petrol</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <FaUsers className="mr-1" />
            <span>{car.name.includes('SUV') ? '7' : '5'} seats</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <FaSnowflake className="mr-1" />
            <span>AC</span>
          </div>
        </div>

        <div className="mb-5">
          <h4 className="font-semibold text-gray-700 mb-2 text-sm">Features:</h4>
          <ul className="grid grid-cols-2 gap-2">
            {[
              'Air Conditioning',
              'Bluetooth',
              'Navigation',
              car.name.includes('SUV') ? 'Spacious' : 'Compact'
            ].map((feature, index) => (
              <li key={index} className="flex items-center text-xs text-gray-600">
                <svg
                  className="w-3 h-3 mr-1 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500">Starting from</p>
            <p className="text-xl font-bold text-blue-600">₹{car.price}<span className="text-xs font-normal text-gray-500">/day</span></p>
          </div>
          <button
            onClick={() => handleBooking(car)}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCardCarousel;