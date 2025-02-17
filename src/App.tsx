import React, { useState } from 'react';
import { Icons } from './components/icons';

interface Cleaner {
  id: number;
  name: string;
  specialty: string;
  score: number;
  totalRate: number;
  value: number;
  image: string;
}

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const services = [
    { icon: <Icons.Home className="w-6 h-6" />, name: 'Home', color: 'bg-[#D0ECF6]' },
    { icon: <Icons.Office className="w-6 h-6" />, name: 'Office', color: 'bg-[#FDE1A9]' },
    { icon: <Icons.Washing className="w-6 h-6" />, name: 'Washing', color: 'bg-[#8BAADB]' },
    { icon: <Icons.Iron className="w-6 h-6" />, name: 'Ironing', color: 'bg-[#D0ECF6]' },
    { icon: <Icons.Organization className="w-6 h-6" />, name: 'Organization', color: 'bg-[#FDE1A9]' },
    { icon: <Icons.Disinfect className="w-6 h-6" />, name: 'Disinfect', color: 'bg-[#8BAADB]' },
  ];

  const cleaners: Cleaner[] = [
    {
      id: 1,
      name: 'Maria Aguilar Azalar',
      specialty: 'Specialized in special washes',
      score: 4.8,
      totalRate: 20,
      value: 155,
      image: 'https://images.unsplash.com/photo-1586297098710-0382a496c814?w=400&q=80'
    },
    {
      id: 2,
      name: 'Matt Andrew',
      specialty: 'Expert in office cleaning',
      score: 4.8,
      totalRate: 48,
      value: 255,
      image: 'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=400&q=80'
    },
    {
      id: 3,
      name: 'Olivia Foster',
      specialty: 'Residential and Office Cleaning',
      score: 4.9,
      totalRate: 60,
      value: 285,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-['Lato']">
      {/* Search Bar */}
      <div className="p-4 bg-[#F1F6FF]">
        <div className="relative">
          <Icons.Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Promotion Banner */}
      <div className="mx-4 my-4 bg-[#F1F6FF] rounded-xl p-4">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <p className="text-sm">Select your appointment before November 20th</p>
            <h2 className="text-xl font-bold text-[#152744]">25% Discount</h2>
            <p className="text-sm text-gray-600">Express Cleaning for homes in up to 2 hours!</p>
            <button className="bg-[#152744] text-white px-4 py-2 rounded-lg mt-2">
              Book now!
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&q=80"
            alt="Cleaning service"
            className="w-32 h-32 object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Services */}
      <div className="px-4 mb-6">
        <h2 className="text-xl font-bold text-[#152744] mb-4">Services</h2>
        <div className="grid grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.color} p-4 rounded-xl flex flex-col items-center justify-center space-y-2`}
            >
              {service.icon}
              <span className="text-sm text-[#152744]">{service.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Cleaners */}
      <div className="px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#152744]">Recommended</h2>
          <button className="text-[#152744]">See all</button>
        </div>
        <div className="space-y-4">
          {cleaners.map((cleaner) => (
            <div key={cleaner.id} className="bg-white rounded-xl p-4 shadow-sm border">
              <div className="flex justify-between">
                <div className="flex space-x-4">
                  <img
                    src={cleaner.image}
                    alt={cleaner.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-[#152744]">{cleaner.name}</h3>
                    <p className="text-sm text-gray-600">{cleaner.specialty}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Icons.Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm">{cleaner.score}</span>
                      <span className="text-sm text-gray-400">({cleaner.totalRate})</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <Icons.Bookmark className="w-5 h-5 text-gray-400" />
                  <button className="bg-[#152744] text-white px-4 py-1 rounded-lg text-sm">
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;