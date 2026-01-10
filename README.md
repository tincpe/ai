# AI Chatbot with Secure Groq Backend

A premium AI chatbot interface built with HTML/CSS and a secure Node.js backend to interact with Groq AI.

## Features
- **Secure**: API Keys are stored in a `.env` file on the server, not in the browser.
- **Fast**: Powered by Groq AI (Llama 3.1 8B).
- **Beautiful**: Glassmorphic UI with smooth animations.

## Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- A [Groq API Key](https://console.groq.com/keys).

### 2. Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### 3. Configuration
1. Create a `.env` file in the root directory.
2. Add your Groq API Key:
   ```env
   GROQ_API_KEY=your_actual_key_here
   PORT=3000
   ```

### 4. Running the App
1. Start the backend server:
   ```bash
   npm start
   ```
2. Open `index.html` in your browser.

## Security Note
**DO NOT** commit your `.env` file to GitHub. It is already included in the `.gitignore`.
