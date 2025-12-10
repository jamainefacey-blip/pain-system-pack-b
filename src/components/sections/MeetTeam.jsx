'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: "Jane Doe",
    title: "TEAM MEMBER • ROLE",
    image: "https://picsum.photos/400/500?random=1"
  },
  {
    id: 2,
    name: "John Smith",
    title: "TEAM MEMBER • ROLE",
    image: "https://picsum.photos/400/500?random=2"
  },
  {
    id: 3,
    name: "John Smith",
    title: "TEAM MEMBER • ROLE",
    image: "https://picsum.photos/400/500?random=3"
  }
];

export default function MeetTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMember = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const currentMember = teamMembers[currentIndex];
  const visibleMembers = [
    teamMembers[currentIndex],
    teamMembers[(currentIndex + 1) % teamMembers.length],
    teamMembers[(currentIndex + 2) % teamMembers.length]
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-4">
            MEET
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-400 dark:text-gray-500 mb-6">
            OUR
          </h2>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            TEAM
          </h1>
          
          <p className="mt-8 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xs">
            Meet our team dedicated to delivering quality projects.
          </p>
        </div>

        {/* Team Members Display */}
        <div className="relative">
          {/* Mobile View - Single Card */}
          <div className="lg:hidden">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-[3/4] relative">
                <img
                  src={currentMember.image}
                  alt={currentMember.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-2">{currentMember.name}</h3>
                <p className="text-xs tracking-widest text-gray-500 dark:text-gray-400">
                  {currentMember.title}
                </p>
              </div>
            </div>
          </div>

          {/* Tablet & Desktop View - Multiple Cards */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {visibleMembers.map((member, idx) => (
              <div
                key={member.id}
                className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                  idx === 0 ? 'scale-105 z-10' : 'scale-95 opacity-75'
                }`}
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-xs tracking-widest text-gray-500 dark:text-gray-400">
                    {member.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevMember}
              className="w-12 h-12 rounded-full border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-300 flex items-center justify-center"
              aria-label="Previous team member"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextMember}
              className="w-12 h-12 rounded-full border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-300 flex items-center justify-center"
              aria-label="Next team member"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Pagination Indicator */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {teamMembers.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-8 bg-foreground'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to team member ${idx + 1}`}
              />
            ))}
          </div>

          {/* Page Number */}
          <div className="absolute bottom-0 right-0 text-6xl sm:text-7xl lg:text-8xl font-light text-gray-200 dark:text-gray-800 -z-10">
            {currentIndex + 1}
            <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-300 dark:text-gray-700">
              /{teamMembers.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
