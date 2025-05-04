import React from "react";
import { useNavigate } from "react-router-dom";
import CarCardCarousel from "./CarCardCarousel";
import { 
  FaShieldAlt, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock,
  FaStar // Added the missing import
} from "react-icons/fa";
import { MdDirectionsCar, MdLocalOffer, MdSupportAgent } from "react-icons/md";
export default function HomePage() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("loggedIn");

 

  const handleBooking = (car) => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate("/booking", { state: { car } });
    }
  };

  const handleExploreCars = () => {
    if (isLoggedIn) {
      navigate("/cars");
    } else {
      alert("Please login to view and book cars.");
      navigate("/login");
    }
  };

  const baseCars = [
    {
      name: "Maruti Ertiga",
      images: [
        "https://car.zigcdn.com/images/car-images/360x240/Maruti/Ertiga/8711/1650016330874/225_brown_391d0f.jpg",
        "https://goldsun.in/wp-content/uploads/2022/10/Ertiga.png",
        "https://www.varunmaruti.com/uploads/products/colors/ertiga-pearl-midnight-black.png",
      ],
      price: 3000,
    },
    {
      name: "Hyundai Creta",
      images: [
        "https://4x4motoring.com/wp-content/uploads/2019/05/creta_limited_front-529202-1920x1296.jpg",
        "https://wallpaperaccess.com/full/5268113.jpg",
        "https://gaadiwaadi.com/wp-content/uploads/2018/07/2019-Hyundai-Creta-Sport_-740x493.jpg",
      ],
      price: 3500,
    },
    {
      name: "Mahindra Thar",
      images: [
        "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http:%2f%2fcdni.autocarindia.com%2fReviews%2f2020-Mahindra-Thar-front-static.jpg&c=0",
        "https://www.autobics.com/wp-content/uploads/2020/08/Mahindra-Thar-Napoli-Black-2020.jpg",
        "https://gaadiwaadi.com/wp-content/uploads/2023/01/2023-mahindra-thar-rearwheel-drive-2wd-3-1-1068x689.jpg",
      ],
      price: 4000,
    },
    {
      name: "Toyota Fortuner",
      images: [
        "https://wallpapers.com/images/hd/toyota-fortuner-black-trd-variant-model-72r9iq6f8avojga4.jpg",
        "https://automobiletak.com/wp-content/uploads/2024/04/toyota-fortuner-leader-64523.jpg",
        "https://showroomex.com/wp-content/uploads/2023/08/The-2024-Toyota-Fortuner-Comes-with-more-power-1080x675.webp",
      ],
      price: 5000,
    },
  ];

  const premiumCars = isLoggedIn
    ? [
        {
          name: "Mercedes-Benz E-Class",
          images: [
            "https://dailycarblog.com/wp-content/uploads/2023/04/Mercedes-E-Class-W214-Heroic-Stance.jpg",
            "https://performancedrive.com.au/wp-content/uploads/2018/09/2019-Mercedes-Benz-E-Class.jpg",
            "https://size-tire.com/wp-content/uploads/2022/12/w222-d08-930x568.webp",
          ],
          price: 10000,
        },
        {
          name: "BMW 5 Series",
          images: [
            "https://www.carscoops.com/wp-content/uploads/2020/05/2021-BMW-5-Series-Sedan-Touring-02.jpg",
            "https://images.carexpert.com.au/resize/3000/-/app/uploads/2023/05/2024-bmw-i5-edrive40-1.jpg",
            "https://i.cdn.newsbytesapp.com/images/l200_39231624514111.jpg",
          ],
          price: 12000,
        },
      ]
    : [];

  const carData = [...baseCars, ...premiumCars];

  const testimonials = [
    {
      quote: "The car was in perfect condition and the booking process was so easy!",
      author: "Rahul Sharma",
      role: "Frequent Customer"
    },
    {
      quote: "Excellent service with clean, well-maintained vehicles at reasonable prices.",
      author: "Priya Patel",
      role: "Business Traveler"
    },
    {
      quote: "I've rented multiple times and always had a great experience. Highly recommended!",
      author: "Amit Singh",
      role: "Family Vacationer"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Premium Car Rentals Made Simple
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover the perfect vehicle for your journey with our wide selection of premium cars at competitive rates.
          </p>
          <button
            onClick={handleExploreCars}
            className="px-8 py-3 text-lg font-medium bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Our Fleet
          </button>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Vehicles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our most popular rental options
          </p>
        </div>

        <CarCardCarousel carData={carData} handleBooking={handleBooking} />

        {!isLoggedIn && (
          <div className="text-center mt-10">
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 shadow-md hover:shadow-lg"
            >
              Sign In to View Premium Vehicles
            </button>
          </div>
        )}
      </section>
       {/* Testimonials Section */}
       <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from people who have used our services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="inline text-yellow-400 mr-1" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Hit the Road?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your perfect car today and enjoy a seamless rental experience
          </p>
          <button
            onClick={handleExploreCars}
            className="px-8 py-3 text-lg font-medium bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Book Your Car Now
          </button>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FaPhoneAlt className="text-3xl text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600">+91 98765 43210</p>
            <p className="text-gray-600">24/7 Customer Support</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FaMapMarkerAlt className="text-3xl text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-600">123 Rental Street</p>
            <p className="text-gray-600">Mumbai, India 400001</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FaClock className="text-3xl text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
            <p className="text-gray-600">Mon-Sun: 8:00 AM - 10:00 PM</p>
            <p className="text-gray-600">24/7 Online Booking</p>
          </div>
        </div>
      </section>
    </div>
  );
}
