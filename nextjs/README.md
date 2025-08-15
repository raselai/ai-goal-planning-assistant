# 🎨 Frontend for AI Goal Planning Assistant

This is the React/Next.js frontend for my AI Goal Planning Assistant. It's built with modern web technologies and provides a beautiful, responsive chat interface.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see it in action!

## ⚙️ Environment Setup

**For local development (`.env.local`):**
```bash
BACKEND_URL=http://127.0.0.1:8000
NODE_ENV=development
```

**For cloud deployment (`.env.local`):**
```bash
AGENT_ENGINE_ENDPOINT=https://us-central1-aiplatform.googleapis.com/v1/projects/your-project/locations/us-central1/reasoningEngines/YOUR_ENGINE_ID
GOOGLE_SERVICE_ACCOUNT_KEY_BASE64=your-base64-key
NODE_ENV=production
```

The app automatically detects which backend to use based on your environment variables! 🎯

## 🛠️ What's Inside

- **Modern React**: Built with Next.js 15 and React 19
- **Streaming Chat**: Real-time responses with Server-Sent Events
- **Beautiful UI**: TailwindCSS + shadcn/ui components
- **Smart Routing**: Automatic backend detection
- **TypeScript**: Full type safety throughout
- **Responsive Design**: Works great on all devices

## 🚀 Deployment

This frontend is designed to be deployed on Vercel:

1. Push your code to GitHub
2. Connect your repo to Vercel
3. Add your environment variables
4. Deploy!

The main README has detailed deployment instructions.

## 🎨 Customization

Want to make it your own? Key files to check out:
- `src/app/page.tsx` - Main chat interface
- `src/components/chat/` - Chat UI components
- `src/app/globals.css` - Global styles
- `tailwind.config.ts` - Tailwind configuration

---

*Part of the AI Goal Planning Assistant project* ✨
