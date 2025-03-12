import React from 'react';
import { Download, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  const actions = [
    {
      icon: Download,
      text: 'Download Brochure',
      description: 'Get detailed information about our programs',
      buttonText: 'Download Now',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
    },
    {
      icon: Calendar,
      text: 'Apply Now',
      description: 'Start your application process today',
      buttonText: 'Apply Now',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      icon: MapPin,
      text: 'Campus Tour',
      description: 'Schedule a visit to our campus',
      buttonText: 'Book Tour',
      buttonColor: 'bg-orange-600 hover:bg-orange-700',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="bg-white py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {actions.map(({ icon: Icon, text, description, buttonText, buttonColor }) => (
            <motion.div
              key={text}
              variants={itemVariants}
              className="border border-gray-200 rounded-lg p-6 text-center"
              whileHover={{ y: -5 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <Icon className="h-10 w-10 mx-auto text-gray-600 mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{text}</h3>
              <p className="text-gray-600 mb-6">{description}</p>
              <motion.button
                className={`${buttonColor} text-white px-6 py-2 rounded-md font-medium`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {buttonText}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default CallToAction;