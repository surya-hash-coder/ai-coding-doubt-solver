understandable
🚀 AI CODING DOUBT SOLVER 🤖
<div align="center">
Your Personal AI Programming Assistant
https://img.shields.io/badge/Made%2520with-%E2%9D%A4%EF%B8%8F-red.svg
https://img.shields.io/badge/Beginner-Friendly-brightgreen.svg
https://img.shields.io/github/stars/surya-hash-coder/ai-coding-doubt-solver?style=social

</div>
📌 TABLE OF CONTENTS
What is This?

✨ Cool Features

🛠️ What We Use

📥 Installation (Step by Step)

🎮 How to Use

📝 Try This Code

❓ Common Problems & Fixes

📁 Folder Structure

🌟 Support

🎯 WHAT IS THIS?
A super cool web app that helps you understand code using AI!

Just paste your code, click a button, and AI will explain everything like a friendly teacher!

Perfect For:
👨‍🎓 Beginners	👨‍🏫 Teachers	👨‍💻 Developers
Learning to code	Teaching concepts	Debugging code
✨ COOL FEATURES
<div align="center">
🎨 Feature	🤔 What It Does	👍 Why It's Awesome
📝 Code Editor	Professional editor like VS Code	Syntax highlighting, line numbers
📖 Explain Code	AI explains each line	Learn like a teacher is teaching
🐛 Find Bugs	Finds errors in your code	No more staring at errors!
⚡ Improve Code	Makes your code better	Learn best practices
🌱 Beginner Mode	Super simple explanations	Perfect for newbies
</div>
🛠️ WHAT WE USE
Frontend (What You See)
text
🎨 HTML5 + CSS3 - Structure & Style
⚡ JavaScript - Makes things work
🌈 Tailwind CSS - Beautiful design
📝 Monaco Editor - Same as VS Code!
Backend (Behind the Scenes)
text
🟢 Node.js - Runs JavaScript on server
🚂 Express.js - Handles requests
🤖 Ollama - Runs AI on your computer
AI Models (The Brain)
Model Name	RAM Needed	Speed	Best For
qwen2.5-coder:1.5b	4 GB	⚡ Fast	Most computers
deepseek-coder:6.7b	8 GB	🐢 Slow	Powerful PCs
tinyllama	1 GB	🚀 Very Fast	Old computers
📥 INSTALLATION (Step by Step)
🎬 Watch & Follow
Step 1: Get the Code
bash
# Copy this and paste in terminal
git clone https://github.com/surya-hash-coder/ai-coding-doubt-solver.git

# Go into the folder
cd ai-coding-doubt-solver
Step 2: Install Backend Stuff
bash
# Go to backend folder
cd backend

# Install all required packages
npm install
Step 3: Install Ollama (The AI Brain)
👇 Click your operating system:

<details> <summary><b>🪟 Windows Users</b></summary>
Go to: https://ollama.ai

Download the Windows installer

Double-click and install

Look for Ollama icon in system tray (bottom right)

</details><details> <summary><b>🍎 Mac Users</b></summary>
bash
# If you have Homebrew
brew install ollama

# Or download from https://ollama.ai
</details><details> <summary><b>🐧 Linux Users</b></summary>
bash
curl -fsSL https://ollama.ai/install.sh | sh
</details>
Step 4: Download AI Model
bash
# For normal computers (4GB RAM) - RECOMMENDED
ollama pull qwen2.5-coder:1.5b

# OR for powerful computers (8GB+ RAM)
ollama pull deepseek-coder:6.7b
Step 5: Create Settings File
Create a file called .env in the backend folder with this:

env
# 📝 Copy exactly as shown
PORT=3000
OLLAMA_URL=http://localhost:11434
MODEL_NAME=qwen2.5-coder:1.5b
Step 6: Start the Backend
bash
# Make sure you're in backend folder
cd backend

# Start the server
node server.js
✅ You should see: Server running on http://localhost:3000

Step 7: Open the App
Go to frontend folder

Double-click index.html

It opens in your browser! 🎉

🎮 HOW TO USE
🎯 3 Simple Steps
text
1️⃣ SELECT LANGUAGE → Python/JavaScript/Java
2️⃣ PASTE YOUR CODE → In the editor
3️⃣ CLICK ANY BUTTON → See magic happen!
🔘 What Each Button Does
Button	What Happens	When to Use
📖 Explain Code	AI explains each line	When you don't understand code
🐛 Find Bugs	Finds and fixes errors	When code doesn't work
⚡ Improve Code	Makes code better	When code works but could be better
🌱 Beginner Mode	Super simple explanation	When you're just starting
📝 TRY THIS CODE
🐍 Python Example (Has Bugs)
python
# Copy this and click "Find Bugs"
class Student:
    def __init__(self, name, grades):
        self.name = name
        self.grades = grades
    
    def calculate_average(self)  # Missing colon!
        total = 0
        for grade in self.grades  # Missing colon!
            total += grade
        return total / len(self.grades)

# Create a student
student = Student("Alice", [85, 92, 78])
print(student.calculate_average())
📊 JavaScript Example (Has Bugs)
javascript
// Copy this and click "Find Bugs"
function calculateAverage(numbers) {
    let sum = 0
    for (let i = 0; i <= numbers.length; i++) {  // Bug here!
        sum += numbers[i];
    }
    return sum / numbers.length;
}

let scores = [85, 92, 78];
console.log(calculateAverage(scores));
❓ COMMON PROBLEMS & FIXES
<div align="center">
😅 "Something went wrong? Don't worry!"
</div>
🔴 Problem 1: "Model needs more memory"
You see: Error: model requires more system memory (5.5 GiB)

✅ Fix it:

bash
# Download smaller model
ollama pull qwen2.5-coder:1.5b

# Update .env file
MODEL_NAME=qwen2.5-coder:1.5b
🔴 Problem 2: "Can't connect to Ollama"
You see: Error: Cannot connect to Ollama

✅ Fix it:

Look for Ollama icon in system tray

If not there, start Ollama from Start Menu

Wait 10 seconds

Try again!

🔴 Problem 3: "Port 3000 already in use"
You see: Error: listen EADDRINUSE: address already in use

✅ Fix it:

bash
# Change port in .env file
PORT=3001
# Then restart server
node server.js
🔴 Problem 4: "Git push permission denied"
You see: Permission denied (publickey)

✅ Fix it:

bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your-email@example.com"

# Show your key
type %USERPROFILE%\.ssh\id_ed25519.pub

# Add to GitHub: https://github.com/settings/keys
📁 FOLDER STRUCTURE
text
📂 ai-coding-doubt-solver/
│
├── 📂 backend/                 # Server files
│   ├── 📄 server.js            # Main server
│   ├── 📄 prompts.js           # AI instructions
│   ├── 📄 package.json         # Dependencies
│   └── 📄 .env                 # Settings (you create this)
│
├── 📂 frontend/                # Website files
│   ├── 📄 index.html           # Main page
│   ├── 📄 script.js            # Website logic
│   ├── 📄 styles.css           # Custom styles
│   └── 📄 tailwind-config.js   # Design settings
│
├── 📄 README.md                 # This file
└── 📄 .gitignore                # Git ignore list
🚀 QUICK START (One Command)
Copy this whole thing and paste in terminal:

bash
git clone https://github.com/surya-hash-coder/ai-coding-doubt-solver.git && \
cd ai-coding-doubt-solver/backend && \
npm install && \
echo "PORT=3000" > .env && \
echo "MODEL_NAME=qwen2.5-coder:1.5b" >> .env && \
echo "OLLAMA_URL=http://localhost:11434" >> .env && \
echo "✅ Installation complete! Now:" && \
echo "1. Make sure Ollama is running" && \
echo "2. Run: node server.js" && \
echo "3. Open frontend/index.html in browser"
🌟 SUPPORT THE PROJECT
<div align="center">
Liked this project? Show some love!
https://img.shields.io/badge/%E2%AD%90-Star%2520on%2520GitHub-yellow?style=for-the-badge
https://img.shields.io/badge/%F0%9F%94%97-Fork%2520Repository-blue?style=for-the-badge
https://img.shields.io/badge/%F0%9F%90%9B-Report%2520Issue-red?style=for-the-badge

</div>
👨‍💻 ABOUT THE CREATOR
<div align="center">
Surya
https://img.shields.io/badge/GitHub-@surya--hash--coder-black?style=flat&logo=github

Full Stack Developer | AI Enthusiast | Teacher at Heart

Made this to help beginners learn coding the easy way! 🤗

</div>
📞 NEED HELP?
Problem	Where to go
🐛 Found a bug?	Create Issue
💡 Have an idea?	Suggest Feature
❓ Question?	Discussion Board
<div align="center">
🎉 Congratulations! You're all set!
⬆ Back to Top

Made with ❤️ for the coding community

Happy Learning! 🌟

</div>
