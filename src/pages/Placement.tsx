import React from 'react';
import { Briefcase, Users, Building2, TrendingUp } from 'lucide-react';

const Placement = () => {
  const stats = [
    { icon: <Briefcase className="w-8 h-8" />, label: "Placement Rate", value: "95%" },
    { icon: <Users className="w-8 h-8" />, label: "Students Placed", value: "500+" },
    { icon: <Building2 className="w-8 h-8" />, label: "Companies", value: "100+" },
    { icon: <TrendingUp className="w-8 h-8" />, label: "Average Package", value: "₹8.5 LPA" },
  ];

  const placementProcess = [
    {
      title: "Career Counseling",
      description: "One-on-one sessions with career counselors to understand your goals and aspirations."
    },
    {
      title: "Resume Building",
      description: "Professional guidance to create impactful resumes that stand out to recruiters."
    },
    {
      title: "Interview Preparation",
      description: "Mock interviews and group discussions to build confidence and improve communication."
    },
    {
      title: "Company Connect",
      description: "Direct interaction with industry professionals through guest lectures and workshops."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Placement & Career Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Empowering students with the skills and opportunities needed for successful careers in the global marketplace.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Placement Process */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Placement Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {placementProcess.map((process, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
              <p className="text-gray-600">{process.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Recruiters */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Top Recruiters</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-center justify-center">
                <div className="h-12 w-full bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Career Journey?</h2>
          <p className="text-xl mb-8">Connect with our placement cell and get started with your professional journey.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Contact Placement Cell
          </button>
        </div>
      </div>
    </div>
  );
};

export default Placement;       