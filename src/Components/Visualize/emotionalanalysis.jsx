import React from "react";

const EmotionalAnalysis = ({ emotions = {} }) => {
  return (
    <div className="bg-[#1f1b36] rounded-xl p-4 shadow-lg dream-glow mt-8 mx-auto w-full">
      <h2 className="text-lg font-semibold mb-3 text-indigo-400 text-center">
        Emotional Analysis
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center text-sm">
        {Object.entries(emotions).length > 0 ? (
          Object.entries(emotions).map(([key, value]) => (
            <div
              key={key}
              className="bg-[#2a2438] rounded-md p-2 flex flex-col items-center shadow"
            >
              <span className="font-semibold capitalize mb-1 text-indigo-300">
                {key}
              </span>
              <span>{value}</span>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-gray-400">
            No emotional data available
          </p>
        )}
      </div>
    </div>
  );
};

export default EmotionalAnalysis;