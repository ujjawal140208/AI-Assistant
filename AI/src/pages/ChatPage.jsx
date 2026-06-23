import React, { useState } from "react";
import ChatBox from "../components/chat/ChatBox";
import InputBar from "../components/chat/InputBar";
import MessageBubble from "../components/chat/MessageBubble";
import TaskPanel from "../components/chat/TaskPanel";
import "../styles/global.css";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hey 👋 I'm your AI assistant.",
    },
  ]);

  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const userMessage = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();

      const aiMessage = {
        role: "assistant",
        content: data.reply,
      };

      setMessages((prev) => [...prev, aiMessage]);

      // 🔥 FORCE TASK REFRESH
      setRefreshTrigger((prev) => prev + 1);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Error",
        },
      ]);
    }
  };

  return (
    <div className="chat-layout">
      <div className="chat-section">
        <ChatBox>
          {messages.map((msg, i) => (
            <MessageBubble key={i} role={msg.role} content={msg.content} />
          ))}
        </ChatBox>

        <InputBar onSend={sendMessage} />
      </div>

      {/* 🔥 pass trigger */}
      <TaskPanel refreshTrigger={refreshTrigger} />
    </div>
  );
};

export default ChatPage;