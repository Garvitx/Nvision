import React, { useRef } from 'react';
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "./motion";
import Logo from './logo1.jpeg'

import { Link } from 'react-router-dom';


const HeroContent = ({ onRegisterClick }) => {
  const registrationFormRef = useRef(null);

  const scrollToRegistrationForm = () => {
    registrationFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center min-h-screen w-full"
    >
      <div className="flex flex-col items-center justify-center gap-5 text-center">
      <motion.img
          src={Logo}
          alt="N-VISION Logo"
          variants={slideInFromTop}
          style={{ maxWidth: '300px', height: 'auto' }} // Adjust the maxWidth to your preference
          className="mb-4" // You can adjust margin as needed
        />
        <motion.div
          variants={slideInFromTop}
          className="py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] rounded-full"
        >
          <h1 className="text-4xl font-bold text-black">Welcome to N-VISION ‘24</h1>
        </motion.div>

        <motion.h2
          variants={slideInFromLeft(0.5)}
          className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mt-6"
        >
          Walking into the Future of Healthcare
        </motion.h2>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-300 my-5 max-w-[600px] mt-6"
        >
          Join us for a journey through groundbreaking medical advancements and discussions at K. S. Hegde Medical Academy Mangaluru.
        </motion.p>
        
        {/* Buttons container */}
        <div className="flex flex-wrap gap-4 justify-center mt-6">
        <motion.div
 onClick={onRegisterClick}   variants={slideInFromLeft(1)}
  className="py-3 px-6 bg-purple-600 text-white font-medium text-lg rounded-lg cursor-pointer hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
>
  Registration Form
</motion.div>

          
          <Link to="/workshop-registration">
            <motion.div
              variants={slideInFromLeft(1.2)}
              className="py-3 px-6 bg-purple-600 text-white font-medium text-lg rounded-lg cursor-pointer hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Workshop Registration
            </motion.div>
          </Link>

          <Link to="/abstract-submission">
            <motion.div
              variants={slideInFromLeft(1.4)}
              className="py-3 px-6 bg-purple-600 text-white font-medium text-lg rounded-lg cursor-pointer hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Abstract Submission
            </motion.div>
            </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
