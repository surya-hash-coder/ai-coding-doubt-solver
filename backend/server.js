const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const prompts = require('./prompts');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const OLLAMA_URL = process.env.OLLAMA_URL || 'http://localhost:11434';
const MODEL_NAME = process.env.MODEL_NAME || 'deepseek-coder:6.7b';

// Health check endpoint with Ollama status
app.get('/api/health', async (req, res) => {
    try {
        // Check if Ollama is running
        const ollamaResponse = await axios.get(`${OLLAMA_URL}/api/tags`);
        const models = ollamaResponse.data.models || [];
        const modelAvailable = models.some(m => m.name === MODEL_NAME);
        
        res.json({ 
            status: 'OK', 
            message: 'Server is running',
            ollama: {
                running: true,
                modelAvailable: modelAvailable,
                modelName: MODEL_NAME,
                availableModels: models.map(m => m.name)
            }
        });
    } catch (error) {
        res.json({ 
            status: 'DEGRADED', 
            message: 'Server is running but Ollama is not accessible',
            ollama: {
                running: false,
                error: error.message
            }
        });
    }
});

// Test Ollama connection endpoint
app.get('/api/test-ollama', async (req, res) => {
    try {
        console.log('Testing Ollama connection...');
        
        // First check if Ollama is running
        await axios.get(`${OLLAMA_URL}/api/tags`);
        
        const response = await axios.post(`${OLLAMA_URL}/api/generate`, {
            model: MODEL_NAME,
            prompt: "Say 'Hello! I am your AI coding assistant. I am working properly!' in one sentence.",
            stream: false,
            options: {
                temperature: 0.7,
                max_tokens: 50
            }
        });
        
        console.log('Ollama test successful');
        res.json({ 
            success: true, 
            response: response.data.response,
            model: MODEL_NAME
        });
    } catch (error) {
        console.error('Ollama test failed:', error.message);
        
        if (error.code === 'ECONNREFUSED') {
            res.status(503).json({ 
                success: false, 
                error: 'Cannot connect to Ollama. Make sure Ollama is running.',
                solution: 'Start Ollama from your applications or run "ollama serve" in terminal'
            });
        } else if (error.response && error.response.status === 404) {
            res.status(404).json({ 
                success: false, 
                error: 'Model not found. Please pull the model first.',
                solution: `Run: ollama pull ${MODEL_NAME}`
            });
        } else {
            res.status(500).json({ 
                success: false, 
                error: error.message,
                details: 'Make sure Ollama is running and the model is downloaded'
            });
        }
    }
});

// Main endpoint for AI requests
app.post('/api/analyze', async (req, res) => {
    try {
        const { language, code, feature } = req.body;

        // Validate input
        if (!code) {
            return res.status(400).json({ error: 'Code is required' });
        }

        if (!feature) {
            return res.status(400).json({ error: 'Feature is required' });
        }

        // Get the appropriate prompt
        let prompt;
        switch (feature) {
            case 'explain':
                prompt = prompts.explain(language, code);
                break;
            case 'bugs':
                prompt = prompts.bugs(language, code);
                break;
            case 'improve':
                prompt = prompts.improve(language, code);
                break;
            case 'beginner':
                prompt = prompts.beginner(language, code);
                break;
            default:
                return res.status(400).json({ error: 'Invalid feature' });
        }

        console.log(`📝 Sending request to Ollama for feature: ${feature}`);
        console.log(`🔤 Language: ${language}`);
        console.log(`📏 Code length: ${code.length} characters`);

        // First, check if Ollama is accessible
        try {
            await axios.get(`${OLLAMA_URL}/api/tags`);
        } catch (error) {
            console.error('❌ Ollama is not running:', error.message);
            return res.status(503).json({ 
                error: 'Ollama is not running. Please start Ollama and try again.',
                solution: 'Start Ollama from your applications or run "ollama serve" in terminal'
            });
        }

        // Call Ollama API
        console.log('🔄 Calling Ollama API...');
        const response = await axios.post(`${OLLAMA_URL}/api/generate`, {
            model: MODEL_NAME,
            prompt: prompt,
            stream: false,
            options: {
                temperature: 0.7,
                max_tokens: 2000
            }
        });

        console.log('✅ Ollama response received');
        
        // Send response back to frontend
        res.json({ 
            success: true, 
            response: response.data.response,
            feature: feature 
        });

    } catch (error) {
        console.error('❌ Error details:', error);
        
        if (error.response) {
            // Ollama returned an error
            console.error('Ollama error response:', error.response.data);
            return res.status(500).json({ 
                error: 'Ollama returned an error',
                details: error.response.data
            });
        } else if (error.code === 'ECONNREFUSED') {
            return res.status(503).json({ 
                error: 'Cannot connect to Ollama. Make sure Ollama is running.',
                solution: 'Start Ollama from your applications or run "ollama serve" in terminal'
            });
        } else if (error.code === 'ETIMEDOUT') {
            return res.status(504).json({ 
                error: 'Connection to Ollama timed out. The model might be still loading.',
                solution: 'Wait a few seconds and try again'
            });
        }
        
        res.status(500).json({ 
            error: 'An error occurred while processing your request.',
            details: error.message
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`🤖 Using model: ${MODEL_NAME}`);
    console.log(`🔗 Ollama URL: ${OLLAMA_URL}`);
    console.log('\n📋 To test:');
    console.log(`   - Health check: http://localhost:${PORT}/api/health`);
    console.log(`   - Test Ollama: http://localhost:${PORT}/api/test-ollama`);
    console.log(`   - Main endpoint: POST http://localhost:${PORT}/api/analyze`);
});