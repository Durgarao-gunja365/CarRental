import React, { useEffect, useState } from "react";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(saved);
  }, []);

  const handleCancelBooking = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index); // Remove the booking at the specified index
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings)); // Update localStorage with the new list
  };

  if (bookings.length === 0) {
    return (
      <div className="text-center mt-10 text-xl text-gray-700 font-medium">
        You have no bookings yet.
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">My Bookings</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((booking, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-5">
            <img
              src={booking.carImage}
              alt={booking.carName}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{booking.carName}</h3>
            <p className="text-gray-600">No. of Cars: <strong>{booking.numberOfCars}</strong></p>
            <p className="text-gray-600">Days: <strong>{booking.days}</strong></p>
            <p className="text-gray-600">Price per Day: ₹{booking.pricePerDay}</p>
            <p className="text-gray-800 font-semibold mt-2">Total: ₹{booking.totalCost}</p>
            <p className="text-sm text-gray-500 mt-2">Booked on: {booking.date}</p>

            {/* Cancel Booking Button */}
            <button
              onClick={() => handleCancelBooking(index)}
              className="mt-4 w-full py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
            >
              Cancel Booking
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
