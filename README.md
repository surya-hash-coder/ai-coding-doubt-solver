# 🤖 AI Coding Doubt Solver

> An intelligent full-stack web application that helps developers resolve coding doubts instantly using the power of AI.

---

## 📌 Overview

**AI Coding Doubt Solver** is a full-stack application that allows developers — from beginners to pros — to ask coding questions and receive accurate, context-aware AI-powered answers in real time. Whether you're stuck on a bug, confused about a concept, or need code explained, this tool has you covered.

---

## ✨ Features

- 💬 Ask any coding question and get AI-generated answers instantly
- 🧠 Powered by a large language model (LLM) via API
- 🖥️ Clean and responsive frontend interface
- ⚙️ Robust backend API handling requests and AI communication
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
| AI        | AI/LLM API (e.g. OpenAI / Gemini) |
| Config    | dotenv (`.env`)                   |

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or above recommended)
- npm

---

### 1. Clone the Repository

```bash
git clone https://github.com/surya-hash-coder/ai-coding-doubt-solve.git
cd ai-coding-doubt-solve
```

---

### 2. Setup the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` directory:

```env
API_KEY=your_ai_api_key_here
PORT=5000
```

Start the backend server:

```bash
node index.js
# or
npm start
```

---

### 3. Setup the Frontend

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

| Variable  | Description                        |
|-----------|------------------------------------|
| `API_KEY` | Your AI provider API key           |
| `PORT`    | Port for the backend server        |

> ⚠️ Never commit your `.env` file. It is already added to `.gitignore`.

---

## 🚀 Usage

1. Start the backend server
2. Open the frontend in your browser
3. Type your coding doubt or question in the input field
4. Hit **Ask** and receive an AI-generated answer instantly!

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
