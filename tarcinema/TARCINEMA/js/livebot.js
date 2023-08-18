const chatbotIcon = document.getElementById('chatbot-icon');
const chatContainer = document.getElementById('chat-container');
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

let isOpen = false;

chatbotIcon.addEventListener('click', toggleChatContainer);
sendButton.addEventListener('click', sendMessage);

function toggleChatContainer() {
  isOpen = !isOpen;
  chatContainer.style.display = isOpen ? 'block' : 'none';
}

function sendMessage() {
  const userMessage = userInput.value;
  displayMessage(userMessage, 'user');
  handleUserInput(userMessage);
  userInput.value = '';
}

function displayMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add(sender);
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
}

function handleUserInput(userMessage) {
  // Simulate bot responses
  const botMessage = "I'm a chatbot response.";
  displayMessage(botMessage, 'bot');
}
