# 🤖 AI Personal Assistant (Chat-Based Task Manager)

A modern AI-powered personal assistant that helps you manage tasks, plan your day, and interact naturally through chat.

Built using **React + Node.js + Groq LLM**, this project transforms a simple task manager into an intelligent assistant.

---

## 🚀 Features

* 💬 **Chat-based interaction**

  * Add, delete, and manage tasks using natural language

* 🧠 **AI-powered assistant**

  * Uses Groq LLM for intelligent responses

* 📋 **Real-time task management**

  * Tasks are stored in backend memory
  * Live sync with frontend UI

* 🎨 **Modern UI**

  * Dark theme with neon styling
  * Clean chat interface + task panel

* ⚡ **Instant updates**

  * Tasks update immediately after actions (no delay)

---

## 🧱 Tech Stack

### Frontend

* React (Vite)
* CSS (custom styling)
* Fetch API

### Backend

* Node.js
* Express.js
* Groq SDK (LLM integration)

---

## 📂 Project Structure

```
Gen-AI PROJECT/
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── App.jsx
│
│── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── server.js
│
│── .gitignore
│── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```
git clone https://github.com/YOUR_USERNAME/ai-assistant.git
cd ai-assistant
```

---

### 2. Setup Backend

```
cd backend
npm install
```

Create `.env` file:

```
GROQ_API_KEY=your_api_key_here
```

Run backend:

```
npm run dev
```

---

### 3. Setup Frontend

```
cd frontend
npm install
npm run dev
```

---

## 🌐 Usage

* Open the app in browser
* Start chatting with AI:

Examples:

* "Add gym at 6pm"
* "Show my tasks"
* "Remove gym task"

---

## 🔐 Environment Variables

The following environment variable is required:

```
GROQ_API_KEY=your_api_key
```

⚠️ Make sure `.env` is included in `.gitignore`

---

## 🚀 Deployment

* Frontend → Vercel
* Backend → Render / Railway

Update API URL in frontend:

```
VITE_API_URL=https://your-backend-url
```

---

## 🧠 Future Improvements

* 🗄 Database integration (MongoDB)
* 🔔 Reminder system
* 🧩 AI tool calling (structured actions)
* 📅 Calendar integration
* 🎮 Gamification (XP, streaks)

---

## 👨‍💻 Author

Ujjawal Tiwari
Srishti Bhardwaj 
BTech CSE (AI/ML)

---

## ⭐ If you like this project

Give it a star on GitHub ⭐
