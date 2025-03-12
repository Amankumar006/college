import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Send, RefreshCw } from 'lucide-react';

const Chatbot = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<{ query: string; response: string }[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await fetch('https://api.groq.com/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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',
        },
        body: JSON.stringify({ question: query }),
      });
      const data = await res.json();
      setResponse(data.answer);
      setHistory([...history, { query, response: data.answer }]);
    } catch (error) {
      setResponse('Sorry, something went wrong. Please try again later.');
    } finally {
      setLoading(false);
      setQuery('');
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const resetChat = () => {
    setHistory([]);
    setResponse('');
    setQuery('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleChat}
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        aria-label="Toggle chat"
      >
        {isOpen ? <ChevronDown size={24} /> : <ChevronUp size={24} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white w-80 h-96 rounded-lg shadow-lg overflow-hidden mt-2 flex flex-col"
          >
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">Chat with Us</h2>
              <button
                onClick={resetChat}
                className="text-white hover:text-gray-200 focus:outline-none"
                aria-label="Reset chat"
              >
                <RefreshCw size={20} />
              </button>
            </div>
            <div className="p-4 overflow-y-auto flex-1">
              {history.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="text-right text-blue-600 font-semibold">{item.query}</div>
                  <div className="text-gray-700 mt-1">{item.response}</div>
                </div>
              ))}
              {loading && <div className="text-center text-gray-500">Loading...</div>}
            </div>
            <form onSubmit={handleSubmit} className="p-4 border-t flex items-center">
              <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="ml-2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                disabled={loading}
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot; 