import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import LoginPage from './pages/LoginPage';

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import RegisterPage from './pages/RegisterPage';
import Profile from './pages/Profile';
import MyBookings from './pages/MyBookings';
import CarsPage from './pages/CarsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20"> {/* Add padding to avoid navbar overlap */}
      <ToastContainer position="top-center" autoClose={3000} />
        <Routes>
           
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="login" element={<LoginPage/>}/>
          <Route path="register" element={<RegisterPage/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/cars" element={<CarsPage />} />
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
