import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DreamVideo = ({ videoUrl, imageUrl }) => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="bg-[#1f1b36] rounded-xl p-8 shadow-lg dream-glow flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-6 text-indigo-400 text-center">
        Dream Video
      </h2>
      <video
        ref={videoRef}
        src={videoUrl}
        controls
        autoPlay
        className="w-full h-64 object-cover rounded-lg mb-6 bg-black"
        poster={imageUrl}
      />
      <div className="flex gap-4 mb-4">
        <button
          className="px-6 py-2 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition"
          onClick={() => {
            const link = document.createElement("a");
            link.href = videoUrl;
            link.setAttribute("download", "dream-visualization.mp4");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          Download
        </button>
        <button
          className="px-6 py-2 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition"
          onClick={() => navigate("/dream")}
        >
          Save & Share
        </button>
      </div>
    </div>
  );
};

export default DreamVideo;