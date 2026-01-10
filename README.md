# Nexus AI - Secure AI Chatbot

A premium, glassmorphic AI chatbot interface with a secure Node.js backend. This setup ensures that your API keys are never exposed to the client-side.

## Features
- **Secure**: Sensitive API Keys are stored in a `.env` file on the server.
- **Fast**: Driven by Groq AI's ultra-fast inference (Llama 3.1 8B).
- **Aesthetic**: Premium UI with smooth transitions and glassmorphism.

## Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- A [Groq API Key](https://console.groq.com/keys).

### 2. Installation
1. Clone or download this repository.
2. Install the necessary libraries:
   ```bash
   npm install
   ```

### 3. Configuration
1. Create a file named `.env` in the root folder.
2. Paste your API Key:
   ```env
   GROQ_API_KEY=your_key_here
   PORT=3000
   ```

### 4. Running the App
1. Start the Backend Server:
   ```bash
   npm start
   ```
2. Open `index.html` in your web browser.

## Security Warning
**DO NOT** upload your `.env` file to GitHub. It is already added to `.gitignore` to protect your credentials.
