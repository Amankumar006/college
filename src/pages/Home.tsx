import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Hero from '../components/Hero';
import QuickLinks from '../components/QuickLinks';
import InstituteHighlights from '../components/InstituteHighlights';
import CallToAction from '../components/CallToAction';
import VirtualTour from '../components/VirtualTour';

const Home = () => {
  return (
    <main>
      <Hero />
      <QuickLinks />
      <InstituteHighlights />
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Virtual Campus Tour</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Explore our state-of-the-art facilities and beautiful campus from anywhere in the world.
            </p>
            <Link
              to="/virtual-tour"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-blue-600 hover:text-blue-700"
            >
              View Full Virtual Tour
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <VirtualTour />
        </div>
      </section>
      <CallToAction />
    </main>
  );
};

export default Home;