let username = localStorage.getItem("username") || "Anonymous";

const socket = io({
  transports: ["polling"]
});

const form = document.getElementById("form");
const input = document.getElementById("input");
const messagesDiv = document.getElementById("messages");

function addMessage(msg) {
  const messageWrapper = document.createElement("div");
  messageWrapper.className = "message-wrapper";

  const usernameEl = document.createElement("div");
  usernameEl.className = "message-username";
  usernameEl.textContent = msg.user;

  const bubbleEl = document.createElement("div");
  bubbleEl.className = "message-bubble";
  bubbleEl.textContent = msg.text;

  messageWrapper.appendChild(usernameEl);
  messageWrapper.appendChild(bubbleEl);

  messagesDiv.appendChild(messageWrapper);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Load old messages
socket.on("chat-history", history => {
