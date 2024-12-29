import React from 'react';
import {
  Dog,
  Heart,
  Award,
  GraduationCap,
  Users,
  Star,
  Coffee
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const certifications = [
    "Professional Dog Grooming Certification",
    "Pet First Aid & CPR",
    "Animal Behavior Specialist",
    "Specialized Breed Handling"
  ];

  const funFacts = [
    "Started grooming at age 16",
    "Proud dog mom to 3 rescue pups",
    "Makes homemade dog treats",
    "Volunteers at local shelters"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Dog className="w-16 h-16 mx-auto text-purple-500 mb-4" />
          <h1 className="text-4xl font-bold text-purple-600 mb-4">
            Meet Your Groomer
          </h1>
          <p className="text-lg text-purple-500">
            The tail-wagging story behind Puppy Paradise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Main Profile Card */}
          <div className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300">
            {/* Image Placeholder */}
            <div className="w-full h-64 bg-purple-100 rounded-lg mb-6 flex items-center justify-center">
              <img
                src="/api/placeholder/400/320"
                alt="Owner Profile"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-purple-600 mb-4 flex items-center">
              <Heart className="w-6 h-6 mr-2 text-pink-500" />
              Sarah Johnson
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              With over 15 years of experience in pet grooming, I&apos;ve turned my passion for pets into a
              dream career. My journey began with my first rescue dog, Max, who inspired me to create
              a safe and loving environment for all furry friends.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {certifications.map((cert, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm flex items-center"
                >
                  <Award className="w-4 h-4 mr-1" />
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-purple-600 mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-2" />
              My Journey
            </h2>
            <div className="space-y-6">
              <TimelineItem 
                year="2008"
                title="Started Pet Grooming School"
                description="Enrolled in the prestigious Pawfect Academy"
              />
              <TimelineItem 
                year="2010"
                title="First Professional Role"
                description="Lead groomer at Happy Tails Salon"
              />
              <TimelineItem 
                year="2015"
                title="Advanced Certification"
                description="Completed master grooming certification"
              />
              <TimelineItem 
                year="2018"
                title="Opened Puppy Paradise"
                description="Dream became reality with our own salon"
              />
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Philosophy Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="text-center mb-4">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-purple-600">My Philosophy</h3>
            </div>
            <p className="text-gray-600 text-center">
              Every pet deserves to feel special. I believe in treating each furry friend as if they
              were my own, providing comfort, care, and lots of love.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="text-center mb-4">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-purple-600">Mission</h3>
            </div>
            <p className="text-gray-600 text-center">
              To create a stress-free grooming experience where pets leave feeling refreshed,
              happy, and looking their absolute best.
            </p>
          </div>

          {/* Community Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="text-center mb-4">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-purple-600">Community</h3>
            </div>
            <p className="text-gray-600 text-center">
              Proud to support local animal shelters and rescue organizations through regular
              volunteer work and donation programs.
            </p>
          </div>
        </div>

        {/* Fun Facts Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-purple-600 mb-6 flex items-center">
            <Coffee className="w-6 h-6 mr-2" />
            Fun Facts About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {funFacts.map((fact, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg group hover:bg-purple-100 transition-colors"
              >
                <Dog className="w-5 h-5 text-purple-500 group-hover:rotate-12 transition-transform" />
                <span className="text-gray-700">{fact}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Second Image Placeholder */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="w-full h-96 bg-purple-100 rounded-lg flex items-center justify-center">
            <img
              src="/api/placeholder/800/400"
              alt="With the Team"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <p className="text-center text-gray-600 mt-4 italic">
            Our amazing team at Puppy Paradise! 🐾
          </p>
        </div>
      </div>
    </div>
  );
};

// Timeline Item Component
const TimelineItem: React.FC<{
  year: string;
  title: string;
  description: string;
}> = ({ year, title, description }) => (
  <div className="relative pl-8 border-l-2 border-purple-200 group">
    <div className="absolute left-0 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
    <div className="mb-1 flex items-center">
      <span className="text-sm text-pink-500 font-bold">{year}</span>
    </div>
    <h3 className="text-lg font-semibold text-purple-600">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default AboutPage;