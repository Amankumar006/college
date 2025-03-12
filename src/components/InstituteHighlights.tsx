import React from 'react';
import { Award, Globe2, Users, Newspaper, BookOpen, Briefcase, Heart, Target, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InstituteHighlights = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const highlights = [
    {
      icon: Award,
      title: 'Top Rankings',
      description: 'Consistently ranked among top institutions by NIRF and QS World Rankings',
      color: 'blue',
      features: ['NIRF Top 10', 'QS 5-Star Rating', 'NAAC A++ Grade']
    },
    {
      icon: Globe2,
      title: 'Global Network',
      description: 'International collaborations with leading universities worldwide',
      color: 'green',
      features: ['Student Exchange Programs', 'Joint Degree Programs', 'International Faculty']
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Distinguished professors and industry experts from around the world',
      color: 'purple',
      features: ['PhD Faculty', 'Industry Experience', 'Research Excellence']
    },
    {
      icon: Newspaper,
      title: 'Latest Research',
      description: 'Cutting-edge research and innovation centers with state-of-the-art facilities',
      color: 'orange',
      features: ['Research Grants', 'Patents', 'Publications']
    },
    {
      icon: BookOpen,
      title: 'Innovative Learning',
      description: 'Modern teaching methodologies and industry-aligned curriculum',
      color: 'indigo',
      features: ['Project-Based Learning', 'Industry Projects', 'Skill Development']
    },
    {
      icon: Briefcase,
      title: 'Career Support',
      description: 'Comprehensive career development and placement assistance',
      color: 'red',
      features: ['Placement Training', 'Industry Connect', 'Alumni Network']
    }
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'text-blue-600 bg-blue-50';
      case 'green':
        return 'text-green-600 bg-green-50';
      case 'purple':
        return 'text-purple-600 bg-purple-50';
      case 'orange':
        return 'text-orange-600 bg-orange-50';
      case 'indigo':
        return 'text-indigo-600 bg-indigo-50';
      case 'red':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-blue-600 bg-blue-50';
    }
  };

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4"
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Institute Highlights
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover what makes our institution stand out in providing quality education and shaping future leaders.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {highlights.map(({ icon: Icon, title, description, color, features }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${getColorClasses(color)} mb-6`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="w-8 h-8" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
              <ul className="space-y-2">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <span className={`w-1.5 h-1.5 rounded-full mr-2 ${getColorClasses(color)}`}></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Future?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of learners and innovators. Take the first step towards your success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Programs
              <ChevronRight className="ml-2 h-6 w-6" />
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-lg font-semibold rounded-full text-blue-600 hover:bg-blue-50 transition-all duration-200"
            >
              Contact Admissions
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default InstituteHighlights;