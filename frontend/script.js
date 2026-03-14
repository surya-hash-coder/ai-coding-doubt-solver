// Wait for Monaco to load
require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.1/min/vs' } });

let editor;
let currentLanguage = 'python';

// Initialize Monaco Editor
require(['vs/editor/editor.main'], function() {
    editor = monaco.editor.create(document.getElementById('editor'), {
        value: '# Write your code here\nprint("Hello, World!")',
        language: 'python',
        theme: 'vs-dark',
        automaticLayout: true,
        fontSize: 14,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        wordWrap: 'on'
    });

    // Update language when selection changes
    document.getElementById('language').addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        monaco.editor.setModelLanguage(editor.getModel(), currentLanguage);
        
        // Set example code based on language
        const examples = {
            python: '# Write your Python code here\nprint("Hello, Python!")',
            javascript: '// Write your JavaScript code here\nconsole.log("Hello, JavaScript!");',
            java: '// Write your Java code here\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}'
        };
        editor.setValue(examples[currentLanguage]);
    });
});

// API Base URL (change this when deploying)
const API_BASE_URL = 'http://localhost:3000/api';

// Helper function to show/hide loading
function setLoading(loading) {
    document.getElementById('loading').classList.toggle('hidden', !loading);
}

// Helper function to show error
function showError(message) {
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = message;
    errorDiv.classList.remove('hidden');
    setTimeout(() => errorDiv.classList.add('hidden'), 5000);
}

// Helper function to format AI response
function formatResponse(text) {
    // Convert markdown-style code blocks
    text = text.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
        return `<pre><code class="language-${lang || 'plaintext'}">${code.trim()}</code></pre>`;
    });
    
    // Convert line breaks
    text = text.replace(/\n/g, '<br>');
    
    // Bold headers
    text = text.replace(/^(\d+\.|\-)\s*(.*?):/gm, '<strong>$1 $2:</strong>');
    
    return text;
}

// Helper function to send request to backend
async function analyzeCode(feature) {
    try {
        const code = editor.getValue();
        
        if (!code.trim()) {
            showError('Please enter some code first!');
            return;
        }

        setLoading(true);
        
        const response = await fetch(`${API_BASE_URL}/analyze`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                language: currentLanguage,
                code: code,
                feature: feature
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Failed to analyze code');
        }

        // Display response
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = formatResponse(data.response);

    } catch (error) {
        showError(error.message);
        console.error('Error:', error);
    } finally {
        setLoading(false);
    }
}

// Add event listeners to buttons
document.getElementById('explainBtn').addEventListener('click', () => analyzeCode('explain'));
document.getElementById('bugsBtn').addEventListener('click', () => analyzeCode('bugs'));
document.getElementById('improveBtn').addEventListener('click', () => analyzeCode('improve'));
document.getElementById('beginnerBtn').addEventListener('click', () => analyzeCode('beginner'));

// Check if backend is available
async function checkBackend() {
    try {
        const response = await fetch(`${API_BASE_URL}/health`);
        if (response.ok) {
            console.log('✅ Backend connection successful');
        } else {
            console.warn('⚠️ Backend health check failed');
        }
    } catch (error) {
        console.error('❌ Cannot connect to backend. Make sure server is running on port 3000');
        showError('Cannot connect to backend. Please ensure the server is running.');
    }
}

// Check connection on load
checkBackend();