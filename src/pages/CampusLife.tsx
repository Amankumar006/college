import React from 'react';
import { Users, BookOpen, Trophy, Music, Utensils, Heart } from 'lucide-react';

const CampusLife = () => {
  const activities = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Student Clubs",
      description: "Join various clubs and societies to pursue your interests and develop leadership skills."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Library",
      description: "Access to a vast collection of books, journals, and digital resources."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Sports",
      description: "State-of-the-art sports facilities and regular inter-college tournaments."
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Cultural Events",
      description: "Annual cultural festivals, music concerts, and talent shows."
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Cafeteria",
      description: "Modern cafeteria serving healthy and delicious meals at reasonable prices."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health Center",
      description: "24/7 medical assistance and counseling services for students."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Campus Life</h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Experience a vibrant and enriching campus life that goes beyond academics.
          </p>
        </div>
      </div>

      {/* Campus Activities */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Campus Activities & Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-green-600 mb-4">
                {activity.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{activity.title}</h3>
              <p className="text-gray-600">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Campus Events */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Event Title</h3>
                  <p className="text-gray-600 mb-4">Brief description of the upcoming event and its highlights.</p>
                  <div className="flex items-center text-green-600">
                    <span className="text-sm">Learn More →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Student Testimonials */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Student Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Student Name</h4>
                  <p className="text-gray-600">Course & Year</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The campus life here is amazing! There are so many opportunities to grow and learn beyond academics."
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-green-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Be Part of Our Community</h2>
          <p className="text-xl mb-8">Join us and experience the best years of your life!</p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampusLife; 