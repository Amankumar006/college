import React from 'react';
import { BookOpen, GraduationCap, Briefcase, Users, Globe2, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Academic Programs",
      description: "Comprehensive range of undergraduate and postgraduate programs designed to meet industry needs.",
      features: [
        "Industry-aligned curriculum",
        "Experienced faculty",
        "Research opportunities",
        "Practical training"
      ]
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Career Development",
      description: "Professional development programs to enhance your career prospects and employability.",
      features: [
        "Career counseling",
        "Skill development",
        "Industry workshops",
        "Internship programs"
      ]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Placement Services",
      description: "Comprehensive placement support to help you secure your dream job.",
      features: [
        "Company connections",
        "Interview preparation",
        "Resume building",
        "Job fairs"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Student Support",
      description: "Dedicated support services to ensure your academic and personal success.",
      features: [
        "Academic advising",
        "Personal counseling",
        "Disability services",
        "Peer mentoring"
      ]
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "International Programs",
      description: "Global learning opportunities through exchange programs and international collaborations.",
      features: [
        "Student exchange",
        "International internships",
        "Global workshops",
        "Cultural programs"
      ]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health and wellness services to support your overall well-being.",
      features: [
        "Medical center",
        "Mental health support",
        "Fitness facilities",
        "Wellness programs"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-indigo-100 max-w-2xl">
            Discover the comprehensive range of services we offer to support your educational journey.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="text-indigo-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "24/7 Library Access",
              "Online Learning Resources",
              "Career Counseling",
              "Alumni Network"
            ].map((service, index) => (
              <div key={index} className="bg-indigo-50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-indigo-600">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-indigo-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
          <p className="text-xl mb-8">Contact our service desk for detailed information about any of our services.</p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors">
            Contact Service Desk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services; 