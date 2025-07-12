import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    fetch('/api/dreams')
      .then(res => res.json())
      .then(data => setDreams(data))
      .catch(err => console.error('Failed to fetch dreams:', err));
  }, []);

  return (
    <section className="mb-16">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Your Dream Journal</h2>
        <p className="text-lg text-gray-300">
          Explore your subconscious patterns through your visualized dream archive.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="dreamJournal">
        {dreams.map((dream, index) => (
          <div
            key={index}
            className="bg-[#1f1b36] rounded-xl overflow-hidden shadow-lg dream-glow hover:shadow-xl transition"
          >
            <div className="relative">
              <img
                src={dream.image}
                alt={dream.alt}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-2 right-2 bg-[#0f0e17] bg-opacity-70 px-2 py-1 rounded-full text-xs">
                {dream.timeAgo}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1">{dream.title}</h3>
              <p className="text-sm text-gray-300 mb-3">{dream.description}</p>
              <div className="flex justify-between text-sm">
                {dream.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-[#2a2438] rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

      </div>

      <div className="text-center mt-8">
        <button className="px-6 py-3 border border-indigo-500 rounded-full text-indigo-400 hover:bg-indigo-500 hover:text-white transition">
          View All Dreams
        </button>
      </div>
    </section>
  );
};

export default Gallery;
