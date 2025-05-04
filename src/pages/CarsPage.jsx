import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCar, FaGasPump, FaUsers, FaSnowflake, FaStar } from "react-icons/fa";

const cars = [
  {
    id: 1,
    name: "Toyota Corolla",
    image: "https://i.ytimg.com/vi/nMuGDd0bcog/maxresdefault.jpg",
    price: 1500,
    type: "Sedan",
    fuel: "Petrol",
    seats: 5,
    ac: true,
    rating: 4.8,
    features: ["Automatic Transmission", "Bluetooth", "Backup Camera"],
  },
  {
    id: 2,
    name: "Honda Civic",
    image: "https://paultan.org/image/2022/12/2023-Honda-Civic-Type-R-Europe-pricing-49.jpg",
    price: 1800,
    type: "Sedan",
    fuel: "Petrol",
    seats: 5,
    ac: true,
    rating: 4.7,
    features: ["Sunroof", "Apple CarPlay", "Lane Assist"],
  },
  {
    id: 3,
    name: "Ford Mustang",
    image: "https://theluxurylifestylemagazine.com/wp-content/uploads/2022/11/ford-mustang-gt-2024-01-exterior-front-angle-scaled-1-1050x700.webp",
    price: 2500,
    type: "Sports",
    fuel: "Petrol",
    seats: 4,
    ac: true,
    rating: 4.9,
    features: ["Convertible", "Premium Sound", "Sports Mode"],
  },
  {
    id: 4,
    name: "Toyota Innova",
    image: "https://www.autotirechecking.com/wp-content/uploads/Toyota-Innova-2023-05-768x397.jpg",
    price: 2200,
    type: "SUV",
    fuel: "Diesel",
    seats: 7,
    ac: true,
    rating: 4.6,
    features: ["Spacious Interior", "Rear AC Vents", "Ample Boot Space"],
  },
  {
    id: 5,
    name: "Maruti Swift",
    image: "https://gaadiwaadi.com/wp-content/uploads/2023/10/swift-concept.jpg",
    price: 1200,
    type: "Hatchback",
    fuel: "Petrol",
    seats: 5,
    ac: true,
    rating: 4.5,
    features: ["Fuel Efficient", "Compact Size", "Easy Maneuverability"],
  },
  {
    id: 6,
    name: "Hyundai Creta",
    image: "https://4x4motoring.com/wp-content/uploads/2019/05/creta_limited_front-529202-1920x1296.jpg",
    price: 2000,
    type: "SUV",
    fuel: "Diesel",
    seats: 5,
    ac: true,
    rating: 4.7,
    features: ["Panoramic Sunroof", "Ventilated Seats", "Smart Trunk"],
  },
];

export default function CarsPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelectCar = (car) => {
    navigate("/booking", { state: { car } });
  };

  const filteredCars = cars.filter((car) => {
    const matchesFilter = filter === "all" || car.type.toLowerCase() === filter;
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800 mb-4">
          Our Fleet
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose from our wide selection of premium vehicles for your next journey
        </p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex space-x-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full ${filter === "all" ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("sedan")}
            className={`px-4 py-2 rounded-full ${filter === "sedan" ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Sedan
          </button>
          <button
            onClick={() => setFilter("suv")}
            className={`px-4 py-2 rounded-full ${filter === "suv" ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            SUV
          </button>
          <button
            onClick={() => setFilter("hatchback")}
            className={`px-4 py-2 rounded-full ${filter === "hatchback" ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Hatchback
          </button>
          <button
            onClick={() => setFilter("sports")}
            className={`px-4 py-2 rounded-full ${filter === "sports" ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Sports
          </button>
        </div>
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search cars..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Cars Grid */}
      {filteredCars.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center shadow-sm">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="font-medium">{car.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {car.type}
                  </span>
                </div>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <FaGasPump className="mr-1" />
                    <span>{car.fuel}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaUsers className="mr-1" />
                    <span>{car.seats} seats</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaSnowflake className="mr-1" />
                    <span>AC</span>
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="font-semibold text-gray-700 mb-2">Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {car.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <svg
                          className="w-4 h-4 mr-2 text-green-500"
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
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold text-blue-600">₹{car.price}<span className="text-sm font-normal text-gray-500">/day</span></p>
                  </div>
                  <button
                    onClick={() => handleSelectCar(car)}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <FaCar className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">No cars found</h3>
          <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}