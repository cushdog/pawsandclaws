'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Dog, Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setShowAlert(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
      setShowAlert(true);
      setFormState({
        name: '',
        email: '',
        message: '',
      });

      setTimeout(() => {
        setIsSubmitted(false);
        setShowAlert(false);
      }, 5000);
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      setShowAlert(true);
      console.error('Error sending message:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Floating Alert */}
        {showAlert && (
          <div className="fixed top-4 right-4 z-50 w-96 animate-in slide-in-from-top-2">
            {error ? (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            ) : (
              <Alert className="bg-green-100 text-green-800 border-green-200">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>Your message has been sent successfully! 🐾</AlertDescription>
              </Alert>
            )}
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-12">
          <Dog className="w-16 h-16 mx-auto text-purple-500 mb-4" />
          <h1 className="text-4xl font-bold text-purple-600 mb-4">Woof! Let&apos;s Chat!</h1>
          <p className="text-lg text-purple-500">
            Have questions about our pawsome services? Drop us a line!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info Card */}
          <div className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-purple-600 mb-6 flex items-center">
              <Dog className="w-6 h-6 mr-2" />
              Paws & Claws Contact Info
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-pink-500 group-hover:rotate-12 transition-transform" />
                <span className="text-gray-700"><a href='tel:8158481201'>(815) 848-1201</a></span>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-pink-500 group-hover:rotate-12 transition-transform" />
                <span className="text-gray-700"><a href='mailto:pawsnclawspontiac@gmail.com'>pawsnclawspontiac@gmail.com</a></span>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <MapPin className="w-5 h-5 text-pink-500 group-hover:rotate-12 transition-transform" />
                <span className="text-gray-700"><a href='https://www.google.com/maps?q=512+N+Locust+St,+Pontiac,+IL+61764'>512 N Locust St, Pontiac, IL 61764</a></span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-purple-600">
                We&apos;ll fetch your message and respond within 24 hours! 🐾
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
                  className="w-full px-4 py-2 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors group-hover:border-pink-300 disabled:opacity-50"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="group">
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors group-hover:border-pink-300 disabled:opacity-50"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="group">
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors group-hover:border-pink-300 disabled:opacity-50"
                  required
                  disabled={isLoading}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:opacity-90 transform hover:scale-105 transition-all flex items-center justify-center space-x-2 
                  ${isSubmitted ? 'bg-green-500' : ''} 
                  ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}
                  disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  'Message Sent! 🐾'
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
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