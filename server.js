require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serving a simple health check
app.get('/', (req, res) => {
    res.send('AI Chatbot Server is running!');
});

app.post('/api/chat', async (req, res) => {
    const { messages, model } = req.body;
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: { message: "API Key is missing on server-side (.env file)" } });
    }

    try {
        const response = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
            model: model || 'llama-3.1-8b-instant',
            messages: messages,
            temperature: 0.7,
            max_tokens: 1024
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error calling Groq API:', error.response?.data || error.message);
        res.status(error.response?.status || 500).json(error.response?.data || { error: { message: error.message } });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Go to http://localhost:${PORT}/api/chat to test (POST)`);
});
