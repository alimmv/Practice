const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Function to add a message to the chat
function addMessage(message) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageElement.style.color = '#16a085'; // Set message color to green
    chatMessages.appendChild(messageElement);
    // Scroll to the bottom of the chat
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Event listener for sending a message
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message !== '') {
        addMessage(message);
        messageInput.value = ''; // Clear the input field after sending
    }
});

// Example: adding initial messages to the chat
addMessage('Привет!');
addMessage('Как дела?');