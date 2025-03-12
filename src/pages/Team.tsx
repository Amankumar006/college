import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      position: "Principal",
      department: "Administration",
      bio: "With over 20 years of experience in education, Dr. Johnson leads our institution with vision and dedication.",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Prof. Michael Chen",
      position: "Head of Computer Science",
      department: "Computer Science",
      bio: "Expert in artificial intelligence and machine learning with numerous research publications.",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Dr. Emily Rodriguez",
      position: "Head of Business Studies",
      department: "Business",
      bio: "Former industry professional turned academic, bringing real-world experience to the classroom.",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Prof. David Kim",
      position: "Head of Engineering",
      department: "Engineering",
      bio: "Specialist in sustainable engineering with multiple patents to his name.",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Dr. Lisa Patel",
      position: "Head of Research",
      department: "Research",
      bio: "Leading our research initiatives and fostering innovation across departments.",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Prof. James Wilson",
      position: "Head of Arts",
      department: "Arts",
      bio: "Award-winning artist and educator with international exhibitions.",
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl text-teal-100 max-w-2xl">
            Meet our dedicated faculty and staff members who are committed to your success.
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-teal-600 font-medium mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4">{member.department}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Departments Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Computer Science",
              "Business Studies",
              "Engineering",
              "Arts",
              "Research",
              "Administration",
              "Student Services",
              "Library"
            ].map((dept, index) => (
              <div key={index} className="bg-teal-50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-teal-600">{dept}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-teal-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl mb-8">We're always looking for talented individuals to join our faculty and staff.</p>
          <button className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition-colors">
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team; 