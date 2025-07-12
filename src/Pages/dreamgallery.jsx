import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DreamGallery = () => {
  const [dreams, setDreams] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/dreams')
      .then(res => res.json())
      .then(data => setDreams(data))
      .catch(() => {
        setDreams([
          {
            title: 'Skyward Flight',
            description: 'Soaring through layered pink skies with no ground in sight.',
            image:
              'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/18618d18-0f0c-46ea-8713-3b5f11ff258e.png',
            timeAgo: '2 days ago',
            tags: ['Freedom', 'Surreal'],
          },
          {
            title: 'Digital Forest',
            description: 'Trees glowing with circuit veins in an endless neon biome.',
            image:
              'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/768841a5-70e6-4298-a252-05b5da15bfd9.png',
            timeAgo: '1 week ago',
            tags: ['Mystery', 'Nature'],
          },
          {
            title: 'Library of Whispers',
            description: 'Ancient books murmuring secrets under a twilight dome.',
            image:
              'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f9a46858-6916-4713-b23c-edbacd926dea.png',
            timeAgo: '5 days ago',
            tags: ['Knowledge', 'Magic'],
          },
          {
            title: 'Neon Ocean',
            description: 'Waves of glowing blue light crashing under a starry sky.',
            image:
              'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
            timeAgo: '3 days ago',
            tags: ['Ocean', 'Neon', 'Calm'],
          },
          {
            title: 'Celestial Garden',
            description: 'A garden floating in space with glowing flowers and planets.',
            image:
              'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
            timeAgo: '6 days ago',
            tags: ['Space', 'Nature', 'Fantasy'],
          },
          {
            title: 'Crystal Cavern',
            description: 'Sparkling crystals illuminating an endless cave of wonders.',
            image:
              'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80',
            timeAgo: '4 days ago',
            tags: ['Mystery', 'Adventure', 'Shimmer'],
          },
          {
            title: 'Electric Skyline',
            description: 'City skyline crackling with electric veins at twilight.',
            image:
              'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
            timeAgo: '1 day ago',
            tags: ['City', 'Electric', 'Vibrant'],
          },
          {
            title: 'Floating Lanterns',
            description: 'Softly glowing lanterns drifting across a midnight lake.',
            image:
              'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80',
            timeAgo: '7 days ago',
            tags: ['Peace', 'Night', 'Light'],
          },
          {
            title: 'Astral Path',
            description: 'A glowing path leading through a starry astral plane.',
            image:
              'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80',
            timeAgo: '2 weeks ago',
            tags: ['Astral', 'Mystical', 'Journey'],
          },
          {
            title: 'Frozen Time',
            description: 'A clock frozen in ice amidst a snow-covered forest.',
            image:
              'https://media.istockphoto.com/id/518311403/photo/frozen-time-in-a-ice-cube.jpg?s=612x612&w=0&k=20&c=vGYx_0FtMSfqn9lCiCqWO3lyPBz8VhCTBpMkd45afVc=',
            timeAgo: '8 days ago',
            tags: ['Time', 'Winter', 'Stillness'],
          },
          {
            title: 'Rainbow Mirage',
            description: 'A shimmering rainbow arching over a desert oasis.',
            image:
              'https://images.saatchiart.com/saatchi/315309/art/2557844/1627769-HSC00002-7.jpg',
            timeAgo: '3 weeks ago',
            tags: ['Rainbow', 'Desert', 'Magic'],
          },
        ]);
      });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-gray-300">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Dream Gallery</h2>
        <p className="text-lg text-gray-400 mt-2">Relive the dreams you've visualized.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dreams.map((dream, index) => (
          <div
            key={index}
            className="bg-[#1f1b36] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition dream-glow cursor-pointer"
            onClick={() =>
              navigate("/dream", {
                state: {
                  dreamId: dream.id || index,
                },
              })
            }
            role="button"
            tabIndex={0}
            onKeyDown={e =>
              (e.key === "Enter" || e.key === " ") &&
              navigate("/dream", {
                state: {
                  dreamId: dream.id || index,
                },
              })
            }
          >
            <div className="relative">
              <img
                src={dream.image}
                alt={dream.title}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-2 right-2 bg-[#0f0e17] bg-opacity-70 text-xs px-2 py-1 rounded-full">
                {dream.timeAgo}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-white font-semibold text-lg mb-1">{dream.title}</h3>
              <p className="text-sm text-gray-400 mb-3">{dream.description}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {dream.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#2a2438] text-gray-300 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DreamGallery;
