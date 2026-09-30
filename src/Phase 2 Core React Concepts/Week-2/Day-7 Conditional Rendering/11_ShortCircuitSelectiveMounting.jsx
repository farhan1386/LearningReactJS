import React, { useState } from "react";

const ShortCircuitSelectiveMounting = () => {
  const [messages, setMessages] = useState(["Hello!"]);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h3>Method 2: Logical AND (`&&`)</h3>
      <p>Inbox Status Monitor</p>

      {messages.length > 0 && (
        <div
          style={{
            padding: "10px",
            backgroundColor: "#e0f2fe",
            color: "#0369a1",
            borderRadius: "4px",
          }}
        >
          You have unread messages in your queue!
        </div>
      )}

      <br />
      <button onClick={() => setMessages(messages.length ? [] : ["Hello!"])}>
        Toggle Messages
      </button>
    </div>
  );
};

export default ShortCircuitSelectiveMounting;
