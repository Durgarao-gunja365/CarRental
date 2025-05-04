import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function BookingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("loggedIn");
  const { car } = location.state || {};

  const [days, setDays] = useState("");
  const [numCars, setNumCars] = useState("");
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    const d = parseInt(days);
    const n = parseInt(numCars);
    if (d > 0 && n > 0) {
      setTotalCost(d * n * car.price);
    } else {
      setTotalCost(0);
    }
  }, [days, numCars, car.price]);

  if (!car) {
    return <div className="text-center text-red-600 font-semibold">Car details not available.</div>;
  }

  const handleBooking = () => {
    const numDays = parseInt(days);
    const numVehicles = parseInt(numCars);

    if (!numDays || numDays <= 0 || !numVehicles || numVehicles <= 0) {
      alert("Please enter valid number of days and cars.");
      return;
    }

    const booking = {
      carName: car.name,
      carImage: car.image || car.images?.[0],
      pricePerDay: car.price,
      numberOfCars: numVehicles,
      days: numDays,
      totalCost,
      date: new Date().toLocaleString(),
    };

    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    existingBookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    alert(`Booking confirmed for ${numVehicles} car(s) for ${numDays} day(s).\nTotal cost: ₹${totalCost}`);
    navigate("/my-bookings"); // optional
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Booking Page</h2>

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
        <h3 className="text-xl font-semibold mb-4">Car: {car.name}</h3>
        <img src={car.image || car.images?.[0]} alt={car.name} className="w-full h-48 object-cover rounded-lg mb-4" />
        <p className="text-lg text-gray-700 mb-4">Price per day per car: ₹{car.price}</p>

        <div className="mb-4">
          <label className="block font-medium mb-1">Number of Days</label>
          <input
            type="number"
            placeholder="Enter number of days"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Number of Cars</label>
          <input
            type="number"
            placeholder="Enter number of cars"
            value={numCars}
            onChange={(e) => setNumCars(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <p className="text-lg font-semibold text-green-700 mb-6">
          Total Cost: ₹{totalCost}
        </p>

        <button
          onClick={handleBooking}
          className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
