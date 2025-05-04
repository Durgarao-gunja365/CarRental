import React from "react";

export default function ContactPage() {
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h2 className="text-4xl font-bold text-center text-indigo-800 mb-8">Contact Us</h2>

      {/* Contact Information Section */}
      <section className="mb-12 p-6 bg-indigo-50 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-indigo-700 mb-6">Get in Touch</h3>
        <p className="text-lg text-gray-600 mb-6">
          We're here to help you with any questions about our car rental services. 
          Reach out to us through any of these channels.
        </p>

        {/* Contact Details */}
        <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-3 bg-indigo-100 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-gray-700">
              <strong className="text-indigo-600">Email:</strong> support@carrentals.com
            </p>
          </div>
          
          <div className="flex items-center">
            <div className="p-3 bg-indigo-100 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <p className="text-gray-700">
              <strong className="text-indigo-600">Phone:</strong> (123) 456-7890
            </p>
          </div>
          
          <div className="flex items-center">
            <div className="p-3 bg-indigo-100 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-gray-700">
              <strong className="text-indigo-600">Address:</strong> 123 Rental Road, CityName, Country
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="p-6 bg-white rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-indigo-700 mb-6">Send Us a Message</h3>
        <form action="#" method="POST" className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition duration-200"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition duration-200"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Enter your message"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition duration-200"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}