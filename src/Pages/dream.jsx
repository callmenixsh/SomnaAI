import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const fallbackDream = {
  title: "Dream Fallback",
  videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  imageUrl:
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  description: "This is a dream fallback for testing :D",
  emotions: {
    loading: "High",
    loader: "Low",
    loaded: "Medium",
  },
  tags: ["Tags", "Tags", "Tags"],
};

const Dream = () => {
  const location = useLocation();
  const dreamId = location.state?.dreamId;
  const [dream, setDream] = useState(null);
  const [loading, setLoading] = useState(!!dreamId);

  useEffect(() => {
    if (!dreamId) {
      setDream(fallbackDream);
      setLoading(false);
      return;
    }
    setLoading(true);
    fetch(`/api/dreams/${dreamId}`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => setDream(data))
      .catch(() => setDream(fallbackDream))
      .finally(() => setLoading(false));
  }, [dreamId]);

  if (loading || !dream) {
    return (
      <main className="container mx-auto px-4 py-16 max-w-5xl text-gray-300">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Loading Dream...
        </h1>
      </main>
    );
  }

  const { title, videoUrl, imageUrl, description, emotions, tags = [] } = dream;

  return (
    <main className="container mx-auto px-4 py-16 max-w-5xl text-gray-300">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        {title || "Finalised Dream"}
      </h1>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-[#2a2438] rounded-full text-indigo-300 text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Video Section */}
        <div className="md:col-span-2 flex flex-col items-center">
          <video
            src={videoUrl}
            controls
            autoPlay
            poster={imageUrl}
            className="w-full h-[32rem] object-cover rounded-xl shadow-lg bg-black mb-6"
          />
          <div className="bg-[#1f1b36] rounded-xl p-6 shadow-lg w-full md:mt-0 mt-6">
            <h2 className="text-xl font-semibold mb-2 text-indigo-300">
              Description
            </h2>
            <p className="text-lg text-gray-300">{description}</p>
          </div>
        </div>
        {/* Scores Section */}
        <div className="bg-[#1f1b36] rounded-xl p-4 shadow-lg w-full md:mt-0 mt-6">
          <h2 className="text-xl font-semibold mb-4 text-indigo-400 text-center">
            Scores
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:grid-cols-1 ">
            {emotions &&
              Object.entries(emotions).map(([key, value]) => (
                <li
                  key={key}
                  className="flex flex-col items-center justify-center bg-[#2a2438] rounded-md px-3 py-1 text-sm text-center"
                >
                  <span className="font-medium capitalize text-indigo-300 mb-1">
                    {key}
                  </span>
                  <span className="text-white">{value}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
      {/* Responsive stacking for small screens */}
      <style>
        {`
          @media (max-width: 768px) {
            .md\\:col-span-2 {
              grid-column: span 1 / span 1 !important;
            }
            .sm\\:grid-cols-2 {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
            ul.grid > li {
              text-align: center !important;
              justify-content: center !important;
              align-items: center !important;
            }
          }
        `}
      </style>
    </main>
  );
};

export default Dream;