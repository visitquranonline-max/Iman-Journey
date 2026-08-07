import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Server-side Gemini AI setup
  const getAiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return null;
    }
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  };

  // API Endpoint: Ask Islam AI Chat
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Message parameter is required.' });
      }

      const ai = getAiClient();
      if (!ai) {
        return res.status(503).json({
          error: 'Gemini API Key is missing. Please configure GEMINI_API_KEY in Secrets.',
          fallbackAnswer: 'Assalamu Alaikum! I am Ask Islam AI by Visit Quran Online Academy. Please ensure your GEMINI_API_KEY is configured in Settings > Secrets to enable live AI responses. Meanwhile, visit www.visitquran.com or WhatsApp us at +15098839575!'
        });
      }

      const formattedContents: any[] = [];
      if (Array.isArray(history)) {
        for (const item of history) {
          if (item.role === 'user' || item.role === 'model') {
            formattedContents.push({
              role: item.role,
              parts: [{ text: item.text }]
            });
          }
        }
      }

      formattedContents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: formattedContents,
        config: {
          systemInstruction: `You are "Ask Islam AI", a friendly, respectful, and authentic Islamic educational assistant for the "Islamic History Adventure" app created by Visit Quran Online Academy.

Your primary mission is to answer questions for children, youth, and learners about:
1. Islamic History (Prophets, Battles, Golden Age, Islamic Contributions)
2. Stories of the Prophets (Adam, Nuh, Ibrahim, Musa, Isa, Muhammad peace be upon them all)
3. Sahabah (Companions of Prophet Muhammad ﷺ like Abu Bakr, Umar, Uthman, Ali, Fatima, Khadijah, Bilal, etc.)
4. Basic Islamic Knowledge & Beliefs (5 Pillars, 6 Pillars of Iman, Quranic teachings, Angels, Day of Judgment)
5. Visit Quran Online Academy (online Quran and Islamic studies education platform)

STRICT GUIDELINES:
- Provide accurate, authentic information based on the Holy Quran and Sunnah.
- Keep tone warm, encouraging, educational, and easy to understand for children and families.
- Avoid false claims, unverified stories, or inventing references.
- If you are uncertain about a specific Islamic ruling or history detail, politely say: "I do not have enough verified information on this specific topic. Allah knows best."
- When asked about Visit Quran Online Academy, share the following details:
  * Name: Visit Quran Online Academy
  * Mission: A premier global online academy providing personalized Quran learning, Tajweed, Hifz, Islamic Studies, and Arabic for kids & adults.
  * Website: www.visitquran.com
  * WhatsApp Contact: +15098839575
  * Email: visitquranonline@gmail.com
- Always use respectful Islamic honorifics like "peace be upon him (pbuh)" or "رضي الله عنه (May Allah be pleased with him)" when mentioning Prophets and Companions.
`,
          temperature: 0.7,
        },
      });

      const text = response.text || 'SubhanAllah, I could not process that request properly. Please try asking again!';
      res.json({ text });
    } catch (error: any) {
      console.error('Error calling Gemini API:', error);
      res.status(500).json({
        error: 'Failed to generate response from Ask Islam AI',
        details: error.message || String(error),
      });
    }
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', app: 'Islamic History Adventure - Visit Quran Online Academy' });
  });

  // Vite middleware for development vs static build for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(` Islamic History Adventure server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
