import React from 'react';
import { Dog } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HomePage: React.FC = () => {
  
  const carouselImages = [
    "/api/placeholder/800/400",
    "/api/placeholder/800/400",
    "/api/placeholder/800/400",
    "/api/placeholder/800/400",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100">
      {/* Hero Section */}
      <div className="min-h-[80vh] flex items-center justify-center px-4 relative">
        <div className="absolute left-0 w-1/3 text-right pr-8">
          <h2 className="text-4xl md:text-6xl font-bold text-purple-600 opacity-0 animate-fade-right">
            Happy Pets
          </h2>
        </div>
        
        <div className="transform transition-transform hover:scale-105 duration-300 z-10">
          <Dog className="w-32 h-32 md:w-48 md:h-48 text-purple-500 opacity-0 animate-fade-in" />
        </div>
        
        <div className="absolute right-0 w-1/3 text-left pl-8">
          <h2 className="text-4xl md:text-6xl font-bold text-purple-600 opacity-0 animate-fade-left">
            Happy Hearts
          </h2>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="max-w-5xl mx-auto px-4 mb-16">
        <Carousel className="w-full">
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="bg-white p-2 rounded-xl shadow-lg">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>

      {/* About Section */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300">
          <h2 className="text-3xl font-bold text-purple-600 mb-6 text-center">
            Welcome to Puppy Paradise
          </h2>
          <div className="prose prose-purple max-w-none text-gray-600 space-y-4">
            <p>
              At Puppy Paradise, we believe every pet deserves to feel special. Our professional
              grooming services are designed to provide your furry friends with the ultimate
              pampering experience in a safe, loving environment.
            </p>
            <p>
              Founded with a passion for pet care, we&apos;ve created a stress-free sanctuary where
              your pets can enjoy premium grooming services delivered by experienced professionals
              who treat each animal as their own. From basic trims to luxury spa treatments,
              we&apos;re committed to enhancing your pet&apos;s well-being while ensuring they look and
              feel their absolute best.
            </p>
            <p>
              Our team combines years of experience with ongoing education in the latest grooming
              techniques and pet care practices. We use only premium, pet-safe products and
              provide individualized attention to each of our furry clients, ensuring their
              unique needs are met with the utmost care and professionalism.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Decoration */}
      <div className="pb-12 flex justify-center space-x-4">
        <Dog className="w-8 h-8 text-purple-400 animate-bounce" />
        <Dog className="w-8 h-8 text-pink-400 animate-bounce delay-100" />
        <Dog className="w-8 h-8 text-purple-400 animate-bounce delay-200" />
      </div>
    </div>
  );
};

export default HomePage;