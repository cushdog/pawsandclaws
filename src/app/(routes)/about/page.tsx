import React from "react";
import {
  Dog,
  Heart,
  Award,
  GraduationCap,
  Users,
  Star,
  Coffee,
} from "lucide-react";

const AboutPage: React.FC = () => {
  const certifications = [
    "2+ Years in the Pet Care Industry",
    "Worked with Different Animals (Never Been Bit!)",
    "QC Pet Studies Dog Grooming Course",
  ];

  const funFacts = [
    "Proud dog mom to 1 rescue pups",
    "Volunteers at local shelters",
    "Favorite breed: Australian Shepherd",
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
            The tail-wagging story behind Paws & Claws
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
              Keara Smith
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              I&apos;ve been in the pet care industry for 3 years. While
              I&apos;m just getting my feet into the world of pet grooming,
              I&apos;m also very dedicated to getting to know you and your
              pet&apos;s preferences and personalities.
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
                year="2022"
                title="First Adoption"
                description="Adopted my first rescue dog, Jax"
              />
              <TimelineItem
                year="2023"
                title="First Professional Role"
                description="Started working at the Humane Society, and worked in animal control for 6 months"
              />
              <TimelineItem
                year="2024"
                title="Veterinarian Experience"
                description="Started working at the Pontiac Vet in July"
              />
              <TimelineItem
                year="2025"
                title="Opened Paws & Claws"
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
              <h3 className="text-xl font-bold text-purple-600">
                My Philosophy
              </h3>
            </div>
            <p className="text-gray-600 text-center">
              I believe in treating each furry friend as if they were my own,
              providing comfort, care, and lots of love. After all, regular
              grooming leads to happy and healthy pets!
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
              To create a stress-free grooming experience where pets leave
              feeling refreshed, happy, and looking their absolute best.
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
              Passionate about working with local animal shelters and rescue
              organizations, drawing on my firsthand experience in the field.
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
            Our amazing team at Paws & Claws! 🐾
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
