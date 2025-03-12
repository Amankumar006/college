import React from 'react';
import { GraduationCap, Users, Briefcase, Globe2, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';

const QuickLinks = () => {
  const links = [
    { icon: GraduationCap, text: 'Admissions', href: '#' },
    { icon: Users, text: 'Courses', href: '#' },
    { icon: Briefcase, text: 'Placements', href: '#' },
    { icon: Globe2, text: 'Campus Life', href: '#' },
    { icon: UserPlus, text: 'Alumni', href: '#' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
      className="bg-white py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {links.map(({ icon: Icon, text, href }) => (
            <motion.a
              key={text}
              href={href}
              className="flex flex-col items-center p-4 text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="h-8 w-8 mb-2" />
              </motion.div>
              <span className="text-sm font-medium">{text}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default QuickLinks;