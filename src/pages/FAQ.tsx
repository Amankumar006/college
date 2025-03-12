import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import Chatbot from '../components/Chatbot';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are the admission requirements?",
      answer: "Admission requirements vary by program. Generally, you need a high school diploma or equivalent, standardized test scores, and a completed application form. Some programs may require additional prerequisites or portfolio submissions."
    },
    {
      question: "How do I apply for financial aid?",
      answer: "To apply for financial aid, complete the FAFSA form and submit it along with your application. We also offer various scholarships and work-study programs. Contact our financial aid office for detailed information."
    },
    {
      question: "What housing options are available?",
      answer: "We offer on-campus housing in modern dormitories with various room configurations. Off-campus housing assistance is also available through our housing office. Both options include meal plans and utilities."
    },
    {
      question: "Can I transfer credits from another institution?",
      answer: "Yes, we accept transfer credits from accredited institutions. Each transfer request is evaluated individually based on course content and grades. Contact our admissions office for a credit evaluation."
    },
    {
      question: "What career services are available?",
      answer: "Our career services include resume building, interview preparation, job fairs, and internship opportunities. We also provide career counseling and networking events with industry professionals."
    },
    {
      question: "How do I access online learning resources?",
      answer: "Students can access online learning resources through our learning management system (LMS). You'll receive login credentials after enrollment. The LMS includes course materials, assignments, and communication tools."
    },
    {
      question: "What student support services are available?",
      answer: "We offer comprehensive support services including academic advising, tutoring, mental health counseling, disability services, and international student support. All services are free for enrolled students."
    },
    {
      question: "How can I get involved in campus activities?",
      answer: "There are numerous ways to get involved: join student clubs, participate in sports teams, volunteer for community service, or take part in cultural events. Visit our student activities office for more information."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-rose-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-rose-100 max-w-2xl">
            Find answers to commonly asked questions about our institution and programs.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <Icons.ChevronUp className="w-5 h-5 text-rose-600" />
                  ) : (
                    <Icons.ChevronDown className="w-5 h-5 text-rose-600" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Support Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-gray-600 mb-8">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-rose-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-rose-700 transition-colors">
                Contact Support
              </button>
              <button className="bg-white text-rose-600 border-2 border-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-rose-50 transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Admissions",
            "Financial Aid",
            "Student Life",
            "Academic Programs",
            "Campus Map",
            "Library",
            "Events Calendar",
            "Student Portal"
          ].map((link, index) => (
            <a
              key={index}
              href="#"
              className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <span className="text-gray-900 hover:text-rose-600">{link}</span>
            </a>
          ))}
        </div>
      </div>

      <Chatbot />
    </div>
  );
};

export default FAQ; 