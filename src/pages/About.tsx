import React from 'react';
import { Award, Target, Users, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Striving for the highest standards in education and research."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "Fostering creativity and embracing new ideas and technologies."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Building a supportive and inclusive learning environment."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Integrity",
      description: "Maintaining the highest ethical standards in all our endeavors."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-purple-100 max-w-2xl">
            Shaping the future through education, innovation, and excellence since 1990.
          </p>
        </div>
      </div>

      {/* History Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our History</h2>
          <p className="text-gray-600 text-lg mb-8">
            Founded in 1990, our institution has grown from a small college to a leading educational hub. 
            Over the years, we have consistently maintained our commitment to providing quality education 
            and fostering innovation in various fields.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-4xl font-bold text-purple-600 mb-2">30+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-4xl font-bold text-purple-600 mb-2">50K+</h3>
              <p className="text-gray-600">Alumni Network</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-4xl font-bold text-purple-600 mb-2">100+</h3>
              <p className="text-gray-600">Programs Offered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-purple-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide quality education that empowers students with knowledge, skills, and values 
                necessary to become responsible global citizens and leaders in their chosen fields.
              </p>
            </div>
            <div className="bg-purple-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be a globally recognized institution of higher learning, known for academic excellence, 
                innovation, and commitment to social responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-purple-600 mb-4 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership Team */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse"></div>
                <h3 className="text-xl font-semibold text-gray-900">Name</h3>
                <p className="text-purple-600 mb-2">Position</p>
                <p className="text-gray-600">Brief description of their role and achievements.</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-purple-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Legacy</h2>
          <p className="text-xl mb-8">Be part of our journey towards excellence in education.</p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About; 