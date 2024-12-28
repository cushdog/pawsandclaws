'use client'

import React, { useState } from 'react';
import { Dog, Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: '',
        email: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-bounce">
          <Dog className="w-16 h-16 mx-auto text-purple-500 mb-4" />
          <h1 className="text-4xl font-bold text-purple-600 mb-4">Woof! Let's Chat!</h1>
          <p className="text-lg text-purple-500">
            Have questions about our pawsome services? Drop us a line!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info Card */}
          <div className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-purple-600 mb-6 flex items-center">
              <Dog className="w-6 h-6 mr-2 animate-bounce" />
              Puppy Paradise Contact Info
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-pink-500 group-hover:rotate-12 transition-transform" />
                <span className="text-gray-700">(123) 456-7890</span>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-pink-500 group-hover:rotate-12 transition-transform" />
                <span className="text-gray-700">woof@puppyparadise.com</span>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <MapPin className="w-5 h-5 text-pink-500 group-hover:rotate-12 transition-transform" />
                <span className="text-gray-700">123 Puppy Lane, Dogtown</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-purple-600">
                We'll fetch your message and respond within 24 hours! 🐾
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-purple-600 mb-6">Send Us a Bark!</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="group">
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors group-hover:border-pink-300"
                  required
                />
              </div>

              <div className="group">
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors group-hover:border-pink-300"
                  required
                />
              </div>

              <div className="group">
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors group-hover:border-pink-300"
                  required
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:opacity-90 transform hover:scale-105 transition-all flex items-center justify-center space-x-2 ${
                  isSubmitted ? 'bg-green-500' : ''
                }`}
              >
                {isSubmitted ? (
                  'Message Sent! 🐾'
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5 animate-bounce" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Decoration */}
        <div className="mt-12 flex justify-center space-x-4">
          <Dog className="w-8 h-8 text-purple-400 animate-bounce" />
          <Dog className="w-8 h-8 text-pink-400 animate-bounce delay-100" />
          <Dog className="w-8 h-8 text-purple-400 animate-bounce delay-200" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;