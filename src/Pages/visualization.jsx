import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DreamVideo from "../Components/Visualize/dreamvideo";
import DreamChatbox from "../Components/Visualize/dreamchat";
import EmotionalAnalysis from "../Components/Visualize/emotionalanalysis";

const Visualization = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const dummyVisualization = {
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    emotions: {
      vibrancy: "High",
      surrealism: "Very High",
      clarity: "Medium",
      joy: "High",
      fear: "Low",
      mystery: "Very High",
      nostalgia: "Moderate",
      excitement: "High",
      confusion: "Mild",
    },
  };

  const dummyDreamText =
    "I was flying over a city made of clouds and neon lights.";

  const navigationState = location?.state;
  const visualization = {
    ...dummyVisualization,
    ...(navigationState?.visualization || {}),
  };
  const dreamText = navigationState?.dreamText || dummyDreamText;

  // Chat state
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "system",
      text: "Edit your dream story here! Add, remove, or change details.",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  const handleSendChat = () => {
    if (!chatInput.trim()) return;
    setChatMessages([
      ...chatMessages,
      { sender: "user", text: chatInput },
      { sender: "system", text: "Dream updated! (mock response)" },
    ]);
    setChatInput("");
  };

  const handleStartListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition not supported in this browser.");
      return;
    }
    setListening(true);
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setChatInput((prev) => prev + (prev ? " " : "") + transcript);
      setListening(false);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognition.start();
    recognitionRef.current = recognition;
  };

  const handleStopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setListening(false);
    }
  };

  return (
    <main className="container mx-auto px-4 py-16 text-gray-300 max-w-4xl">
      <div className="flex max-w-3xl mx-auto text-center mb-10">
        <p className="flex justify-center relative w-full">
          <button
            className="absolute left-0 px-2 py-2 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition flex items-center w-fit"
            onClick={() => navigate(-1)}
            aria-label="Back"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M15 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back
          </button>
          <h1 className="text-4xl font-bold text-white mx-auto">
            Your Dream Visualization
          </h1>
        </p>
      </div>

      <div className="mb-6 text-center">
        <p className="text-lg text-indigo-300 italic">Dream description:</p>
        <p className="text-lg text-gray-400">{dreamText}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <DreamVideo
          videoUrl={visualization.videoUrl}
          imageUrl={visualization.imageUrl}
        />
        <DreamChatbox
          chatMessages={chatMessages}
          chatInput={chatInput}
          setChatInput={setChatInput}
          handleSendChat={handleSendChat}
          listening={listening}
          handleStartListening={handleStartListening}
          handleStopListening={handleStopListening}
        />
      </div>

      <EmotionalAnalysis emotions={visualization.emotions} />
    </main>
  );
};

export default Visualization;