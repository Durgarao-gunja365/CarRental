import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaCar, FaCalendarAlt, FaRoad } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="container mx-auto p-6 max-w-7xl">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800 mb-6">
          About Us
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the story behind CarRentals and the team dedicated to making your journeys unforgettable
        </p>
      </div>

      {/* Section 1: Company Introduction */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-12 rounded-2xl shadow-lg mb-20 transition-all duration-500 hover:shadow-xl">
        <div className="absolute -top-5 -left-5 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-indigo-200 rounded-full opacity-20"></div>
        
        <h3 className="text-4xl font-bold text-center text-indigo-800 mb-8 relative z-10">
          Welcome to <span className="text-blue-600">CarRentals</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At CarRentals, we're revolutionizing the way you travel. Founded in 2010, we've grown from a small local service to a trusted name in car rentals across multiple countries.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our vision is to create a world where everyone has access to quality vehicles without the hassle of ownership. We believe in sustainable mobility and are constantly working to reduce our carbon footprint.
            </p>
          </div>
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              What sets us apart is our customer-first approach. From the moment you book to when you return your vehicle, our team is committed to making your experience seamless and enjoyable.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We regularly update our fleet with the latest models and maintain rigorous safety standards, so you can drive with confidence wherever your journey takes you.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: How It Works */}
      <section className="mb-20">
        <h3 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800 mb-16">
          How It Works
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <FaCar className="text-3xl text-blue-600" />
              </div>
            </div>
            <h4 className="text-2xl font-semibold text-center text-gray-800 mb-4">Choose Your Car</h4>
            <p className="text-gray-600 text-center">
              Browse our diverse fleet of vehicles, from compact cars to luxury SUVs, all with detailed descriptions and photos.
            </p>
            <div className="mt-6 text-center text-blue-500 font-medium">Step 1</div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-indigo-500 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="bg-indigo-100 p-4 rounded-full">
                <FaCalendarAlt className="text-3xl text-indigo-600" />
              </div>
            </div>
            <h4 className="text-2xl font-semibold text-center text-gray-800 mb-4">Book Your Rental</h4>
            <p className="text-gray-600 text-center">
              Select your dates, choose add-ons, and complete your booking in just a few clicks with our secure payment system.
            </p>
            <div className="mt-6 text-center text-indigo-500 font-medium">Step 2</div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-500 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="bg-purple-100 p-4 rounded-full">
                <FaRoad className="text-3xl text-purple-600" />
              </div>
            </div>
            <h4 className="text-2xl font-semibold text-center text-gray-800 mb-4">Enjoy Your Ride</h4>
            <p className="text-gray-600 text-center">
              Pick up your vehicle at your chosen location and hit the road with our 24/7 support team just a call away.
            </p>
            <div className="mt-6 text-center text-purple-500 font-medium">Step 3</div>
          </div>
        </div>
      </section>

     {/* Section 3: Meet The Team */}
<section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-12 rounded-2xl shadow-lg mb-20">
  <h3 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800 mb-16">
    Meet Our Team
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
    {/* Team Member 1 */}
    <div className="bg-white p-8 rounded-xl shadow-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative mb-6 mx-auto w-40 h-40">
        <img
          src="https://static.startuptalky.com/2021/12/Ajaypal-Singh-Banga-Indian-Origin-CEOs-Ruling-the-World-Startuptalky.jpg"
          alt="John Doe"
          className="rounded-full w-full h-full object-cover border-4 border-blue-100"
        />
        <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <h4 className="text-2xl font-bold text-gray-800 mb-2">John Doe</h4>
      <p className="text-blue-600 font-medium mb-4">CEO & Founder</p>
      <p className="text-gray-600 mb-6">
        With 15+ years in the automotive industry, John leads our vision for accessible mobility solutions.
      </p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
        <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>

    {/* Team Member 2 */}
    <div className="bg-white p-8 rounded-xl shadow-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative mb-6 mx-auto w-40 h-40">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl6D8l0S7HFK3DQfYrOK_WjtgTSZ1t-4LmJA&s"
          alt="Jane Smith"
          className="rounded-full w-full h-full object-cover border-4 border-indigo-100"
        />
        <div className="absolute -bottom-2 -right-2 bg-indigo-500 text-white p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <h4 className="text-2xl font-bold text-gray-800 mb-2">Jane Smith</h4>
      <p className="text-indigo-600 font-medium mb-4">COO</p>
      <p className="text-gray-600 mb-6">
        Operations expert ensuring every rental experience meets our high standards of quality and service.
      </p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-indigo-400 hover:text-indigo-600 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="#" className="text-indigo-400 hover:text-indigo-600 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
        <a href="#" className="text-indigo-400 hover:text-indigo-600 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="#" className="text-indigo-400 hover:text-indigo-600 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>

    {/* Team Member 3 */}
    <div className="bg-white p-8 rounded-xl shadow-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative mb-6 mx-auto w-40 h-40">
        <img
          src="/durga_chair.jpg"
          alt="Gunja Durgarao"
          className="rounded-full w-full h-full object-cover border-4 border-purple-100"
        />
        <div className="absolute -bottom-2 -right-2 bg-purple-500 text-white p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <h4 className="text-2xl font-bold text-gray-800 mb-2">Gunja Durgarao</h4>
      <p className="text-purple-600 font-medium mb-4">Head of Marketing</p>
      <p className="text-gray-600 mb-6">
        Creative strategist connecting our brand with customers through innovative campaigns and partnerships.
      </p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-purple-400 hover:text-purple-600 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="#" className="text-purple-400 hover:text-purple-600 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
        <a href="#" className="text-purple-400 hover:text-purple-600 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="#" className="text-purple-400 hover:text-purple-600 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

      {/* Section 4: Contact Information */}
      <section className="bg-white p-12 rounded-2xl shadow-lg mb-10 border border-gray-100">
        <h3 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800 mb-12">
          Get In Touch
        </h3>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
            <div className="bg-blue-100 p-4 rounded-full mr-6">
              <FaEnvelope className="text-2xl text-blue-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-1">Email Us</h4>
              <p className="text-blue-600 font-medium">support@carrentals.com</p>
            </div>
          </div>

          <div className="flex items-center p-6 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors duration-300">
            <div className="bg-indigo-100 p-4 rounded-full mr-6">
              <FaPhoneAlt className="text-2xl text-indigo-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-1">Call Us</h4>
              <p className="text-indigo-600 font-medium">(123) 456-7890</p>
            </div>
          </div>

          <div className="flex items-center p-6 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors duration-300">
            <div className="bg-purple-100 p-4 rounded-full mr-6">
              <FaMapMarkerAlt className="text-2xl text-purple-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-1">Visit Us</h4>
              <p className="text-purple-600 font-medium">123 Rental Road, CityName, Country</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}