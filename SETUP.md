# 🚀 Quick Setup Guide

Follow these steps to get the AI Goal Planning Assistant running on your machine.

## Prerequisites Checklist

Before you start, make sure you have:
- [ ] Python 3.10-3.12 installed
- [ ] Node.js 18+ installed
- [ ] Google Cloud account (free tier is fine)
- [ ] Git installed

## Step-by-Step Setup

### 1. Clone and Install
```bash
# Clone the repository
git clone <your-repo-url>
cd ai-goal-planning-assistant

# Install Python dependencies
uv sync

# Install Node.js dependencies
cd nextjs && npm install && cd ..
```

### 2. Google Cloud Setup
```bash
# Install Google Cloud SDK if you haven't already
# Then authenticate
gcloud auth application-default login
gcloud config set project YOUR_PROJECT_ID

# Enable required APIs
gcloud services enable aiplatform.googleapis.com
```

### 3. Environment Configuration

**Create `app/.env`:**
```bash
GOOGLE_CLOUD_PROJECT=your-gcp-project-id
GOOGLE_CLOUD_LOCATION=us-central1
GOOGLE_CLOUD_STAGING_BUCKET=your-staging-bucket
MODEL=gemini-2.5-flash
AGENT_NAME=my-goal-planner
```

**Create `nextjs/.env.local`:**
```bash
BACKEND_URL=http://127.0.0.1:8000
NODE_ENV=development
```

### 4. Test Local Setup
```bash
# Terminal 1: Start backend
uv run adk api_server app --allow_origins="*"

# Terminal 2: Start frontend
cd nextjs && npm run dev
```

Visit `http://localhost:3000` and test your goal planning assistant! 🎉

### 5. Deploy to Cloud (Optional)
```bash
# Deploy backend to Vertex AI
uv run app/agent_engine_app.py

# Deploy frontend to Vercel
# Push to GitHub, then connect to Vercel
```

## Troubleshooting

**Common issues:**
- Python version errors: Use Python 3.12 for best compatibility
- Google Cloud auth: Run `gcloud auth application-default login`
- Missing dependencies: Make sure both `uv sync` and `npm install` completed successfully

Need help? Check the main README.md for detailed troubleshooting!
