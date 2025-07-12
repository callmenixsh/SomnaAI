import React from 'react';

const Modal = () => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 hidden flex items-center justify-center z-50"
      id="dreamModal"
    >
      <div className="bg-[#1f1b36] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button className="absolute top-4 right-4 p-2 rounded-full bg-[#2a2438] hover:bg-[#3a3458]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">Detailed Dream Analysis</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Left column */}
              <div>
                <h4 className="font-semibold mb-2">Dream Narrative</h4>
                <p className="text-gray-300 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit,
                  vulputate eu pharetra nec, mattis ac neque...
                </p>

                <h4 className="font-semibold mb-2">Key Elements</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>- Flight: Symbolizing freedom or escape</li>
                  <li>- Cityscape: Representing social structures</li>
                  <li>- Butterfly wings: Transformation</li>
                </ul>
              </div>

              {/* Right column */}
              <div>
                <h4 className="font-semibold mb-2">Visualization</h4>
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cb37f0d9-c341-42db-aeb1-7c6e80bad02f.png"
                  alt="Detailed dreamscape visualization with the user flying over a neon city with butterfly wings"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />

                <div>
                  <h4 className="font-semibold mb-2">Emotional Spectrum</h4>
                  <div className="flex space-x-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs bg-pink-500 bg-opacity-20 text-pink-300">
                      Joy
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs bg-blue-500 bg-opacity-20 text-blue-300">
                      Freedom
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs bg-green-500 bg-opacity-20 text-green-300">
                      Excitement
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#2a2438] rounded-lg p-4">
              <h4 className="font-semibold mb-2">Subconscious Insights</h4>
              <p className="text-gray-300">
                This dream suggests you're at a point in your life where you're ready for
                transformation. The juxtaposition of urban structures (order) with natural
                butterfly wings (freedom) indicates you're balancing responsibilities with
                personal growth.
              </p>
            </div>

            <div className="mt-6 flex justify-between">
              <button className="px-6 py-2 bg-indigo-600 rounded-lg font-medium text-white">
                Save Analysis
              </button>
              <button className="px-6 py-2 border border-indigo-500 rounded-lg text-indigo-300">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
