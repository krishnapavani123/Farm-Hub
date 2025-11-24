import React, { Component } from "react";
import "./index.css";

class AIAgent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      input: "",
      messages: [
        { sender: "bot", text: "Hi! I'm FarmHub AI. How can I help you today?" },
      ],
    };
  }

  toggleChat = () => {
    this.setState({ open: !this.state.open });
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSend = () => {
    const { input, messages } = this.state;
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];

    // AI Logic (rules)
    const reply = this.generateAIReply(input.toLowerCase());

    newMessages.push({ sender: "bot", text: reply });

    this.setState({
      messages: newMessages,
      input: "",
    });
  };

  generateAIReply(input) {
    // Soil Test detection
    if (input.includes("soil") && input.includes("test")) {
      return `Your soil may need a pH check. 
Would you like me to book a field expert?

👉 Click here: /book-appointment?purpose=Soil Test`;
    }

    // Fertilizer suggestion
    if (input.includes("fertilizer") || input.includes("fertiliser")) {
      return "For wheat, the best organic fertilizers are: compost, vermicompost, and cow manure. For pest control, use neem oil.";
    }

    // Pest issues
    if (input.includes("pest")) {
      return "You can control pests using neem oil or organic bio-pesticides. Would you like me to show products?";
    }

    // General fallback
    return "I understand! Could you tell me more so I can guide you better?";
  }

  render() {
    const { open, messages, input } = this.state;

    return (
      <div>
        {/* Chat Icon */}
        <div className="chat-icon" onClick={this.toggleChat}>
          💬
        </div>

        {open && (
          <div className="chat-window">
            <div className="chat-header">
              🌾 FarmHub AI
              <span className="close-btn" onClick={this.toggleChat}>×</span>
            </div>

            <div className="chat-body">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
                >
                  {msg.text.includes("/book-appointment") ? (
                    <a
                      href={msg.text.split("👉 ")[1]}
                      className="book-link"
                    >
                      Book Soil Test
                    </a>
                  ) : (
                    msg.text
                  )}
                </div>
              ))}
            </div>

            <div className="chat-footer">
              <input
                type="text"
                value={input}
                onChange={this.handleChange}
                placeholder="Ask something..."
              />
              <button onClick={this.handleSend}>Send</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AIAgent;
