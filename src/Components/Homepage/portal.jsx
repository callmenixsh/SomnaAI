import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Portal = () => {
  const [dreamText, setDreamText] = useState("");
  const [visualizationData, setVisualizationData] = useState(null);
  const navigate = useNavigate();

  // Mock initial visualization
  const handleInitialVisualization = async () => {
    if (!dreamText.trim()) return;
    // Simulate API delay
    setTimeout(() => {
      setVisualizationData({
        imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        analysis: {
          vibrancy: "High",
          surrealism: "Medium",
          clarity: "Low",
        },
      });
    }, 500);
  };

  // Mock full visualization
  const handleGenerateVisualization = async () => {
    if (!dreamText.trim() || !visualizationData) return;
    setTimeout(() => {
      const data = {
        imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
        analysis: {
          vibrancy: "Very High",
          surrealism: "Very High",
          clarity: "Medium",
        },
      };
      setVisualizationData(data);
      navigate("/visualization", { state: { visualization: data, dreamText } });
    }, 500);
  };

  return (
    <main className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Record & Visualize Your Dreams
          </h2>
          <p className="text-lg text-gray-300">
            Describe your dream and our AI will decode its emotional meaning,
            then transform it into a beautiful visual story.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Dream Input Panel */}
          <div className="bg-[#1f1b36] rounded-xl p-6 shadow-lg dream-glow">
            <h3 className="text-xl font-semibold mb-4">Describe Your Dream</h3>

            <div className="mb-4">
              <label className="block text-sm mb-2">Dream Title</label>
              <input
                type="text"
                placeholder="Give your dream a name..."
                className="w-full bg-[#2a2438] border-none rounded-lg p-3"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-2">Dream Details</label>
              <textarea
                className="w-full h-48 bg-[#2a2438] border-none rounded-lg p-3"
                placeholder="Describe what happened in your dream..."
                value={dreamText}
                onChange={(e) => setDreamText(e.target.value)}
              ></textarea>
            </div>

            <div className="flex items-center justify-between">
              <button
                className="px-6 py-3 bg-indigo-600 rounded-full font-medium flex items-center"
                onClick={handleInitialVisualization}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 489.242 489.242"
                  fill="currentColor"
                  className="h-5 w-5 mr-2"
                >
                  <g>
                    <g>
                      <path
                        d="M416.321,171.943c0-97.8-82.2-176.9-181-171.7c-89.5,5.2-160.3,79.1-162.4,168.6c0,44.7,16.6,86.3,45.8,118.6
          c47.7,51.1,41.6,110.3,41.6,110.3c0,11.4,9.4,20.8,20.8,20.8h126.9c11.4,0,20.8-9.4,21.8-20.8c0,0-7-57.7,40.6-109.2
          C399.621,257.243,416.321,215.643,416.321,171.943z M288.321,377.943h-87.4c-2.1-42.7-20.8-84.3-51-116.5
          c-22.9-25-34.3-57.2-34.3-90.5c1-68.7,54.1-124.8,122.8-129c74.9-4.2,137.3,56.2,137.3,130c0,32.3-12.5,64.5-35.4,88.4
          C309.121,293.643,290.421,335.243,288.321,377.943z"
                      />
                      <path
                        d="M281.021,447.643h-73.9c-11.4,0-20.8,9.4-20.8,20.8s9.4,20.8,20.8,20.8h73.9c11.4,0,20.8-9.4,20.8-20.8
          C301.821,457.043,292.521,447.643,281.021,447.643z"
                      />
                    </g>
                  </g>
                </svg>{" "}
                Visualise
              </button>

              <div className="flex items-center space-x-2">
                {/* Placeholder Buttons */}
                <button className="p-2 rounded-full bg-[#2a2438] hover:bg-[#3a3458] transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button className="p-2 rounded-full bg-[#2a2438] hover:bg-[#3a3458] transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Dream Visualization Preview */}
          <div className="bg-[#1f1b36] rounded-xl p-6 shadow-lg dream-glow">
            <h3 className="text-xl font-semibold mb-4">Dream Visualization</h3>
            <div className="bg-[#2a2438] rounded-lg overflow-hidden">
              <div className="h-64 flex items-center justify-center text-gray-400">
                {visualizationData ? (
                  <img
                    src={visualizationData.imageUrl}
                    alt="Dream visualization"
                    className="object-cover h-full w-full"
                  />
                ) : (
                  <div className="text-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 mx-auto mb-4 opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <p>Your dream will be visualized here...</p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-medium mb-2">Emotional Analysis</h4>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="bg-[#2a2438] p-2 rounded flex items-center">
                  <span className="w-2 h-2 rounded-full bg-pink-500 mr-2"></span>
                  <span>
                    Vibrancy: {visualizationData?.analysis?.vibrancy || "—"}
                  </span>
                </div>
                <div className="bg-[#2a2438] p-2 rounded flex items-center">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                  <span>
                    Surrealism: {visualizationData?.analysis?.surrealism || "—"}
                  </span>
                </div>
                <div className="bg-[#2a2438] p-2 rounded flex items-center">
                  <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                  <span>
                    Clarity: {visualizationData?.analysis?.clarity || "—"}
                  </span>
                </div>
              </div>
            </div>

            <button
              className="w-full mt-6 py-3 bg-indigo-600 rounded-lg font-medium text-white"
              onClick={handleGenerateVisualization}
            >
              Generate Full Visualization
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portal;
