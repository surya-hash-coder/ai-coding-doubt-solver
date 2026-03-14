🤖 AI CODING DOUBT SOLVER
📋 PROJECT OVERVIEW
AI Coding Doubt Solver is a web application that helps beginners understand programming code using AI. It runs locally with Ollama and provides intelligent code analysis.

✨ FEATURES
Feature	Description
📝 Code Editor	Monaco editor with syntax highlighting
📖 Explain Code	AI explains each line of code
🐛 Find Bugs	Detects syntax and logical errors
⚡ Improve Code	Suggests optimized versions
🌱 Beginner Mode	Simplified explanations
🛠️ TECH STACK
Frontend
HTML5, CSS3, JavaScript

Tailwind CSS

Monaco Editor

Backend
Node.js

Express.js

Ollama (Local AI)

AI Models
qwen2.5-coder:1.5b (4GB RAM)

deepseek-coder:6.7b (8GB+ RAM)

tinyllama (1GB RAM)

📥 INSTALLATION STEPS
Step 1: Clone Repository
bash
git clone https://github.com/surya-hash-coder/ai-coding-doubt-solver.git
cd ai-coding-doubt-solver
Step 2: Install Backend
bash
cd backend
npm install
Step 3: Install Ollama
Download from: https://ollama.ai

Step 4: Pull AI Model
bash
# For 4GB RAM (Recommended)
ollama pull qwen2.5-coder:1.5b

# For 8GB+ RAM
ollama pull deepseek-coder:6.7b
Step 5: Configure Environment
Create backend/.env:

text
PORT=3000
OLLAMA_URL=http://localhost:11434
MODEL_NAME=qwen2.5-coder:1.5b
Step 6: Start Backend
bash
node server.js
Step 7: Open Frontend
Open frontend/index.html in browser

🎮 HOW TO USE
Select Language (Python/JavaScript/Java)

Paste Code in editor

Click Feature Button:

📖 Explain Code

🐛 Find Bugs

⚡ Improve Code

🌱 Beginner Mode

View Response in output panel

📝 EXAMPLE CODE TO TEST
Python (with bugs)
python
class Student:
    def __init__(self, name, grades):
        self.name = name
        self.grades = grades
    
    def calculate_average(self)
        total = 0
        for grade in self.grades
            total += grade
        return total / len(self.grades)
JavaScript (with bugs)
javascript
function calculateAverage(numbers) {
    let sum = 0
    for (let i = 0; i <= numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}
📁 PROJECT STRUCTURE
text
ai-coding-doubt-solver/
│
├── backend/
│   ├── server.js
│   ├── prompts.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── index.html
│   ├── script.js
│   ├── styles.css
│   └── tailwind-config.js
│
├── README.md
└── .gitignore
🔧 TROUBLESHOOTING
Common Issues
Problem	Solution
Model requires more memory	Use qwen2.5-coder:1.5b instead
Cannot connect to Ollama	Start Ollama from system tray
Port 3000 in use	Change PORT in .env file
Git push permission denied	Add SSH key to GitHub
Model not found	Run ollama pull model-name
📊 SYSTEM REQUIREMENTS
Component	Minimum	Recommended
RAM	4 GB	8 GB
Storage	2 GB	5 GB
OS	Windows 10/macOS/Linux	Windows 11
Node.js	v18.x	v20.x
🌐 API ENDPOINTS
Base URL: http://localhost:3000/api
Endpoint	Method	Description
/health	GET	Check server status
/test-ollama	GET	Test AI connection
/analyze	POST	Analyze code
POST /analyze Request Body
json
{
  "language": "python",
  "code": "print('Hello')",
  "feature": "explain"
}
🤝 CONTRIBUTING
Fork repository

Create feature branch

Commit changes

Push to branch

Open Pull Request

📄 LICENSE
MIT License - Free to use, modify, and distribute

👨‍💻 AUTHOR
Surya

GitHub: @surya-hash-coder

Repository: https://github.com/surya-hash-coder/ai-coding-doubt-solver

⭐ SUPPORT
If you find this project helpful, please give it a star on GitHub!

🚀 QUICK START (One-Liner)
bash
git clone https://github.com/surya-hash-coder/ai-coding-doubt-solver.git && cd ai-coding-doubt-solver/backend && npm install && echo PORT=3000 > .env && echo MODEL_NAME=qwen2.5-coder:1.5b >> .env && echo OLLAMA_URL=http://localhost:11434 >> .env
📞 CONTACT
For issues or suggestions, create an issue on GitHub.

Happy Coding! 🎉
