import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  GraduationCap, 
  BookOpen, 
  Users, 
  Globe2, 
  Briefcase, 
  ChevronRight,
  ChevronLeft,
  X
} from 'lucide-react';

const VirtualTour = () => {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const locations = [
    {
      id: 1,
      name: 'Main Campus',
      description: 'Our sprawling 50-acre campus features modern architecture and lush green spaces.',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80',
      features: [
        'Central Library',
        'Administrative Block',
        'Student Center',
        'Cafeteria'
      ]
    },
    {
      id: 2,
      name: 'Academic Buildings',
      description: 'State-of-the-art classrooms and laboratories equipped with cutting-edge technology.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80',
      features: [
        'Smart Classrooms',
        'Research Labs',
        'Computer Centers',
        'Conference Halls'
      ]
    },
    {
      id: 3,
      name: 'Library',
      description: 'A modern library with over 100,000 books and digital resources.',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80',
      features: [
        'Digital Resources',
        'Study Spaces',
        'Group Discussion Rooms',
        '24/7 Access'
      ]
    },
    {
      id: 4,
      name: 'Sports Complex',
      description: 'World-class sports facilities for various indoor and outdoor activities.',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80',
      features: [
        'Indoor Stadium',
        'Swimming Pool',
        'Tennis Courts',
        'Fitness Center'
      ]
    },
    {
      id: 5,
      name: 'Hostel Facilities',
      description: 'Comfortable and secure accommodation for students from all over the world.',
      image: 'https://images.unsplash.com/photo-1555852105-64f35b45c695?auto=format&fit=crop&q=80',
      features: [
        'Separate Hostels',
        'Common Rooms',
        'Mess Facilities',
        '24/7 Security'
      ]
    },
    {
      id: 6,
      name: 'Research Centers',
      description: 'Advanced research facilities fostering innovation and discovery.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80',
      features: [
        'Research Labs',
        'Innovation Hub',
        'Collaboration Spaces',
        'Equipment Center'
      ]
    }
  ];

  const nextLocation = () => {
    if (selectedLocation === null) return;
    setSelectedLocation((prev) => prev === null ? 0 : (prev === locations.length - 1 ? 0 : prev + 1));
  };

  const prevLocation = () => {
    if (selectedLocation === null) return;
    setSelectedLocation((prev) => prev === null ? locations.length - 1 : (prev === 0 ? locations.length - 1 : prev - 1));
  };

  return (
    <div className="relative">
      {/* Tour Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((location) => (
          <motion.div
            key={location.id}
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => {
              setSelectedLocation(location.id - 1);
              setIsOpen(true);
            }}
          >
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
              <img
                src={location.image}
                alt={location.name}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white mb-2">{location.name}</h3>
              <p className="text-gray-200 text-sm">{location.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && selectedLocation !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={locations[selectedLocation].image}
                  alt={locations[selectedLocation].name}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {locations[selectedLocation].name}
                </h2>
                <p className="text-gray-600 mb-6">
                  {locations[selectedLocation].description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {locations[selectedLocation].features.map((feature) => (
                    <div key={feature} className="flex items-center text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <button
                  onClick={prevLocation}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextLocation}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VirtualTour; 