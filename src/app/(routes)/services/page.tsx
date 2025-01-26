"use client";

import React, { useState } from "react";
import {
  Dog,
  Scissors,
  Clock,
  Brush,
  Calendar,
  Search,
  ShowerHead,
  Sparkles,
  PawPrint,
  Bone,
  Ear,
} from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  features: string[];
}

interface BusinessHour {
  day: string;
  hours: string;
}

const ServicesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const services: Service[] = [
    {
      id: 1,
      title: "Premium Bathing",
      description:
        "A tailored bathing experience designed for your pet's coat type and breed-specific needs.",
      price: "From $55",
      icon: <ShowerHead className="w-8 h-8" />,
      features: [
        "Wide variety of shampoo and conditioners tailored to specific coat types",
        "Pre-brush to remove loose hair",
        "Specialized breed specific needs to ensure stress free environment",
        "Post blow dry and brush out",
      ],
    },
    {
      id: 2,
      title: "Hair Cut",
      description:
        "Comprehensive coat trimming and styling for a refreshed look.",
      price: "From $55",
      icon: <Scissors className="w-8 h-8" />,
      features: ["Full bathing service", "Full coat cut down", "Full trim up"],
    },
    {
      id: 3,
      title: "Teeth Brushing",
      description:
        "Gentle cleaning to remove plaque and maintain oral hygiene.",
      price: "From $15",
      icon: <Sparkles className="w-8 h-8" />,
      features: ["Remove tartar and plaque above and below the gumline"],
    },
    {
      id: 4,
      title: "Dematting + Brushouts",
      description:
        "Effective removal of mats and tangles for a smooth, healthy coat.",
      price: "From $20",
      icon: <PawPrint className="w-8 h-8" />,
      features: [
        "Removing mats of fur utilizing dematting tools and products",
        "Brushing out afterwards",
        "Brushing out old hair and dead skin",
      ],
    },
    {
      id: 5,
      title: "Nail Trimming + Grinding",
      description: "Professional nail care to ensure safe and smooth edges.",
      price: "From $15",
      icon: <Bone className="w-8 h-8" />,
      features: [
        "Shortening nails by clipping them",
        "Grinding nails to smooth out any rough edges",
      ],
    },
    {
      id: 6,
      title: "Ear Cleaning/Ear Hair Pulling",
      description: "Thorough ear cleaning and hair removal for better hygiene.",
      price: "From $15",
      icon: <Ear className="w-8 h-8" />,
      features: [
        "Carefully remove hair by using specific product to loosen hair and gently pull it out",
        "Clean out the wax buildup in the ear canal",
      ],
    },
    {
      id: 7,
      title: "Hair Trims",
      description:
        "Precision trimming to tidy up around the face, feet, and featherings.",
      price: "From $55",
      icon: <Scissors className="w-8 h-8" />,
      features: ["Clean up around the face, feet, and other featherings"],
    },
  ];

  const businessHours: BusinessHour[] = [
    { day: "Monday", hours: "10:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "10:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "Closed" },
    { day: "Thursday", hours: "10:00 AM - 6:00 PM" },
    { day: "Friday", hours: "10:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "Closed" },
  ];

  const filteredServices = services.filter((service) => {
    const searchLower = searchQuery.toLowerCase();
    const titleMatch = service.title.toLowerCase().includes(searchLower);
    const featureMatch = service.features.some((feature) =>
      feature.toLowerCase().includes(searchLower)
    );
    return titleMatch || featureMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Dog className="w-16 h-16 mx-auto text-purple-500 mb-4" />
          <h1 className="text-4xl font-bold text-purple-600 mb-4">
            Our Pawsome Services
          </h1>
          <p className="text-lg text-purple-500 mb-8">
            Treat your furry friend to the ultimate grooming experience!
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-xl border-2 border-purple-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-300"
              />
              <Search className="w-6 h-6 text-purple-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-pink-100 transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-600 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-2xl font-bold text-pink-500 mb-4">
                    {service.price}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Brush className="w-4 h-4 text-purple-400" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredServices.length === 0 && (
          <div className="text-center py-8">
            <p className="text-lg text-purple-500">
              No services found matching your search.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Business Hours */}
        <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-8 h-8 text-purple-500" />
            <h2 className="text-2xl font-bold text-purple-600">
              Business Hours
            </h2>
          </div>

          <div className="space-y-4">
            {businessHours.map((timeSlot, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-purple-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-pink-500 group-hover:rotate-12 transition-transform" />
                  <span className="font-medium text-gray-700">
                    {timeSlot.day}
                  </span>
                </div>
                <span
                  className={`text-gray-600 ${
                    timeSlot.hours === "Closed"
                      ? "text-pink-500 font-medium"
                      : ""
                  }`}
                >
                  {timeSlot.hours}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-purple-600 text-center">
              🐾 Early drop-off available by appointment! 🐾
            </p>
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

export default ServicesPage;
