import React, { useRef, useEffect } from "react";

const DreamChatbox = ({
  chatMessages,
  chatInput,
  setChatInput,
  handleSendChat,
  listening,
  handleStartListening,
  handleStopListening,
}) => {
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      const container = chatContainerRef.current;
      const isAtBottom =
        container.scrollHeight - container.scrollTop - container.clientHeight < 100;

      if (isAtBottom) {
        container.scrollTop = container.scrollHeight;
      }
    }
  }, [chatMessages]);

  return (
    <div className="bg-[#1f1b36] rounded-xl p-8 shadow-lg dream-glow flex flex-col justify-between">
      <h2 className="text-xl font-semibold mb-4 text-indigo-300 text-center">
        Dream Editor
      </h2>
      <div ref={chatContainerRef} className="overflow-y-auto mb-4 h-64 pr-1">
        {chatMessages.map((msg, idx) => (
          <div key={idx} className="mb-2">
            <div
              className={`px-4 py-2 rounded-lg text-sm ${
                msg.sender === "user"
                  ? "bg-indigo-600 text-white ml-auto w-fit"
                  : "bg-[#2a2438] text-gray-300 w-fit"
              }`}
              style={{ maxWidth: "80%" }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center mt-2">
        {/* Audio input button on the left */}
        <button
          className={`px-3 py-3 rounded-l-lg bg-[#2a2438] text-pink-400 font-medium hover:bg-pink-700 transition ${
            listening ? "animate-pulse" : ""
          }`}
          onClick={listening ? handleStopListening : handleStartListening}
          title={listening ? "Stop Listening" : "Speak"}
          disabled={listening}
        >
          {/* SVG mic from portal */}
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
        {/* Text input */}
        <input
          type="text"
          className="flex-1 bg-[#2a2438] border-none p-3 text-gray-200 placeholder-gray-400"
          placeholder="Type something to add or change..."
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendChat()}
          disabled={listening}
        />
        {/* Send button on the right */}
        <button
          className={`px-4 py-3 bg-indigo-600 text-white font-medium transition rounded-r-lg ${
            listening ? "bg-indigo-400 cursor-not-allowed" : "hover:bg-indigo-700"
          }`}
          onClick={handleSendChat}
          disabled={listening}
        >
          Send
        </button>
      </div>
      <span className="text-xs text-gray-400 mt-2 text-center">
        {listening
          ? "Listening... Speak now!"
          : "Type or use your voice to edit your dream."}
      </span>
    </div>
  );
};

export default DreamChatbox;
