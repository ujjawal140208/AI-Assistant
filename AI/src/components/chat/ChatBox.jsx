import React, { useEffect, useRef } from "react";

const ChatBox = ({ children }) => {
  const chatEndRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [children]);

  return (
    <div className="chat-box">
      {children}
      <div ref={chatEndRef} />
    </div>
  );
};

export default ChatBox;