import React from 'react';
import { ChevronRight, GraduationCap, Globe2, Users, Award, Building2, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const stats = [
    { icon: GraduationCap, value: "50K+", label: "Graduates" },
    { icon: Globe2, value: "100+", label: "Partner Universities" },
    { icon: Users, value: "500+", label: "Faculty Members" },
    { icon: Award, value: "95%", label: "Placement Rate" },
    { icon: Building2, value: "50+", label: "Research Centers" },
    { icon: Clock, value: "30+", label: "Years of Excellence" }
  ];

  const features = [
    "World-Class Education",
    "Industry-Focused Curriculum",
    "State-of-the-Art Facilities",
    "Global Exposure",
    "Research Opportunities",
    "Career Development"
  ];

  return (
    <div className="relative pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-[700px] object-cover"
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80"
          alt="Campus"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-blue-900/60" />
      </div>
      
      <motion.div
        ref={ref}
        variants={heroVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative max-w-7xl mx-auto py-32 px-4 sm:py-40 sm:px-6 lg:px-8"
      >
        <motion.div 
          variants={heroVariants}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span 
            variants={heroVariants}
            className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-200 text-sm font-semibold mb-6"
          >
            Excellence in Education Since 1990
          </motion.span>
          <motion.h1 
            variants={heroVariants}
            className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6"
          >
            Shaping Tomorrow's <span className="text-blue-400">Leaders</span>
          </motion.h1>
          <motion.p 
            variants={heroVariants}
            className="mt-6 text-xl text-gray-300 leading-relaxed"
          >
            Join a legacy of excellence in education, innovation, and research. 
            Transform your future with world-class faculty and state-of-the-art facilities.
          </motion.p>
          <motion.div 
            variants={heroVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Apply Now
              <ChevronRight className="ml-2 h-6 w-6" />
            </a>
            <Link
              to="/virtual-tour"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-full text-white hover:bg-white/10 transition-all duration-200"
            >
              Virtual Tour
            </Link>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={heroVariants}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto"
        >
          {features.map((feature) => (
            <div key={feature} className="text-center">
              <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium">
                {feature}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          variants={heroVariants}
          className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 text-blue-200 mb-4">
                <Icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{value}</div>
              <div className="text-gray-300 text-sm">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={heroVariants}
          className="mt-20 bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
            <p className="text-gray-200 mb-6">Join thousands of successful graduates who started their journey with us.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-blue-600 bg-white hover:bg-gray-100 transition-all duration-200"
              >
                Schedule a Visit
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-full text-white hover:bg-white/10 transition-all duration-200"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;