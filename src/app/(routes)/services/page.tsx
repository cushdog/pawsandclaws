import React from 'react';
import {
  Dog,
  Scissors,
  ShowerHead,
  Heart,
  Clock,
  Sparkles,
  Brush,
  Calendar,
} from 'lucide-react';

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
  const services: Service[] = [
    {
      id: 1,
      title: "Pawsome Premium Grooming",
      description: "Complete grooming service including bath, haircut, nail trimming, and styling",
      price: "From $65",
      icon: <Scissors className="w-8 h-8" />,
      features: [
        "Breed-specific styling",
        "Premium shampoo and conditioner",
        "Ear cleaning",
        "Nail trimming and filing",
        "Bow or bandana included"
      ]
    },
    {
      id: 2,
      title: "Spa Bath & Brush",
      description: "Relaxing bath service with brushing and basic grooming",
      price: "From $40",
      icon: <ShowerHead className="w-8 h-8" />,
      features: [
        "Thorough brushing",
        "Hydrating bath",
        "Blow dry and brush out",
        "Ear cleaning",
        "Paw pad treatment"
      ]
    },
    {
      id: 3,
      title: "Puppy&apos;s First Groom",
      description: "Gentle introduction to grooming for puppies",
      price: "From $45",
      icon: <Heart className="w-8 h-8" />,
      features: [
        "Extra gentle handling",
        "Positive reinforcement",
        "Basic trimming",
        "Training tips for home",
        "Special puppy treat"
      ]
    },
    {
      id: 4,
      title: "Luxury Fur Treatment",
      description: "Premium fur treatment with special care for coat health",
      price: "From $75",
      icon: <Sparkles className="w-8 h-8" />,
      features: [
        "Deep conditioning",
        "De-shedding treatment",
        "Skin therapy",
        "Aromatherapy",
        "Massage treatment"
      ]
    }
  ];

  const businessHours: BusinessHour[] = [
    { day: "Monday", hours: "10:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "10:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "Closed" },
    { day: "Thursday", hours: "10:00 AM - 6:00 PM" },
    { day: "Friday", hours: "10:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Dog className="w-16 h-16 mx-auto text-purple-500 mb-4" />
          <h1 className="text-4xl font-bold text-purple-600 mb-4">
            Our Pawsome Services
          </h1>
          <p className="text-lg text-purple-500">
            Treat your furry friend to the ultimate grooming experience!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
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
                  <span className="font-medium text-gray-700">{timeSlot.day}</span>
                </div>
                <span className={`text-gray-600 ${timeSlot.hours === 'Closed' ? 'text-pink-500 font-medium' : ''}`}>
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