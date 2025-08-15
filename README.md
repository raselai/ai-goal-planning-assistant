# 🚀 AI Goal Planning Assistant

> *A modern fullstack AI application that helps you turn ideas into actionable plans*

Hey there! 👋 Welcome to my AI Goal Planning Assistant - a production-ready application I built to explore the intersection of modern web development and AI-powered planning. This project combines the power of Google's ADK (Agent Development Kit) with a sleek Next.js frontend to create an intelligent assistant that helps break down complex goals into manageable steps.

## 🎯 What This Does

This isn't just another chatbot - it's a **goal-planning powerhouse** that:
- Takes your high-level objectives and creates structured, actionable plans
- Provides real-time streaming responses for a smooth user experience  
- Adapts to different deployment scenarios (local dev, cloud, or serverless)
- Offers a beautiful, responsive chat interface built with modern React

## 🚀 Quick Start

**What you'll need:**
- Python 3.10-3.12 (I recommend 3.12 for best compatibility)
- Node.js 18+ (LTS version preferred)
- Google Cloud account (free tier works great!)
- A bit of patience for the initial setup 😄

**Get it running in 3 steps:**

```bash
# 1. Install dependencies (this handles both Python and Node.js)
uv sync && cd nextjs && npm install

# 2. Set up your environment files (see configuration section below)
# Create app/.env and nextjs/.env.local

# 3. Fire it up!
# Terminal 1: Backend
uv run adk api_server app --allow_origins="*"

# Terminal 2: Frontend  
cd nextjs && npm run dev
```

Open `http://localhost:3000` and start planning! 🎉

## ✨ Features That Make Me Proud

- **🧠 Smart Goal Planning**: Powered by Google's ADK with Gemini 2.5 Flash
- **⚡ Real-time Streaming**: Watch your plans unfold in real-time with SSE
- **🎨 Beautiful UI**: Modern chat interface with activity timeline
- **🔄 Flexible Deployment**: Works locally, on Vertex AI, or serverless
- **🛡️ Production Ready**: Health checks, error handling, and proper logging
- **📱 Responsive Design**: Looks great on desktop and mobile

## 🛠️ Tech Stack

**Backend Magic:**
- Python with Google ADK for the AI brain
- Vertex AI integration for cloud deployment
- UV for lightning-fast dependency management
- Proper environment configuration and validation

**Frontend Brilliance:**
- Next.js 15 with React 19 (bleeding edge! 🔥)
- TailwindCSS + shadcn/ui for that clean look
- TypeScript for type safety
- Server-sent events for real-time updates

## 📁 How It's Organized

```
📦 My AI Goal Planning Assistant
├── 🐍 app/                          # The AI brain (Python backend)
│   ├── agent.py                     # The star of the show - goal planning logic
│   ├── agent_engine_app.py          # Cloud deployment magic
│   ├── config.py                    # Environment setup & validation
│   └── utils/                       # Helper utilities
│
├── ⚛️  nextjs/                       # The beautiful face (React frontend)
│   ├── src/app/api/                 # API routes and health checks
│   ├── src/components/chat/         # Chat UI components  
│   ├── src/lib/handlers/            # Streaming response handlers
│   └── src/lib/config.ts            # Smart environment detection
│
├── 🔧 Makefile                      # Development shortcuts (if you're on Linux/Mac)
└── 📋 pyproject.toml               # Python dependencies and linting rules
```

## ⚙️ Configuration

### 🔧 Backend Setup

The heart of this app is the goal-planning agent in `app/agent.py`. It's built on Google's ADK and uses Gemini 2.5 Flash by default (but you can swap models if you want to experiment!).

**Create `app/.env` with your Google Cloud details:**

```bash
# 🚨 Required - Get these from your Google Cloud Console
GOOGLE_CLOUD_PROJECT=your-gcp-project-id
GOOGLE_CLOUD_LOCATION=us-central1

# 📦 For cloud deployment (create a GCS bucket)
GOOGLE_CLOUD_STAGING_BUCKET=your-staging-bucket

# 🎛️ Optional customizations
MODEL=gemini-2.5-flash                    # Try gemini-pro if you want!
AGENT_NAME=my-awesome-goal-planner
EXTRA_PACKAGES=./app
REQUIREMENTS_FILE=.requirements.txt
```

### 🎨 Frontend Setup

**Create `nextjs/.env.local` for local development:**

```bash
# 🏠 Local development (connects to your Python backend)
BACKEND_URL=http://127.0.0.1:8000
NODE_ENV=development
```

**For cloud deployment, you'll need:**

```bash
# ☁️ Cloud deployment settings
AGENT_ENGINE_ENDPOINT=https://us-central1-aiplatform.googleapis.com/v1/projects/your-project/locations/us-central1/reasoningEngines/YOUR_ENGINE_ID
GOOGLE_SERVICE_ACCOUNT_KEY_BASE64=your-base64-encoded-key
NODE_ENV=production
```

## 🚀 Deployment Options

I've built this to be flexible - you can run it however you prefer!

### 🏠 Local Development
Perfect for testing and development:
```bash
# Backend
uv run adk api_server app --allow_origins="*"

# Frontend (in another terminal)
cd nextjs && npm run dev
```

### ☁️ Cloud Deployment

**Deploy to Vertex AI Agent Engine:**
```bash
# Make sure you're authenticated
gcloud auth application-default login
gcloud config set project YOUR_PROJECT_ID

# Deploy the backend
uv run app/agent_engine_app.py
```

**Deploy frontend to Vercel:**
- Push to GitHub (we'll do this next!)
- Connect your repo to Vercel
- Add your environment variables
- Deploy! 🚀

### 🔄 How the Magic Happens

The app is smart about deployment modes:
- **Local**: Direct connection to your Python backend
- **Agent Engine**: Streams directly from Google's infrastructure  
- **Cloud Run**: Custom proxy backend (if you want full control)

The frontend automatically detects which mode to use based on your environment variables. Pretty neat, right? 😎

## 🧪 Development & Testing

I believe in clean, well-tested code. Here's how to keep things tidy:

**Python linting and type checking:**
```bash
# If you're on Linux/Mac with make
make lint

# Or manually
uv run ruff check . --diff
uv run mypy .
```

**Frontend linting and testing:**
```bash
cd nextjs
npm run lint
npm run test
```

## 🚨 Troubleshooting

**Common issues I've encountered:**

- **Google Cloud auth errors**: Make sure you've run `gcloud auth application-default login`
- **Requirements file issues**: If deployment fails, check that your `.requirements.txt` is clean (no platform-specific constraints)
- **Frontend can't connect**: Verify your `BACKEND_URL` in `nextjs/.env.local` matches your running backend
- **Hydration errors**: Usually caused by browser extensions like Grammarly - they're harmless!

## 💡 What I Learned

Building this project taught me a lot about:
- Integrating Google's ADK with modern web frameworks
- Handling real-time streaming in React applications  
- Deploying AI applications to production
- The importance of good environment configuration

## 🤝 Contributing

Found a bug? Have an idea for improvement? I'd love to hear from you! Feel free to:
- Open an issue
- Submit a pull request
- Reach out with suggestions

## 📄 License

MIT License - feel free to use this project as inspiration for your own AI applications!

---

*Built with ❤️ and lots of ☕ by me*
