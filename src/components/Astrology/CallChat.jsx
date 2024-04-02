import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";

function CallChat() {
  const navigate = useNavigate();
  return (
    <div className="callchat-container">
      <h1>Select an Option:</h1>
      <div className="callchat-button">
        <button onClick={() => navigate("/AstroMain")} className="buttons">
          Call
        </button>
        <button onClick={() => navigate("/AstroMainChat")} className="buttons">Chat</button>
      </div>
    </div>
  );
}

export default CallChat;
