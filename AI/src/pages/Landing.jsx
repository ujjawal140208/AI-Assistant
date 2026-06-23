import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>AI Assistant</h1>
        <p>Your personal AI to manage everything.</p>

        <button onClick={() => navigate("/chat")}>
          Start Chat
        </button>
      </div>
    </div>
  );
};

export default Landing;