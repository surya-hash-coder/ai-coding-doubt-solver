# 🤖 AI Coding Doubt Solver

> An intelligent full-stack web application that helps developers resolve coding doubts instantly using **Ollama** running **Qwen 2.5** locally.

---

## 📌 Overview

**AI Coding Doubt Solver** is a full-stack application that allows developers — from beginners to pros — to ask coding questions and receive accurate, context-aware AI-powered answers in real time. Whether you're stuck on a bug, confused about a concept, or need code explained, this tool has you covered.

---

## ✨ Features

- 💬 Ask any coding question and get AI-generated answers instantly
- 🧠 Powered by **Qwen 2.5** running locally via **Ollama** — no cloud API needed
- 🔐 Fully private: your questions never leave your machine
- 🖥️ Clean and responsive frontend interface
- ⚙️ Robust backend API handling requests and Ollama communication
- 🔒 Secure environment variable management via `.env`
- 🚀 Fullstack architecture with separate frontend and backend

---

## 🗂️ Project Structure

```
ai-coding-doubt-solve/
├── frontend/           # Client-side application (UI)
│   └── ...
├── backend/            # Server-side logic & AI integration
│   └── ...
├── .gitignore          # Ignored files (node_modules, .env, etc.)
└── README.md
```

---

## 🛠️ Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | HTML / CSS / JavaScript (or React)|
| Backend   | Node.js / Express.js              |
| AI Model  | Qwen 2.5 (via Ollama)             |
| Runtime   | Ollama (local LLM runner)         |
| Config    | dotenv (`.env`)                   |

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or above recommended)
- npm
- [Ollama](https://ollama.com/) — for running Qwen 2.5 locally

---

### 1. Install & Run Qwen 2.5 with Ollama

```bash
# Pull the Qwen 2.5 model
ollama pull qwen2.5

# Start the Ollama server (runs on http://localhost:11434 by default)
ollama serve
```

---

### 2. Clone the Repository

```bash
git clone https://github.com/surya-hash-coder/ai-coding-doubt-solve.git
cd ai-coding-doubt-solve
```

---

### 3. Setup the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` directory:

```env
PORT=5000
OLLAMA_URL=http://localhost:11434
MODEL=qwen2.5
```

Start the backend server:

```bash
node index.js
# or
npm start
```

---

### 4. Setup the Frontend

```bash
cd ../frontend
npm install   # if applicable
```

Open `index.html` in your browser, or if using a dev server:

```bash
npm start
```

---

## 🔑 Environment Variables

| Variable      | Description                                      |
|---------------|--------------------------------------------------|
| `PORT`        | Port for the backend server (default: 5000)      |
| `OLLAMA_URL`  | Ollama server URL (default: http://localhost:11434) |
| `MODEL`       | Ollama model name to use (e.g. `qwen2.5`)        |

> ⚠️ Never commit your `.env` file. It is already added to `.gitignore`.
> 💡 No external API keys needed — Qwen 2.5 runs 100% locally via Ollama!

---

## 🚀 Usage

1. Make sure **Ollama is running** with Qwen 2.5 (`ollama serve`)
2. Start the backend server (`npm start` inside `/backend`)
3. Open the frontend in your browser
4. Type your coding doubt or question in the input field
5. Hit **Ask** and receive an AI-generated answer instantly — powered by Qwen 2.5 locally!

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repo
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source. Feel free to use, modify, and distribute it.

---

## 👨‍💻 Author

**Surya** — [@surya-hash-coder](https://github.com/surya-hash-coder)

---

> ⭐ If you found this project helpful, please consider giving it a star on GitHub!
