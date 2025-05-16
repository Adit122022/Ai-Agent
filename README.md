
# 🤖 AI-Agent

**AI-Agent** is a modern AI assistant that automates tasks like sending emails and creating Google Calendar events using natural language prompts. It’s built with **React**, uses **Google OAuth** for secure authentication, and is powered by the **Model Context Protocol (MCP)** for smooth communication between the client and server.

> 💡 **Future Goal**: Make this a fully voice-controlled assistant using **ElevenLabs** for natural-sounding speech synthesis.

---

## ✨ Features

- 📬 **Send Emails** by describing your intent
- 📅 **Create Google Calendar Events** from natural prompts
- 🔐 **Secure Google OAuth** authentication
- ⚛️ **React Frontend** with interactive UI
- 🧠 **MCP Server Integration** for client-server communication
- 🗣️ *Planned*: Fully voice-enabled interaction with ElevenLabs

---

## 🔧 Tech Stack

| Tech            | Purpose                                  |
|-----------------|------------------------------------------|
| React           | Frontend UI                              |
| MCP SDK         | JSON-RPC communication bridge            |
| Node.js         | Backend server for AI logic              |
| OpenAI API      | Natural language understanding           |
| Google API      | Calendar and Gmail integration           |
| Google OAuth    | User authentication                      |
| 11Labs (future) | Voice interaction (TTS + STT)            |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Adit122022/Ai-Agent.git
cd Ai-Agent
````

### 2. Install Dependencies

* Backend:

```bash
cd server
npm install
```

* Frontend:

```bash
cd client
npm install
```

---

### 3. Set Environment Variables

Create a `.env` file in the root of both `server` and `client` with the following (example):

#### `.env` (server)

```env
OPENAI_API_KEY=your_openai_api_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
EMAIL_SENDER=your_email@gmail.com
EMAIL_PASSWORD=your_email_password_or_app_password
SESSION_SECRET=your_session_secret
```

> ⚠️ Use environment variables securely. Never expose sensitive keys in public repos.

---

### 4. Run the Project

* Start Backend:

```bash
cd server
npm start
```

* Start Frontend:

```bash
cd client
npm run dev
```

Visit: `http://localhost:5173`
Login via **Google** and start sending emails or creating calendar events using simple text prompts.

---

## 💡 Example Prompts

* "Email Ankit about the team meeting tomorrow at 10 AM"
* "Schedule dentist appointment on Friday at 5 PM"
* "Remind me to submit the assignment on Monday"

---

## 🔮 Future Features

* 🗣️ Full voice interaction (listen/respond) using **ElevenLabs**
* 🔁 Context-aware conversation flow
* 📜 Conversation history
* 📈 Task tracking + dashboard

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change or add.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🧑‍💻 Author


[**Aditya Sharma**🙀](https://github.com/Adit122022)
 ---


