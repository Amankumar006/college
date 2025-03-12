import React from 'react';
import { motion } from 'framer-motion';
import VirtualTour from '../components/VirtualTour';
import { MapPin } from 'lucide-react';

const VirtualTourPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-24 bg-blue-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80"
            alt="Campus Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/95 to-blue-900/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Virtual Campus Tour
            </motion.h1>
            <motion.p 
              className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Experience our world-class facilities and vibrant campus life through our interactive virtual tour. Explore every corner of our institution from anywhere in the world.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tour Introduction */}
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
          >
            <MapPin className="w-8 h-8" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Campus</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click on any location to view detailed information, features, and facilities. Use the navigation arrows to move between different areas of the campus.
          </p>
        </div>

        {/* Virtual Tour Component */}
        <VirtualTour />

        {/* Additional Information */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="bg-gray-50 rounded-2xl p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Schedule a Visit</h3>
            <p className="text-gray-600 mb-6">
              While our virtual tour gives you a great overview of our campus, nothing beats experiencing it in person. Schedule a campus visit to meet our faculty and students.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200"
            >
              Book Campus Visit
            </a>
          </motion.div>

          <motion.div 
            className="bg-gray-50 rounded-2xl p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Download Campus Map</h3>
            <p className="text-gray-600 mb-6">
              Get a detailed map of our campus with all buildings, facilities, and important locations marked for easy navigation during your visit.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200"
            >
              Download Map
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTourPage; 